# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Tony Yiding Tian (Computer Graphics Engineer) built using the Dopefolio template. The site is a multi-page, static HTML/CSS/JavaScript portfolio showcasing graphics projects, deployed to a custom Nginx server.

## Development Commands

### SASS Compilation
```bash
# Watch and compile SASS files (use this during development)
npm run compile:scss

# Compile and compress CSS (production build)
npm run build
```

The `compile:scss` command watches `sass/main.scss` and outputs to `css/style.css`. Keep this running while editing styles.

### Deployment
```bash
# Full deployment pipeline (git pull, build, sync to web root, restart nginx)
./deploy.sh
```

This script is configured for deployment to `/var/www/tonyxtian.com` on the production server.

## Project Structure

### Pages
- `index.html` - Main homepage with hero, about, projects, and contact sections
- `project-{1,2,3}.html` - Individual project case study pages (identical structure, different content)

### Styling Architecture
SASS files are organized in `sass/` using a modular structure:
- `abstracts/` - Variables (`_variables.scss` contains `$themeClrPrimary` for theme color), mixins, utilities
- `base/` - Base styles and resets
- `components/` - Reusable components (header, footer, skills, mouse-scroll)
- `pages/` - Page-specific styles (home, project case studies)
- `main.scss` - Main entry point that imports all partials

**Theme customization**: Change the primary color by editing `$themeClrPrimary` in `sass/abstracts/_variables.scss`.

### JavaScript
`index.js` contains vanilla JavaScript for:
- Mobile hamburger menu toggle functionality
- Header logo click navigation
- No frameworks or libraries used

## Key Implementation Details

### Adding New Projects
1. Create a new project HTML file (e.g., `project-4.html`) by copying an existing project file
2. Update the project content (title, description, images, links)
3. Add a new `.projects__row` block in `index.html` within the `#projects` section
4. Each project requires:
   - Project image in `assets/` (PNG/JPEG)
   - Case study link pointing to the new project HTML file
   - Live demo or GitHub repo link

### Image Assets
- Profile/header images: `assets/jpeg/` or `assets/png/`
- Icons: `assets/png/` (social media icons)
- SVG: `assets/svg/` (hamburger menu icons)
- Project mockups should be optimized and cropped to minimize file size

### Contact Form
The contact form in `index.html` has a placeholder `action="#"`. To enable form submission, integrate with:
- Formspree.io (recommended in README)
- Netlify Forms (if hosted on Netlify)
- Or another form handling service

## Deployment Notes

The site is configured for deployment to a custom server:
- Web root: `/var/www/tonyxtian.com`
- Web server: Nginx
- The deployment script handles git pull, npm build, file sync, and server restart
- Assets are served directly from the web root (no build step needed for HTML/JS/images)

## Resume Link

The resume is hosted externally on GitHub at `https://raw.githubusercontent.com/tonytgrt/TonyTianResume/master/resume_cg.pdf`. Update this link in both desktop and mobile menu sections if the resume location changes.
