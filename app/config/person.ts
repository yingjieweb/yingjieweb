import { SITE_URL } from "./site";

export const PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: "Yingjie Song",
  alternateName: "Yingjieweb",
  url: SITE_URL,
  image: `${SITE_URL}/assets/images/avatar.jpg`,
  jobTitle: "Full-Stack Developer",
  description:
    "Full-stack developer building AI agents with Python, Next.js, React, and Vue.",
  sameAs: [
    "https://github.com/yingjieweb",
    "https://www.linkedin.com/in/yingjie-song-6155a4252/",
    "https://yingjieweb.blog.csdn.net/",
    "https://juejin.cn/user/2576910988098888",
  ],
  worksFor: {
    "@type": "Organization",
    name: "AMMO",
    sameAs: "https://www.linkedin.com/company/ammo-ai/",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Northeastern University",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Qufu Normal University",
    },
  ],
  knowsAbout: [
    "AI Agents",
    "Full-stack Development",
    "Frontend Development",
    "Backend Development",
    "Python",
    "Next.js",
    "React",
    "Vue",
  ],
} as const;
