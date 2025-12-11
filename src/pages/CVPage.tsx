import { Mail, Phone, Github, Linkedin, MapPin, Calendar, Briefcase, GraduationCap, Code, ExternalLink } from "lucide-react";
import profile from "@/react-app/assets/RaksmeySean.jpg";
import ProjectFetcher from "@/components/project/ProjectFetcher";

export default function CVPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-black p-8">
          <div className="flex items-center gap-6 mb-4">
            <img
              src={profile}
              alt="Sean Raksmey"
              className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <div>
              <h1 className="text-4xl font-bold mb-2">Sean Raksmey</h1>
              <p className="text-xl">Full Stack Developer & UI/UX Enthusiast</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>measreaksmey01@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+855 86 51 00 91</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Phnom Penh, Cambodia</span>
            </div>
            <a href="https://github.com/gitmeas02" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
              <Github size={16} />
              <span>github.com/seanraksmey</span>
            </a>
            <a href="https://www.linkedin.com/in/sean-raksmey-99118a272/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
              <Linkedin size={16} />
              <span>linkedin.com/in/sean-raksmey</span>
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-2">
          {/* Professional Summary */}
          <Section title="Professional Summary" icon={<Briefcase size={24} />}>
            <p className="text-gray-700 leading-relaxed">
              Dedicated Full Stack Developer with expertise in Laravel, Java Spring Boot, Vue.js, and modern web technologies. 
              Proven track record of delivering production-ready applications including school management systems, 
              e-commerce platforms, and payment-integrated booking systems. Skilled in both frontend and backend 
              development with strong database design capabilities. Experienced in leading development teams, 
              collaborating with stakeholders, and implementing secure payment solutions using Stripe and KHQR. 
              Passionate about creating scalable, user-friendly applications that solve real-world problems.
            </p>
          </Section>

          {/* Work Experience */}
          <Section title="Work Experience" icon={<Briefcase size={24} />}>
            <ExperienceItem
              title="Full-Stack Developer (Laravel + Vue)"
              company="RTC-BATTAMBANG - CAMAI"
              period="2023 - Present"
              location="Battambang, Cambodia"
              link="https://rtc-bb.camai.kh/"
              achievements={[
                "Developed a comprehensive School Management System using Laravel and Vue.js",
                "Implemented full-stack features including student enrollment, course management, and reporting",
                "Collaborated with stakeholders to deliver a production-ready educational platform",
                "Ensured responsive design and optimal user experience across devices"
              ]}
            />
            <ExperienceItem
              title="Freelancer - Tester & Developer"
              company="Codera"
              period="2023"
              location="Remote"
              link="https://codera.gic25.site/"
              achievements={[
                "Built a School Management System App for SALA.co (SALA TECH)",
              ]}
            />
            <ExperienceItem
              title="Backend Developer (Laravel)"
              company="School Project - Room Rental Platform"
              period="2023"
              location="Cambodia"
              achievements={[
                "Led backend development team for a room rental platform using Laravel Framework",
                "Designed and implemented database schemas for complex booking system",
                "Developed RESTful APIs for seamless frontend-backend integration",
                "Ensured data integrity and security best practices"
              ]}
            />
            <ExperienceItem
              title="Team Leader & Frontend Developer (Vue.js)"
              company="School Project - E-Commerce Website"
              period="2022 - 2023"
              location="Cambodia"
              achievements={[
                "Led student team to develop e-commerce site for electronics shop",
                "Implemented responsive UI components using Vue.js framework",
                "Coordinated team workflow and code reviews",
                "Delivered complete product catalog, shopping cart, and checkout features"
              ]}
            />
            <ExperienceItem
              title="IT Support"
              company="SEA Games 32nd"
              period="2022"
              location="Phnom Penh, Cambodia"
              achievements={[
                "Provided technical support during Southeast Asian Games 2022",
                "Ensured smooth operation of IT infrastructure for international sporting event",
                "Collaborated with international IT teams"
              ]}
            />
          </Section>

          {/* Education */}
          <Section title="Education" icon={<GraduationCap size={24} />}>
            <EducationItem
              degree="Bachelor of Science in Computer Science"
              school="Institute of Technology of Cambodia"
              period="2021 - present"
              details="Expected Graduation: 2025"
            //   details="Relevant Coursework: Data Structures, Algorithms, Database Systems, Web Development, Software Engineering, Cloud Computing, Mobile App Development, AI and Machine Learning, Computer Networks, Operating Systems, Cybersecurity, Human-Computer Interaction, Software Project Management, Distributed Systems, Computer Graphics, Theory of Computation"
            />
          </Section>

          {/* Technical Skills */}
          <Section title="Technical Skills" icon={<Code size={24}  />}>
            <div className="grid md:grid-cols-2 gap-4 ">
              <SkillCategory
                category="Frontend"
                skills={["Vue.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5/CSS3"]}
              />
              <SkillCategory
                category="Backend"
                skills={["Java", "Spring Boot", "Laravel", "PHP", "Node.js", "MySQL", "PostgreSQL", "REST APIs"]}
              />
              <SkillCategory
                category="Tools & Others"
                skills={["Git", "Docker", "Stripe", "KHQR", "Agile/Scrum", "Testing/QA"]}
              />
              <SkillCategory
                category="Design & Dev"
                skills={["UI/UX Design", "Responsive Design", "Database Design", "AI Integration"]}
              />
            </div>
          </Section>

          {/* Projects */}
          <Section title="Notable Projects" icon={<Code size={24} />}>
          <ProjectFetcher />
          </Section>

          {/* Languages */}
          <Section title="Languages" icon={<MapPin size={24} />}>
            <div className="flex flex-wrap gap-6">
              <div>
                <span className="font-semibold text-gray-800">Khmer:</span>
                <span className="text-gray-600 ml-2">Native</span>
              </div>
              <div>
                <span className="font-semibold text-gray-800">English:</span>
                <span className="text-gray-600 ml-2">Medium</span>
              </div>
           
            </div>
          </Section>
        </div>
      </div>

      {/* Print/Download Button */}
      <div className="max-w-4xl mx-auto mt-8 text-center">
        <button
          onClick={() => window.print()}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
        >
          Print / Save as PDF
        </button>
      </div>
    </div>
  );
}

// Section Component
function Section({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-blue-600">
        <span className="text-blue-600">{icon}</span>
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      </div>
      {children}
    </div>
  );
}

// Experience Item Component
function ExperienceItem({
  title,
  company,
  period,
  location,
  link,
  achievements
}: {
  title: string;
  company: string;
  period: string;
  location: string;
  link?: string;
  achievements: string[];
}) {
  return (
    <div className="mb-2 last:mb-0">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium hover:underline inline-flex items-center gap-1">
              {company}
              <ExternalLink size={14} />
            </a>
          ) : (
            <p className="text-blue-600 font-medium">{company}</p>
          )}
        </div>
        <div className="text-right text-sm text-gray-600">
          <div className="flex items-center gap-1 justify-end">
            <Calendar size={14} />
            <span>{period}</span>
          </div>
          <div className="flex items-center gap-1 justify-end mt-1">
            <MapPin size={14} />
            <span>{location}</span>
          </div>
        </div>
      </div>
      <ul className="space-y-2 mt-3">
        {achievements.map((achievement, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">•</span>
            <span className="text-gray-700">{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Education Item Component
function EducationItem({
  degree,
  school,
  period,
  details
}: {
  degree: string;
  school: string;
  period: string;
  details: string;
}) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{degree}</h3>
          <p className="text-blue-600 font-medium">{school}</p>
        </div>
        <div className="text-sm text-gray-600 flex items-center gap-1">
          <Calendar size={14} />
          <span>{period}</span>
        </div>
      </div>
      <p className="text-gray-700">{details ?? ''}</p>
    </div>
  );
}

// Skill Category Component
function SkillCategory({ category, skills }: { category: string; skills: string[] }) {
  return (
    <div>
      <h3 className="font-semibold text-gray-800 mb-1">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
