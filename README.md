![website_repo_banner](https://github.com/user-attachments/assets/5b623565-1ee8-4e8e-a93c-7981882b4d6a)

The official website for Kanri, featuring the landing page and documentation.

## Preview
![website screenshot](https://github.com/user-attachments/assets/20c20f09-347e-4a45-b1b4-e3e41b6f046b)


## Tech Stack

The Kanri website is built using the following technologies:
- **Astro** and **Starlight**: Framework for building the site and documentation.
- **TailwindCSS**: Utility-first CSS framework for styling.
- **shadcn/ui**: Component library for building the user interface.
- **Framer Motion**: Library for animations and transitions.
- **TypeScript**: Adding static types to JavaScript.
- **MDX**: Markdown for writing content with embedded React components.

## Project Structure

Inside the project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   │   └── config.ts
│   └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

- **`public/`**: Static assets like favicons.
- **`src/assets/`**: Images and other assets embedded in Markdown.
- **`src/content/docs/`**: Documentation files in `.md` or `.mdx` format.
- **`astro.config.mjs`**: Configuration for Astro.
- **`package.json`**: Project metadata and dependencies.
- **`tsconfig.json`**: TypeScript configuration.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Builds the production site to `./dist/`          |
| `npm run preview`         | Previews your build locally, before deploying    |


## Want to Learn More?

Check out the [Kanri Discord server](https://discord.gg/AVqHrvxB9C) for more information.
