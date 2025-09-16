# Arooj Abbasi - Clinical Psychologist Portfolio

A modern, responsive portfolio website for Arooj Abbasi, Licensed Clinical Psychologist and Family Therapist. Built with HTML5, Tailwind CSS, and vanilla JavaScript.

## 🌟 Features

### Design & User Experience
- **Modern Medical Theme**: Soothing mental-health color palette (muted teal, soft blue, warm grey)
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support
- **Smooth Animations**: Subtle micro-animations and hover effects
- **Professional Typography**: Clean, readable fonts with proper hierarchy

### Interactive Elements
- **Cognitive Restructuring Puzzle**: Educational drag-and-drop activity matching automatic thoughts with healthier reframes
- **Mindfulness Breathing Visualizer**: 4-4-6 breathing technique with animated circle
- **Case Studies Filter**: Interactive filtering by therapy type (anxiety, family, career)
- **Cursor Glow Effect**: Dynamic cursor following effect (respects reduced motion preferences)
- **Smooth Scrolling**: Enhanced navigation with smooth scroll behavior

### Pages & Content
- **Home Page**: Hero section, services overview, skills showcase, experience timeline
- **Case Studies**: Anonymized case studies with detailed modals and filtering
- **Assessments & Services**: Comprehensive service descriptions and therapeutic approaches
- **Contact Page**: Contact form with validation and multiple contact methods
- **404 Page**: Friendly error page with helpful navigation

### Contact Integration
- **WhatsApp Integration**: Pre-filled messages for easy consultation booking
- **LinkedIn Profile**: Direct links to professional networking
- **Contact Form**: Validated form with real-time feedback
- **Multiple Contact Methods**: Phone, email, WhatsApp, and LinkedIn

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required

### Installation
1. Clone or download the repository
2. Open `index.html` in your web browser
3. That's it! The site is ready to use.

### Development Setup
For development with Tailwind CSS compilation:

1. Install Node.js and npm
2. Install Tailwind CSS CLI:
   ```bash
   npm install -g tailwindcss
   ```
3. Compile CSS (if making changes):
   ```bash
   tailwindcss -i ./css/styles.css -o ./css/output.css --watch
   ```

## 📁 Project Structure

```
arooj-portfolio/
├── index.html              # Home page
├── case-studies.html       # Case studies with filtering
├── assessments.html        # Services and assessments
├── contact.html            # Contact form and information
├── 404.html               # Error page
├── css/
│   └── styles.css         # Custom CSS and animations
├── js/
│   ├── app.js            # Main JavaScript functionality
│   ├── case-studies.js   # Case studies interactions
│   └── contact.js        # Contact form handling
└── README.md             # This file
```

## 🎨 Design System

### Color Palette
- **Mental Teal**: `#4A9B8E` - Primary brand color
- **Mental Blue**: `#6B9BD2` - Secondary accent color
- **Mental Grey**: `#8B9BA8` - Text and subtle elements
- **Mental Warm**: `#F7F3F0` - Background and card surfaces
- **Mental Dark**: `#2D3748` - Headings and high contrast text

### Typography
- **Headings**: Georgia serif font for professional medical feel
- **Body Text**: Inter sans-serif for readability
- **Responsive**: Scales appropriately across all device sizes

### Components
- **Cards**: Rounded corners, subtle shadows, hover effects
- **Buttons**: Rounded-full design with smooth transitions
- **Forms**: Clean inputs with focus states and validation
- **Modals**: Centered overlays with backdrop blur

## 🔧 Technical Features

### JavaScript Functionality
- **Modular Architecture**: Separate JS files for different features
- **Event Handling**: Proper event delegation and cleanup
- **Form Validation**: Real-time validation with user feedback
- **Local Storage**: Puzzle scores and user preferences
- **Progressive Enhancement**: Works without JavaScript

### CSS Features
- **Custom Properties**: CSS variables for consistent theming
- **Flexbox & Grid**: Modern layout techniques
- **Animations**: CSS keyframes and transitions
- **Media Queries**: Responsive breakpoints
- **Accessibility**: Reduced motion support

### Performance
- **Optimized Images**: SVG icons and optimized graphics
- **Minimal Dependencies**: Only Tailwind CSS via CDN
- **Fast Loading**: Optimized HTML structure
- **Caching**: Proper cache headers for static assets

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility Features

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: ARIA labels and descriptions
- **Color Contrast**: WCAG AA compliant contrast ratios
- **Reduced Motion**: Respects user motion preferences
- **Focus Management**: Clear focus indicators

## 🎯 Interactive Elements

### Cognitive Puzzle
- Drag-and-drop interface for matching thoughts with reframes
- Score tracking with localStorage persistence
- Educational feedback and hints
- Accessible keyboard navigation

### Breathing Visualizer
- 4-4-6 breathing pattern visualization
- Animated circle with color changes
- Start/stop controls
- Calming visual feedback

### Case Studies
- Filterable by therapy type
- Detailed modal views
- Downloadable case summaries (placeholder)
- Smooth animations and transitions

## 📞 Contact Information

- **Phone**: 0303-5229634 (Work)
- **Email**: m.aroojabbasi@gmail.com
- **WhatsApp**: [Direct booking link](https://wa.me/923035229634)
- **LinkedIn**: [Professional profile](https://www.linkedin.com/in/aroojabbasi-13b50915b)

## 🛠️ Customization

### Updating Content
1. **Personal Information**: Update contact details in all HTML files
2. **Case Studies**: Modify `js/case-studies.js` for new cases
3. **Services**: Update service descriptions in `assessments.html`
4. **Colors**: Modify Tailwind config in HTML head sections

### Adding New Pages
1. Create new HTML file following existing structure
2. Include navigation links in header
3. Add page-specific JavaScript if needed
4. Update footer links if necessary

## 🚀 Deployment

### Static Hosting
The site can be deployed to any static hosting service:
- **Netlify**: Drag and drop the folder
- **Vercel**: Connect GitHub repository
- **GitHub Pages**: Push to repository
- **AWS S3**: Upload files to bucket

### Server Requirements
- No server-side processing required
- Static file serving only
- HTTPS recommended for production

## 📄 License

This project is created for Arooj Abbasi's professional portfolio. All content and design are proprietary.

## 🤝 Support

For technical support or questions about the website:
- Email: m.aroojabbasi@gmail.com
- WhatsApp: 0303-5229634

---

**Built with ❤️ for mental health professionals and their clients**
