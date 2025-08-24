# GitHub Profile Finder - Next.js

A modern, responsive web application built with Next.js that helps you discover and explore GitHub profiles with a beautiful interface.

## ✨ Features

- **Modern UI/UX**: Beautiful glassmorphism design with smooth animations
- **GitHub Integration**: Seamlessly connects with GitHub's API
- **Profile Discovery**: Find and explore GitHub profiles with detailed information
- **Repository Explorer**: Browse through public repositories with stats
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Fast Performance**: Built with Next.js for optimal performance
- **Real-time Data**: Fetches live data from GitHub API

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **HTTP Client**: Axios
- **Font**: Inter (Google Fonts)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd github-profile-nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
├── app/
│   ├── layout.js          # Root layout
│   ├── page.js            # Home page
│   ├── about/
│   │   └── page.js        # About page
│   ├── contact/
│   │   └── page.js        # Contact page
│   └── globals.css        # Global styles
├── components/
│   ├── Navbar.jsx         # Navigation component
│   ├── Hero.jsx           # Hero section with search
│   └── Profile.jsx        # Profile display component
├── public/                # Static assets
└── package.json
```

## 🎨 Design Features

- **Glassmorphism Effect**: Modern glass-like UI elements
- **Gradient Backgrounds**: Beautiful color transitions
- **Smooth Animations**: CSS animations and transitions
- **Responsive Grid**: Adaptive layouts for all screen sizes
- **Interactive Elements**: Hover effects and micro-interactions

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: Full-featured experience with side-by-side layouts
- **Tablet**: Adapted layouts with touch-friendly interactions
- **Mobile**: Mobile-first design with optimized navigation

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Pages

1. **Home Page** (`/`) - Main search interface
2. **About Page** (`/about`) - Information about the project
3. **Contact Page** (`/contact`) - Contact form and information

## 🔌 API Integration

The application uses the GitHub REST API to fetch:
- User profile information
- Public repositories
- Repository statistics (stars, forks, language)

## 🎯 Key Components

### Hero Component
- Search interface with real-time validation
- Loading states and error handling
- Feature highlights

### Profile Component
- Complete profile information display
- Repository grid with detailed cards
- Responsive stats and social links

### Navbar Component
- Responsive navigation with mobile menu
- Smooth transitions and animations

## 🚀 Deployment

The application can be deployed to various platforms:

### Vercel (Recommended)
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
# Deploy the .next folder
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- GitHub API for providing the data
- Next.js team for the amazing framework
- Tailwind CSS for the utility-first styling
- Lucide for the beautiful icons

---

**Built with ❤️ using Next.js and Tailwind CSS**
