"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ChevronLeft } from "lucide-react";
import { SHOP_CATEGORY_TREE } from "@/data/shopData";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [mobileShopView, setMobileShopView] = useState<"root" | "shop">("root");
  const [expandedShopCategories, setExpandedShopCategories] = useState<Record<string, boolean>>({});

  // Desktop Click-to-Toggle Dropdown State
  const [activeDropdown, setActiveDropdown] = useState<"projects" | "shop" | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);

  const toggleDropdown = (menu: "projects" | "shop") => {
    setActiveDropdown((prev) => (prev === menu ? null : menu));
  };

  // Close dropdown on click outside or escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveDropdown(null);
      }
    };

    if (activeDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeDropdown]);

  // Close dropdown whenever pathname changes without cascading render in effect
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setActiveDropdown(null);
  }

  const toggleShopCategory = (catId: string) => {
    setExpandedShopCategories((prev) => ({
      ...prev,
      [catId]: !prev[catId],
    }));
  };





  // Projects Accordion Sub-Links (Client Reference)
  const projectsSubLinks = [
    { label: "ARCHITECTURE", href: "/projects?category=ARCHITECTURE" },
    { label: "INTERIOR DESIGN", href: "/projects?category=INTERIOR+DESIGN" },
    { label: "LANDSCAPING", href: "/projects?category=LANDSCAPING" },
    { label: "FURNITURE", href: "/projects?category=FURNITURE" },
    { label: "LIGHTING", href: "/projects?category=LIGHTING" },
  ];

  // Unified Primary Main Nav Links (Desktop)
  const mainNavLinks = [
    { href: "/projects", label: "PROJECTS" },
    { href: "/shop", label: "SHOP" },
    { href: "/journey", label: "JOURNEY" },
    { href: "/artists", label: "ARTISTS" },
    { href: "/collaborations", label: "COLLABORATIONS" },
    { href: "/cloud-tv", label: "CLOUD TV" },
    { href: "/events", label: "EVENTS" },
    { href: "/open-call", label: "OPEN CALL" },
  ];

  // Mobile Navigation Links strictly specified by client
  const mobileNavLinks = [
    {
      label: "PROJECTS",
      href: "/projects",
      bgClass: "bg-[#081757] hover:bg-[#061245]",
      textClass: "text-white",
      arrowClass: "text-white",
      borderClass: "border border-[#081757]",
    },
    {
      label: "SHOP",
      href: "/shop",
      bgClass: "bg-black hover:bg-[#1a1a1a]",
      textClass: "text-white",
      arrowClass: "text-white",
      borderClass: "border border-black",
    },
    {
      label: "JOURNEY",
      href: "/journey",
      bgClass: "bg-white hover:bg-neutral-50",
      textClass: "text-[#081757]",
      arrowClass: "text-[#081757]",
      borderClass: "border border-black",
    },
    {
      label: "ARTISTS",
      href: "/artists",
      bgClass: "bg-[#081757] hover:bg-[#061245]",
      textClass: "text-white",
      arrowClass: "text-white",
      borderClass: "border border-[#081757]",
    },
    {
      label: "COLLABORATIONS",
      href: "/collaborations",
      bgClass: "bg-black hover:bg-[#1a1a1a]",
      textClass: "text-white",
      arrowClass: "text-white",
      borderClass: "border border-black",
    },
    {
      label: "CLOUD TV",
      href: "/cloud-tv",
      bgClass: "bg-white hover:bg-neutral-50",
      textClass: "text-[#081757]",
      arrowClass: "text-[#081757]",
      borderClass: "border border-black",
    },
    {
      label: "EVENTS",
      href: "/events",
      bgClass: "bg-[#081757] hover:bg-[#061245]",
      textClass: "text-white",
      arrowClass: "text-white",
      borderClass: "border border-[#081757]",
    },
    {
      label: "OPEN CALL",
      href: "/open-call",
      bgClass: "bg-black hover:bg-[#1a1a1a]",
      textClass: "text-white",
      arrowClass: "text-white",
      borderClass: "border border-black",
    },
  ];

  return (
    <header ref={headerRef} className="sticky top-0 z-40 bg-white border-b border-[#E5E5E5] transition-all">
      {/* ========================================================
          MAIN NAVIGATION BAR (Unified Single Nav Standard)
          Logo + Unified Primary Links
      ======================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left: Sotheby's Style Serif Logo */}
        <Link
          href="/"
          className="group flex flex-col justify-center select-none"
        >
          <span className="font-serif tracking-[0.22em] text-2xl sm:text-3xl font-normal text-black transition-opacity group-hover:opacity-75 leading-none">
            CLOUD
          </span>
          <span className="text-[9px] tracking-[0.35em] text-[#666666] uppercase mt-1">
            AUCTION HOUSE & GALLERY
          </span>
        </Link>

        {/* Center: Unified Primary Links */}
        <nav className="hidden lg:flex items-center gap-3.5 xl:gap-5 2xl:gap-7">
          {mainNavLinks.map((link) => {
            const isRouteActive = pathname === link.href;

            if (link.label === "PROJECTS") {
              const isDropdownOpen = activeDropdown === "projects";
              const isVisualActive = activeDropdown ? isDropdownOpen : isRouteActive;

              return (
                <div key={link.href} className="relative py-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleDropdown("projects");
                    }}
                    aria-expanded={isDropdownOpen}
                    className={`font-merriweather font-light text-[10px] xl:text-[11px] tracking-[0.16em] xl:tracking-[0.2em] uppercase transition-all relative py-1.5 flex items-center gap-1 xl:gap-1.5 cursor-pointer select-none whitespace-nowrap ${
                      isVisualActive
                        ? "text-[#081757] font-semibold"
                        : "text-black hover:text-[#081757]"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      size={12}
                      strokeWidth={2}
                      className={`transition-transform duration-200 ${
                        isDropdownOpen ? "rotate-180 text-[#081757]" : "text-black opacity-70"
                      }`}
                    />
                    {isVisualActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#081757]" />
                    )}
                  </button>

                  {/* Desktop Click Dropdown Menu (Sotheby's Aesthetic) */}
                  <div
                    className={`absolute top-[calc(100%-2px)] left-0 w-60 bg-white border border-[#E5E5E5] shadow-xl py-2 px-1.5 transition-all duration-200 ease-out z-50 ${
                      isDropdownOpen
                        ? "opacity-100 visible translate-y-0 pointer-events-auto"
                        : "opacity-0 invisible translate-y-1 pointer-events-none"
                    }`}
                  >
                    <div className="flex flex-col space-y-0.5">
                      {projectsSubLinks.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          onClick={() => setActiveDropdown(null)}
                          className="px-3.5 py-2.5 text-[10px] tracking-[0.2em] uppercase font-medium text-black hover:text-[#081757] hover:bg-[#FAFAFA] transition-all flex items-center justify-between group/sub"
                        >
                          <span>{sub.label}</span>
                          <span className="opacity-0 -translate-x-1 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all text-[#081757] text-[10px] font-bold">
                            →
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            if (link.label === "SHOP") {
              const isDropdownOpen = activeDropdown === "shop";
              const isVisualActive = activeDropdown ? isDropdownOpen : isRouteActive;

              return (
                <div key={link.href} className="relative py-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleDropdown("shop");
                    }}
                    aria-expanded={isDropdownOpen}
                    className={`font-merriweather font-light text-[10px] xl:text-[11px] tracking-[0.16em] xl:tracking-[0.2em] uppercase transition-all relative py-1.5 flex items-center gap-1 xl:gap-1.5 cursor-pointer select-none whitespace-nowrap ${
                      isVisualActive
                        ? "text-[#081757] font-semibold"
                        : "text-black hover:text-[#081757]"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      size={12}
                      strokeWidth={2}
                      className={`transition-transform duration-200 ${
                        isDropdownOpen ? "rotate-180 text-[#081757]" : "text-black opacity-70"
                      }`}
                    />
                    {isVisualActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#081757]" />
                    )}
                  </button>

                  {/* SOTHEBY'S STYLE FULL-WIDTH DESKTOP MEGA MENU */}
                  <div
                    className={`fixed left-0 right-0 top-[80px] w-full bg-white border-y border-[#E5E5E5] shadow-2xl transition-all duration-200 ease-out z-50 ${
                      isDropdownOpen
                        ? "opacity-100 visible translate-y-0 pointer-events-auto"
                        : "opacity-0 invisible translate-y-1 pointer-events-none"
                    }`}
                  >
                    <div className="absolute -top-3 left-0 right-0 h-3" />
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
                      <div className="grid grid-cols-6 gap-6 xl:gap-8 border-b border-[#E5E5E5] pb-8">
                        {SHOP_CATEGORY_TREE.map((cat) => (
                          <div key={cat.id} className="space-y-3">
                            <Link
                              href={`/shop?category=${encodeURIComponent(cat.name)}`}
                              onClick={() => setActiveDropdown(null)}
                              className="text-[11px] uppercase tracking-[0.2em] font-bold text-black pb-1.5 border-b border-[#E5E5E5] block hover:text-[#081757] transition-colors"
                            >
                              {cat.name}
                            </Link>

                            {/* Standard Subcategories List */}
                            {cat.subCategories && (
                              <ul className="space-y-1.5">
                                {cat.subCategories.map((item) => (
                                  <li key={item}>
                                    <Link
                                      href={`/shop?category=${encodeURIComponent(item)}`}
                                      onClick={() => setActiveDropdown(null)}
                                      className="text-[10px] uppercase tracking-[0.15em] text-black hover:text-[#081757] hover:translate-x-0.5 transition-all block font-medium"
                                    >
                                      {item}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}

                            {/* Sub-Groups (e.g. for CLOTHING: Ladies, Men's Wear) */}
                            {cat.groups && (
                              <div className="space-y-3 pt-1">
                                {cat.groups.map((group) => (
                                  <div key={group.groupName} className="space-y-1">
                                    <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#081757] block">
                                      {group.groupName}
                                    </span>
                                    <ul className="space-y-1 pl-1.5 border-l border-[#EEEEEE]">
                                      {group.items.map((item) => (
                                        <li key={item}>
                                          <Link
                                            href={`/shop?category=${encodeURIComponent(item)}`}
                                            onClick={() => setActiveDropdown(null)}
                                            className="text-[10px] uppercase tracking-[0.15em] text-black hover:text-[#081757] hover:translate-x-0.5 transition-all block font-medium"
                                          >
                                            {item}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Bottom Action Bar */}
                      <div className="pt-4 flex items-center justify-between text-[11px]">
                        <span className="text-[10px] uppercase tracking-[0.25em] text-black font-medium">
                          CURATED HIGH-END E-COMMERCE · WORLDWIDE INSURED TRANSIT
                        </span>
                        <Link
                          href="/shop"
                          onClick={() => setActiveDropdown(null)}
                          className="font-bold uppercase tracking-[0.25em] text-black hover:text-[#081757] flex items-center gap-1.5 transition-colors group/all"
                        >
                          <span>SHOP ALL</span>
                          <span className="transition-transform duration-150 group-hover/all:translate-x-1">→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            const isVisualActive = activeDropdown ? false : isRouteActive;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setActiveDropdown(null)}
                className={`font-merriweather font-light text-[10px] xl:text-[11px] tracking-[0.16em] xl:tracking-[0.2em] uppercase transition-all relative py-1.5 whitespace-nowrap ${
                  isVisualActive
                    ? "text-[#081757] font-semibold"
                    : "text-black hover:text-[#081757]"
                }`}
              >
                {link.label}
                {isVisualActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#081757]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile menu trigger */}
        <div className="flex items-center lg:hidden">
          <button
            onClick={() => {
              setActiveDropdown(null);
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            aria-label="Toggle Navigation Menu"
            className="p-2 text-black cursor-pointer"
          >
            {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* ========================================================
          MOBILE NAVIGATION OVERLAY (Client Design Reference)
      ======================================================== */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E5E5E5] px-4 py-4 sm:px-6 sm:py-6 shadow-2xl max-h-[calc(100dvh-80px)] overflow-y-auto animate-fade-in">
          {mobileShopView === "root" ? (
            /* MAIN MENU VIEW */
            <nav className="w-full flex flex-col space-y-2 sm:space-y-2.5">
              {mobileNavLinks.map((item) => {
                if (item.label === "PROJECTS") {
                  return (
                    <div key={item.label} className="w-full flex flex-col">
                      <button
                        type="button"
                        onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                        aria-expanded={isProjectsOpen}
                        className={`w-full flex items-center justify-between px-5 py-3.5 sm:px-6 sm:py-4 font-roboto font-bold text-sm sm:text-base tracking-[0.1em] uppercase transition-all duration-150 group shadow-xs ${item.bgClass} ${item.textClass} ${item.borderClass}`}
                      >
                        <span className={`font-roboto font-bold ${item.textClass}`}>{item.label}</span>
                        <span
                          className={`font-roboto font-bold text-lg sm:text-xl leading-none select-none transition-transform duration-200 ${item.arrowClass} ${
                            isProjectsOpen ? "rotate-90" : ""
                          }`}
                          aria-hidden="true"
                        >
                          →
                        </span>
                      </button>

                      {/* PROJECTS Accordion Sub-Links */}
                      {isProjectsOpen && (
                        <div className="w-full bg-[#FAFAFA] border-x border-b border-[#E5E5E5] py-2 px-3 sm:px-4 space-y-1 animate-fade-in">
                          {projectsSubLinks.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                              }}
                              className="flex items-center justify-between px-4 py-2.5 font-roboto font-bold text-xs sm:text-sm tracking-wider uppercase text-[#081757] hover:bg-white hover:translate-x-1 transition-all rounded-xs"
                            >
                              <span className="font-roboto font-bold text-[#081757]">{sub.label}</span>
                              <span className="text-xs text-[#081757] font-bold">→</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                if (item.label === "SHOP") {
                  return (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => setMobileShopView("shop")}
                      className={`w-full flex items-center justify-between px-5 py-3.5 sm:px-6 sm:py-4 font-roboto font-bold text-sm sm:text-base tracking-[0.1em] uppercase transition-all duration-150 group shadow-xs ${item.bgClass} ${item.textClass} ${item.borderClass}`}
                    >
                      <span className={`font-roboto font-bold ${item.textClass}`}>{item.label}</span>
                      <span
                        className={`font-roboto font-bold text-lg sm:text-xl leading-none select-none transition-transform duration-150 group-hover:translate-x-1.5 ${item.arrowClass}`}
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </button>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setMobileShopView("root");
                    }}
                    className={`w-full flex items-center justify-between px-5 py-3.5 sm:px-6 sm:py-4 font-roboto font-bold text-sm sm:text-base tracking-[0.1em] uppercase transition-all duration-150 group shadow-xs ${item.bgClass} ${item.textClass} ${item.borderClass}`}
                  >
                    <span className={`font-roboto font-bold ${item.textClass}`}>{item.label}</span>
                    <span
                      className={`font-roboto font-bold text-lg sm:text-xl leading-none select-none transition-transform duration-150 group-hover:translate-x-1.5 ${item.arrowClass}`}
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </Link>
                );
              })}
            </nav>
          ) : (
            /* SHOP SLIDE-OVER / DRILL-DOWN SUB-MENU */
            <div className="w-full space-y-4 animate-fade-in">
              {/* SHOP SLIDE-OVER HEADER: Clean back arrow icon (<) on left, SHOP ALL link with arrow on right */}
              <div className="flex items-center justify-between pb-3.5 border-b border-[#E5E5E5]">
                <button
                  type="button"
                  onClick={() => {
                    setMobileShopView("root");
                    setExpandedShopCategories({});
                  }}
                  aria-label="Back to main menu"
                  className="w-9 h-9 -ml-1 text-black hover:text-[#081757] hover:bg-neutral-100 rounded-sm flex items-center justify-center transition-colors cursor-pointer select-none"
                >
                  <ChevronLeft size={24} strokeWidth={2.2} />
                </button>

                <Link
                  href="/shop"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setMobileShopView("root");
                    setExpandedShopCategories({});
                  }}
                  className="font-roboto font-bold text-xs uppercase tracking-[0.2em] text-[#081757] hover:underline flex items-center gap-1.5 py-1 px-1 transition-all"
                >
                  <span>SHOP ALL</span>
                  <span className="text-sm font-bold leading-none">→</span>
                </Link>
              </div>

              <div className="pb-1 border-b border-[#EEEEEE]">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#081757] font-bold block">
                  SHOP BY DEPARTMENT
                </span>
              </div>

              {/* Primary SHOP Categories Tree */}
              <div className="space-y-2">
                {SHOP_CATEGORY_TREE.map((cat) => {
                  const isExpanded = !!expandedShopCategories[cat.id];

                  return (
                    <div
                      key={cat.id}
                      className="border border-[#E5E5E5] bg-white overflow-hidden transition-all duration-200"
                    >
                      {/* Main Category Accordion Header */}
                      <button
                        type="button"
                        onClick={() => toggleShopCategory(cat.id)}
                        aria-expanded={isExpanded}
                        className="w-full flex items-center justify-between px-4 py-3.5 text-xs font-roboto font-bold uppercase tracking-wider text-black bg-[#FAFAFA] hover:bg-neutral-100 active:bg-neutral-200 transition-colors cursor-pointer select-none text-left"
                      >
                        <span className="font-roboto font-bold text-black">{cat.name}</span>
                        <ChevronDown
                          size={16}
                          strokeWidth={2.2}
                          className={`transition-transform duration-200 text-[#081757] shrink-0 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Gracefully revealed sub-items */}
                      {isExpanded && (
                        <div className="border-t border-[#E5E5E5] bg-white animate-fade-in">
                          {/* Quick "ALL <CATEGORY>" Direct Link */}
                          <div className="p-2 border-b border-[#F5F5F5] bg-[#FCFCFC]">
                            <Link
                              href={`/shop?category=${encodeURIComponent(cat.slug || cat.name)}`}
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setMobileShopView("root");
                                setExpandedShopCategories({});
                              }}
                              className="w-full flex items-center justify-between px-3 py-1.5 font-roboto font-bold text-[11px] uppercase tracking-wider text-[#081757] hover:underline"
                            >
                              <span className="font-roboto font-bold text-[#081757]">ALL {cat.name}</span>
                              <span className="text-xs text-[#081757] font-bold">→</span>
                            </Link>
                          </div>

                          {/* Groups view for categories like CLOTHING (Ladies & Men's Wear) */}
                          {cat.groups && (
                            <div className="p-3 space-y-3">
                              {cat.groups.map((grp) => (
                                <div key={grp.groupName} className="space-y-1">
                                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#081757] px-2 block">
                                    {grp.groupName}
                                  </span>
                                  <div className="flex flex-col space-y-0.5 pl-2 border-l-2 border-[#EEEEEE]">
                                    {grp.items.map((subItem) => (
                                      <Link
                                        key={subItem}
                                        href={`/shop?category=${encodeURIComponent(subItem)}`}
                                        onClick={() => {
                                          setIsMobileMenuOpen(false);
                                          setMobileShopView("root");
                                          setExpandedShopCategories({});
                                        }}
                                        className="w-full flex items-center justify-between px-3 py-2 font-roboto font-bold text-xs uppercase tracking-wider text-[#081757] hover:bg-neutral-50 rounded-xs transition-colors group/sub"
                                      >
                                        <span className="font-roboto font-bold text-[#081757]">{subItem}</span>
                                        <span className="text-xs text-[#081757] opacity-60 group-hover/sub:opacity-100 transition-opacity font-bold">
                                          →
                                        </span>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Standard Subcategories list (e.g., GEMS, ANTIQUE, HOME WEAR, ACCESSORIES, PAINTINGS) */}
                          {cat.subCategories && (
                            <div className="p-2 flex flex-col space-y-0.5">
                              {cat.subCategories.map((subItem) => (
                                <Link
                                  key={subItem}
                                  href={`/shop?category=${encodeURIComponent(subItem)}`}
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setMobileShopView("root");
                                    setExpandedShopCategories({});
                                  }}
                                  className="w-full flex items-center justify-between px-3 py-2 font-roboto font-bold text-xs uppercase tracking-wider text-[#081757] hover:bg-neutral-50 rounded-xs transition-colors group/sub"
                                >
                                  <span className="font-roboto font-bold text-[#081757]">{subItem}</span>
                                  <span className="text-xs text-[#081757] opacity-60 group-hover/sub:opacity-100 transition-opacity font-bold">
                                    →
                                  </span>
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
