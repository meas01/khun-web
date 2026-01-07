import { Link } from "react-router-dom";
import { useState, lazy, Suspense } from "react";
import { ClipLoader } from "react-spinners";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import profile from "@/react-app/assets/RaksmeySean.jpg";
import {
  Github,
  Linkedin,
  Mail,
  // Code2,
  // Palette,
  // Smartphone,
  FileText,
  Menu,
  X,
} from "lucide-react";
import ProjectFetcher from "@/components/project/ProjectFetcher";
import SkillListing from "@/components/skills/SkillListing";

// Lazy load the ProjectCardList component
const ProjectCardList = lazy(() => import("@/components/project/ProjectCardList"));

export default function MainPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* ================= NAV ================= */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            SEAN RAKSMEY
          </h1>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {["about", "skills", "projects", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}

            <Link
              to="https://drive.google.com/file/d/1fBxUtO6WshxTErueY6ivzIvJ3Pda7l3r/view?usp=sharing"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              CV
            </Link>

            <Link
              to="/users"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Dashboard
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-700"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-white border-t px-6 py-4 space-y-4">
            {["about", "skills", "projects", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setOpen(false)}
                className="block text-gray-700 hover:text-blue-600"
              >
                {item}
              </a>
            ))}
            <Link to="/users" className="block font-medium text-blue-600">
              Dashboard
            </Link>
          </div>
        )}
      </nav>

      {/* ================= HERO ================= */}
      <section className="pt-28 sm:pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm">
              Welcome to my portfolio
            </span>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text ">
                Sean Raksmey
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
              Full Stack Developer specializing in modern, scalable, and
              user-focused web applications.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
              >
                Get In Touch
              </a>

              <a
                href="#projects"
                className="px-6 py-3 border border-gray-300 rounded-lg hover:border-blue-600 hover:text-blue-600 transition"
              >
                View Projects
              </a>

              <Link
                to="https://drive.google.com/file/d/1fBxUtO6WshxTErueY6ivzIvJ3Pda7l3r/view?usp=sharing"
                className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition inline-flex items-center justify-center gap-2"
              >
                <FileText size={18} /> View CV
              </Link>
            </div>

            {/* Socials */}
            <div className="flex justify-center lg:justify-start gap-4 pt-4">
              <a href="https://github.com/gitmeas02">
                <Github />
              </a>
              <a href="https://linkedin.com/in/sean-raksmey-99118a272/">
                <Linkedin />
              </a>
              <a href="mailto:measreaksmey01@gmail.com">
                <Mail />
              </a>
            </div>
          </div>

          {/* Profile */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 blur-3xl opacity-30 rounded-full"></div>
              <img
                src={profile}
                alt="Sean Raksmey"
                className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover border-8 border-white shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      {/* ================= PROJECTS ================= */}
    <section id="projects" className="py-20 px-6">
  <div className="max-w-7xl mx-auto">

    {/* Title Section */}
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">
        My Projects
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        A selection of projects showcasing my skills in full-stack
        development, frontend design, and backend architecture.
      </p>
    </div>

    {/* Grid Section */}
<div className="grid auto-rows-fr grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <Suspense fallback={
        <div className="col-span-full flex items-center justify-center py-12">
          <ClipLoader color="#3B82F6" size={50} />
        </div>
      }>
        <ProjectCardList />
      </Suspense>
    </div>

  </div>
  {/*  ================= TCHNOLOGY =================   */}
  <section id="skills" className="">
    <SkillListing />
  </section>
</section>
      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="py-20 px-6 bg-gradient-to-br from-blue-600 to-purple-600 text-white"
      >
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Let’s Work Together
          </h2>
          <p className="opacity-90">
            Open for freelance, full-time, and collaboration opportunities.
          </p>
          <a
            href="mailto:measreaksmey01@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-medium hover:shadow-xl transition"
          >
            <Mail size={18} /> Get In Touch
          </a>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-900 py-8 text-center text-gray-400 text-sm">
        © 2025 Sean Raksmey. All rights reserved.
      </footer>

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

// function SkillCard({ icon, title, skills }: { icon: React.ReactNode; title: string; skills: string[] }) {
//   return (
//     <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition border border-gray-100">
//       <div className="text-blue-600 mb-4">{icon}</div>
//       <h3 className="text-xl font-bold mb-4 text-gray-900">{title}</h3>
//       <ul className="space-y-2">
//         {skills.map((skill) => (
//           <li key={skill} className="text-gray-600 flex items-center gap-2">
//             <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
//             {skill}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
