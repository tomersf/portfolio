type NavOption = {
  label: string;
  href: string;
};

export type StageProgress = "IN_PROGRESS" | "PLANNING";

export const navOptions: NavOption[] = [
  { label: "Home", href: "/" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export enum BadgeLevel {
  Beginner = "Beginner",
  Novice = "Novice",
  Competent = "Competent",
  Proficient = "Proficient",
  Skilled = "Skilled",
  Intermediate = "Intermidate",
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
};

export const experiences: Experience[] = [
  {
    avatarUrl: "https://asset.brandfetch.io/idxr5j_t0u/idumxcM-s7.svg",
    avatarFallback: "Fireblocks",
    title: "Fireblocks",
    subtitle: "Digital asset security company",
    body: (
      <div>
        Working as a{" "}
        <span className="font-semibold">Technical Support Engineer</span> &
        Contributing as a{" "}
        <span className="font-semibold">Full-stack Engineer</span> in the
        support department.
      </div>
    ),
    techStack:
      "React.JS, Node.JS,Typescript, Tailwind, tRPC, SQL, Prisma, Zustand, Zod ...",
    linkBtnUrl: "https://www.fireblocks.com/",
  },
  {
    avatarUrl: "https://cdn-icons-png.flaticon.com/512/5680/5680036.png",
    avatarFallback: "DevOps",
    title: "DevOps Bootcamp",
    body: "Participated in a DevOps bootcamp where I was taught the fundametals of the field",
    techStack: "Docker, Kubernetes, Ansible, Terraform, EC2, EKS, ECR ...",
    linkBtnUrl: "https://github.com/tomersf/DevOpsBootcamp",
  },
  {
    avatarUrl: "https://cdn-icons-png.flaticon.com/512/15484/15484303.png",
    avatarFallback: "Node",
    title: "Node.js Microservice",
    body: "An event ticket ordering application with a microservice architecture",
    techStack:
      "Node.js, Express, Typescript, MongoDB, Mongoose, Nginx, Kubernetes ...",
    stage: "IN_PROGRESS",
    linkBtnUrl: "https://github.com/tomersf/microJS",
  },
  {
    avatarUrl: "https://cdn-icons-png.flaticon.com/512/281/281089.png",
    avatarFallback: "Portfolio",
    title: "Personal Portfolio",
    body: "My personal portfolio website that you are currenty on!",
    techStack: "Next.js, Tailwind, Typescript, Framer-Motion",
    linkBtnUrl: "https://github.com/tomersf/portfolio",
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
