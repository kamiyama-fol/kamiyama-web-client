import Image from 'next/image';
import { socials } from '@/lib/socials';

export default function Footer() {
    return(
        <footer className="text-center text-xs py-8 mt-16 border-t border-gray-200 dark:border-gray-700">
            <div className="social-links flex justify-center space-x-6 py-4">
            {socials.map((social) => (
                <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400">
                    {social.icon ? (
                        <social.icon />
                    ) : (
                        <Image src={social.image!} alt={social.alt} width={25} height={25} />
                    )}
                </a>
            ))}
            </div>
            <p className="text-gray-500 dark:text-gray-400">&copy; 2025 Kamiyama</p>
      </footer>
    );
}
