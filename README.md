# Rajesh Phulwaria — AI/ML Research Portfolio

A personal portfolio focused on Artificial Intelligence and Machine Learning, with an emphasis on deep learning, Transformers, Large Language Models (LLMs), Generative AI, and neural network optimization.

The portfolio presents my projects, research, publication, experience, technical skills, and other work in one place.

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Vite
- Lucide React

## Highlights

- Research-oriented portfolio design
- Responsive layout for desktop and mobile
- Dark-first visual design with theme support
- Projects and technical work showcase
- Research and publication section
- Experience and skills overview
- Downloadable resume
- GitHub and LinkedIn integration
- DOI and email copy functionality
- Interactive BPE merge demonstration
- SEO metadata and social sharing support

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed.

You can check your installation with:

```bash
node --version
npm --version
```

### Installation

Clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd <project-directory>
npm install
```

### Run the development server

```bash
npm run dev
```

Open the local URL printed in the terminal.

## Production

Create a production build with:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

The production files are generated in:

```text
dist/
```

The resulting build can be deployed to a static hosting platform such as Netlify, Vercel, GitHub Pages, or another compatible hosting service.

## Project Structure

The project keeps portfolio content separate from the UI components.

```
├── 📁 public
│   ├── 🖼️ favicon.png
│   ├── 🖼️ og-image.png
│   ├── 📕 resume.pdf
│   ├── 📄 robots.txt
│   └── ⚙️ sitemap.xml
├── 📁 src
│   ├── 📁 components
│   │   ├── 📄 About.tsx
│   │   ├── 📄 BPEDemo.tsx
│   │   ├── 📄 Contact.tsx
│   │   ├── 📄 Experience.tsx
│   │   ├── 📄 Footer.tsx
│   │   ├── 📄 Hero.tsx
│   │   ├── 📄 Nav.tsx
│   │   ├── 📄 OpenSource.tsx
│   │   ├── 📄 PipelineDiagram.tsx
│   │   ├── 📄 ProjectCard.tsx
│   │   ├── 📄 Projects.tsx
│   │   ├── 📄 Publication.tsx
│   │   ├── 📄 ResearchInterests.tsx
│   │   ├── 📄 ResearchJourney.tsx
│   │   ├── 📄 ScrollProgress.tsx
│   │   └── 📄 Skills.tsx
│   ├── 📁 data
│   │   └── 📄 resume.ts
│   ├── 📁 hooks
│   │   └── 📄 useTheme.ts
│   ├── 📄 App.tsx
│   ├── 🎨 index.css
│   ├── 📄 main.tsx
│   └── 📄 vite-env.d.ts
├── 📝 README.md
├── 🌐 index.html
├── ⚙️ package-lock.json
├── ⚙️ package.json
├── 📄 postcss.config.js
├── 📄 tailwind.config.js
├── ⚙️ tsconfig.json
├── 📄 tsconfig.tsbuildinfo
└── 📄 vite.config.ts
```

### Content

Portfolio information such as projects, publication, experience, skills, and other personal details is maintained in:

```text
src/data/resume.ts
```

This provides a single place to update the information displayed throughout the portfolio.

## SEO

The portfolio includes metadata and assets for search engines and social sharing.

These include:

- Page title
- Meta description
- Open Graph metadata
- Twitter/X card metadata
- Canonical URL
- Person structured data using JSON-LD
- `robots.txt`
- `sitemap.xml`
- Favicon
- Open Graph preview image

The related public assets are:

```text
public/
├── favicon.png
├── og-image.png
├── robots.txt
├── sitemap.xml
└── resume.pdf
```

## Configuration Before Deployment

Before publishing the portfolio, check the following:

### Resume

Replace:

```text
public/resume.pdf
```

with the resume version you want visitors to download.

### SEO URLs

Make sure the canonical URL, sitemap, Open Graph image URL, and other metadata point to the deployed portfolio URL.

## Deployment

The project produces a static production build through Vite.

Build the project:

```bash
npm run build
```

The generated `dist/` directory can then be deployed to a supported static hosting provider.

The portfolio is currently deployed at:

https://rajeshphulwaria-portfolio.netlify.app/

## Author

### Rajesh Phulwaria

BCA student focused on Artificial Intelligence and Machine Learning, with interests in:

- Deep Learning
- Transformers
- Large Language Models
- Generative AI
- Natural Language Processing
- AI/ML Research

### Links

- Portfolio: https://rajeshphulwaria-portfolio.netlify.app/
- GitHub: https://github.com/RajeshPhulwaria006

## License

This repository represents a personal portfolio.

The source code may be referenced for learning and inspiration. Personal content, resume information, research work, publications, project descriptions, and other personal materials should not be reused or presented as someone else's work.
