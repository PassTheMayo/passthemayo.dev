'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import DiscordIcon from '@/assets/icons/discord.svg';
import SunIcon from '@/assets/icons/sun.svg';

export default function Navbar() {
    const path = usePathname();

    return (
        <nav className="container max-w-3xl mx-auto py-12 text-lg">
            <ul className="flex items-center gap-8">
                <li>
                    <Link href="/">
                        <span className={`font-mono underline-offset-2 ${path === '/' ? 'underline text-white' : 'text-neutral-400 hover:text-white'}`}>home</span>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <span className={`font-mono underline-offset-2 ${path === '/about' ? 'underline text-white' : 'text-neutral-400 hover:text-white'}`}>about</span>
                    </Link>
                </li>
                <li>
                    <Link href="/projects">
                        <span className={`font-mono underline-offset-2 ${path === '/projects' ? 'underline text-white' : 'text-neutral-400 hover:text-white'}`}>projects</span>
                    </Link>
                </li>
                <li>
                    <Link href="/photography">
                        <span className={`font-mono underline-offset-2 ${path === '/photography' ? 'underline text-white' : 'text-neutral-400 hover:text-white'}`}>photography</span>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <span className={`font-mono underline-offset-2 ${path === '/contact' ? 'underline text-white' : 'text-neutral-400 hover:text-white'}`}>contact</span>
                    </Link>
                </li>
                <li className="ml-auto">
                    <a href="https://discord.gg/QwvzbA9KGz">
                        <span className="text-neutral-400 hover:text-white">
                            <DiscordIcon width="28" height="28" />
                        </span>
                    </a>
                </li>
                <li>
                    <button className="block" type="button">
                        <span className="text-neutral-400 hover:text-white">
                            <SunIcon width="28" height="28" />
                        </span>
                    </button>
                </li>
            </ul>
        </nav>
    );
}