import { getYearsSince } from "./utils";

type NavOption = {
  label: string;
  href: string;
};

export type StageProgress = "IN_PROGRESS" | "PLANNING";

export const navOptions: NavOption[] = [
  { label: "Home", href: "/" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export enum BadgeLevel {
  Beginner = "Beginner",
  Novice = "Novice",
  Competent = "Competent",
  Proficient = "Proficient",
  Skilled = "Skilled",
  Intermediate = "Intermediate",
  Advanced = "Advanced",
}

export const rings = [
  {
    ring: "ring-green-500",
    bg: "bg-green-500",
    border: "border-green-500",
  },
  {
    ring: "ring-indigo-500",
    bg: "bg-indigo-500",
    border: "border-indigo-500",
  },
  {
    ring: "ring-pink-500",
    bg: "bg-pink-500",
    border: "border-pink-500",
  },
  {
    ring: "ring-yellow-500",
    bg: "bg-yellow-500",
    border: "border-yellow-500",
  },
  {
    ring: "ring-blue-500",
    bg: "bg-blue-500",
    border: "border-blue-500",
  },
  {
    ring: "ring-slate-500",
    bg: "bg-slate-500",
    border: "border-slate-500",
  },
];

type Experience = {
  avatarUrl: string;
  avatarFallback: string;
  title: string;
  subtitle?: string;
  body: string | React.ReactNode;
  techStack?: string;
  stage?: StageProgress;
  linkBtnUrl?: string;
  date?: string | React.ReactNode;
};

export const experiences: Experience[] = [
  {
    avatarUrl:
      "https://www.abra-it.com/wp-content/uploads/2021/12/logo-big.svg",
    avatarFallback: "Abra",
    title: "Abra",
    subtitle: "R&D Solutions",
    date: (
      <div className="text-opacity-90 flex flex-col text-zinc-600 text-sm">
        June 2024 - PRESENT
        <span>{getYearsSince("2024")} Yrs+</span>
      </div>
    ),
    body: (
      <div>
        Working as a <span className="font-bold italic">Junior Developer</span>.
        <br /> Developing a{" "}
        <span className="font-bold italic">
          C# automation testing framework
        </span>{" "}
        for integration into CI pipelines across microservices repositories.
      </div>
    ),
    techStack: "C# .NET, React, Playwright, Docker ...",
    linkBtnUrl: "https://www.abra-it.com/en/",
  },
  {
    avatarUrl: "https://asset.brandfetch.io/idxr5j_t0u/idumxcM-s7.svg",
    avatarFallback: "Fireblocks",
    title: "Fireblocks",
    subtitle: "Digital asset security company",
    date: (
      <div className="text-opacity-90 flex flex-col text-zinc-600 text-sm">
        January 2022 - June 2024
        <span>{getYearsSince("2022")} Yrs+</span>
      </div>
    ),
    body: (
      <div>
        Worked as a{" "}
        <span className="font-bold italic">Technical Support Engineer</span> &
        Contributed as a{" "}
        <span className="font-bold italic">Full-stack Engineer</span> in the
        support department.
      </div>
    ),
    techStack:
      "React.JS, Node.JS,Typescript, Tailwind, tRPC, SQL, Prisma, Zustand, Zod ...",
    linkBtnUrl: "https://www.fireblocks.com/",
  },
  {
    avatarUrl: "https://cdn-icons-png.flaticon.com/512/763/763812.png",
    avatarFallback: "Sport",
    title: "TERRA",
    subtitle: "Sport court rental application",
    body: (
      <div>
        Developed a dynamic sports court rental app as part of my final
        graduation project.
        <br />
        Users could rent and also publish a court which can be rented by others.
        <br />
        <span className="font-semibold italic">
          Utilized Expo framework for real time notifications
        </span>
      </div>
    ),
    techStack:
      "React Native, Redux, Expo, Node.JS, Express, AWS S3, MongoDB, Mongoose",
    linkBtnUrl: "https://github.com/tomersf/TERRA-public",
  },
  {
    avatarUrl: "https://cdn-icons-png.flaticon.com/512/5680/5680036.png",
    avatarFallback: "DevOps",
    title: "DevOps Bootcamp",
    body: (
      <div>
        Participated in a DevOps bootcamp led by{" "}
        <span className="font-semibold italic">Bynet Data Communications</span>{" "}
        where I was taught the fundametals of the field
      </div>
    ),
    techStack:
      "Shell Scripting, Linux, Python, Jenkins, Docker, Kubernetes, Ansible, Terraform, AWS EC2 / EKS / ECR",
    linkBtnUrl: "https://github.com/tomersf/DevOpsBootcamp",
  },
  {
    avatarUrl: "https://cdn-icons-png.flaticon.com/512/15484/15484303.png",
    avatarFallback: "Node",
    title: "Node.js Microservice",
    body: "An events ticket ordering application with a microservice architecture",
    techStack:
      "Node.js, Express, Typescript, MongoDB, Mongoose, Nginx, Docker, NATS Streaming, Kubernetes",
    stage: "IN_PROGRESS",
    linkBtnUrl: "https://github.com/tomersf/microJS",
  },
  {
    avatarUrl: "https://cdn-icons-png.flaticon.com/512/281/281089.png",
    avatarFallback: "Portfolio",
    title: "Personal Portfolio",
    body: "My portfolio website that you are currently viewing!",
    techStack: "Next.js, Tailwind, Typescript, Framer-Motion",
    linkBtnUrl: "https://github.com/tomersf/portfolio",
  },
  {
    avatarUrl: "https://cdn-icons-png.flaticon.com/512/2371/2371353.png",
    avatarFallback: "AML",
    title: "American Medical Laboratories",
    body: (
      <div>
        Worked as a research assistant in a medical laboratory.
        <br />
        Developed an internal{" "}
        <span className="font-semibold italic">C# application</span> for
        producing Covid-19 PDF files for our patients.
      </div>
    ),
    techStack: "C#",
    linkBtnUrl: "https://www.aml.co.il/en/",
  },
  {
    avatarUrl: "https://cdn-icons-png.flaticon.com/512/2111/2111432.png",
    avatarFallback: "Github",
    title: "Github Repository",
    subtitle: "Person projects",
    body: "Just some personal projects on my github that I have been doing along the years",
    linkBtnUrl: "https://github.com/tomersf",
  },
  {
    avatarUrl: "https://cdn-icons-png.flaticon.com/512/1198/1198314.png",
    avatarFallback: "SportHub",
    title: "SportHub",
    subtitle: "Platform for sport events matchmaking with other people",
    body: `Ever wanted to go do a sport activity and didn't have any partner?
         With SportHub you can find partners in your area.`,
    techStack: "Next.js, Node, Golang, Python, C#, Kubernetes",
    stage: "PLANNING",
  },
];

export type InnerSkill = {
  name: string;
  level: BadgeLevel;
  url: string;
};

export type Skill = {
  title: string;
  badge: {
    avatarUrl: string;
    avatarFallback: string;
  };
  skills: InnerSkill[];
};

export type SkillMap = Record<"frontend" | "backend" | "devops", Skill>;

export const skills: SkillMap = {
  frontend: {
    title: "Frontend",
    badge: {
      avatarUrl: "https://cdn-icons-png.flaticon.com/512/6211/6211957.png",
      avatarFallback: "FE",
    },
    skills: [
      {
        name: "Javascript",
        level: BadgeLevel.Intermediate,
        url: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
      },
      {
        name: "React.js",
        level: BadgeLevel.Intermediate,
        url: "https://cdn-icons-png.flaticon.com/512/10826/10826338.png",
      },
      {
        name: "HTML",
        level: BadgeLevel.Intermediate,
        url: "https://cdn-icons-png.flaticon.com/512/174/174854.png",
      },
      {
        name: "Next.js",
        level: BadgeLevel.Skilled,
        url: "https://cdn-icons-png.flaticon.com/512/481/481058.png",
      },
      {
        name: "CSS",
        level: BadgeLevel.Skilled,
        url: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
      },
      {
        name: "React Native",
        level: BadgeLevel.Proficient,
        url: "https://cdn-icons-png.flaticon.com/512/3081/3081530.png",
      },

      {
        name: "Tailwind",
        level: BadgeLevel.Proficient,
        url: "https://cdn-icons-png.flaticon.com/128/2011/2011448.png",
      },
    ],
  },
  backend: {
    title: "Backend",
    badge: {
      avatarUrl: "https://cdn-icons-png.flaticon.com/512/6213/6213731.png",
      avatarFallback: "BE",
    },
    skills: [
      {
        name: "Node.js",
        level: BadgeLevel.Intermediate,
        url: "https://cdn-icons-png.flaticon.com/512/15484/15484303.png",
      },
      {
        name: "C#",
        level: BadgeLevel.Intermediate,
        url: "https://cdn-icons-png.flaticon.com/512/6132/6132221.png",
      },
      {
        name: "SQL",
        level: BadgeLevel.Skilled,
        url: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
      },
      {
        name: "Python",
        level: BadgeLevel.Skilled,
        url: "https://cdn-icons-png.flaticon.com/512/3098/3098090.png",
      },
      {
        name: "Golang",
        level: BadgeLevel.Proficient,
        url: "https://cdn-icons-png.flaticon.com/512/919/919838.png",
      },
      {
        name: "MongoDB",
        level: BadgeLevel.Proficient,
        url: "https://cdn-icons-png.flaticon.com/512/188/188333.png",
      },
    ],
  },
  devops: {
    title: "DevOps & Misc",
    badge: {
      avatarUrl: "https://cdn-icons-png.flaticon.com/512/6419/6419097.png",
      avatarFallback: "Dev",
    },
    skills: [
      {
        name: "Typescript",
        level: BadgeLevel.Intermediate,
        url: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
      },
      {
        name: "Docker",
        level: BadgeLevel.Intermediate,
        url: "https://cdn-icons-png.flaticon.com/128/919/919853.png",
      },
      {
        name: "Kubernetes",
        level: BadgeLevel.Proficient,
        url: "https://cdn-icons-png.flaticon.com/512/5100/5100490.png",
      },
      {
        name: "Git",
        level: BadgeLevel.Proficient,
        url: "https://cdn-icons-png.flaticon.com/512/15466/15466163.png",
      },
      {
        name: "Terraform",
        level: BadgeLevel.Proficient,
        url: "https://cdn-icons-png.flaticon.com/512/11861/11861447.png",
      },
      {
        name: "Ansible",
        level: BadgeLevel.Proficient,
        url: "https://cdn-icons-png.flaticon.com/512/9791/9791538.png",
      },
      {
        name: "Linux",
        level: BadgeLevel.Proficient,
        url: "https://cdn-icons-png.flaticon.com/512/25/25719.png",
      },
    ],
  },
};
