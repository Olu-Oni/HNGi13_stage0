# Profile Card - HNG Internship Stage 0 Task

A responsive, accessible, and testable profile card component built with semantic HTML, modern CSS, and vanilla JavaScript.

## 📋 Overview

This project implements a profile card that displays user information including name, biography, hobbies, dislikes, and social media links. The component is fully responsive across mobile, tablet, and desktop devices and includes comprehensive test coverage with `data-testid` attributes.

## ✨ Features

- **Semantic** — Uses proper semantic tags (`<article>`, `<figure>`, `<nav>`, `<section>`) for accessibility
- **Responsive Design** — Adapts seamlessly to mobile, tablet , and desktop (768px+) viewports
- **Accessible** — Includes proper alt text, ARIA labels, and keyboard navigation support
- **Testable** — All elements include `data-testid` attributes for automated testing
- **Live Time Display** — Shows current time in milliseconds, updating every second
- **Social Integration** — Direct links to GitHub, LinkedIn, and Twitter
- **Modern CSS** — Flexbox layout with smooth transitions and hover effects

## 📁 Project Structure

```
├── index.html        # Main HTML structure
├── index.css         # Global styles and utilities
├── header.css        # Header and profile-specific styles
└── imgs/
    ├── user-bg-unsplash.avif      # Background image
    └── user-profile.avif           # Profile avatar image
```

## 🎯 Core Components

### Profile Card Container
- **Element**: `<article data-testid="test-profile-card">`
- Root container for all profile content


### Header Section
- **Background Image**: Decorative header banner (`background-image` class)
- **Avatar**: Circular profile picture inside `<figure>` with `data-testid="test-user-avatar"`
- **Name**: `<h2>` with `data-testid="test-user-name"`
- **Current Time**: Live timestamp in milliseconds (`data-testid="test-user-time"`)

### Main Content
- **Biography**: `<p>` with `data-testid="test-user-bio"`
- **Hobbies**: `<ul>` list with `data-testid="test-user-hobbies"` 
- **Dislikes**: `<ul>` list with `data-testid="test-user-dislikes"` 
- **Social Links**: `<ul>` containing links to GitHub, LinkedIn, and Twitter with `data-testid="test-user-social-links"` in each `<a>` tag.

## 🛠️ Installation & Usage

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Local or remote server to serve the files 

### Setup

1. **Clone or download the project**
   ```bash
   git clone https://github.com/Olu-Oni/Profile_card_HNGi13
   
   cd Profile_card_HNGi13d
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

##  Accessibility Features

- ✅ Semantic HTML structure
- ✅ Descriptive alt text on all images
- ✅ Keyboard-focusable interactive elements
- ✅ Visible focus states on links
- ✅ Figure/figcaption semantic pairing for avatar


### Customize Colors & Styling
Edit `index.css` CSS variables:
```css
:root {
  --primary-color: rgb(247, 247, 247);
  --secondary-color: white;
  --btn-focus-color: rgba(0, 167, 222, 0.785);
  /* Modify as needed */
}
```

## 📊 Acceptance Criteria Met

✅ All required elements present with correct `data-testid` attributes  
✅ Semantic HTML5 structure  
✅ Current time displays in milliseconds (updates every second)  
✅ Avatar renders with alt text and proper testid  
✅ Social links open in new tabs with security attributes  
✅ Hobbies and dislikes are distinct lists  
✅ Keyboard navigation fully functional  
✅ Responsive layout at mobile, tablet, and desktop breakpoints  

## 🔗 Live Links

- **GitHub**: https://github.com/Olu-Oni
- **LinkedIn**: https://www.linkedin.com/in/oluwole-oni/
- **Twitter**: https://x.com/That_Olu

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