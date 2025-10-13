"use client";

import { useState } from 'react';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';
import { KamiyamaIcon } from '@/components/KamiyamaIcon';
import { ThemeSwitcher } from '../components/ThemeSwitcher';
import Link from 'next/link';
import { socials } from '@/lib/socials';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="py-4 px-6 flex justify-between items-center border-b border-gray-200 dark:border-gray-700 relative">
            <div className="text-2xl font-bold z-20">
                <Link href='/'>
                    <KamiyamaIcon className="w-auto h-30"  />
                </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
                <nav>
                    <ul className="flex space-x-8 list-none">
                        <li><Link href="/" className="hover:text-gray-400">TOP</Link></li>
                        <li><Link href="/profile" className="hover:text-gray-400">PROFILE</Link></li>
                        <li><Link href="/media" className="hover:text-gray-400">MEDIA</Link></li>
                        <li><Link href="/contact" className="hover:text-gray-400">CONTACT</Link></li>
                    </ul>
                </nav>
                <div className="flex items-center space-x-4">
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
                <ThemeSwitcher />
            </div>

            {/* Hamburger Button */}
            <div className="md:hidden flex items-center">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl z-20">
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`md:hidden fixed inset-0 bg-white dark:bg-black z-10 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
                <div className="flex flex-col justify-center items-center h-full">
                    <nav className="mb-8">
                        <ul className="flex flex-col items-center space-y-8 list-none text-2xl">
                            <li><Link href="/" className="hover:text-gray-400" onClick={handleLinkClick}>TOP</Link></li>
                            <li><Link href="/profile" className="hover:text-gray-400" onClick={handleLinkClick}>PROFILE</Link></li>
                            <li><Link href="#" className="hover:text-gray-400" onClick={handleLinkClick}>SKILLS</Link></li>
                            <li><Link href="/contact" className="hover:text-gray-400" onClick={handleLinkClick}>CONTACT</Link></li>
                        </ul>
                    </nav>
                    <div className="flex justify-center space-x-8 py-4">
                        {socials.map((social) => (
                            <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-gray-400">
                                {social.icon ? (
                                    <social.icon />
                                ) : (
                                    <Image src={social.image!} alt={social.alt} width={30} height={30} />
                                )}
                            </a>
                        ))}
                    </div>
                    <div className="mt-8">
                        <ThemeSwitcher />
                    </div>
                </div>
            </div>
        </header>
    );
}
