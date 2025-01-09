import { Cloud, Database, Monitor, Phone } from "lucide-react";

export const services = [
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "Web Development",
    description:
      "Modern, responsive web applications built with Next.js and React",
  },
  {
    icon: <Phone className="w-8 h-8" />,
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps for iOS and Android",
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and DevOps automation",
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Tech Consulting",
    description: "Strategic technology guidance and digital transformation",
  },
];

export const stats = [
  { number: "50+", label: "Enterprise Clients", sublabel: "Across Africa" },
  {
    number: "100+",
    label: "Successful Projects",
    sublabel: "Delivered on time",
  },
  {
    number: "200+",
    label: "Students Trained",
    sublabel: "95% employment rate",
  },
  { number: "5+", label: "Years Experience", sublabel: "Industry expertise" },
];

export const programs = [
  {
    title: "Tech Internship Program",
    duration: "3-6 months",
    description: "Immersive training in modern web and mobile development",
    features: [
      "Hands-on project experience",
      "1:1 mentorship",
      "Industry-standard tools",
      "Career development",
    ],
    tag: "Now Accepting Applications",
  },
  {
    title: "High School Outreach",
    duration: "Ongoing",
    description: "Introducing students to the world of technology",
    features: [
      "Basic coding workshops",
      "Tech career guidance",
      "Industry exposure",
      "Practical projects",
    ],
    tag: "Educational Initiative",
  },
  {
    title: "Corporate Training",
    duration: "Flexible",
    description: "Upskilling your team with modern tech capabilities",
    features: [
      "Customized curriculum",
      "Hands-on workshops",
      "Project-based learning",
      "Progress tracking",
    ],
    tag: "Enterprise Program",
  },
];
