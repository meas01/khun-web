// /// <reference path="../../worker-configuration.d.ts" />
// import { Hono } from "hono";
// const app = new Hono<{ Bindings: Env }>();

// app.get("/api/", (c) => c.json({ name: "Cloudflare" }));

// export default app;
// ===========================================================================
// or if you need the types to be globally available without explicit import in other files:
import '../../worker-configuration.d.ts';


import { Hono } from "hono";

const app = new Hono<{ Bindings: Env }>();

// Projects data
// const projects = [
//   {
//     id: "2wwqwqw",
//     name: "Booking Rooms ផ្ទះខ្មែរ",
//     description: "A web platform where users can book rooms day-by-day and pay securely using KHQR (Bakong Merchant). Led the project as Team Leader.",
//     tech: ["Laravel", "Vue.js","KHQR", "Bakong API", "MySQL"]
//   },
  
//   {
//     id: "jdjdjdjjd",
//     name: "Flipper Bird & Fun Canvas Projects",
//     description: "Interactive game development and creative canvas-based web applications showcasing frontend skills.",
//     tech: ["JavaScript", "HTML5 Canvas", "CSS3", "Game Development"]
//   }
// ];


// image for booking 
import home_page_booking from "@/react-app/assets/booking/home.png";
import login_booking from "@/react-app/assets/booking/login_booking.png";
// flow
import login_flow from "@/react-app/assets/flow/login.png";
import home_flow from "@/react-app/assets/flow/home_pageFlow.png";
import listing_flow from "@/react-app/assets/flow/listing_plant.png";
// sala
import noti from "@/react-app/assets/sala/notification.png";
import Listing_sala from "@/react-app/assets/sala/Listing.png";
import chat_sala from "@/react-app/assets/sala/chat.png";
import home_sala from "@/react-app/assets/sala/homePage.png";
import atten from "@/react-app/assets/sala/attentdance.png";
import ass from "@/react-app/assets/sala/assignment.png";
import holi from "@/react-app/assets/sala/holiday.png";

// ecommerce
import home_e from "@/react-app/assets/goodeal/homepage.png";
import listing_e from "@/react-app/assets/goodeal/listing.png";
// rtc
import rtc_overview from "@/react-app/assets/rtc/rtc.png";
import admin_rtc from "@/react-app/assets/rtc/admin.png";
// personal portfolio
import me from "@/react-app/assets/RaksmeySean.jpg"
// flipper bird
import shot from "@/react-app/assets/game/shoting.png";
import cube from "@/react-app/assets/game/cube.png";
import ForThreeD from "@/react-app/assets/game/43D.png";
import Box from "@/react-app/assets/game/box.png";

const projectsCard = [
   {
     "id": "",
    "title": "Booking Rooms ផ្ទះខ្មែរ",
    "description": "A web platform where users can book rooms day-by-day and pay securely using KHQR (Bakong Merchant). Led the project as Team Leader.",
    "tags": ["Laravel", "Vue.js", "KHQR", "Bakong API", "MySQL"],
    "image": [home_page_booking,login_booking],
    "link": "https://booking.khunmeas.site/"
   },
   {
     
     "id": "",
    "title": "Ecommerce Website",
    "description": "An e-commerce website for electronics shop.",
    "tags": ["Vue.js","Json Server","Tailwind","Spring Boot"],
    "image": [home_e,listing_e],
    "link": "https://khun-web.khunmeas.site"
   },
   {
     "id": "",
    "title": "RTC Battambong School Management",
    "description": "A website for a school management at BATTAMBONG",
    "tags": ["Vue.js","Laravel","Tailwind"],
    "image": [rtc_overview,admin_rtc],
    "link": "https://rtc-bb.camai.kh/en/admin/overview"
   },
    {
     "id": "",
    "title": "SALA Portal",
    "description": "The School Connection App. This platform makes it simple for students, teachers, and parents to talk to each other. It also helps students and teachers view their schedules easily, and lets parents track their child's class activities",
    "tags": ["Flutter","Riverpod"],
    "image": [noti,Listing_sala,chat_sala,home_sala, atten, ass, holi],
    "link": "https://youtu.be/lGylmA9vlvw?si=-nMYdrjyFv4LlWQc"
   },
   {
    "id": "",
    "title": "Flipper Bird & Fun Canvas Projects",
    "description": "A website game just for fun",
    "tags": ["HTML","CSS","Java Script"],
    "image": [shot,cube,ForThreeD,Box],
    "link": "https://youtu.be/eCJb04UrFGY?si=mGfnl-JUwY-eSyCT"
   },
    {
    "id": "",
    "title": "Personal Portfolio Website",
    "description": "My personal portfolio website to showcase my projects and skills.",
    "tags": ["React Js","TypeScript","Tailwind CSS","Vite","Spring boot" ],
    "image": [me],
    "link": "https://khun-web.khunmeas.site/"
   },
    {
    "id": "",
    "title": "Flow Website selling plants",
    "description": "School project website selling plants.",
    "tags": ["Flutter","Riverpod","Dummy Data"],
    "image": [login_flow,home_flow,listing_flow],
    "link": "https://youtube.com/shorts/jXR8wqhDpvs"
   },
  
]
app.get("/api/", (c) => c.json({ name: "Cloudflare" }));

// Projects API endpoint
// app.get("/api/projects", (c) => c.json(projects));
// Project Cards API endpoint
app.get("/api/project-cards", (c) => c.json(projectsCard));

export default app;