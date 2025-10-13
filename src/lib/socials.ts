import { FaYoutube, FaTwitter, FaGithub } from "react-icons/fa";
import noteImage from "@/app/assets/images/note.png";
import youtubeImage from "@/app/assets/images/youtube.png";
import twitterImage from "@/app/assets/images/twitter.png";
import githubImage from "@/app/assets/images/github.png";
import { StaticImageData } from "next/image";
import { IconType } from "react-icons";
import React from "react";

export interface Social {
  name: string;
  href: string;
  icon?: IconType;
  image?: StaticImageData;
  alt: string;
  pageLabel: string;
}

export const socials: Social[] = [
  {
    name: "GitHub",
    href: "https://github.com/kamiyama-fol",
    icon: FaGithub,
    image: githubImage,
    alt: "github",
    pageLabel: "GitHub",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@kamiyama-fol",
    icon: FaYoutube,
    image: youtubeImage,
    alt: "youtube",
    pageLabel: "もっと見る", // media/page.tsx での表示名
  },
  {
    name: "note",
    href: "https://note.com/kamiyama_fol",
    image: noteImage,
    alt: "note",
    pageLabel: "note",
  },
  {
    name: "Twitter",
    href: "https://x.com/kamiyama_fol",
    icon: FaTwitter,
    image: twitterImage,
    alt: "twitter",
    pageLabel: "Twitter",
  },
];

export const socialIconMap: Record<string, React.FC<{ className?: string }>> = {
  YouTube: FaYoutube,
  Twitter: FaTwitter,
  GitHub: FaGithub,
};
