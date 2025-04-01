import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="border-b">
      <nav className="max-w-6xl mx-auto px-4 py-10 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-lg font-semibold">
          Lumon Industries
        </Link>

        {/* Nav Links */}
        <div className="flex gap-6 text-sm">
          <Link href="/" className="hover:text-[var(--accent)] transition-colors">
            Home
          </Link>
          <Link href="/products" className="hover:text-[var(--accent)] transition-colors">
            Products
          </Link>
        </div>
      </nav>
    </header>
  );
};
