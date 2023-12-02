import Image from 'next/image';
import mcstatusIcon from '@/assets/images/mcs.png';
import mineatarIcon from '@/assets/images/mineatar.png';

export const metadata = {
    title: 'Projects - Jacob Gunther'
};

export default function Page() {
    return (
        <>
            <section className="container max-w-3xl mx-auto py-8">
                <h1 className="text-5xl font-black">Projects</h1>
            </section>
            <section className="container max-w-3xl mx-auto py-8">
                <ul className="list-none flex flex-col gap-3">
                    <li>
                        <div className="flex items-start gap-5 bg-neutral-800 p-5 rounded-lg">
                            <Image src={mcstatusIcon} width="64" height="64" />
                            <div>
                                <p className="text-xl font-light">Minecraft Server Status</p>
                                <p className="text-neutral-400 mt-1">An advanced and feature-rich Minecraft server status and query lookup tool with a free-to-use public API.</p>
                                <ul className="list-none flex items-center gap-5 mt-2">
                                    <li>
                                        <a href="https://mcstatus.io" className="link">Website</a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/mcstatus-io" className="link">GitHub</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-start gap-5 bg-neutral-800 p-5 rounded-lg">
                            <Image src={mineatarIcon} width="64" height="64" />
                            <div>
                                <p className="text-xl font-light">Mineatar</p>
                                <p className="text-neutral-400 mt-1">An open source API for rendering 2-dimensional and 3-dimensional isometric renders of any Minecraft player.</p>
                                <ul className="list-none flex items-center gap-5 mt-2">
                                    <li>
                                        <a href="https://mineatar.io" className="link">Website</a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/mineatar-io" className="link">GitHub</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-start gap-5 bg-neutral-800 p-5 rounded-lg">
                            <Image src="https://placehold.co/240x240/3f3f46/ffffff/png?text=PC" className="rounded-full" width="64" height="64" />
                            <div>
                                <p className="text-xl font-light">Pixel Canvas</p>
                                <p className="text-neutral-400 mt-1">An open and public pixel drawing canvas where anybody is free to draw. Advanced account features, area-locking, and much more.</p>
                                <p className="text-neutral-300 mt-1 font-semibold">Coming Soon</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
        </>
    );
}