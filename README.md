# Getting Started

## Prerequisites

This website was developed utilizing React, Tailwind CSS, and ViteJS with the integrated development environment (IDE) being Visual Studio Code. The website is then deployed on GitHub Pages here:\
 https://uta-vgdo.github.io/website/

It is assumed you know a bit of the basic web stack (HTML, CSS, JavaScript).

It is also recommended to have a basic understanding of git, so that setting up and deploying is seamless and that you can avoid breaking this repository or know how to fix it if you do.

## Installation

### Downloading Visual Studio

Any modern version of VS Code should be fine for developing this project. You can download it here:\
https://code.visualstudio.com/

### Downloading NodeJS

Any modern version of NodeJS should be fine for developing this project. You can download it here:\
https://nodejs.org/en

## Setting up Visual Studio Code

### Extensions

While these aren't necessary, the following extensions make development easier. Look into how to download extensions for VS Code and download these extensions.

- Prettier - Code formatter by Prettier
- Tailwind CSS Intellisense by Tailwind Labs

There may be extra set up steps aside from just downloading them, so look into that.

### Installing Dependencies

You should first check if you actually have NodeJS installed. To do this, type in the terminal:\
npm -v

If numbers show up, NodeJS was installed. Now type:\
npm install

This will install the dependencies and packages necessary for this website. This is mainly just the necessary components for React, Tailwind CSS, and ViteJS but some have been manually installed by us, such as social media icons.

# Maintenance

If you're satisfied with the current design of the website and just want to update the contents to reflect the semester, great! All you need to do is edit the json files that can be found in the "constant" folder, and drag and drop images into "public/assets"

If you'd like to make visual changes such as overhauling the theme or adding new sections of information, it would be best to understand web stack (HTML, CSS, JS) and understand how React, Tailwind CSS, NodeJS, and ViteJS work together to abstract and streamline web development. But depending on your programming background, the pattern recognition can be easy enough.

## Testing

Either way, whenever you make any changes, you should observe them first before deploying to the actual website.

In VS Code's terminal, type:\
npm run dev

This will open up http://localhost:5173/website/ for you to observe the current state of the website and make any live changes.

When you're satisfied with your changes, you'll need to update the repository and actually deploy the changes to the live website.

## Deployment

Push your changes to the main branch of this repository. It's important that the main branch matches with the live website to avoid mismatch and confusion during development.

From the terminal, type:\
npm run deploy

This command will update the gh-pages and deploy your changes to the live server. You don't need to worry about the contents of the gh-pages branch, but you'll know if it worked when you see that the gh-pages branch has been updated.
