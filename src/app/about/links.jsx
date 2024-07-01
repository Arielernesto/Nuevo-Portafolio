"use client"
import { usePathname } from "next/navigation";
import Link from "next/link";
import '../globals.css'

export function Links(){
    const pathName = usePathname()

    return(
      <ul>
        <li className={`${pathName == "/about/Users" ? 'active' : ''}`}>
        <Link href="/about/Users">Users</Link>
        </li>
        
        <li className={`${pathName == "/about/Factories" ? 'active' : ''}`}>
        <Link href="/about/Factories">Factories</Link>
        </li>

        <li className={`${pathName == "/about/Orders" ? 'active' : ''}`}>
        <Link href="/about/Orders">Orders</Link>
        </li>
     </ul> )
}