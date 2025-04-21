import { GitHubIcon, LinkedInIcon, InstagramIcon } from "../components/icons";

export const RESUME_DATA = {
  name: "Sourabh Gurwani",
  location: "Chhattisgarh",

  about:
    "Motivated full stack developer with a strong track record of successfully completing various projects. Proficient in various programming languages and technologies, including C, C++, and web development technologies (HTML, CSS, JavaScript). Skilled in full-stack web development using the MERN stack, building responsive user interfaces, and integrating RESTful APIs. Strong problem-solving abilities and a solid understanding of software development principles. Committed to continuous learning and delivering high-quality solutions. Ready to contribute expertise to new challenges.",
  summary:
    "Ever since I wrote my first few lines of code, I knew I wanted to build things that actually make an impact. From creating simple games in C++ to developing complete full-stack projects using the MERN stack, my journey as a software developer has been full of curiosity, self-learning, and building real-world solutions. I’ve always been drawn to solving problems through logic and design—whether it’s designing a job portal to bridge the gap between students and opportunities or building responsive web apps with clean, functional user interfaces.",
  avatarUrl: "./me.png",

  contact: {
    email: "sonusourabh2411@gmail.com",
    tel: "9109494579",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/SourabhGurwani",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sourabhgurwani/",
        icon: LinkedInIcon,
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/_.iamsourabh/",
        icon: InstagramIcon,
      },
    ],
  },
  education: [
    {
      school: "Lovely Professional University",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      start: "2022",
      end: "present",
    },
    {
      school: "Physics Wallah(E-Learning)",
      degree: "Jee Mains",
      start: "2021",
      end: "2022",
    },
    {
      school: "Vivekanand Higher Secondary School",
      degree: "Intermediate Education in Science (PCM)",
      start: "2020",
      end: "2021",
    },
    // {
    //   school: "Aryan International Academy",
    //   degree: "Senior",
    //   start: "2018",
    //   end: "2019",
    // },
  ],
  skills: [
    "C",
    "C++",
    "Html",
    "Tailwind Css",
    "JavaScript",
    "React",
    "Node.js",
    "Git",
    "Data Structures and Algorithms",
    "OOP",
    "DBMS",
    "Operating Systems"
  ],

  projects: [
    {
      title: "Weather-Dashboard",
      techStack: ["React", "Html", "Css"],
      description:
        "A responsive web app that provides real-time weather updates and forecasts using the OpenWeatherMap API.",
      link: {
        label: "https://github.com/Raghavgupta2003",
        href: "https://weather-app-a2tg.vercel.app/",
      },
    },
    // {
    //   title: "Car-Rental-System",
    //   techStack: ["Html", "Css", "JavaScript"],
    //   description: "A web-based Car Rental System that allows users to browse, book, and manage vehicle rentals with ease.",

    //   link: {
    //     label: "github.com",
    //     href: "https://website-of-car-rental-system.vercel.app/",
    //   },
    // },
    // {
    //   title: "Rock-Paper-Scissor Game",
    //   techStack: ["Docker", "Nginx", "mariaDb", "Wordpress"],
    //   description:
    //     "A fun and interactive Rock-Paper-Scissors game built for quick play and instant results.",
    //   link: {
    //     label: "github.com",
    //     href: "https://rock-paper-scissor-game-zeta-navy.vercel.app/",
    //   },
    // },
    {
      title: "Lazeej",
      techStack: ["Html", "Css", "JavaScript","React"],
      description:
      "A quirky and engaging food ordering website offering daily meals with a fun twist — *Ab Baabu Bhi Roj Khana Khayega!",
      link: {
        label: "github.com",
        href: "https://github.com/SourabhGurwani/Lazeej-Restaurant-",
      },
    },
    // {
    //   title: "Pipeline Data Visualization Dashboard",
    //   techStack: ["React"],
    //   description:
    //   "An interactive dashboard for visualizing pipeline data with stage-wise insights using dynamic charts and tables.",
    //   link: {
    //     label: "github.com",
    //     href: "https://skygeni-assignment-five.vercel.app/",
    //   },
    // },
    {
      title: "Naukari Paao",
      techStack: ["MERN", "React"],
      description: "Currently working on a system where employer can post jobs as well as job seeker can apply for available jobs.",
      link: {
        label: "github.com",
        href: "https://github.com/SourabhGurwani/Naukari_Palo",
      },
    },
  ],

  // experience: [
  //   {
  //     company: "Im'enSe",
  //     position: "Frontend Developer",
  //     logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQGwBEMaD6MB4Q/company-logo_200_200/company-logo_200_200/0/1670258446221?e=1749686400&v=beta&t=ke4p83O45mws8hx8rE5qkaD8KH5-aI1hPa6gesmqx_U',
  //     location: "Tangier, Morocco",
  //     startDate: "Aug 2024",
  //     endDate: "Present",
  //     description:
  //       "Working on front-end development projects for clients in the QHSE sector, focusing on secure, scalable web applications.",
  //     skills: [
  //       "React",
  //       "TypeScript",
  //       "Redux",
  //       "Node.js",
  //       "Jira",
  //       "Agile",
  //       "Git",
  //       "CI/CD",
  //       "REST APIs",
  //     ],
  //     achievements: [
  //       "Collaborated with cross-functional teams to deliver projects on time",
  //       "Contributed to the development of a secure authentication system",
  //       "Conducted code reviews and provided constructive feedback to peers",
  //       "Participated in the design and architecture of a new web application",
  //       "Worked closely with UX/UI designers to implement user-friendly interfaces",
  //       "Contributed to the development of a reusable component library",
  //       "Participated in the migration of a legacy application to a modern tech stack",
  //       "Worked on a project that reduced page load time by 50%",
  //       "Participated in the development of a web application that supports multiple languages",
  //       "Worked on a project that improved accessibility for users with disabilities",
  //       "Worked on a project that improved SEO performance by 30%",
  //       "Participated in the development of a web application that integrates with third-party APIs",
  //       "Worked on a project that improved data visualization for users",
  //     ],
  //   },
  // ],
} as const;
