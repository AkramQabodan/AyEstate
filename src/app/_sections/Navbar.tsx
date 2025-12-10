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
    <header className="w-full h-[70px] md:h-[85px] xl:h-[100px] bg-bg-header">
      <nav className="max-w-[1440px] h-full mx-auto px-4 md:px-6 xl:px-25 py-3 md:py-4 xl:py-5 flex items-center justify-between">
        <Link
          href="/"
          className="font-playball text-[24px] md:text-[28px] xl:text-[32px] font-normal text-text-logo"
        >
          AyEstate
        </Link>

        <ul className="hidden lg:flex items-center gap-4 xl:gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="font-sora text-[14px] lg:text-[16px] xl:text-[18px] font-semibold tracking-[0px] text-text-nav hover:text-text-heading transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden lg:flex items-center justify-center w-[120px] lg:w-[140px] xl:w-[160px] h-[44px] lg:h-[50px] xl:h-[56px] bg-btn-primary-bg text-btn-primary-text font-sora text-[14px] lg:text-[15px] xl:text-[16px] font-semibold leading-[130%] tracking-[0px] rounded-[12px] hover:bg-btn-primary-hover transition-colors duration-200"
        >
          Contact Us
        </Link>
      </nav>
    </header>
  );
}
