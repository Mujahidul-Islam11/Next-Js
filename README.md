## What is NextJs?
Next.Js is a React framework for building full-stack web applications. You use React Components to create user interfaces and Next.js for additional features and optimizations.

Main Features: Routing, Rendering, Data Fetching, Styling, Optimizations

## Why we need next.js over reactjs?
React
. React Router Dom
. Firebase
. Express.js


NextJs
. Built-in app router
. Next Auth
. Built-in API routes

| Feature                    | React                          | Next.js                        |
|----------------------------|--------------------------------|--------------------------------|
| Type                       | A JavaScript Library           |React framework built on top of  React Library|
| Routing                    | Using React-router-dom          | Built-in App or Page router        |
| SSR                        | Requires additional work        | Built-in SSR                  |
| SEO Friendly               | Requires extra work for SEO     | SEO Friend during rendering      |

## Installation

```bash
npx create-next-app@latest

// On installation, you'll see the following prompts:
What is your project named? my-app
Would you like to use TypeScript? No / Yes
Would you like to use ESLint? No / Yes
Would you like to use Tailwind CSS? No / Yes
Would you like your code inside a `src/` directory? No / Yes
Would you like to use App Router? (recommended) No / Yes
Would you like to use Turbopack for `next dev`?  No / Yes
Would you like to customize the import alias (`@/*` by default)? No / Yes
What import alias would you like configured? @/*

npm run dev
``` 

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Folder structure
### page.js
page.js is the root home page of next application

### layout.js
layout.js contains the html body structure, and it also has the feature to change meta data

## Create routes
When a folder is added within the src/app directory, it automatically becomes a route. For instance, by creating a folder named "about," it will be accessible at the "/about" route. Additionally, any .jsx document added inside the "about" folder will be rendered at the "/about" path (the document name must be page.jsx).

<img src="https://imagizer.imageshack.com/img924/7531/7oaPh3.png"></img>

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.


## Deploy on Vercel

