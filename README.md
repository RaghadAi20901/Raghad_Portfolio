# Raghad Alluqmani — Portfolio

A personal portfolio website showcasing my projects, skills, certifications, and background as a Computer Science student at Umm Al-Qura University.

## Live Demo

Open `index.html` in any browser to view the mockup portfolio.  
The live-prod version is in `back-up_files/index1.html` (styled with `back-up_files/styling1.css`).

## Sections

- **Hero** — Terminal-themed intro with tagline and resume download
- **About** — Detective-board style bio with pinned cards
- **Education** — B.S. Computer Science, Umm Al-Qura University (Graduated June 2026)
- **Certifications** — Python, Bioethics, Cloud Computing, Django REST API (with verify links)
- **Projects** — 8 project cards with difficulty badges, tech tags, and GitHub links
- **Skills** — RPG stat-screen style with progress bars
- **Contact** — LinkedIn, GitHub, email links

## All Features

### Navigation
- **Sticky navbar** — Header stays at the top while scrolling
- **Active section tracking** — Current section's nav link is highlighted with amber border and background as you scroll (JS-powered)
- **Smooth anchor links** — Nav links scroll smoothly to each section
- **Resume nav link** — Quick-access "Resume" button in the navbar with blue accent border

### Hero Section
- **Terminal panel** — Animated command-line intro with blinking cursor
- **Typewriter-style presentation** — Name, tagline, and achievements displayed as terminal output
- **Chip badges** — "CS Student", "AI Explorer", "Bug Hunter" labels
- **Achievement badges** — Project count, certification count, curiosity stat
- **Resume download button** — Direct link to PDF with download icon

### About — Detective Board
- **Pin-card layout** — Three pinned index cards with slight rotation for authenticity
- **Notebook paper background** — Repeating grid lines on the board
- **Who I Am** — Personal bio with personality
- **Education card** — University, degree, location, graduation date (June 2026), and a paragraph explaining the motivation behind studying Computer Science
- **Core Values** — Divide & Conquer, Perfect & Efficient, GitHub Green Squares
- **Certifications tacked to board** — 4 pinned certs with pull-tab aesthetic, each with a "Verify Credential →" link to the real Coursera/Google Drive URL

### Projects — Game Launcher Grid
- **8 project cards** — Each with a gradient banner, difficulty badge (Easy/Medium/Hard), tech stack tags, description, XP counter, and "▶ PLAY" button
- **Hover effects** — Cards lift and shadow deepens on hover
- **Real GitHub links** — Every "▶ PLAY" button opens the actual GitHub repository in a new tab:
  - Crime Pattern Discovery
  - Disease Prediction with Clinical Data
  - Snake Game (C++ OpenGL)
  - Masaar Ride-Sharing App (Flutter)
  - Python Data Projects
  - Arduino Sensor Projects
  - Amazon Sentiment Analysis
  - Real Estate Website

### Skills — RPG Stat Screen
- **Character stat panel** — Header with "Lv. 8 · CS Student" level indicator
- **5 stat categories** — Frontend, Programming Languages, Databases, AI & Data, Other
- **Progress bars** — Color-coded bars (amber, blue, green, pink) with numeric values
- **Skill icons** — Emoji-based icons for each skill

### Contact / CTA
- **Call-to-action box** — "Let's Build Something Legendary" heading with wavy underline
- **Contact buttons** — Email, LinkedIn (real profile), GitHub (real profile)

### Design & Visual
- **Cartoon brutalist style** — Bold black outlines, flat amber (#fbbf24) accent color, chunky drop shadows, expressive typography
- **Dark theme** — Dark background (#0f0f1a) with light text
- **4 Google Fonts** — Space Grotesk (body), Playfair Display (headings), JetBrains Mono (code), Press Start 2P (labels)
- **Responsive layout** — Single-column on mobile, multi-column on desktop; all sections adapt gracefully

### Performance
- **Passive scroll listeners** — Scroll event uses `{ passive: true }` for smooth performance
- **No external dependencies** — Pure HTML/CSS/JS, zero frameworks, no build step
- **Lightweight** — Single self-contained HTML file with embedded CSS and JS

## Tech Stack

- HTML5
- CSS3 (vanilla, no frameworks)
- JavaScript (vanilla, inline scroll tracking)
- Google Fonts: Space Grotesk, Press Start 2P, JetBrains Mono, Playfair Display

## File Structure

```
├── index.html                 # Main portfolio page (mockup design)
├── README.md
├── styling.css                # (not in use — see backup)
├── back-up_files/
│   ├── index1.html            # Original portfolio version
│   ├── styling1.css           # Full CSS for the original version
│   └── acdemic_cv.pdf         # Resume PDF
├── js/
│   ├── nav.js                 # Navbar hamburger + scroll tracking
│   ├── scroll-nav.js          # Arrow-key section navigation
│   ├── scroll-color.js        # Section-based color shifting
│   ├── transition.js          # GSAP page transitions
│   ├── effects.js             # Cursor trail + hover effects
│   └── projects-slider.js     # Projects carousel
├── Photos/                    # Skill icons and project images
└── gitpush.sh                 # Git helper script
```

## Getting Started

1. Clone the repo:  
   `git clone https://github.com/RaghadAi1/Portfolio.git`
2. Open `index.html` in your browser — no build step needed.

## License

© 2026 Raghad Alluqmani. Built with ☕ and determination.
