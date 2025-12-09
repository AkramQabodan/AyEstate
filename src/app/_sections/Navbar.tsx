import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Listings", href: "/listings" },
  { label: "Company", href: "/company" },
  { label: "Blog", href: "/blog" },
  { label: "About Us", href: "/about" },
];

export default function Navbar() {
  return (
    <header className="w-full h-[100px] bg-bg-header">
      <nav className="max-w-[1440px] h-full mx-auto px-6 lg:px-25 py-5 flex items-center justify-between">
        <Link
          href="/"
          className="font-playball text-[32px] font-normal text-text-logo"
        >
          AyEstate
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="font-sora text-[18px] font-semibold tracking-[0px] text-text-nav hover:text-text-heading transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden md:flex items-center justify-center w-[160px] h-[56px] bg-btn-primary-bg text-btn-primary-text font-sora text-[16px] font-semibold leading-[130%] tracking-[0px] rounded-[12px] hover:bg-btn-primary-hover transition-colors duration-200"
        >
          Contact Us
        </Link>
      </nav>
    </header>
  );
}
