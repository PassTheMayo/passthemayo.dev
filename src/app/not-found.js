export const metadata = {
    title: '404 - Page Not Found'
};

export default function Page() {
    return (
        <>
            <section className="container max-w-3xl mx-auto py-8">
                <h1 className="text-5xl font-black">404</h1>
                <p className="text-2xl font-light mt-1">The page you are looking for does not exist.</p>
            </section>
        </>
    );
}