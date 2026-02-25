import { Github, ArrowUpRight } from "lucide-react";
import { AnimatedBotderButton } from "@/components/AnimatedBorderButton";

export const projects = [
  {
    title: "Lake Stratification Submarine",
    description:
      "An automated submarine system that measures oxygen levels, temperature, and depth in lakes, transmitting data wirelessly to a server for real-time visualization through a web client.",
    image: "/Submarine.png",
    tags: [
      "C++",
      "Raspberry Pi Zero W",
      "PSoC 5LP",
      "ESP8266",
      "REST API",
      "WebSocket",
      "SQLite",
      "Linux",
      "SPI",
      "I2C",
      "UART",
    ],
    link: "https://github.com/andr522g/BaseStation.Server.git",
    github: "https://github.com/andr522g/BaseStation.Server.git",
  },
  {
    title: "Climate Regulation System",
    description:
      "A smart climate control system that monitors and regulates temperature and humidity using sensors, microcontroller logic, and an intuitive graphical user interface.",
    image: "/KRS.png",
    tags: [
      "Embedded C",
      "PSoC 5LP",
      "Python",
      "Flask",
      "Flask-SocketIO",
      "HTML",
      "CSS",
      "JavaScript",
      "UART",
      "PID Control",
      "Sensor Integration",
    ],
    link: "#",
    github: "#",
  },
  {
    title: "Self Driving Mini Car",
    description:
      "An embedded-system-based electric vehicle capable of autonomously navigating a track using sensor detection, motor control, lighting systems, and integrated audio feedback.",
    image: "/Car.png",
    tags: [
      "C",
      "Arduino Mega 2560",
      "AVR",
      "PWM",
      "Interrupts",
      "UART",
      "Motor Control",
      "LED Control",
      "Embedded Systems",
    ],
    link: "#",
    github: "#",
  },
  {
    title: "Finance Tracker Application",
    description:
      "A full-stack web application for managing personal finances, featuring structured backend APIs, database integration, and interactive data visualization.",
    image: "/FinanceTracker.png",
    tags: [
      "C#",
      "ASP.NET Core",
      "Entity Framework Core",
      "SQL Server",
      "React",
      "TypeScript",
      "REST API",
      "JWT Authentication",
      "Azure",
    ],
    link: "https://github.com/a-chiha/FinanceTrackerBackend.git",
    github: "https://github.com/a-chiha/FinanceTrackerBackend.git",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-15 relative overflow-hidden ">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              i have learned from.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A collection of my projects that showcase my skills in embedded
            systems, full-stack development, and problem-solving. Each project
            reflects my passion for building meaningful solutions and my
            commitment to continuous learning.
          </p>
        </div>
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0
                bg-gradient-to-t from-card via-card/50
                to-transparent opacity-80"
                />
                {/*Overlay Links*/}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                      text-muted-foreground group-hover:text-primary 
                      group-hover:translate-x-1 
                      group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* View ALL Call To Action */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a href="https://github.com/andr522g">
            <AnimatedBotderButton>
              View All Projects
              <ArrowUpRight className="w-5 h-5" />          
            </AnimatedBotderButton>
          </a>
        </div>
      </div>
    </section>
  );
};
