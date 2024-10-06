import Link from "next/link";
import "./Navbar.css";

export default function Navbar () {
    return (
        <nav className="navbar p-5">
            <h1 className="text-3xl font-bold">Next Js Curso</h1>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/tienda">Tienda</Link></li>
                <li><Link href="/posts">Post</Link></li>
            </ul>
        </nav> 
    );
}