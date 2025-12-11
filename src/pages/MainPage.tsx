import { Link } from "react-router-dom";
import profile from "@/react-app/assets/RaksmeySean.jpg";
import { Github, Linkedin, Mail, Code2, Palette, Smartphone, FileText } from "lucide-react";
import ProjectCardList from "@/components/project/ProjectCardList";
export default function MainPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            SEAN RAKSMEY
          </h1>
          <div className="flex gap-6 items-center">
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition">About</a>
            <a href="#skills" className="text-gray-700 hover:text-blue-600 transition">Skills</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600 transition">Projects</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
            <Link to="https://drive.google.com/file/d/18RST1vRvmPktnVa2q6dNP15y95MWJYT1/view?usp=sharing" className="text-gray-700 hover:text-blue-600 transition">CV</Link>
            <Link to="/users" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Dashboard
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              Welcome to my portfolio
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Hi, I'm Sean Raksmey<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Sean Raksmey</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Full Stack Developer specializing in building exceptional digital experiences.
            </p>
            <div className="flex gap-4">
              <a href="#contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium">
                Get In Touch
              </a>
              <a href="#projects" className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition font-medium">
                View Projects
              </a>
              <Link to="https://drive.google.com/file/d/18RST1vRvmPktnVa2q6dNP15y95MWJYT1/view?usp=sharing" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-medium inline-flex items-center gap-2">
                <FileText size={20} />
                View My CV
              </Link>
            </div>
            <div className="flex gap-4 pt-4">
              <a href="https://github.com/gitmeas02" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-600 hover:text-blue-600 transition">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/sean-raksmey-99118a272/" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-600 hover:text-blue-600 transition">
                <Linkedin size={24} />
              </a>
              <a href="mailto:measreaksmey01@gmail.com" className="p-2 text-gray-600 hover:text-blue-600 transition">
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl opacity-30"></div>
              <img
                src={profile}
                alt="Sean Raksmey"
                className="relative w-80 h-80 rounded-full object-cover shadow-2xl border-8 border-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">About Me</h2>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a passionate developer with expertise in modern web technologies. I love creating beautiful, 
              functional, and user-friendly applications that solve real-world problems.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With experience in React, TypeScript, Node.js, and modern UI frameworks, I bring ideas to life 
              through clean code and thoughtful design.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Skills & Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <SkillCard
              icon={<Code2 size={40} />}
              title="Frontend Development"
              skills={["React", "TypeScript", "Tailwind CSS", "Vue.js", "Next.js"]}
            />
            <SkillCard
              icon={<Palette size={40} />}
              title="UI/UX Design"
              skills={["Figma","Responsive Design", "User Research"]}
            />
            <SkillCard
              icon={<Smartphone size={40} />}
              title="Backend & Tools"
              skills={["Node.js","Spring Boot", "Java", "PostgreSQL", "Git", "REST APIs"]}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCardList />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl mb-8 opacity-90">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <a
            href="mailto:measreaksmey01@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg hover:shadow-2xl transition font-medium text-lg"
          >
            <Mail size={20} />
            Get In Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Sean Raksmey. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function SkillCard({ icon, title, skills }: { icon: React.ReactNode; title: string; skills: string[] }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition border border-gray-100">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-4 text-gray-900">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill) => (
          <li key={skill} className="text-gray-600 flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
