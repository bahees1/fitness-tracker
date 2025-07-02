## Personal Fitness Tracker

A responsive React web app that helps users monitor and manage their walking, running, and workout activity in one place. Users can add custom goals, log progress, and instantly see their stats updated on a dynamic chart. The app stores all data locally, so everything is saved even after refresh — no login required. With real-time editing, visual feedback, and a clean UI, it's a powerful yet lightweight tool for staying accountable and tracking fitness habits over time.

## Project Screen Shot(s)
Main Dashboard:
![image](https://github.com/user-attachments/assets/db4d4a1f-bd93-4381-9101-5e7e980018f7)


Edit Activity Page:
![image](https://github.com/user-attachments/assets/afb5a7b7-272f-4173-8b2e-12923c9640f6)




## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

*Cd into the repo*

Installation:

`npm install`  

To Start Server:

`npm start`  

To Visit App:

`localhost:3000/`  

## Reflection

This was a solo side project I built to strengthen my frontend development skills while preparing for software developer co-op and internship roles. My goal was to create a fully functional, responsive fitness dashboard that mimics a real-world product, focusing on CRUD interactions, persistent data, and visual feedback — all while using modern React practices.

I set out to build a fitness tracking app where users could log activities (walking, running, workouts), visualize their progress, and manage their goals over time. I wanted the app to feel polished and feature-rich, with inline editing, icon-based activity types, and a clean dashboard layout. The more I worked on it, the more it evolved into a full-scale SPA with dynamic charting, data persistence, and component reuse.

This project became a strong learning experience because I tackled many practical frontend problems: state syncing between pages, designing reusable logic for icon rendering, persisting complex data using localStorage, and dynamically visualizing user data with Chart.js. One particularly tricky issue was that I couldn’t directly store JSX like <FaWalking /> in state due to serialization errors — I had to refactor my design to store icon names as strings and use a helper component (getIconByName) to map them back to display icons. I also encountered issues with stale useState copies, broken layout rendering due to CSS scoping, and improper rerenders when editing or completing activities — each bug pushing me to learn more about React’s update cycle, key usage, and component design.

Unexpected challenges included maintaining consistent state across multiple components (ActivityCards, EditActivityCards, and Overview), and ensuring user actions like adding or completing an activity dynamically updated the dashboard view. I also had to troubleshoot localStorage parsing bugs, race conditions during rerender, and redesign parts of my component hierarchy to avoid prop drilling and ensure scalability.

I chose to build this with React and react-router-dom to simulate the structure of real-world SPAs, along with Chart.js via react-chartjs-2 for fast, interactive data visualization. I avoided larger frameworks like Redux because the app’s scope was perfect for React’s local state + context patterns. For icons, I used react-icons with FontAwesome and implemented a smart mapping layer for rendering, which added flexibility and kept bundle size optimized. Styling was done via plain CSS modules to keep control over layout and responsive design.

At the end of the project, I not only gained confidence in working with complex React state, but also walked away with a much deeper understanding of user experience design, component isolation, and state persistence in modern frontend apps. My next step would be to integrate Firebase or a backend database to support multi-user authentication and data syncing across sessions.
