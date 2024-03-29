import ExternalLinkIcon from '@/assets/icons/external-link.svg';
import image0001 from '@/assets/images/0001-preview.jpg';
import image0002 from '@/assets/images/0002-preview.jpg';
import image0003 from '@/assets/images/0003-preview.jpg';
import image0004 from '@/assets/images/0004-preview.jpg';
import image0005 from '@/assets/images/0005-preview.jpg';
import image0006 from '@/assets/images/0006-preview.jpg';
import image0007 from '@/assets/images/0007-preview.jpg';
import image0008 from '@/assets/images/0008-preview.jpg';
import image0009 from '@/assets/images/0009-preview.jpg';
import PhotoDetails from '@/components/PhotoDetails';

export const metadata = {
    title: 'Hello, I\'m Jacob Gunther'
};

export default function Page() {
    return (
        <div className="container max-w-3xl mx-auto">
            <section className="py-8">
                <p className="font-base text-2xl text-neutral-200">Hi there,</p>
                <h1 className="text-5xl mt-1">
                    <span className="font-bold">I&apos;m </span>
                    <span className="font-black bg-gradient-to-r from-lime-500 to-emerald-400 bg-clip-text text-transparent bg-[length:150%]">Jacob Gunther</span>
                </h1>
                <p className="mt-3 text-neutral-400 text-lg">&hellip; a full-stack web developer and software engineer with a side passion for photography and film. You can check out my projects and portfolio below or join my community <a href="https://discord.gg/QwvzbA9KGz" className="link">Discord server</a>.</p>
            </section>
            <section className="py-8">
                <h2 className="font-bold text-3xl">Projects</h2>
                <ul className="list-none grid grid-cols-2 gap-3 mt-5">
                    <li>
                        <a className="block border border-neutral-800 hover:border-neutral-700 p-5 rounded" href="https://mcstatus.io">
                            <div className="flex items-center gap-2">
                                <p className="text-lg font-bold">Minecraft Server Status</p>
                                <ExternalLinkIcon width="14" height="14" className="text-neutral-500" />
                            </div>
                            <p className="text-neutral-400 mt-1">An advanced Minecraft server status retrieval tool with a simple-to-use API.</p>
                        </a>
                    </li>
                    <li>
                        <a className="block border border-neutral-800 hover:border-neutral-700 p-5 rounded" href="https://mineatar.io">
                            <div className="flex items-center gap-2">
                                <p className="text-lg font-bold">Mineatar</p>
                                <ExternalLinkIcon width="14" height="14" className="text-neutral-500" />
                            </div>
                            <p className="text-neutral-400 mt-1">An efficient and fast 3-dimensional Minecraft skin rendering API.</p>
                        </a>
                    </li>
                    <li>
                        <div className="relative block border border-neutral-800 p-5 rounded">
                            <div className="opacity-25">
                                <div className="flex items-center gap-2">
                                    <p className="text-lg font-bold">Pixel Canvas</p>
                                    <ExternalLinkIcon width="14" height="14" className="text-neutral-500" />
                                </div>
                                <p className="text-neutral-400 mt-1">An free-to-use, interactive, and open pixel drawing canvas with account features.</p>
                            </div>
                            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-12 font-black text-2xl text-neutral-300">COMING SOON</span>
                        </div>
                    </li>
                </ul>
            </section>
            <section className="py-8">
                <h2 className="font-bold text-3xl">Photography</h2>
                <div className="grid grid-cols-3 gap-3 mt-5">
                    <PhotoDetails
                        image={image0001}
                        location="Springfield, Missouri"
                        cameraType="Canon EOS R7"
                        lensType="Canon RF50mm F1.8 STM"
                        iso="400"
                        focalLength="50"
                        aperture="1.8"
                        shutterSpeed="1/320"
                    />
                    <PhotoDetails
                        image={image0002}
                        location="Springfield, Missouri"
                        cameraType="Canon EOS R7"
                        lensType="Canon RF50mm F1.8 STM"
                        iso="100"
                        focalLength="50"
                        aperture="1.8"
                        shutterSpeed="1/640"
                    />
                    <PhotoDetails
                        image={image0003}
                        location="Springfield, Missouri"
                        cameraType="Minolta SRT-201"
                        lensType="Minolta MC Rokkor-PG 50mm F1.4"
                        iso="800"
                        focalLength="50"
                        aperture="1.4"
                        shutterSpeed="1/8"
                    />
                    <PhotoDetails
                        image={image0004}
                        location="Springfield, Missouri"
                        cameraType="Canon EOS R7"
                        lensType="TTArtisan 50mm F0.95"
                        iso="800"
                        focalLength="50"
                        aperture="0.95"
                        shutterSpeed="1/50"
                    />
                    <PhotoDetails
                        image={image0005}
                        location="Springfield, Missouri"
                        cameraType="Canon EOS R7"
                        lensType="Canon RF50mm F1.8 STM"
                        iso="100"
                        focalLength="50"
                        aperture="1.8"
                        shutterSpeed="1/400"
                    />
                    <PhotoDetails
                        image={image0006}
                        location="Springfield, Missouri"
                        cameraType="Canon EOS R7"
                        lensType="Canon RF50mm F1.8 STM"
                        iso="1000"
                        focalLength="50"
                        aperture="1.8"
                        shutterSpeed="1/100"
                    />
                    <PhotoDetails
                        image={image0007}
                        location="Springfield, Missouri"
                        cameraType="Canon EOS R7"
                        lensType="Canon RF-S18-150mm F3.5-6.3 IS STM"
                        iso="100"
                        focalLength="18"
                        aperture="5"
                        shutterSpeed="1/500"
                    />
                    <PhotoDetails
                        image={image0008}
                        location="Springfield, Missouri"
                        cameraType="Canon EOS R7"
                        lensType="Canon RF-S18-150mm F3.5-6.3 IS STM"
                        iso="100"
                        focalLength="76"
                        aperture="6.3"
                        shutterSpeed="1/400"
                    />
                    <PhotoDetails
                        image={image0009}
                        location="Springfield, Missouri"
                        cameraType="Canon EOS Rebel T6"
                        lensType="EF-S18-55mm f/3.5-5.6 IS II"
                        iso="1600"
                        focalLength="36"
                        aperture="11"
                        shutterSpeed="1/125"
                    />
                </div>
            </section>
        </div>
    );
}