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
| Routing                    | Using React-router-dom         | Built-in App or Page router    |
| SSR                        | Requires additional work       | Built-in SSR                   |
| SEO Friendly               | Requires extra work for SEO    | SEO Friend during rendering    |

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
 

<b>How to create a dynamic component?</b>
<img src="https://imagizer.imageshack.com/img923/9136/92Rlxo.png"></img>
<br>

If we ever want to create a folder within the app folder which would not be converted to a route. In that case we have to wrap the folder name within a first braces. For example: (dashboardItems)

## Conditional layout
```bash
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();

  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Blogs",
      path: "/blogs",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "categories",
      path: "/categories",
    },
];

  if (pathName.includes("dashboard")) {
    return (
      <div className="p-4 bg-green-400 text-white">Welcome to Dashboard</div>
    );
  }
  return (
    <div>
      <nav className="bg-red-500 text-white flex justify-between py-4 px-4 text-xl">
        <h3>Next Hero</h3>
        <ul className="flex gap-5">
          {links?.map((link) => (
            <li key={link.path}>
              <Link
                className={`${pathName === link.path && "text-yellow-400"}`}
                href={link.path}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <button>Login</button>
      </nav>
    </div>
  );
};

export default Navbar;

```

### nested routing/catch all segment
 To create multiple routes within a route have to use [...features] this kind of name.
## Create error/loading page
Create jsx document within the app folder (loading.jsx, error.jsx), they will automatically create error and loading pages.

<img src="https://imagizer.imageshack.com/img924/3572/ca4yaC.png"/>

## Middlewares 
In Next.js, middleware refers to functions that have access to the request and response objects, and are able to modify or terminate the request-response cycle. Middleware can be used to perform tasks such as authentication, logging, error handling, and more. In the context of Next.js, middleware is often used to customize the behavior of API routes and provide additional functionality to the server-side code.

```bash
// middleware.js

import { NextResponse } from "next/server"

export const middleware = (request) =>{
    return NextResponse.redirect(new URL("/contact", request.url))
}

export const config = {
    matcher: "/user-profile"
}
```

## Rendering
Rendering is the process of transforming code into the visual and interactive web pages that users see and interact with on their browsers.

There are two types of rendering 
- Client Side Rendering(CSR) - Web page is rendered by the user's browser instead of server
- Pre-Rendering - Process of generating a website's contents or parts before a user requests them.
  - Server Side Redering(SSR) - Web server generates the complete HTML for a page each time user requests it.
  - Static Side Generation(SSG) - Websites HTML pages are pre-build at build time, before deployed to a server.


---
<br>

## Data Fetching / Dynamic Data Fetching
```bash
// getPostDetails.js

export const postDetails = async(id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return data
}

// ./posts/[id]/page.jsx

import { postDetails } from '@/services/getPostDetails';
import React from 'react';

const page = async({params}) => {
const data = await postDetails(params.id);

    return (
        <div className='container mx-auto my-20 rounded-md'>
            <div key={data?.id} className="border p-3">
            <h3 className="text-5xl mb-4 font-bold">{data?.title}</h3>
            <h3 className="text-2xl">{data?.body}</h3>
            <div className="flex justify-center mt-6">
            </div>
          </div>
        </div>
    );
};

export default page;
```
## Next CSS/CSS Modules
if we like! want to add separate styling for a specific page, then we have to create documents like this (styles.modules.css) inside the folder where we want the styling 

```bash
// about.jsx
import Link from 'next/link';
import React from 'react';
import styles from './styles.module.css'

const AboutPage = () => {
    return (
        <div>
            <h3 className={styles.text_large}>This is about page</h3> {/* Can not use - instead of that have to use camel case or _*/}
            <Link href={"/about/history"}>History</Link>
            <Link href={"/about/mission"}>Mission</Link>
        </div>
    );
};

export default AboutPage;
```

## MetaData 
Add metadata anywhere you want 

```bash 
export const metadata = {
  title: {                           
    default: "Next Hero",           // default title for all pages
    template: "%s | Next Hero"      // if route changes then title would be added %s in this sign
  },
  description: "Check out the next posts",
};
```

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.