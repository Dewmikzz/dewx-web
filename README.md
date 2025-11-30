# DewX - Personal Portfolio Website

A modern, professional personal website showcasing skills as a Software Engineer, Gamer, Content Creator, and Web Designer.

## 🚀 Features

### Advanced Design Elements
- **Animated Particle Background**: Interactive particle system with connecting lines
- **Gradient Animations**: Dynamic gradient orbs and animated backgrounds
- **Smooth Scroll Animations**: Intersection Observer-based animations as you scroll
- **Glassmorphism Effects**: Modern backdrop blur effects throughout
- **3D Hover Effects**: Interactive card hover animations

### Sections Included
- **Hero Section**: Animated introduction with rotating role display
- **Skills & Technologies**: Comprehensive tech stack showcase with categorized skills
- **Projects Portfolio**: Featured projects grid with technology tags
- **Gaming Section**: Gaming stats, favorite games, and streaming platforms
- **Content Creation**: Content categories and social media platforms
- **Contact Form**: Interactive contact form with social links

### Technical Features
- **Modern Tech Stack**: Next.js 14, React, TypeScript, Tailwind CSS
- **Fully Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Fast loading times and smooth 60fps animations
- **SEO Ready**: Proper meta tags and semantic HTML structure
- **Accessibility**: ARIA labels and keyboard navigation support

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Intersection Observer**: React Intersection Observer for scroll animations

## 📦 Installation

First, install the dependencies:

```bash
npm install
```

## 🏃 Running the Development Server

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

The page will reload automatically when you make changes.

## 🏗️ Build for Production

Create an optimized production build:

```bash
npm run build
npm start
```

## 📝 Customization

### Update Personal Information
- Edit `components/Hero.tsx` to change name, roles, and bio
- Update social media links in `components/Hero.tsx` and `components/Contact.tsx`

### Modify Skills
- Edit the `skills` array in `components/Skills.tsx` to add/remove technologies
- Update skill categories in `skillCategories` array

### Update Projects
- Edit the `projects` array in `components/Projects.tsx`
- Add project images, descriptions, and links

### Change Colors & Theme
- Modify `tailwind.config.ts` for global color scheme
- Update gradient colors in component files
- Customize background effects in `components/AdvancedBackground.tsx`

### Gaming & Content Sections
- Update gaming stats and favorite games in `components/Gaming.tsx`
- Modify content categories in `components/ContentCreation.tsx`
- Update social media platforms and follower counts

## 🎨 Design Highlights

- **Dark Theme**: Modern dark color scheme with vibrant accent colors
- **Gradient Text**: Eye-catching gradient text effects
- **Particle System**: Interactive canvas-based particle network
- **Smooth Animations**: Framer Motion animations throughout
- **Glass Morphism**: Modern backdrop blur effects

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Configuration Files

- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `next.config.js` - Next.js configuration
- `postcss.config.js` - PostCSS configuration

## 📄 Project Structure

```
DewX/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   ├── globals.css      # Global styles
│   └── loading.tsx      # Loading component
├── components/
│   ├── AdvancedBackground.tsx  # Particle background system
│   ├── Navigation.tsx          # Navigation bar
│   ├── Hero.tsx                # Hero section
│   ├── Skills.tsx              # Skills section
│   ├── Projects.tsx            # Projects section
│   ├── Gaming.tsx              # Gaming section
│   ├── ContentCreation.tsx     # Content creation section
│   └── Contact.tsx             # Contact section
└── public/              # Static assets (add your images here)
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository on Vercel
3. Deploy with zero configuration

### Deploy to Netlify
1. Build the project: `npm run build`
2. Deploy the `.next` folder or connect your Git repository

## 📧 Support

For questions or customization help, feel free to reach out!

---

Built with ❤️ using Next.js, React, and modern web technologies.

