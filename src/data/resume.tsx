import { Icons } from "@/components/icons";
import {
  House,
  Workflow,
  Repeat,
  Database,
  Brain,
  BarChart3,
  Radio,
  Globe,
  ShieldCheck,
} from "lucide-react";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";

export const DATA = {
  name: "Olawale Afolayan",
  initials: "OA",
  url: "https://styxfolio.vercel.app",
  location: "Lagos, Nigeria",
  locationLink: "https://www.google.com/maps/place/lagos+nigeria",
  description:
    "Data Engineer building end-to-end pipelines, automated ETL workflows, and ML-powered analytics systems that turn raw data into decisions.",
  summary:
    "I design and ship data infrastructure that runs without me — automated ingestion, snapshot-aware pipelines, time-series data modeling, and ML deployment on top of engineered data. My work spans prediction markets, contributor intelligence, and large-scale web scraping, all delivered end-to-end with Python, PostgreSQL, GitHub Actions, and Streamlit.",
  avatarUrl: "/headshort.jpg",
  ogImage: "/og-banner.png",
  sections: {
    about: { order: 1, enabled: true, heading: "About" },
    work: { order: 2, enabled: false, heading: "Work Experience", presentLabel: "Present" },
    education: { order: 3, enabled: true, heading: "Education & Certifications" },
    skills: { order: 4, enabled: true, heading: "Skills" },
    projects: {
      order: 5,
      enabled: true,
      label: "Projects",
      heading: "Data systems I've built",
      text: "End-to-end data engineering work — from ingestion and orchestration to analytics, ML, and real-time delivery.",
    },
    hackathons: {
      order: 7,
      enabled: false,
      label: "Hackathons",
      heading: "",
      text: "",
    },
    photos: {
      order: 6,
      enabled: false,
      heading: "",
    },
    contact: {
      order: 8,
      enabled: true,
      label: "Contact",
      heading: "Get in Touch",
      text: "Open to Data Engineering roles and collaborations. Reach out via email or LinkedIn.",
    },
  },
  photos: [],
  skills: [
    { name: "Python", icon: Python },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "GitHub Actions", icon: Workflow },
    { name: "ETL / ELT", icon: Repeat },
    { name: "Data Modeling", icon: Database },
    { name: "Machine Learning", icon: Brain },
    { name: "Streamlit", icon: BarChart3 },
    { name: "Web Scraping", icon: Globe },
    { name: "Real-Time Streaming", icon: Radio },
    { name: "Data Validation", icon: ShieldCheck },
  ],
  navbar: [
    { href: "/", icon: House, label: "Home" },
  ],
  contact: {
    email: "afolayan.olawale001@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Joystyxx",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/afolayanolawale/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:afolayan.olawale001@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [],
  education: [
    {
      school: "University of Ilorin",
      href: "https://www.unilorin.edu.ng",
      degree: "B.Sc. Applied Geophysics",
      logoUrl: "https://www.google.com/s2/favicons?domain=unilorin.edu.ng&sz=128",
      start: "2018",
      end: "2023",
    },
    {
      school: "EduREKA",
      href: "https://www.edureka.co",
      degree: "Data Science & Machine Learning Internship Certificate",
      logoUrl: "https://www.google.com/s2/favicons?domain=edureka.co&sz=128",
      start: "2023",
      end: "2024",
    },
    {
      school: "University of Ibadan (CSU) & ARPTechnology Professional Institute",
      href: "https://www.ui.edu.ng",
      degree: "Project Management Professional Certificate",
      logoUrl: "https://www.google.com/s2/favicons?domain=ui.edu.ng&sz=128",
      start: "2023",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "End-to-End Prediction Market Data Pipeline & Intelligence",
      href: "https://linera-ecosystem-intelligence.streamlit.app/",
      dates: "2025 - Present",
      active: true,
      description:
        "Built a full-stack analytics platform for a live prediction market processing 300k+ records. Architected a snapshot-aware pipeline with PostgreSQL and Python for incremental updates and historical tracking. Automated daily ETL via GitHub Actions and deployed clustering, PCA, and velocity-based models alongside a 10-page Streamlit dashboard with two live inference models.",
      technologies: [
        "Python",
        "PostgreSQL",
        "Snapshot Data Modeling",
        "Clustering & PCA",
        "ML Inference",
        "Streamlit",
      ],
      links: [
        {
          type: "Website",
          href: "https://linera-ecosystem-intelligence.streamlit.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/linera.png",
      video: "",
    },
    {
      title: "Marketplace Bounty & Contributor Intelligence System",
      href: "https://xora-intelligence.streamlit.app/",
      dates: "2026 - Present",
      active: true,
      description:
        "Built an end-to-end marketplace bounty pipeline with Python, GitHub Actions, and Neon PostgreSQL. Designed current-state and time-series schemas for longitudinal analysis of activity, rewards, and contributor performance. Automated ingestion, validation, and persistence with scheduled workflows and database-level constraints, plus a Streamlit layer for pipeline monitoring and contributor analytics.",
      technologies: [
        "Python",
        "Neon PostgreSQL",
        "Time-Series Schema Design",
        "Data Validation",
        "Workflow Orchestration",
        "Streamlit",
      ],
      links: [
        {
          type: "Website",
          href: "https://xora-intelligence.streamlit.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Joystyxx/xora_intelligence",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/xora.png",
      video: "",
    },
    {
      title: "Web Scraping & Real Estate Data Collection",
      href: "",
      dates: "2024",
      active: true,
      description:
        "Developed Python web scraping solutions to extract large-scale real estate property listings. Cleaned, validated, and standardized datasets for market analysis and forecasting, and automated recurring collection workflows to eliminate manual data gathering.",
      technologies: [
        "Python",
        "Web Scraping",
        "Data Cleaning",
        "REST APIs",
        "Automated Collection",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Joystyxx",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/real-estate-table.png",
      video: "",
    },
    {
      title: "Real-Time Crypto Anomaly Engine (Coming Soon)",
      href: "",
      dates: "2026",
      active: false,
      description:
        "Real-time streaming pipeline ingesting live crypto trades via WebSockets, running windowed aggregations and anomaly detection, and serving alerts to a live dashboard.",
      technologies: [
        "Apache Kafka",
        "Apache Flink",
        "ClickHouse",
        "Real-Time Streaming",
        "Python",
        "Docker",
      ],
      links: [],
      image: "/crypto-anomaly.png",
      video: "",
    },
  ],
  hackathons: [],
} as const;
