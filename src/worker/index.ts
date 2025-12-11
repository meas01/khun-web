// /// <reference path="../../worker-configuration.d.ts" />
// import { Hono } from "hono";
// const app = new Hono<{ Bindings: Env }>();

// app.get("/api/", (c) => c.json({ name: "Cloudflare" }));

// export default app;
// ===========================================================================
/// <reference path="../../worker-configuration.d.ts" />

import { Hono } from "hono";

const app = new Hono<{ Bindings: Env }>();

// Projects data
const projects = [
  {
    id: "2wwqwqw",
    name: "Booking Rooms ផ្ទះខ្មែរ (Full-Stack)",
    description: "A web platform where users can book rooms day-by-day and pay securely using credit cards (Stripe) or KHQR (Bakong Merchant). Led the project as Team Leader.",
    tech: ["Laravel", "Vue.js", "Stripe", "KHQR", "Bakong API", "MySQL"]
  },
  {
    id: "idiiidsddw",
    name: "AI Online Shop",
    description: "E-commerce platform with AI-powered product recommendations and intelligent search features.",
    tech: ["Laravel", "AI/ML", "Vue.js", "MySQL"]
  },
  {
    id: "jdjdjdjjd",
    name: "Flipper Bird & Fun Canvas Projects",
    description: "Interactive game development and creative canvas-based web applications showcasing frontend skills.",
    tech: ["JavaScript", "HTML5 Canvas", "CSS3", "Game Development"]
  }
];
import image from "@/react-app/assets/image.png";
import image2 from "@/react-app/assets/RaksmeySean.jpg";
const projectsCard = [
   {
     "id": "",
    "title": "Booking Rooms ផ្ទះខ្មែរ (Full-Stack)",
    "description": "A web platform where users can book rooms day-by-day and pay securely using credit cards (Stripe) or KHQR (Bakong Merchant). Led the project as Team Leader.",
    "tags": ["Laravel", "Vue.js", "Stripe", "KHQR", "Bakong API", "MySQL"],
    "image": [image,image2],
    "link": "https://booking-rooms.example.com"
   }
]
app.get("/api/", (c) => c.json({ name: "Cloudflare" }));

// Projects API endpoint
app.get("/api/projects", (c) => c.json(projects));
// Project Cards API endpoint
app.get("/api/project-cards", (c) => c.json(projectsCard));

export default app;