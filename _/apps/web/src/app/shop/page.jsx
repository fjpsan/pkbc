"use client";

import { useState } from "react";

export default function ShopPage() {
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [searchQuery, setSearchQuery] = useState("");

  const products = [
    {
      id: 1,
      name: "Better Books Collection",
      price: 29.99,
      category: "books",
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&h=800&fit=crop",
    },
    {
      id: 2,
      name: "PK Journal",
      price: 19.99,
      category: "books",
      image:
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=800&fit=crop",
    },
    {
      id: 3,
      name: "Knowledge Seeker Tee",
      price: 24.99,
      category: "merch",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop",
    },
    {
      id: 4,
      name: "Research Notebook",
      price: 14.99,
      category: "books",
      image:
        "https://images.unsplash.com/photo-1517842645767-c639042777db?w=600&h=800&fit=crop",
    },
    {
      id: 5,
      name: "PK Tote Bag",
      price: 16.99,
      category: "merch",
      image:
        "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&h=800&fit=crop",
    },
    {
      id: 6,
      name: "Curiosity Hoodie",
      price: 44.99,
      category: "merch",
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop",
    },
    {
      id: 7,
      name: "Science & Discovery Book",
      price: 34.99,
      category: "books",
      image:
        "https://images.unsplash.com/photo-1589998059171-988d887df646?w=600&h=800&fit=crop",
    },
    {
      id: 8,
      name: "PK Cap",
      price: 22.99,
      category: "merch",
      image:
        "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=800&fit=crop",
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory = category === "all" || product.category === category;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="bg-[#000000] font-panton min-h-screen">
      {/* Shop Intro Section */}
      <section className="max-w-[1400px] mx-auto px-6 py-16 border-b border-[#2F9E99]/20">
        <h1 className="text-[#FFFFFF] text-6xl font-bold uppercase tracking-wide mb-6">
          Shop
        </h1>
        <p className="text-[#BFBFBF] text-xl max-w-3xl">
          Explore our curated collection of books and merchandise designed for
          the curious mind.
        </p>
      </section>

      {/* Filtering Bar */}
      <section className="max-w-[1400px] mx-auto px-6 py-8 border-b border-[#2F9E99]/20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Category Filter */}
          <div>
            <label className="text-[#2F9E99] text-xs uppercase tracking-wide font-bold mb-2 block">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-[#000000] border border-[#2F9E99] text-[#FFFFFF] px-4 py-3 focus:outline-none focus:border-[#F28C18] transition-colors duration-300"
            >
              <option value="all">All Products</option>
              <option value="books">Books</option>
              <option value="merch">Merchandise</option>
            </select>
          </div>

          {/* Sort Filter */}
          <div>
            <label className="text-[#2F9E99] text-xs uppercase tracking-wide font-bold mb-2 block">
              Sort By
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full bg-[#000000] border border-[#2F9E99] text-[#FFFFFF] px-4 py-3 focus:outline-none focus:border-[#F28C18] transition-colors duration-300"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A-Z</option>
            </select>
          </div>

          {/* Search */}
          <div>
            <label className="text-[#2F9E99] text-xs uppercase tracking-wide font-bold mb-2 block">
              Search
            </label>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#000000] border border-[#2F9E99] text-[#FFFFFF] px-4 py-3 focus:outline-none focus:border-[#F28C18] transition-colors duration-300"
            />
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="overflow-hidden mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-[#FFFFFF] text-xl font-bold mb-2 group-hover:text-[#F28C18] transition-colors duration-300">
                {product.name}
              </h3>
              <p className="text-[#FFFFFF] text-lg mb-4">
                ${product.price.toFixed(2)}
              </p>
              <button className="w-full bg-[#F28C18] text-[#000000] py-3 px-6 font-bold uppercase tracking-wide text-sm hover:bg-[#F28C18]/90 transition-colors duration-300">
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[#BFBFBF] text-xl">
              No products found matching your criteria.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
