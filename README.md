# Yehonatan Koritny - Portfolio Website

A modern, responsive portfolio website showcasing my work as a developer, video editor, and video artist.

## Features

- Modern and sleek design with smooth animations
- Responsive layout that works on all devices
- Three distinct sections for different professional roles
- Interactive project cards with hover effects
- Smooth scrolling navigation
- Mobile-friendly navigation menu
- GSAP animations for enhanced user experience

## Customization

### Adding Projects

To add new projects to any section, copy and paste the following template in the appropriate section of `index.html`:

```html
<div class="project-card">
    <div class="project-image">
        <img src="images/your-project-image.jpg" alt="Project Title">
    </div>
    <div class="project-info">
        <h3>Project Title</h3>
        <p>Project description goes here. Brief overview of the work.</p>
        <div class="project-links">
            <a href="#" class="btn">View Project</a>
            <a href="#" class="btn">Details</a>
        </div>
    </div>
</div>
```

### Customizing Colors

The website uses CSS variables for easy color customization. You can modify the colors in `css/style.css`:

```css
:root {
    --primary-color: #2a2a2a;
    --secondary-color: #4a4a4a;
    --accent-color: #00ff9d;
    --text-color: #ffffff;
    --background-color: #121212;
}
```

### Adding Images

1. Create an `images` folder in the root directory
2. Add your project images to the folder
3. Update the image sources in the project cards

### Social Links

Update the social media links in the footer section of `index.html`:

```html
<div class="social-links">
    <a href="your-github-url"><i class="fab fa-github"></i></a>
    <a href="your-linkedin-url"><i class="fab fa-linkedin"></i></a>
    <a href="your-vimeo-url"><i class="fab fa-vimeo-v"></i></a>
</div>
```

## Technologies Used

- HTML5
- CSS3
- JavaScript
- GSAP (GreenSock Animation Platform)
- Font Awesome Icons

## Setup

1. Clone this repository
2. Open `index.html` in your browser
3. Customize the content as needed
4. Deploy to GitHub Pages or your preferred hosting service

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License. 