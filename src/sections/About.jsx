import { Code2, Users, Lightbulb, ShieldCheck, TrendingUp, Brain } from "lucide-react";

export const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "I write structured, maintainable code built on best practices and long-term scalability.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "I thrive in team environments where communication and shared knowledge drive better results.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "I explore new technologies and creative approaches to build smarter solutions.",
  },
  {
    icon: ShieldCheck,
    title: "Ownership",
    description:
      "I take responsibility for my work and follow tasks through with discipline and initiative.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Learning",
    description:
      "I constantly seek growth and actively improve my technical and personal skills.",
  },
  {
    icon: Brain,
    title: "Problem Solving",
    description:
      "I break down complex challenges into clear, structured, and actionable solutions.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-15 relative overflow-hidden ">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a passionate software engineering student with a strong
                interest in full-stack development and building systems that are
                both scalable and meaningful. My curiosity drives me to
                understand how things work beneath the surface, and I
                continuously challenge myself to grow through hands-on projects
                and real-world problem solving.
              </p>

              <p>
                I enjoy working across the full stack, from designing intuitive
                user interfaces to developing robust backend systems and
                structured architectures. As a curious, highly disciplined, and
                fast learner, I thrive in environments where I can quickly
                absorb new knowledge and apply it to create practical,
                well-structured solutions.
              </p>

              <p>
                What motivates me most is continuous growth. I actively seek new
                technologies, concepts, and perspectives, and I apply what I
                learn to build better solutions every day. Outside of coding, I
                maintain discipline through fitness, unwind by gaming and
                spending time with friends, and broaden my perspective through
                podcasts and lectures on technology, history, psychology,
                philosophy, and sociology.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to tackle complex challenges with discipline and
                curiosity, elevate the teams I work with, and continuously grow
                into a technical leader who builds scalable, impactful
                software."
              </p>
            </div>
          </div>
          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div 
                key={idx} 
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary"/>
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};
