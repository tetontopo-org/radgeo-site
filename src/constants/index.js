const navLinks = [
  {
    name: "Mission",
    link: "#mission",
  },
  {
    name: "Timeline",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Mission Alligned By Design",
    desc: "We partner with organizations doing meaningful work and we build tools that support it.",
  },
  {
    imgPath: "/images/map.png",
    title: "Modern GIS, Minus the Bloat",
    desc: "No legacy workflows. No busywork. Just fast, clean, effective spatial solutions.",
  },
  {
    imgPath: "/images/time.png",
    title: "Fast Turnarounds You Can Trust",
    desc: "Quick doesn’t mean sloppy. We deliver on time, every time, with clarity and care.",
  },
];

const techStackImgs = [
  {
    name: "GIS Analysis",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Mapping",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Wildfire Modeling",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Management Consulting",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Web Development",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "GIS Analysis",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Mapping",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Wildfire Modeling",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Management Consulting",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Web Development",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "",
    imgPath: "/images/exp-imgs/exp-1.png",
    logoPath: "/images/gis_50x50.png",
    title: "GIS for Wildfire Response",
    date: "2022 and Earlier",
    responsibilities: [
      "Dakotah worked multiple wildfire seasons as a contract Type 1 GIS Specialist, supporting large fire incidents across the Sierra Nevada, Rocky Mountains, and Cascade Range. This work built a deep operational foundation in incident mapping, data management, and real-time decision support, alongside some of the most experienced cartographers and GIS professionals in wildfire response.",
      "These seasons shaped a practical, no-nonsense approach to GIS: fast, accurate, and built for high-stakes environments.",
    ],
  },
  {
    review: "",
    imgPath: "/images/exp-imgs/exp-2.jpg",
    logoPath: "/images/handshake_50x50.png",
    title: "Partnership with the Northwest American Indian Coalition",
    date: "2023",
    responsibilities: [
      "While supporting operations on the Smith River Complex Fire in Brookings, Oregon, Dakotah met Katrina Thompson Upton, founder of the Northwest American Indian Coalition (NAIC). That connection quickly evolved into a shared vision for how GIS could better support cultural stewardship, Indigenous sovereignty, and land management.",
      "At NAIC’s encouragement, Dakotah founded TetonTopo with a mission centered on reconciliation, community-led mapping, and applied geospatial tools for real-world land management challenges. Dakotah relocated to Oregon to begin close collaboration with NAIC and regional partners.",
    ],
  },
  {
    review: "",
    imgPath: "/images/FireLine.png",
    logoPath: "/images/team_50x50.png",
    title: "The Team Grows",
    date: "2024",
    responsibilities: [
      "As project demand expanded, Hannah Green and Ian Surat-Mosher joined TetonTopo, strengthening the team’s technical and creative capacity. Together, the team supported a growing network of collaborators across southwest Oregon, delivering geospatial tools for:",
      "Prescribed burn planning with local fire departments and burn associations",
      "Community-led land use planning in Gold Beach",
      "Forest advocacy and analysis related to timber harvest and landscape resilience in Curry County",
      "This period marked TetonTopo’s transition from a solo practice into a collaborative, values-driven geospatial studio.",
    ],
  },
  {
    review: "",
    imgPath: "/images/exp-imgs/exp-3.jpg",
    logoPath: "/images/flame_50x50.png",
    title: "RadGeo & Carmanah Wildfire Partnership",
    date: "2025",
    responsibilities: [
      "RadGEO entered a partnership with Carmanah Wildfire to support the development of permanent wildfire defense infrastructure in Canada. To support this work, the team launched Radical Geography (RadGEO) as a Canada-based sister company to TetonTopo.",
      "RadGEO continues the core mission of reconciliation and land stewardship while expanding into wildfire operations support, GIS systems design, and management consulting for large-scale fire resilience projects across British Columbia and beyond.",
    ],
  },
];

const expLogos = [
  {
    name: "gislogo",
    imgPath: "/images/gis_50x50.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Nick Hill",
    mentions: "Founder | Carmanah Wildfire",
    review:
      "RadGeo was a valuable management consulting partner for our R&D and innovation work. They brought structure to complex ideas, translated technical concepts into decisions we could actually execute, and backed it with sharp analysis and geospatial insight. They’re collaborative, responsive, and focused on real outcomes, making the process more efficient, more grounded, and a lot more productive. Dakotah and the team are an absolute pleasure to work with.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Alice Weston",
    mentions: "Community Organizer | Sierra Club Oregon",
    review:
      "We had a great experience working with RadGeo on a public-facing public lands mapping project. Our volunteers, supporters, and partners were all impressed with the project and found the map incredibly helpful for our advocacy efforts. We also received feedback that the map and data helped sway our local policy makers to align with our cause. In the advocacy and policy space, sometimes timelines can be crunched, and we are incredibly grateful that RadGeo was able to work with us so efficiently to get our map up and running. They were an absolute pleasure to work with, and our team plans to use them again in the future.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Katarina Thompson-Upton",
    mentions: "Founder | NAIC",
    review:
      "RadGeo / TetonTopo combines cutting-edge geospatial expertise with a respectful, collaborative approach. They supported the mapping of critical spring and headwater systems and helped document historic Indigenous allotments - work that requires both technical precision and cultural understanding. Their responsiveness and problem-solving mindset make them an outstanding partner, and we look forward to continuing a long-term relationship with RadGeo for our GIS needs, including wildfire risk reduction and cultural stewardship work",
    imgPath: "/images/client2.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    url: "https://www.instagram.com/",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    url: "https://www.facebook.com/",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    url: "https://www.x.com/",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
