# Happy Hacking Space - Website Code

![image](https://github.com/user-attachments/assets/9ca41245-8137-4f4b-ac2c-4a55ac22159b)

Welcome to the website for Happy Hacking Space, a community-driven platform that brings together technology enthusiasts, creators, and innovators.

## About Happy Hacking Space

Happy Hacking Space is a community-driven, collaborative environment where individuals with shared interests in technology, science, and creative endeavors come together to experiment, learn, and innovate through playful exploration and clever problem-solving. We embrace the hacker spirit of curiosity and creativity, operating as a space for collaboration and skill-sharing while fostering a sense of fun in pushing the boundaries of what is possible.

## What is Hacking?

In our community, hacking represents the spirit of playful intelligence and exploration. As RMS puts it in "On Hacking":

> Defining hacking can be challenging due to its variable nature. However, a common trait among many hackers is their playful, intelligent, and exploratory mindset. Thus, hacking means exploring the boundaries of what is possible with a playful spirit. Activities that demonstrate playful intelligence have hack value.

## Adding a New Article to the App

Follow these steps to add a new article to the app. This guide explains the structure of the markdown file and provides a template.

## Article Template

Save your article as a markdown (`.mdx`) file. Below is the required template:

- mdx file location: `content/blog/your_post_title.mdx`
- blog image location: `public/blog/your_post_img.jpg`

```markdown
---
title: "Your Post Title"                 # The title of your article
subtitle: "Your Post Subtitle"           # Optional subtitle
summary: "A brief summary of your post"  # Short summary for previews
publishedAt: "YYYY-MM-DD"                # Date of publication
author: "Author Name"                    # Name of the author
tags: ["tag1", "tag2"]                   # Relevant tags for the post
---

## Your Post Title

Write the content of your post here. You can use Markdown syntax for formatting.

### Example Code Block

To include code snippets, use fenced code blocks:

```Javascript
console.log("This is a test post");
const test = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("This is a test post");
};

test();

Adding an image
<img
  src="/blog/your_post_img.jpg" 
  alt="A description of your image" 
  style={{ width: "50%" }}
/>
```

## Technical Stack

This is a modern web application built with:

- [Next.js](https://nextjs.org) - React framework for production
- MDX for content management
- Tailwind CSS for styling
- TypeScript for type safety

## Getting Started

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Community

Join our community of hackers, makers, and technology enthusiasts. Together, we explore the boundaries of what's possible through collaborative learning and creative problem-solving.
