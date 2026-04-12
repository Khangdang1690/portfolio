# Khang Dang - Portfolio Website

A modern portfolio website built with Next.js and Shadcn UI showcasing Khang Dang's skills, experience, and projects as a backend developer and DevOps engineer.

## Features

- Responsive design with Black Rose Bloom theme
- Interactive UI components using Shadcn UI
- Multiple pages:
  - Home
  - About
  - Projects
  - Experience
  - Achievements
  - Contact

## Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Icons**: Lucide React
- **Animations**: Framer Motion

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:3000`

## Deployment

This website can be easily deployed on Vercel:

1. Create a Vercel account if you don't have one already
2. Link your GitHub repository to Vercel
3. Deploy the site with the default settings

## Project Structure

- `src/app/`: Next.js App Router pages
- `src/components/`: UI components
  - `layout/`: Layout components (MainLayout, MainNav)
  - `ui/`: Shadcn UI components
- `public/`: Static assets
- `tailwind.config.mjs`: Tailwind CSS configuration

## Customization

You can customize the theme colors by editing the `src/app/globals.css` file. The current theme is Black Rose Bloom with the following colors:

- Background: #080808 – obsidian
- Surface: #121212 – smooth matte black
- Primary Text: #FFFFFF – pure white
- Accent Red: #D7263D – bright garnet
- Muted: #2C2C2C – dark gray for details

## License

This project is licensed under the MIT License.

## Acknowledgments

- Shadcn UI for the beautiful component library
- Next.js team for the amazing framework
- Vercel for the deployment platform
