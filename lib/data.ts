export interface Product {
  id: number;
  name: string;
  color: string;
  size: string;
  price: number;
  imageSrc: string;
  imageAlt: string;
  description: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Studio Sneaker 01",
    color: "Bone White",
    size: "42",
    price: 245.0,
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAYjfTvFi_qcXExosCYww937h4wUwxZToS4j77_gUEKNvpoiGBIlol2ZPQ0bWafcVLVUK48GhIj4t35lxeuKgx065LMld_RztNfpMetw6PHl8e1rRxRTYBe1bMUA0gbiUXPSq7h2mPEFhy0a-3G-i5pQ_-qFISWDy2eWzfQDGpMzx68IqLsayVrJ_YO3EWZZNnwwa5xzU5jd4B32kxpOUcGow_Bpu6-6xO6BmKoLr_eb1K9ZLtoad60e50iiRNSkPiFfBP6FrXfF3Q",
    imageAlt: "Modern beige leather minimalist sneakers on soft background",
    description: "Minimalist leather sneakers designed for everyday comfort and premium style.",
  },
  {
    id: 2,
    name: "Loro Piana Overcoat",
    color: "Charcoal",
    size: "L",
    price: 1890.0,
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAxgy-Q7KneO_oZeJ13Z2q8SJNaUkUUTSBK2stMd6hfUoo2dqJAsjvIMTk6Baxt5keY8cJq4XeVlGHrLGd-qUTX0os3yao1p0gedxfC0YFfZJTAdjzneTSA23fTPMZrg0CJHOtbkhl99vqtih7Nnd_2DFSjhfyFHkShNwzDRiBi0YTn9-8eyETEcfkcfOVUkeaDICdyTP-R2yzrcQVTWbSx7z5gMe6H1zx_GKNeLOgkIhh0XtJJwSQW0ZxNLXxZbvtm6XWiizOzfdM",
    imageAlt: "High-end charcoal wool overcoat detail texture",
    description: "A timeless outerwear masterpiece crafted from the finest wool and cashmere blend.",
  },
  {
    id: 3,
    name: "Classic Leather Tote",
    color: "Caramel",
    size: "One Size",
    price: 350.0,
    imageSrc:
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Elegant caramel brown leather tote bag",
    description: "Spacious and durable day-to-day tote bag with a minimalist design and soft leather finish.",
  },
  {
    id: 4,
    name: "Essential Linen Shirt",
    color: "Natural",
    size: "M",
    price: 125.0,
    imageSrc:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Breathable natural white linen button-down shirt",
    description: "Effortless, breezy styling suitable for warm weather and refined casual events.",
  },
  {
    id: 5,
    name: "Minimalist Chronograph",
    color: "Silver/Black",
    size: "40mm",
    price: 495.0,
    imageSrc:
      "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Sleek minimalist analog watch",
    description: "Precision-engineered timepiece with a matte silver finish and premium leather strap.",
  },
  {
    id: 6,
    name: "Cashmere Scarf",
    color: "Camel",
    size: "Standard",
    price: 185.0,
    imageSrc:
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Soft luxurious camel cashmere scarf",
    description: "Ultra-soft, lightweight 100% cashmere scarf perfect for brisk mornings and elegant layering.",
  },
  {
    id: 7,
    name: "Signature Aviator Sunglasses",
    color: "Gold/Green",
    size: "One Size",
    price: 210.0,
    imageSrc:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Classic aviator sunglasses",
    description: "Polarized lenses with a timeless gold frame, offering 100% UV protection and undeniable style.",
  },
  {
    id: 8,
    name: "Weekender Travel Duffle",
    color: "Olive Green",
    size: "Large",
    price: 280.0,
    imageSrc:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Durable canvas and leather travel bag",
    description: "Heavy-duty canvas paired with full-grain leather accents. The perfect companion for short trips.",
  }
];
