export const metadata = {
    title: 'About Me - Jacob Gunther'
};

export default function Page() {
    return (
        <>
            <section className="container max-w-3xl mx-auto py-8">
                <h1 className="text-5xl font-black">About Me</h1>
            </section>
            <section className="container max-w-3xl mx-auto py-8">
                <div className="flex gap-10">
                    <div className="w-2 bg-neutral-700 mb-32" />
                    <div className="flex flex-col gap-12">
                        <div className="relative">
                            <span className="absolute block -left-[5rem] -rotate-90 px-5 py-2 bg-neutral-900 text-lg font-light">2012</span>
                            <h2 className="font-bold text-3xl">Early Background</h2>
                            <p className="mt-3 text-neutral-400 leading-7">I began scripting at the age of 9 when I discovered Microsoft Batch files. Seeing how something I wrote could turn into an interactive experience prompted me to further look into programming. This desire to build something interactive turned into learning web design, including HTML, CSS, JavaScript and PHP.</p>
                        </div>
                        <div className="relative">
                            <span className="absolute block -left-[5rem] -rotate-90 px-5 py-2 bg-neutral-900 text-lg font-light">2014</span>
                            <h2 className="font-bold text-3xl">Minecraft Modding</h2>
                            <p className="mt-3 text-neutral-400 leading-7">I had a lot of free time when I was younger to play video games, and one of them was Minecraft.</p>
                        </div>
                        <div className="relative">
                            <span className="absolute block -left-[5rem] -rotate-90 px-5 py-2 bg-neutral-900 text-lg font-light">2013</span>
                            <h2 className="font-bold text-3xl">Early Background</h2>
                            <p className="mt-3 text-neutral-400 leading-7">I began scripting at the age of 9 when I discovered Microsoft Batch files. Seeing how something I wrote could turn into an interactive experience prompted me to further look into programming. This desire to build something interactive turned into learning web design, including HTML, CSS, JavaScript and PHP.</p>
                        </div>
                        <div className="relative">
                            <span className="absolute block -left-[5rem] -rotate-90 px-5 py-2 bg-neutral-900 text-lg font-light">2013</span>
                            <h2 className="font-bold text-3xl">Early Background</h2>
                            <p className="mt-3 text-neutral-400 leading-7">I began scripting at the age of 9 when I discovered Microsoft Batch files. Seeing how something I wrote could turn into an interactive experience prompted me to further look into programming. This desire to build something interactive turned into learning web design, including HTML, CSS, JavaScript and PHP.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}