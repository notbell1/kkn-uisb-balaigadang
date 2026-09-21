import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navigationItems } from "../../lib/constants/navigation";
import { cn } from "../../lib/utils/cn";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") {
      return true;
    }

    if (path !== "/" && location.pathname.startsWith(path)) {
      return true;
    }

    return false;
  };

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 border-b border-transparent py-3.5 transition-all duration-300 sm:py-5",
        isScrolled
          ? "border-zinc-800/80 bg-black/90 shadow-md backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-md transition-all duration-300 sm:h-12 sm:w-12">
              <img
                src="/images/logo/uisb.png"
                alt="Logo KKN"
                className="h-full w-full object-contain"
              />
            </div>

            <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-md transition-all duration-300 sm:h-12 sm:w-12">
              <img
                src="/images/logo/kkn.png"
                alt="Logo UISB"
                className="h-full w-full object-contain"
              />
            </div>
          </Link>

          <nav className="hidden items-center space-x-1 lg:flex">
            {navigationItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "relative rounded-md px-3.5 py-1.5 text-xs font-medium uppercase tracking-wide transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500",
                    active
                      ? "font-semibold text-purple-400"
                      : "text-zinc-400 hover:text-white",
                  )}
                >
                  {item.label}

                  {active && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] rounded-full bg-gradient-to-r from-purple-500 to-orange-500" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="rounded-lg p-1.5 text-zinc-400 transition-colors duration-200 hover:bg-zinc-900 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 sm:p-2"
              aria-label={isOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? (
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="border-b border-zinc-800 bg-black/95 px-4 py-4 backdrop-blur-xl sm:px-6 sm:py-6 lg:hidden"
        >
          <nav className="flex flex-col space-y-2 sm:space-y-3">
            {navigationItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "flex items-center justify-between rounded-md py-1.5 text-xs tracking-wide transition-colors duration-200 sm:py-2 sm:text-sm",
                    active
                      ? "font-semibold text-purple-400"
                      : "text-zinc-400 hover:text-white",
                  )}
                >
                  <span>{item.label}</span>

                  {active && (
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-500 to-orange-500" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};
