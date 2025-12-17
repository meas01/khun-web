import '../../worker-configuration.d.ts';
import { Hono } from "hono";
const app = new Hono<{ Bindings: Env }>();

app.get("/api/", (c) => c.json({ name: "Cloudflare" }));

export default app;
// ===========================================================================
// or if you need the types to be globally available without explicit import in other files:
// import '../../worker-configuration.d.ts';


// import { Hono } from "hono";

// const app = new Hono<{ Bindings: Env }>();

// // Projects data
// const projects = [
//   {
//     id: "2wwqwqw",
//     name: "Booking Rooms ផ្ទះខ្មែរ (Full-Stack)",
//     description: "A web platform where users can book rooms day-by-day and pay securely using credit cards (Stripe) or KHQR (Bakong Merchant). Led the project as Team Leader.",
//     tech: ["Laravel", "Vue.js", "Stripe", "KHQR", "Bakong API", "MySQL"]
//   },
//   {
//     id: "idiiidsddw",
//     name: "AI Online Shop",
//     description: "E-commerce platform with AI-powered product recommendations and intelligent search features.",
//     tech: ["Laravel", "AI/ML", "Vue.js", "MySQL"]
//   },
//   {
//     id: "jdjdjdjjd",
//     name: "Flipper Bird & Fun Canvas Projects",
//     description: "Interactive game development and creative canvas-based web applications showcasing frontend skills.",
//     tech: ["JavaScript", "HTML5 Canvas", "CSS3", "Game Development"]
//   }
// ];
// import image from "@/react-app/assets/image.png";
// import image2 from "@/react-app/assets/RaksmeySean.jpg";
// import image3 from "@/react-app/assets/hono.svg";
// import image4 from "@/react-app/assets/Cloudflare_Logo.svg";
// import image5 from "@/react-app/assets/react.svg";
// const projectsCard = [
//    {
//      "id": "",
//     "title": "Booking Rooms ផ្ទះខ្មែរ (Full-Stack)",
//     "description": "A web platform where users can book rooms day-by-day and pay securely using credit cards (Stripe) or KHQR (Bakong Merchant). Led the project as Team Leader.",
//     "tags": ["Laravel", "Vue.js", "Stripe", "KHQR", "Bakong API", "MySQL"],
//     "image": [image,image2,image3,image4,image5],
//     "link": "https://booking.khunmeas.site/"
//    },
//    {
     
//      "id": "",
//     "title": "Goodeal (Ecommerce Website Fronend)",
//     "description": "An e-commerce website for electronics shop.",
//     "tags": ["Vue.js","Json Server"],
//     "image": [image,image2],
//     "link": "https://booking.khunmeas.site/"
//    },
//       {
//      "id": "",
//     "title": "RTC Battambong (Full-Stack)",
//     "description": "A website for a school management at BATTAMBONG",
//     "tags": ["Vue.js","Laravel","Tailwind"],
//     "image": [image,image2],
//     "link": "https://booking.khunmeas.site/"
//    },
//     {
//      "id": "",
//     "title": "SALA Portal",
//     "description": "The School Connection App. This platform makes it simple for students, teachers, and parents to talk to each other. It also helps students and teachers view their schedules easily, and lets parents track their child's class activities",
//     "tags": ["Flutter","Riverpod"],
//     "image": [image,image2],
//     "link": "https://booking.khunmeas.site/"
//    },
//    {
//     "id": "",
//     "title": "Flipper Bird",
//     "description": "A website game just for fun",
//     "tags": ["HTML","CSS","Java Script"],
//     "image": [image,image2],
//     "link": "https://booking.khunmeas.site/"
//    },
//      {
//     "id": "",
//     "title": "A Simple 2D, 3D",
//     "description": "Canva projects just for fun",
//     "tags": ["HTML","CSS","Java Script, Canva"],
//     "image": [image,image2],
//     "link": "https://booking.khunmeas.site/"
//    },
//     {
//     "id": "",
//     "title": "Personal Portfolio (JAVA Backend Spring Boot)",
//     "description": "My personal portfolio website to showcase my projects and skills.",
//     "tags": ["React Js","TypeScript","Tailwind CSS","Vite","Spring boot" ],
//     "image": [image,image2],
//     "link": "https://booking.khunmeas.site/"
//    },
//    {
//     "id": "",
//     "title": "AI Online Shop (Full Stack)",
//     "description": "My personal portfolio website to showcase my projects and skills.",
//     "tags": ["Nuxt","Nest","TypeScript","Tailwind CSS","Vite",],
//     "image": [image,image2],
//     "link": "https://booking.khunmeas.site/"
   
//    },
//    {
//     "id": "",
//     "title": "School Project CRUD spring boot",
//     "description": "A web application for managing products projects using Spring Boot and Thymeleaf.",
//     "tags": ["Spring Boot", "Thymeleaf","MySQL"],
//     "image": [image,image2],
//     "link": "https://booking.khunmeas.site/"
//    }
  
// ]
// app.get("/api/", (c) => c.json({ name: "Cloudflare" }));

// // Projects API endpoint
// app.get("/api/projects", (c) => c.json(projects));
// // Project Cards API endpoint
// app.get("/api/project-cards", (c) => c.json(projectsCard));

// export default app;