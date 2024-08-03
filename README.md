# Wave Visualization Project

## Overview

This project aims to depict and display a visual representation of a wave traversing in space, with adjustable phase and group velocity controllers. It is designed to help students learn about the fundamental principles of waves and the basic background theory.

## Features

- **Dynamic Visualization**: Real-time rendering of wave propagation in space.
- **Interactive Controls**: Adjust phase and group velocities to observe their effects on the wave.
- **Educational Tool**: Aimed at helping students grasp the concepts of wave mechanics, including phase velocity, group velocity, wavelength, and frequency.
- **User-Friendly Interface**: Intuitive and easy-to-use interface for both instructors and students.

## Usage

### Installation

To run the project locally, you need to have [Node.js](https://nodejs.org/) installed. Then, follow these steps:

1. Clone the repository:

    ```sh
    git clone https://github.com/CodePro-art/wave-visualization.git
    cd wave-visualization
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

3. Start the development server:

    ```sh
    npm start
    ```

The application will be available at `http://localhost:3000`.

### Controls

- **Phase Velocity**: Adjust using the phase velocity slider to see how the individual wavefronts move.
- **Group Velocity**: Adjust using the group velocity slider to see how the overall wave packet moves.

### Educational Benefits

This tool is particularly useful for:

- **Physics Classes**: Demonstrating the behavior of waves in different mediums.
- **Engineering Courses**: Providing practical insights into signal processing and communication systems.
- **Self-Learning**: Allowing students to independently explore and understand wave dynamics.

## Theory Background

### Phase Velocity

Phase velocity refers to the speed at which the phase of the wave propagates in space. It is given by the formula:

$ v_p = \frac{\omega}{k} $

where $ \omega $ is the angular frequency and $ k $ is the wave number.

### Group Velocity

Group velocity is the speed at which the overall shape of the wave's amplitudes—known as the modulation or envelope—propagates through space. It is defined as:

$ v_g = \frac{d\omega}{dk} $

Understanding the distinction between phase and group velocities is crucial for comprehending wave phenomena such as dispersion and signal propagation.

### Link to Site

- Wave Packet: [Link](https://wave-packet.netlify.app)

## Contributing

Contributions are welcome! If you have ideas for improvements or have found a bug, please open an issue or submit a pull request. Here’s how you can contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## Contact

For any questions or further information, feel free to contact:

- Netanel Mazuz: [netazuz@gmail.com](mailto:netazuz@gmail.com)
- GitHub: [CodePro-art](https://github.com/CodePro-art)
