export const projects = [
  {
    title: "Lake Stratification Submarine",
    description:
      "An automated submarine system that measures oxygen levels, temperature, and depth in lakes, transmitting data wirelessly to a server for real-time visualization through a web client.",
    image: "/Submarine.png",
    tags: 
    [
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
      "UART"      
    ],
    link: "https://github.com/andr522g/BaseStation.Server.git",
    github: "https://github.com/andr522g/BaseStation.Server.git"
  },
  {
    title: "Climate Regulation System",
    description:
      "A smart climate control system that monitors and regulates temperature and humidity using sensors, microcontroller logic, and an intuitive graphical user interface.",
    image: "/KRS.png",
    tags: 
    [
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
      "Sensor Integration"
    ],
    link: "#",
    github: "#"  
  },
  {
    title: "Self Driving Mini Car",
    description:
      "An embedded-system-based electric vehicle capable of autonomously navigating a track using sensor detection, motor control, lighting systems, and integrated audio feedback.",
    image: "/MiniCar.png",
    tags: 
    [
      "C",
      "Arduino Mega 2560",
      "AVR",
      "PWM",
      "Interrupts",
      "UART",
      "Motor Control",
      "LED Control",
      "Embedded Systems"
    ],
    link: "#",
    github: "#"
  },
  {
    title: "Finance Tracker Application",
    description:
      "A full-stack web application for managing personal finances, featuring structured backend APIs, database integration, and interactive data visualization.",
    image: "/FinanceTracker.png",
    tags: 
    [
      "C#",
      "ASP.NET Core",
      "Entity Framework Core",
      "SQL Server",
      "React",
      "TypeScript",
      "REST API",
      "JWT Authentication",
      "Azure"
    ],
    link: "https://github.com/a-chiha/FinanceTrackerBackend.git",
    github: "https://github.com/a-chiha/FinanceTrackerBackend.git"
  },
];

export const Projects = () => {
  return <section></section>;
};
