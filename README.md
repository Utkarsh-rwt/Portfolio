
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=61DAFB&color=20232A)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=F7DF1E&color=000000)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=646CFF&color=1F1F1F)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=38BDF8&color=0F172A)
![Node.js](https://img.shields.io/badge/Node.js-83CD29?style=for-the-badge&logo=node.js&logoColor=83CD29&color=1F2937)
![Express](https://img.shields.io/badge/Express-FFFFFF?style=for-the-badge&logo=express&logoColor=FFFFFF&color=111827)


This repository is the code behind my personal portfolio. It brings together my projects, skills, engineering notes, competitive-programming profiles, and ways to get in touch.

## React structure

The frontend is a Vite-powered React application. It separates route-level pages from reusable sections and content components:

### Application entry and routing

- [`src/main.jsx`](./frontend/src/main.jsx) is the browser entry point. It mounts the React application and provides the router context.
- [`src/App.jsx`](./frontend/src/App.jsx) is the application shell. It renders the fixed navbar and maps URLs to page components.
- The main routes are `/`, `/projects`, `/skills`, `/blogs`, `/blogs/blog1`, and `/blogs/blog2`.
- [`src/index.css`](./frontend/src/index.css) contains global styles and Tailwind-related styling used across the application.

### Pages and components

- [`src/pages/`](./frontend/src/pages) contains full-screen route components. These pages compose smaller components instead of holding every piece of UI themselves.
- [`src/components/Navbar.jsx`](./frontend/src/components/Navbar.jsx) provides navigation between the main sections and project previews.
- [`src/components/HomePageComponents/`](./frontend/src/components/HomePageComponents) contains the homepage introduction and contact actions.
- [`src/components/ProjectsPageContent/`](./frontend/src/components/ProjectsPageContent) contains one component per featured project, including its description, stack, and learnings.
- [`src/components/blogscomponents/`](./frontend/src/components/blogscomponents) contains individual blog article views.
- [`src/components/ui/`](./frontend/src/components/ui) contains reusable interface pieces such as the animated ASCII image and navigation menu.
- [`src/assets/`](./frontend/src/assets) stores images imported by React components, allowing Vite to process and bundle them.

### How the UI is composed

The flow is:

```text
main.jsx
   └── App.jsx
       ├── Navbar
       └── React Router route
           ├── About
           │   └── ContactMe
           ├── Projects
           │   ├── Project1
           │   └── Project2
           ├── Skills
           ├── Blogs
           ├── Blog1
           └── Blog2
```

To add a new page, create a component in `src/pages/`, register its route in `App.jsx`, and add a navigation link in `Navbar.jsx`. To add a project or blog post, create the content component in its matching `components` directory and render it from the relevant page.

## A reusable competitive-programming API

I also built and hosted a competitive-programming ratings API. Anyone can connect these endpoints to their own frontend or application:

**Base URL:** [`https://portfolio-msfo.onrender.com`](https://portfolio-msfo.onrender.com)

```text
GET https://portfolio-msfo.onrender.com/leetcode/rating/:username
GET https://portfolio-msfo.onrender.com/codechef/rating/:username
GET https://portfolio-msfo.onrender.com/codeforces/rating/:username
```

For example:

```bash
curl https://portfolio-msfo.onrender.com/codeforces/rating/tourist
```

The response follows a simple format:

```json
{
  "rating": 3843
}
```

The API handles the external requests on the server and returns a small JSON response, so clients do not need to implement separate integrations for each platform. The service-specific logic lives in [`backend/src/controllers/`](./backend/src/controllers), while the routes are defined in [`backend/src/routes/cproutes.ts`](./backend/src/routes/cproutes.ts).

You can use it directly from JavaScript:

```js
const response = await fetch(
  "https://portfolio-msfo.onrender.com/codeforces/rating/tourist"
);
const data = await response.json();
console.log(data.rating);
```

The service is hosted on Render, so the first request after a period of inactivity may take a little longer while the server wakes up.

> **Usage note:** Please avoid sharing this API widely or sending frequent repeated requests. All requests are forwarded from the same hosted server, so Codeforces or CodeChef may rate-limit or temporarily block that server if usage becomes too high.

## Find me online

- [GitHub](https://github.com/utkarsh-rwt)
- [LinkedIn](https://linkedin.com/in/utkarsh-rawat-68a409381)
- [X](https://x.com/debugomega)
- [Email](mailto:utkarshrawat209@gmail.com)

## Run it locally

```bash
cd frontend
npm install
npm run dev
```

The backend lives in [`backend/`](./backend) and can be run separately with:

```bash
cd backend
npm install
npm run dev
```
*Still learning, still building, and occasionally debugging something that worked five minutes ago.*
