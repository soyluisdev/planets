# Planets - Our Solar System 🪐

This is an interactive web-based application that provides an overview of the planets and celestial bodies within our Solar System. It features a carousel that users can navigate to view information and images of the Sun, planets, and dwarf planets.

![Screenshot_1](/doc/screen.png)
![Screenshot_2](/doc/screen_0.png)
![Screenshot_3](/doc/screen_1.png)

## Features

- **Image Carousel**: The main feature of this application is a carousel displaying images and information about each celestial body.
- **Automatic & Manual Navigation**: Users can either manually navigate through the items using "Next" and "Previous" buttons or let the carousel auto-rotate every 30 seconds.
- **Thumbnail Navigation**: Thumbnails of each celestial body allow users to directly select and view specific items in the carousel.
- **Description & More Info**: Each item includes a brief description, title, and a button for "See More" (which can be extended to link to detailed information in future versions).

## File Structure

- **index.html**: Contains the HTML structure, including carousel items and thumbnails for each celestial body.
- **style.css**: Defines the visual style for the page and the carousel.
- **script.js**: Contains JavaScript functionality for the carousel navigation and auto-rotation.

## Usage

1. Clone the repository or download the code files.
2. Place all images of celestial bodies (e.g., `sun.jpg`, `mercury.jpg`, etc.) in an `images` folder within the project directory.
3. Open `index.html` in a web browser to view and interact with the Solar System carousel.

## Dependencies

This project uses only vanilla HTML, CSS, and JavaScript, so no additional libraries are required.

## Customization

- **Rotation Timing**: You can adjust the automatic rotation timing by changing the `timeAutoNext` variable in `script.js`.
- **Image and Text Content**: Each celestial body is defined within a `.item` div in `index.html`. Update the images and descriptions in this section to change the carousel content.

## Future Improvements

- **Detailed Info Page**: Link each "See More" button to a separate page with in-depth information.
- **Responsive Design**: Optimize styling in `style.css` for mobile devices.
- **Dark Mode**: Provide an option for dark/light themes.

## Project deployment
You can check the project deployment here: https://planets-lyart.vercel.app/ 

## License

This project is open source and available for modification and distribution.
