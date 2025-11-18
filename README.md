# Uber Clone Portfolio

A professional Uber-style web application portfolio designed for Uber recruiters, showcasing a clean and modern interface that mirrors the official Uber website.

## Features

- **Authentic Uber Design**: Replicates the official Uber homepage with:
  - Black navigation bar with Uber branding
  - Location-based booking interface
  - Interactive ride request form
  - Beautiful city illustration
  - Service suggestions section (Ride, Reserve, Rental Cars)

- **Responsive Design**: Fully responsive layout that works on:
  - Desktop (1400px+)
  - Tablet (768px - 1024px)
  - Mobile (480px - 768px)
  - Small mobile devices (< 480px)

- **Interactive Elements**:
  - Location input fields with focus states
  - Time picker button
  - Current location detection button
  - Price calculation button
  - City selector
  - Navigation menu

## Deployment Instructions

### Option 1: GitHub Pages (Recommended - Free & Permanent)

1. **Create a GitHub repository:**
   - Go to https://github.com/new
   - Name it something like `uber-portfolio` or `uber-clone`
   - Make it **public** (required for free GitHub Pages)
   - Don't initialize with README (we already have one)

2. **Push your code:**
   ```bash
   cd uber-portfolio
   git init
   git add .
   git commit -m "Initial commit: Uber portfolio clone"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Source", select **main** branch and `/` (root) folder
   - Click **Save**
   - Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

### Option 2: Netlify Drop (Easiest - No Git Required)

1. Go to https://app.netlify.com/drop
2. Drag and drop your entire `uber-portfolio` folder
3. Get an instant live link!

### Option 3: Vercel (Also Easy)

1. Go to https://vercel.com
2. Sign up/login
3. Click "Add New Project"
4. Import your GitHub repository or drag & drop
5. Deploy!

## File Structure

```
uber-portfolio/
├── index.html      # Main HTML structure
├── styles.css      # All styling and responsive design
├── script.js       # Interactive functionality
└── README.md       # This file
```

## Customization

### Change Default City
Edit the `.current-location` text in `index.html`:
```html
<span class="current-location">Montreal, CA</span>
```

### Modify Colors
Uber's brand colors are used throughout:
- Navigation: `#000000` (black)
- Text: `#000000` (black) and `#666666` (gray)
- Buttons: `#000000` (black background, white text)
- Borders: `#E0E0E0` (light gray)

### Add More Services
Add more cards to the suggestions section by duplicating the `.suggestion-card` structure in `index.html`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

This is a portfolio/demo project designed to showcase web development skills. It replicates the visual design and user interface of Uber's website but does not include actual booking functionality or API integrations.

## License

This project is for portfolio/demonstration purposes only.

