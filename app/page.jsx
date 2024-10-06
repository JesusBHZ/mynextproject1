import Users from "@/components/Users";

export const metadata = {
    title: "Home page"
}


export default function HomePage() {
    // server component
    return <section>
        <h1>Hello world</h1>
        {
            /* client component */
        }
        <Users />
    </section>
}