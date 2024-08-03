Array.linspace = function (a, b, n) {
  let result = [];
  const step = (b - a) / (n - 1);
  for (let i = 0; i < n; i++) result.push(a + i * step);

  return result;
};

const VIEW = 10;

let start = 0;
let peak = 0.05 * VIEW;
let phase = 0.0;
let phaseSpeed, groupSpeed, wavelen, width;
let previous;

function update() {
  phaseSpeed = 0.01 * parseInt(phaseSlider.value);
  phaseValue.innerText = phaseSpeed.toFixed(2);

  groupSpeed = 0.01 * parseInt(groupSlider.value);
  groupValue.innerText = groupSpeed.toFixed(2);

  width = 0.005 * parseInt(widthSlider.value);
  widthValue.innerText = (2 * width).toFixed(2);

  let oldwave = wavelen;
  wavelen = 0.001 * parseInt(waveSlider.value);
  waveValue.innerText = wavelen.toFixed(2);

  if (oldwave) phase = peak + ((phase - peak) * wavelen) / oldwave;
}

function envelope(x) {
  x = (x - peak) / width;
  return Math.exp(-Math.LN2 * x * x);
}

function wave(x) {
  return envelope(x) * Math.cos((2 * Math.PI * (x - phase)) / wavelen);
}

function compute() {
  const x = Array.linspace(start, start + VIEW, 1000);
  return { x: x, w: x.map(wave), e: x.map(envelope) };
}

function timeStep(time) {
  if (previous === undefined) {
    previous = time;
    requestAnimationFrame(timeStep);
    return;
  }

  const elapsed = 0.001 * (time - previous);
  previous = time;

  peak += elapsed * groupSpeed;
  phase += elapsed * phaseSpeed;

  if (groupSpeed > 0 && peak > start + 0.9 * VIEW) {
    start += 0.8 * VIEW;
    Plotly.relayout(graph, { "xaxis.range": [start, start + VIEW] });
  } else if (groupSpeed < 0 && peak < start + 0.1 * VIEW) {
    start -= 0.8 * VIEW;
    Plotly.relayout(graph, { "xaxis.range": [start, start + VIEW] });
  }

  const comp = compute();
  Plotly.animate(
    graph,
    {
      data: [
        { x: comp.x, y: comp.w },
        { x: comp.x, y: comp.e }
      ]
    },
    { transition: { duration: 0 }, frame: { duration: 0, redraw: false } }
  );

  requestAnimationFrame(timeStep);
}

function initSimul() {
  update();

  const comp = compute();
  const data = [
    {
      x: comp.x,
      y: comp.w,
      mode: "lines",
      type: "scatter",
      line: { color: "red" },
      name: "wave"
    },
    {
      x: comp.x,
      y: comp.e,
      mode: "lines",
      type: "scatter",
      line: { color: "blue", dash: "dash" },
      name: "envelope"
    }
  ];

  const font = { family: "Arial", size: 14 };
  const layout = {
    xaxis: {
      title: "Spatial coordinate <i>z</i>",
      showline: true,
      zeroline: false,
      titlefont: font,
      tickfont: font,
      range: [start, start + VIEW]
    },
    yaxis: {
      title: "<i>E</i>(<i>z</i>, <i>t</i>)",
      showline: true,
      zeroline: false,
      titlefont: font,
      tickfont: font,
      range: [-1.05, 1.05]
    },
    margin: { l: 56, t: 5, r: 5, b: 44 },
    dragmode: false,
    showlegend: false
  };

  Plotly.newPlot(graph, data, layout);

  requestAnimationFrame(timeStep);
}

window.addEventListener("load", initSimul);