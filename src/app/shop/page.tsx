"use client";

import React, { useState, useEffect, useMemo, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import {
  SHOP_CATEGORY_TREE,
  SHOP_PRODUCTS,
  ShopProduct,
  ShopCategoryNode,
} from "@/data/shopData";
import { useGallery } from "@/context/GalleryContext";
import {
  Search,
  Filter,
  SlidersHorizontal,
  LayoutGrid,
  List,
  ChevronDown,
  ChevronRight,
  X,
  ShieldCheck,
  Check,
} from "lucide-react";

function ShopContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categoryParam = searchParams.get("category");
  const { openEnquiry } = useGallery();

  // Filter States
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("ALL");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("relevance");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showSidebar, setShowSidebar] = useState<boolean>(true);
  const [expandedNodes, setExpandedNodes] = useState<{ [key: string]: boolean }>({
    "home-wear": true,
    accessories: true,
    gems: true,
    clothing: true,
    antique: true,
    paintings: true,
  });

  // Sync categoryParam from URL
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    } else {
      setSelectedCategory("ALL");
    }
  }, [categoryParam]);

  const toggleNode = (nodeId: string) => {
    setExpandedNodes((prev) => ({
      ...prev,
      [nodeId]: !prev[nodeId],
    }));
  };

  const handleSelectCategory = (catName: string) => {
    setSelectedCategory(catName);
    if (catName === "ALL") {
      router.push("/shop");
    } else {
      router.push(`/shop?category=${encodeURIComponent(catName)}`);
    }
  };

  const clearAllFilters = () => {
    setSelectedCategory("ALL");
    setSelectedPriceRange("ALL");
    setSearchTerm("");
    setSortBy("relevance");
    router.push("/shop");
  };

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    let result = [...SHOP_PRODUCTS];

    // Category / Sub-Category filtering
    if (selectedCategory !== "ALL") {
      const q = selectedCategory.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.primaryCategory.toLowerCase() === q ||
          p.subCategory.toLowerCase() === q ||
          (p.genderGroup && p.genderGroup.toLowerCase() === q)
      );
    }

    // Search term filtering
    if (searchTerm.trim() !== "") {
      const q = searchTerm.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.material.toLowerCase().includes(q) ||
          p.primaryCategory.toLowerCase().includes(q) ||
          p.subCategory.toLowerCase().includes(q) ||
          p.origin.toLowerCase().includes(q)
      );
    }

    // Price range filtering
    if (selectedPriceRange !== "ALL") {
      result = result.filter((p) => {
        const numPrice = parseInt(p.price.replace(/[^0-9]/g, "")) || 0;
        if (selectedPriceRange === "under-500") return numPrice < 500;
        if (selectedPriceRange === "500-2000") return numPrice >= 500 && numPrice <= 2000;
        if (selectedPriceRange === "2000-10000") return numPrice >= 2000 && numPrice <= 10000;
        if (selectedPriceRange === "above-10000") return numPrice > 10000;
        return true;
      });
    }

    // Sorting
    if (sortBy === "price-desc") {
      result.sort((a, b) => {
        const pa = parseInt(a.price.replace(/[^0-9]/g, "")) || 0;
        const pb = parseInt(b.price.replace(/[^0-9]/g, "")) || 0;
        return pb - pa;
      });
    } else if (sortBy === "price-asc") {
      result.sort((a, b) => {
        const pa = parseInt(a.price.replace(/[^0-9]/g, "")) || 0;
        const pb = parseInt(b.price.replace(/[^0-9]/g, "")) || 0;
        return pa - pb;
      });
    } else if (sortBy === "lot") {
      result.sort((a, b) => a.lotNumber.localeCompare(b.lotNumber));
    }

    return result;
  }, [selectedCategory, searchTerm, selectedPriceRange, sortBy]);

  // Category Highlights for Top Pill Cards
  const categoryCards = [
    { name: "HOME WEAR", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=400&q=85", count: "6 Lots" },
    { name: "ACCESSORIES", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=400&q=85", count: "6 Lots" },
    { name: "GEMS", image: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=400&q=85", count: "4 Lots" },
    { name: "CLOTHING", image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=400&q=85", count: "7 Lots" },
    { name: "ANTIQUE", image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=400&q=85", count: "4 Lots" },
    { name: "PAINTINGS", image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=400&q=85", count: "3 Lots" },
  ];

  return (
    <div className="w-full bg-white text-black min-h-screen pb-32">
      {/* ========================================================
          1. TOP EDITORIAL BANNER (Sotheby's Style)
      ======================================================== */}
      <section className="border-b border-[#E5E5E5] bg-[#FAFAFA] py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#666666] font-semibold block">
              THE CLOUD SALON & E-COMMERCE PLATFORM
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl text-black font-normal leading-tight">
              {selectedCategory === "ALL" ? "Private Sales & Store Collection" : selectedCategory}
            </h1>
            <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed">
              Curated masterworks, fine jewelry, rare unheated gemstones, tailored garments, and historical antiques available for immediate acquisition.
            </p>
          </div>

          {/* Quick Category Thumbnails Row (Sotheby's Reference) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-2">
            {categoryCards.map((cat) => {
              const isSelected = selectedCategory.toUpperCase() === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => handleSelectCategory(cat.name)}
                  className={`flex items-center gap-3 p-2 bg-white border transition-all text-left cursor-pointer group ${
                    isSelected
                      ? "border-black shadow-xs ring-1 ring-black"
                      : "border-[#E5E5E5] hover:border-black"
                  }`}
                >
                  <div className="relative w-12 h-12 flex-shrink-0 bg-neutral-100 overflow-hidden">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-roboto font-bold uppercase tracking-wider block text-black truncate">
                      {cat.name}
                    </span>
                    <span className="text-[9px] text-[#888888] tracking-wider block">
                      {cat.count}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          2. CONTROLS BAR (Breadcrumb, Results, Sort, Currency)
      ======================================================== */}
      <section className="sticky top-20 z-20 bg-white/95 backdrop-blur-md border-b border-[#E5E5E5] px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs">
          {/* Left: Breadcrumbs & Results count */}
          <div className="flex items-center space-x-2 text-[#666666]">
            <Link href="/shop" onClick={clearAllFilters} className="hover:text-black">
              Shop All
            </Link>
            {selectedCategory !== "ALL" && (
              <>
                <span>/</span>
                <span className="font-semibold text-black uppercase tracking-wider">
                  {selectedCategory}
                </span>
              </>
            )}
            <span className="text-[#888888]">·</span>
            <span className="text-black font-medium">{filteredProducts.length} Results</span>
          </div>

          {/* Right: Controls (Currency, Hide Filters, Sort, View mode) */}
          <div className="flex items-center space-x-3 sm:space-x-5">
            <span className="text-[10px] uppercase tracking-wider bg-[#FAFAFA] border border-[#E5E5E5] px-2 py-1 text-[#666666] font-medium hidden sm:inline-block">
              USD ($)
            </span>

            {/* Toggle Filters Button */}
            <button
              onClick={() => setShowSidebar(!showSidebar)}
              className="flex items-center gap-1.5 text-xs text-black border border-[#E5E5E5] hover:border-black px-3 py-1.5 transition-colors cursor-pointer"
            >
              <SlidersHorizontal size={13} />
              <span className="text-[11px] uppercase tracking-wider">
                {showSidebar ? "Hide Filters" : "Show Filters"}
              </span>
            </button>

            {/* Sort Selector */}
            <div className="relative flex items-center">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-[#E5E5E5] hover:border-black pl-3 pr-8 py-1.5 text-xs text-black uppercase tracking-wider cursor-pointer focus:outline-none"
              >
                <option value="relevance">Sort By: Relevance</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="lot">Sort By: Lot Number</option>
              </select>
              <ChevronDown size={12} className="absolute right-2.5 pointer-events-none text-black" />
            </div>

            {/* View Mode Toggle */}
            <div className="hidden sm:flex items-center border border-[#E5E5E5]">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-1.5 ${viewMode === "grid" ? "bg-black text-white" : "text-[#777777] hover:text-black"}`}
                aria-label="Grid View"
              >
                <LayoutGrid size={15} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-1.5 ${viewMode === "list" ? "bg-black text-white" : "text-[#777777] hover:text-black"}`}
                aria-label="List View"
              >
                <List size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. MAIN LAYOUT: SIDEBAR + PRODUCT GRID
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex gap-8 lg:gap-12 items-start">
          {/* ====================================================
              LEFT STICKY SIDEBAR (Category Tree & Filters)
          ==================================================== */}
          {showSidebar && (
            <aside className="w-full lg:w-72 flex-shrink-0 space-y-8 sticky top-36 bg-white self-start max-h-[calc(100vh-160px)] overflow-y-auto pr-2 border-r lg:border-r-0 lg:pr-0 border-[#E5E5E5]">
              {/* Category Search Input */}
              <div className="relative">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#888888]" />
                <input
                  type="text"
                  placeholder="Search in Shop..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs border border-[#E5E5E5] focus:border-black focus:outline-none placeholder:text-[#999999]"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-black"
                  >
                    <X size={13} />
                  </button>
                )}
              </div>

              {/* Category Tree Heading & Clear Button */}
              <div className="flex items-center justify-between pb-2 border-b border-black">
                <span className="text-[11px] font-roboto font-bold uppercase tracking-[0.2em] text-black">
                  CATEGORIES
                </span>
                {(selectedCategory !== "ALL" || selectedPriceRange !== "ALL" || searchTerm) && (
                  <button
                    onClick={clearAllFilters}
                    className="text-[10px] uppercase tracking-wider text-[#081757] hover:underline font-semibold"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {/* All Items Option */}
              <div>
                <button
                  onClick={() => handleSelectCategory("ALL")}
                  className={`w-full flex items-center justify-between text-xs py-1.5 transition-colors cursor-pointer ${
                    selectedCategory === "ALL"
                      ? "font-bold text-black border-l-2 border-black pl-2"
                      : "text-[#555555] hover:text-black pl-2"
                  }`}
                >
                  <span className="uppercase tracking-wider">ALL ITEMS</span>
                  <span className="text-[10px] text-[#888888]">({SHOP_PRODUCTS.length})</span>
                </button>
              </div>

              {/* Department Categories Tree */}
              <div className="space-y-4">
                {SHOP_CATEGORY_TREE.map((cat) => {
                  const isNodeExpanded = expandedNodes[cat.id];
                  const isCatSelected = selectedCategory.toUpperCase() === cat.name;

                  return (
                    <div key={cat.id} className="space-y-1.5">
                      {/* Parent Category Header */}
                      <div className="flex items-center justify-between group">
                        <button
                          onClick={() => handleSelectCategory(cat.name)}
                          className={`text-xs uppercase tracking-wider text-left transition-colors cursor-pointer flex-1 ${
                            isCatSelected
                              ? "font-bold text-[#081757]"
                              : "font-semibold text-black hover:text-[#081757]"
                          }`}
                        >
                          {cat.name}
                        </button>
                        <button
                          onClick={() => toggleNode(cat.id)}
                          className="p-1 text-[#888888] hover:text-black"
                          aria-label={`Toggle ${cat.name}`}
                        >
                          {isNodeExpanded ? <ChevronDown size={13} /> : <ChevronRight size={13} />}
                        </button>
                      </div>

                      {/* Sub-categories List */}
                      {isNodeExpanded && (
                        <div className="pl-2 border-l border-[#E5E5E5] space-y-1 pt-1 animate-fade-in">
                          {cat.subCategories &&
                            cat.subCategories.map((sub) => {
                              const isSubSelected = selectedCategory.toLowerCase() === sub.toLowerCase();
                              return (
                                <button
                                  key={sub}
                                  onClick={() => handleSelectCategory(sub)}
                                  className={`w-full text-left text-[11px] py-1 transition-colors block cursor-pointer ${
                                    isSubSelected
                                      ? "font-semibold text-[#081757] underline"
                                      : "text-[#666666] hover:text-black"
                                  }`}
                                >
                                  {sub}
                                </button>
                              );
                            })}

                          {/* Groups for CLOTHING */}
                          {cat.groups &&
                            cat.groups.map((group) => (
                              <div key={group.groupName} className="space-y-1 pt-2">
                                <span className="text-[10px] uppercase tracking-wider font-bold text-[#888888] block">
                                  {group.groupName}
                                </span>
                                <div className="pl-2 border-l border-[#EEEEEE] space-y-1">
                                  {group.items.map((sub) => {
                                    const isSubSelected = selectedCategory.toLowerCase() === sub.toLowerCase();
                                    return (
                                      <button
                                        key={sub}
                                        onClick={() => handleSelectCategory(sub)}
                                        className={`w-full text-left text-[11px] py-0.5 transition-colors block cursor-pointer ${
                                          isSubSelected
                                            ? "font-semibold text-[#081757] underline"
                                            : "text-[#666666] hover:text-black"
                                        }`}
                                      >
                                        {sub}
                                      </button>
                                    );
                                  })}
                                </div>
                              </div>
                            ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Price Filter Section */}
              <div className="pt-6 border-t border-[#E5E5E5] space-y-3">
                <span className="text-[11px] font-roboto font-bold uppercase tracking-[0.2em] text-black block">
                  PRICE RANGE
                </span>
                <div className="space-y-1.5 text-xs text-[#555555]">
                  {[
                    { label: "All Prices", val: "ALL" },
                    { label: "Under $500", val: "under-500" },
                    { label: "$500 – $2,000", val: "500-2000" },
                    { label: "$2,000 – $10,000", val: "2000-10000" },
                    { label: "Above $10,000", val: "above-10000" },
                  ].map((p) => (
                    <button
                      key={p.val}
                      onClick={() => setSelectedPriceRange(p.val)}
                      className={`w-full text-left py-1 flex items-center justify-between cursor-pointer ${
                        selectedPriceRange === p.val ? "font-bold text-black" : "hover:text-black"
                      }`}
                    >
                      <span>{p.label}</span>
                      {selectedPriceRange === p.val && <Check size={12} className="text-black" />}
                    </button>
                  ))}
                </div>
              </div>
            </aside>
          )}

          {/* ====================================================
              RIGHT CONTENT AREA (Product Grid)
          ==================================================== */}
          <main className="flex-1 w-full">
            {filteredProducts.length === 0 ? (
              <div className="p-16 border border-[#E5E5E5] bg-[#FAFAFA] text-center space-y-4">
                <p className="text-sm text-[#555555]">No products found matching your active filter criteria.</p>
                <button
                  onClick={clearAllFilters}
                  className="px-6 py-2.5 bg-black text-white text-xs uppercase tracking-widest font-medium hover:bg-[#222222] transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            ) : viewMode === "grid" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredProducts.map((product) => (
                  <article
                    key={product.id}
                    className="border border-[#E5E5E5] bg-white flex flex-col justify-between hover:border-black hover:shadow-lg transition-all duration-300 group"
                  >
                    <div>
                      {/* Product Image */}
                      <div className="relative aspect-square w-full overflow-hidden bg-[#FAFAFA] border-b border-[#E5E5E5]">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute top-3 left-3 bg-white px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-black border border-[#E5E5E5]">
                          {product.lotNumber}
                        </div>
                        {product.isNewArrival && (
                          <div className="absolute top-3 right-3 bg-black text-white px-2 py-0.5 text-[9px] uppercase tracking-wider font-semibold">
                            NEW
                          </div>
                        )}
                      </div>

                      {/* Card Content */}
                      <div className="p-5 space-y-2.5">
                        <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-[#666666]">
                          <span>{product.primaryCategory}</span>
                          <span>{product.origin}</span>
                        </div>

                        <h3 className="font-serif text-lg text-black font-normal leading-snug group-hover:underline line-clamp-2">
                          {product.title}
                        </h3>

                        <p className="text-xs text-[#555555] font-light line-clamp-2 leading-relaxed">
                          {product.description}
                        </p>

                        <p className="text-[11px] text-[#777777] pt-1">
                          <strong className="text-black font-medium">Material:</strong> {product.material}
                        </p>
                      </div>
                    </div>

                    {/* Price & Action */}
                    <div className="p-5 pt-0 border-t border-transparent group-hover:border-[#F0F0F0] mt-3">
                      <div className="pt-3 border-t border-[#EEEEEE] flex items-center justify-between">
                        <div>
                          <span className="text-[9px] uppercase tracking-wider text-[#777777] block">PRICE</span>
                          <span className="font-serif text-base font-semibold text-black">{product.price}</span>
                        </div>
                        <button
                          onClick={() =>
                            openEnquiry({
                              id: product.id,
                              lotNumber: product.lotNumber,
                              title: product.title,
                              artist: product.primaryCategory,
                              year: 2025,
                              medium: product.material,
                              dimensions: "Standard Curated Spec",
                              price: product.price,
                              estimate: product.estimate,
                              category: "Artworks",
                              image: product.image,
                              description: product.description,
                            })
                          }
                          className="px-4 py-2 border border-black text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-black hover:text-white transition-colors cursor-pointer"
                        >
                          Enquire Lot
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              /* LIST VIEW */
              <div className="space-y-4">
                {filteredProducts.map((product) => (
                  <article
                    key={product.id}
                    className="border border-[#E5E5E5] bg-white p-4 sm:p-6 flex flex-col sm:flex-row gap-6 hover:border-black transition-all group"
                  >
                    <div className="relative w-full sm:w-48 h-48 flex-shrink-0 bg-neutral-100 overflow-hidden border border-[#EEEEEE]">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between space-y-2">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-[#666666]">
                          <span className="font-semibold text-black">{product.lotNumber}</span>
                          <span>·</span>
                          <span>{product.primaryCategory}</span>
                          <span>·</span>
                          <span>{product.origin}</span>
                        </div>
                        <h3 className="font-serif text-xl text-black font-normal leading-snug group-hover:underline">
                          {product.title}
                        </h3>
                        <p className="text-xs text-[#555555] font-light leading-relaxed max-w-2xl">
                          {product.description}
                        </p>
                        <p className="text-xs text-[#777777] pt-1">
                          <strong className="text-black font-medium">Material:</strong> {product.material}
                        </p>
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-[#EEEEEE]">
                        <div>
                          <span className="text-[10px] text-[#888888] uppercase block">VALUATION</span>
                          <span className="font-serif text-lg font-semibold text-black">{product.price}</span>
                        </div>
                        <button
                          onClick={() =>
                            openEnquiry({
                              id: product.id,
                              lotNumber: product.lotNumber,
                              title: product.title,
                              artist: product.primaryCategory,
                              year: 2025,
                              medium: product.material,
                              dimensions: "Standard Curated Spec",
                              price: product.price,
                              estimate: product.estimate,
                              category: "Artworks",
                              image: product.image,
                              description: product.description,
                            })
                          }
                          className="px-6 py-2.5 bg-black text-white hover:bg-[#222222] text-xs uppercase tracking-widest font-medium transition-colors"
                        >
                          Enquire / Acquire
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </main>
        </div>
      </section>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <ShopContent />
    </Suspense>
  );
}
