import { IconType } from 'react-icons'
import { FaFilePdf, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'

interface SocialLink {
  siteName: string
  url: string
  icon: IconType
}

const links: SocialLink[] = [
  {
    siteName: 'Resume',
    url: 'https://drive.google.com/file/d/0BzmBR3K6IccHaUFBazJocG1lSXc/view?usp=sharing',
    icon: FaFilePdf,
  },
  {
    siteName: 'Email',
    url: 'mailto:stephen.herrick@gmail.com',
    icon: FaEnvelope,
  },
  {
    siteName: 'LinkedIn',
    url: 'https://www.linkedin.com/in/stephenpaulherrick/',
    icon: FaLinkedin,
  },
  {
    siteName: 'GitHub',
    url: 'https://github.com/stephenherrick',
    icon: FaGithub,
  },
]

export default function SocialLinks() {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {links.map((link) => (
          <a
            key={link.siteName}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 transform transition-all duration-300 hover:scale-110"
          >
            <div className="text-5xl md:text-6xl text-slate-400 group-hover:text-blue-400 transition-colors duration-300">
              <link.icon />
            </div>
            <span className="text-sm md:text-base font-medium text-slate-300 group-hover:text-white transition-colors duration-300 text-center">
              {link.siteName}
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}
