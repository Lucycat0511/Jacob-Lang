"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-center text-center pt-8">
      <nav className="w-1/4">
        <ul className="flex gap-4 text-sm">
          <Link href="/">Work</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </ul>
      </nav>
      <h1 className="w-1/2 text-2xl font-medium">Jacob Lang</h1>
      <ul className="flex gap-4 w-1/4 justify-end">
        <i class="fa-brands fa-instagram fa-xl"></i>
        <i class="fa-solid fa-shop fa-lg"></i>
      </ul>
    </header>
  );
}
