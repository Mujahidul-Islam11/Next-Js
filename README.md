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



## Create links, components
Usually, in nextJs we create components inside the src folder. In the source folder we create a folder named components and inside it we create the components (Navbar.jsx/Banner.jsx/Newsletter.jsx etc.). And to create nav links next Js provides us built-in <Link/> component.

<img src="https://imagizer.imageshack.com/img922/3470/W9Am4F.png"></img>

<b>:Import the component inside the layout.js :D</b>

<img src="https://imagizer.imageshack.com/img924/1007/HzWQiy.png"></img>

## Active Routes/Server Component/Client Component
 In Next.js, all components are server components by default, which means they do not allow the use of hooks inside them. To enable the use of hooks within components, we need to add "use client" at the top of the component. 

 <img src="https://imagizer.imageshack.com/img924/2025/pa8ztB.png"></img> 

## Nested routing
 When a folder is added within the src/app directory, it automatically becomes a route. For instance, by creating a folder named "about," it will be accessible at the "/about" route. Additionally, any .jsx document added inside the "about" folder will be rendered at the "/about" path (the document name must be page.jsx). And if we create more folders inside the "about" folder, such as "history" and "mission," they will become nested routes, leading to paths such as "/about/history" and "/about/mission" respectively. This supports the creation of a structured and organized routing system within the application.  
 
 <img src="https://imagizer.imageshack.com/img923/7202/FjVC8J.png"></img>

## Dynamic routing
We have a blogs page and have 5 blogs inside the blog page, we wanna see each blogs detail. Now, how we gonna set dynamic navigation?
 <img src="https://imagizer.imageshack.com/img924/8374/anJfli.png"></img>

 To create a dynamic route inside the "blogs" folder, we need to create a folder with the structure "[id]". The folder name should match the JSON key, such as "[slug]", to enable dynamic routing based on the provided JSON data. For example, if the blog contains a "slug" parameter in the JSON, we would create a folder named "[slug]" inside the "blogs" directory to support dynamic routing based on the blog's "slug" parameter.
 
 <img src="https://imagizer.imageshack.com/img922/1576/uzuHEk.png"></img>
 

<b> How to create a dynamic component?</b>

 <img src="https://imagizer.imageshack.com/img923/9136/92Rlxo.png"></img>

 

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.