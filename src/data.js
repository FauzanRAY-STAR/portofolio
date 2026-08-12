export const skillGroups = [
  {
    name: "Mobile Development",
    icon: "mobile",
    items: [
      { name: "Kotlin", icon: "kotlin" },
      { name: "Flutter", icon: "flutter" },
      { name: "Dart", icon: "dart" },
      { name: "CameraX", icon: "camera" },
    ],
  },

  {
    name: "Android Architecture",
    icon: "architecture",
    items: [
      { name: "MVVM", icon: "mvvm" },
      { name: "ViewModel", icon: "viewmodel" },
      { name: "Navigation Component", icon: "navigation" },
      { name: "Hilt", icon: "hilt" },
      { name: "Kotlin Coroutines", icon: "coroutines" },
    ],
  },

  {
    name: "Computer Vision",
    icon: "vision",
    items: [
      { name: "MediaPipe", icon: "mediapipe" },
      { name: "Pose Landmarker", icon: "pose" },
      { name: "Pose Estimation", icon: "pose" },
    ],
  },

  {
    name: "Database",
    icon: "database",
    items: [
      { name: "Room Database", icon: "room" },
      { name: "SQLite / Sqflite", icon: "database" },
      { name: "MySQL", icon: "mysql" },
    ],
  },

  {
    name: "Web Development",
    icon: "web",
    items: [
      { name: "PHP", icon: "php" },
      { name: "Laravel", icon: "laravel" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Bootstrap", icon: "bootstrap" },
    ],
  },

  {
    name: "Programming & Tools",
    icon: "tools",
    items: [
      { name: "AI-Assisted Development", icon: "ai" },
      { name: "Python", icon: "python" },
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
    ],
  },
];

export const projects = [
  {
    name: "GymStreak",
    category: "Flutter Mobile Application",
    desc:
      "A Flutter mobile application for workout tracking with local data storage, scheduling, calendar integration, and local notifications.",
    tech: ["Flutter", "Dart", "GetX", "Sqflite"],
    groups: ["Flutter"],
    repo: "https://github.com/FauzanRAY-STAR/GymStreak",
    image: "/assets/Gym.png",
  },

  {
    name: "Re-PramuditaPupuk",
    category: "Laravel Web Application",
    desc:
      "A company website developed with Laravel, featuring modern frontend tooling and structured backend development.",
    tech: ["Laravel", "PHP", "Tailwind CSS", "Alpine.js"],
    groups: ["Web"],
    repo: "https://github.com/FauzanRAY-STAR/Re-PramuditaPupuk",
    image: "/assets/REpramudita.png",
  },

  {
    name: "Web PPN",
    category: "Full-Stack Web Development",
    desc:
      "A company website with public pages and an administrative dashboard for content management and sales analytics.",
    tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    groups: ["Web"],
    repo: "https://github.com/FauzanRAY-STAR/Web_PPN",
    image: "/assets/webppn.png",
  },

];

export const caseStudy = [
  { step: 'Masalah', text: 'Pengukuran tinggi badan anak untuk screening stunting sering memerlukan alat khusus dan pencatatan manual.' },
  { step: 'Solusi', text: 'Aplikasi Android yang memperkirakan tinggi badan lewat kamera smartphone, tanpa marker tambahan.' },
  { step: 'Cara Kerja', text: 'CameraX mengalirkan frame ke MediaPipe Pose Landmarker, lalu pose landmark dikonversi dari piksel ke sentimeter.' },
  { step: 'Teknologi', text: 'Kotlin, CameraX, MediaPipe, Room Database, ViewModel, Navigation Component, dan Hilt.' },
  { step: 'Hasil', text: 'Hasil estimasi tinggi badan dan height-for-age z-score tersimpan sebagai riwayat pengukuran.' },
];

export const features = [
  'Markerless height estimation',
  'Real-time camera flow menggunakan CameraX',
  'Pose landmark processing menggunakan MediaPipe',
  'Pixel-to-centimeter conversion',
  'Penyimpanan riwayat menggunakan Room Database',
  'Perhitungan height-for-age z-score',
  'Arsitektur Android yang terstruktur',
];

export const featuredTech = ['Kotlin', 'Android', 'CameraX', 'MediaPipe', 'Room Database', 'ViewModel', 'Navigation Component', 'Hilt'];

export const timeline = [
  {
    type: "work",
    title: "Undergraduate Thesis Researcher / Machine Learning Developer",
    org: "Telkom University Purwokerto",
    period: "Dec 2025 – Jun 2026",
    note:
      "Conducted undergraduate thesis research focused on computer vision for height estimation and early stunting risk screening. Collected, standardized, and preprocessed research data, then developed and evaluated a computer vision-based system for research analysis.",
  },

  {
    type: "work",
    title: "Project Manager — Web_PPN",
    org: "PT Pramudita Pupuk Nusantara · Student Project",
    period: "Oct 2025 – Dec 2025",
    note:
      "Led the planning and coordination of a student team in developing a company website for PT Pramudita Pupuk Nusantara. Managed project timelines, task delegation, development progress, documentation, testing, team communication, and issue resolution.",
  },

  {
    type: "work",
    title: "Web Developer Intern",
    org: "Oemah Website · Remote",
    period: "Jun 2025 – Jul 2025",
    note:
      "Developed responsive web applications using HTML, CSS, and JavaScript based on client and business requirements. Collaborated on feature development, bug fixing, API integration, deployment, and optimization for performance, SEO, and user experience.",
  },

  {
    type: "organization",
    title: "Member — Student Empowerment Department",
    org: "HMSE Telkom University Purwokerto",
    period: "Jun 2023 – Jun 2024",
    note:
      "Served as Head of Event for PELOSE and the National Hybrid Seminar. Led event planning, committee coordination, task delegation, speaker liaison, technical readiness, and on-site execution.",
  },

  {
    type: "organization",
    title: "Chairperson — Hybrid Seminar Organizing Committee",
    org: "HMSE Telkom University Purwokerto",
    period: "Jun 2023 – Dec 2023",
    note:
      "Led the planning and execution of a hybrid seminar by coordinating committee members, speakers, logistics, and technical operations. Delegated tasks, monitored event progress, and resolved on-site and virtual issues.",
  },

  {
    type: "education",
    title: "Bachelor of Software Engineering",
    org: "Telkom University Purwokerto",
    period: "Sep 2022 – Jul 2026",
    note:
      "GPA: 3.83/4.00. Final Thesis: Computer Vision-Based System for Height Estimation and Stunting Risk Screening in Children. Active in web development and the Student Empowerment Department of HMSE.",
  },
];
