import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Navbar } from "./navbar";
import Image from "next/image";

import Logo from "@/public/logo.png";

export default function Header() {
  return (
    <header className="py-5 flex items-center container justify-between">
      <Link href="/">
        <Image
          src={Logo}
          alt="logo"
          width={50}
          height={50}
          placeholder="blur"
        />
      </Link>
      <Navbar />
      <ModeToggle />
    </header>
  );
}
