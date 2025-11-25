/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Syed Ahmed Iqbal",
  title: "Hi all, I'm Ahmed",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/iqbal-devpy",
  linkedin: "www.linkedin.com/in/syed-ahmed-iqbal",
  gmail: "dev.iqbal3@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Superior University",
      logo: require("./assets/images/su.png"),
      subHeader: "Bachelor of Science in Artificial Intelligence", 
      duration: "September 2022 - April 2026",
      desc: "Made countless projects on Artificial Intelligence, Machine Learning, Deep Learning, Data Science, Data Analysis, Computer Vision, Natural Language Processing, ...",
      // descBullets: [
        // "Worked with a team to make ai interview bot that conducts interviews using multiple ML models"
      // ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Machine Learning", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Node.js",
      progressPercentage: "75%"
    },
    {
      Stack: "React.js",
      progressPercentage: "75%"
    },
    {
      Stack: "Python",
      progressPercentage: "87%"
    },
      {
      Stack: "PostgreSQL",
      progressPercentage: "87%"
    },
     {
      Stack: "FastAPI",
      progressPercentage: " 80%"
     },
      {
      Stack: "Docker",
      progressPercentage: " 60%"
     },
     {
      Stack: "AWS",
      progressPercentage: " 70%"
     }

  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "AI Developer",
      company: "Forrentech",
      companylogo: require("./assets/images/forrentech.png"),
      date: "April 2025 - Present | Lahore, Pakistan",
      desc: "Served as Lead Developer in a 3-member team for an AI-powered property listing application that auto-generates listings from uploaded property images.",
      descBullets: [
        "Engineered a robust backend using Node.js (Express 5) with a 3-layer architecture, leveraging Prisma ORM and PostgreSQL for clean, scalable data flow and modular structure.",
        "Built a performant Vite + React frontend with seamless social media integration and export-to-portal features, enhancing listing visibility and marketing automation.",
        "Deployed the system via Docker, using Heroku for staging and AWS for production, ensuring a smooth CI/CD pipeline.",
        "Optimized AI image processing and API workflows, improving generation speed by 35% and reducing API costs by over 60% through streamlined requests and efficient caching."


      ]
    },
    {
      role: "Chatbot Developer",
      company: "Optivex Solutions",
      companylogo: require("./assets/images/optivex.jpeg"),
      date: "May 2024 - March 2025 | Lahore, Pakistan",
      desc: "Served as Associate Developer for a medical AI chatbot that provides real-time assistance and emergency response guidance through intelligent conversational flows.",
      descBullets: [
        "Developed multiple conversational and knowledge-based chatbots, significantly enhancing user engagement.",
        "Utilized MySQL for structured data management and user interaction logging, supporting reliable and scalable chatbot analytics.",
        "Deployed the system on Railway, achieving high availability and smooth CI/CD pipelines for continuous delivery.",
        "Optimized the response pipeline to deliver 100–500 ms response times, ensuring rapid guidance during medical emergencies"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PRODUCTS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/realestic.png"),
      projectName: "Realistic AI",
      projectDesc: "An End-to-End AI Application that generates complete property listings from just images",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://realestic-b06386cfd83b.herokuapp.com/"
        }
        //  you can add extra buttons here.
      ]
    },

    {
      image: require("./assets/images/realestic.png"),
      projectName: "patient readmission prediction",
      projectDesc: "This project predicts patient readmission risks within 30 days using a 1-million-row synthetic dataset generated by Synthea",
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: "https://realestic-b06386cfd83b.herokuapp.com/"
        // }
        //  you can add extra buttons here.
      ]
    },

    {
      image: require("./assets/images/realestic.png"),
      projectName: "Omani Therapist",
      projectDesc: "Real-Time Omani Therapist Voice Chatbot",
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: "https://realestic-b06386cfd83b.herokuapp.com/"
        // }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AI Engineer for Data Scientists (Associate)",
      // subtitle:
      //   "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/datacamp.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1h8iuBi5n4j1hOyokqeRCAX8hsifL1_bI/view?usp=sharing"
        }
      ]
    },
    {
      title: "Cloud Computing Certification",
      // subtitle:
      //   "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/den.png"),
      imageAlt: "Digital Empowerment Network Logo",
      footerLink: [
        {
          name: "Cloud Computing Certification",
          url: "https://drive.google.com/file/d/1TQIy3DBjq2GXwZuBDZFRAtV_jmzjqG4e/view?usp=sharing"
        }
      ]
    },

    {
      title: "Machine Learning Certification",
      // subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/den.png"),
      imageAlt: "Digital Empowerment Network Logo",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/13N4oN_kpR6Sw_U0UMoxDb7O6mqVITOMa/view?usp=sharing"},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3099017220",
  email_address: "dev.iqbal3@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
