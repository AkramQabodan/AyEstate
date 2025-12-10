import Link from "next/link";
import { Icons } from "@/components/icons";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Listings", href: "#" },
  { label: "Company", href: "#" },
  { label: "Blog", href: "#" },
  { label: "About Us", href: "#" },
];

export default function Navbar() {
  return (
    <header className="w-full h-[70px] md:h-[85px] xl:h-[100px] bg-bg-header relative z-50">
      <input type="checkbox" id="nav-toggle" className="peer hidden" />

      <nav className="max-w-[1440px] h-full mx-auto px-4 md:px-6 xl:px-25 py-3 md:py-4 xl:py-5 flex items-center justify-between">
        <Link
          href="#"
          className="font-playball text-[24px] md:text-[28px] xl:text-[32px] font-normal text-text-logo"
        >
          AyEstate
        </Link>

        <label
          htmlFor="nav-toggle"
          className="lg:hidden p-2 text-text-nav cursor-pointer hover:text-text-heading transition-colors"
          aria-label="Toggle Menu"
        >
          <Icons.Menu className="w-6 h-6" />
        </label>

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
          href="#"
          className="hidden lg:flex items-center justify-center w-[120px] lg:w-[140px] xl:w-[160px] h-[44px] lg:h-[50px] xl:h-[56px] bg-btn-primary-bg text-btn-primary-text font-sora text-[14px] lg:text-[15px] xl:text-[16px] font-semibold leading-[130%] tracking-[0px] rounded-[12px] hover:bg-btn-primary-hover transition-colors duration-200"
        >
          Contact Us
        </Link>
      </nav>

      <div className="absolute top-full left-0 w-full bg-bg-header border-t border-border-light shadow-lg flex-col items-center gap-6 py-8 hidden peer-checked:flex lg:hidden animate-slideDown z-40">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="font-sora text-[16px] font-semibold text-text-nav hover:text-text-heading transition-colors"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="#"
          className="flex items-center justify-center w-[140px] h-[44px] bg-btn-primary-bg text-btn-primary-text font-sora text-[14px] font-semibold rounded-[12px] hover:bg-btn-primary-hover transition-colors duration-200"
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
}
