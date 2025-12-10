# Personal Portfolio Website

A modern, responsive personal portfolio website built with HTML, CSS, and JavaScript. Perfect for showcasing your work as an AI Engineer, Data Scientist, or ML Developer.

## 🌟 Features

- **Modern & Responsive Design**: Clean, professional UI that looks great on all devices
- **Smooth Animations**: Fade-in, slide, and hover effects for an engaging user experience
- **Reusable Components**: Modular JavaScript components for navbar, footer, and more
- **SEO Optimized**: Clean semantic HTML with proper meta tags
- **Fast & Lightweight**: No heavy frameworks, just vanilla JavaScript
- **GitHub Pages Ready**: 100% compatible with GitHub Pages deployment

## 📁 Project Structure

```
misge_site/
├── assets/
│   ├── css/
│   │   └── style.css          # Main stylesheet
│   ├── js/
│   │   ├── main.js            # Main JavaScript file
│   │   └── components.js      # Reusable components
│   └── images/                # Image assets (add your images here)
├── index.html                 # Home page
├── about.html                 # About page
├── services.html              # Services page
├── projects.html              # Projects page
├── blog.html                  # Blog listing page
├── blog-post.html             # Blog post template
├── contact.html               # Contact page
└── README.md                  # This file
```

## 🚀 Getting Started

### Local Development

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone https://github.com/misge1233/misge_site.git
   cd misge_site
   ```

2. **Open in a browser**:
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Node.js (if you have http-server installed)
     npx http-server
     
     # Then visit http://localhost:8000
     ```

### Customization

Before deploying, customize the following:

1. **Personal Information**:
   - Update your name in all HTML files (`index.html`, `about.html`, etc.)
   - Add your actual bio and experience in `about.html`
   - Update social media links in `contact.html`

2. **Contact Form**:
   - Go to [Formspree](https://formspree.io/) and create a free account
   - Create a new form and get your form ID
   - Replace `YOUR_FORM_ID` in `contact.html` with your actual Formspree form ID

3. **Social Links**:
   - Update GitHub, LinkedIn, Twitter, and Fiverr links in `contact.html`
   - Replace `yourusername` and `your.email@example.com` with your actual information

4. **Projects & Blog**:
   - Add your actual projects in `projects.html`
   - Create real blog posts or update `blog.html` with your content
   - Replace placeholder images/icons with your own

5. **Colors & Styling** (optional):
   - Modify CSS variables in `assets/css/style.css` (lines 9-22) to match your brand colors

## 📦 GitHub Pages Deployment

### Method 1: Using GitHub Web Interface

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Initial portfolio website"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub: `https://github.com/misge1233/misge_site`
   - Click on **Settings** tab
   - Scroll down to **Pages** section (in the left sidebar)
   - Under **Source**, select `main` branch
   - Select `/ (root)` folder
   - Click **Save**

3. **Your site will be live at**:
   ```
   https://misge1233.github.io/misge_site/
   ```

   (It may take a few minutes for the site to be available)

### Method 2: Using GitHub CLI

1. **Install GitHub CLI** (if not already installed):
   ```bash
   # Windows (using winget)
   winget install GitHub.cli
   
   # Or download from: https://cli.github.com/
   ```

2. **Authenticate and push**:
   ```bash
   gh auth login
   git add .
   git commit -m "Initial portfolio website"
   git push origin main
   ```

3. **Enable GitHub Pages via CLI**:
   ```bash
   gh repo set-default misge1233/misge_site
   gh api repos/misge1233/misge_site/pages -X POST -f source[branch]=main -f source[path]=/
   ```

### Method 3: Using Git Commands

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial portfolio website"

# Add remote repository
git remote add origin https://github.com/misge1233/misge_site.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Then follow **Method 1** steps 2-3 to enable GitHub Pages via the web interface.

## 🎨 Customization Tips

### Adding Your Own Images

1. Place images in the `assets/images/` folder
2. Update image references in HTML files:
   ```html
   <!-- Instead of emoji icons, use: -->
   <img src="assets/images/your-image.jpg" alt="Description">
   ```

### Changing the Logo

1. Update the logo text in `assets/js/components.js` (line 13):
   ```javascript
   <a href="index.html" class="logo">Your Name</a>
   ```

### Adding More Pages

1. Create a new HTML file (e.g., `portfolio.html`)
2. Copy the structure from an existing page
3. Update `assets/js/components.js` to include the new page in the navigation menu

### Blog Post Content

- Edit `blog-post.html` as a template
- Create separate HTML files for each blog post
- Link them from `blog.html`
- For markdown support, you can use a library like [marked.js](https://marked.js.org/) or convert markdown to HTML

## 🔧 Troubleshooting

### Images not loading on GitHub Pages
- Ensure image paths are relative (e.g., `assets/images/photo.jpg` not `/assets/images/photo.jpg`)
- Check that images are committed and pushed to GitHub

### Form not working
- Verify your Formspree form ID is correct
- Check browser console for errors
- Ensure Formspree account is activated (check your email)

### JavaScript not working
- Check browser console for errors
- Ensure you're using a modern browser that supports ES6 modules
- Verify file paths are correct (especially if using nested folders)

### Styling looks broken
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check that `assets/css/style.css` is properly linked in HTML
- Verify all CSS file paths are correct

## 📝 Notes

- **Formspree**: Free tier allows 50 submissions per month. For more, upgrade to a paid plan
- **Custom Domain**: You can add a custom domain in GitHub Pages settings
- **HTTPS**: GitHub Pages automatically provides HTTPS for your site
- **Updates**: After making changes, commit and push to GitHub. Changes will be live within a few minutes

## 🛠️ Technologies Used

- HTML5
- CSS3 (with CSS Variables, Flexbox, Grid)
- JavaScript (ES6 Modules)
- Google Fonts (Inter)
- Formspree (for contact form)

## 📄 License

This project is open source and available for personal use. Feel free to customize it for your own portfolio!

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, contributions are welcome!

## 📧 Support

If you encounter any issues or have questions:
- Open an issue on GitHub
- Check the troubleshooting section above
- Review GitHub Pages documentation: https://docs.github.com/en/pages

---

**Happy Coding! 🚀**

