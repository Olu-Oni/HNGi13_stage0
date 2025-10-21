# Personal Portfolio Website

A responsive, accessible, and testable multi-page portfolio built with semantic HTML, modern CSS, and vanilla JavaScript.

## 📋 Overview

This project implements a complete personal portfolio website featuring a profile card homepage, contact form with validation, and reflective about page. All pages are fully responsive across mobile, tablet, and desktop devices and include comprehensive test coverage with `data-testid` attributes.

## ✨ Features

- **Semantic HTML** — Uses proper semantic tags (`<main>`, `<article>`, `<section>`, `<figure>`, `<nav>`) for accessibility
- **Responsive Design** — Adapts seamlessly to mobile, tablet, and desktop (768px+) viewports
- **Accessible** — Includes proper alt text, ARIA labels, keyboard navigation, and form validation
- **Testable** — All elements include `data-testid` attributes for automated testing
- **Live Time Display** — Shows current time in milliseconds, updating every second
- **Form Validation** — Client-side validation with error messages and success feedback
- **Social Integration** — Direct links to GitHub, LinkedIn, and Twitter
- **Modern CSS** — Flexbox and Grid layouts with smooth transitions and hover effects

## 📁 Project Structure
```
├── index.html        # Homepage with profile card
├── contact.html      # Contact form page
├── about.html        # About me page
├── index.css         # Global styles and utilities
├── header.css        # Header and profile-specific styles
├── contact.css       # Contact form styles
├── contact.js        # Form validation logic
├── about.css         # About page styles
└── imgs/
    ├── user-bg-unsplash.avif      # Background image
    └── user-profile.avif           # Profile avatar image
```

## 🎯 Core Components

### Homepage (Profile Card)
- **Profile Card**: `<article data-testid="test-profile-card">` root container
- **Avatar**: Circular profile picture (`data-testid="test-user-avatar"`)
- **Name**: `<h2>` with `data-testid="test-user-name"`
- **Current Time**: Live millisecond timestamp (`data-testid="test-user-time"`)
- **Biography**: `<p>` with `data-testid="test-user-bio"`
- **Hobbies**: `<ul>` list with `data-testid="test-user-hobbies"`
- **Dislikes**: `<ul>` list with `data-testid="test-user-dislikes"`
- **Social Links**: Links with `data-testid="test-user-social-links"`

### Contact Page
- **Form Fields**:
  - Full Name (`test-contact-name`)
  - Email (`test-contact-email`)
  - Subject (`test-contact-subject`)
  - Message (`test-contact-message`)
  - Submit Button (`test-contact-submit`)
- **Validation**: Real-time error messages for each field (`test-contact-error-<field>`)
- **Success Message**: Confirmation display (`test-contact-success`)
- **Accessibility**: Labels linked with `for`, ARIA descriptions, keyboard navigation

### About Page
- **Main Container**: `<main data-testid="test-about-page">`
- **Bio Section**: `data-testid="test-about-bio"`
- **Goals**: `data-testid="test-about-goals"`
- **Areas of Low Confidence**: `data-testid="test-about-confidence"`
- **Note to Future Self**: `data-testid="test-about-future-note"`
- **Extra Thoughts**: `data-testid="test-about-extra"`

## 🛠️ Installation & Usage

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Local or remote server to serve the files

### Setup

1. **Clone or download the project**
```bash
   git clone https://github.com/Olu-Oni/Portfolio_Website_HNGi13
   cd Portfolio_Website_HNGi13
```

2. **Serve the files**
   - Using Python:
```bash
     python -m http.server 8000
```
   - Using Node.js (http-server):
```bash
     npx http-server
```
   - Using VS Code Live Server extension

3. **Open in browser**
```
   http://localhost:8000
```

## ♿ Accessibility Features

- ✅ Semantic HTML5 structure across all pages
- ✅ Descriptive alt text on all images
- ✅ Keyboard-focusable interactive elements
- ✅ Visible focus states on links and form inputs
- ✅ ARIA attributes for form validation errors
- ✅ Figure/figcaption semantic pairing for avatar
- ✅ Proper heading hierarchy (`<h2>`, `<h3>`)

## 🎨 Customization

### Customize Colors & Styling
Edit `index.css` CSS variables:
```css
:root {
  --primary-color: rgb(247, 247, 247);
  --secondary-color: white;
  --btn-focus-color: rgba(0, 167, 222, 0.785);
  --err-btn-focus-color: #990000;
  /* Modify as needed */
}
```

## 📊 Acceptance Criteria Met

### Homepage
✅ All required elements with correct `data-testid` attributes  
✅ Semantic HTML5 structure  
✅ Current time displays in milliseconds (updates every second)  
✅ Avatar renders with alt text  
✅ Social links open in new tabs with security attributes  

### Contact Page
✅ All form fields with proper validation  
✅ Error messages for invalid inputs  
✅ Success message after valid submission  
✅ Accessible labels and ARIA associations  
✅ Keyboard navigable  

### About Page
✅ All required sections with correct testids  
✅ Semantic structure with `<main>` and `<section>` tags  
✅ Proper heading hierarchy  
✅ Responsive layout across all devices  

## 🌐 Navigation

All pages include a consistent navigation bar:
- Home (index.html) → Profile Card
- Contact (contact.html) → Contact Form
- About (about.html) → About Me Page

## 🔗 Live Demo

[Add your deployed link here]

## 👨‍💻 Author

**Olu**  
- GitHub: [Olu-Oni](https://github.com/Olu-Oni)
- LinkedIn: [(https://www.linkedin.com/in/oluwole-oni/)]
- Twitter: [(https://x.com/That_Olu)]
- **Live Site**: https://oni-olu-profile-card-hng.vercel.app/

## 👤 Author

**Oni Oluwole Micheal**  
HNG Internship - Stage 0 Task

## 🚀 Possible Enhancements

- Dark mode toggle
- Image upload functionality
- Editable profile fields
- Additional social media platforms
- Animated transitions
- Theme customization panel
