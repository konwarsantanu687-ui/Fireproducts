"use client";
import { useState } from "react";

const products = [
  {
    id: 1,
    title: "Maybelline Fit Me Foundation",
    price: "₹499",
    category: "makeup",
    image: "https://m.media-amazon.com/images/I/61C+vC3gJhL._SX679_.jpg",
  },
  {
    id: 2,
    title: "Lakme Eyeconic Kajal",
    price: "₹210",
    category: "makeup",
    image: "https://m.media-amazon.com/images/I/51o6nZrM4PL._SX679_.jpg",
  },
  {
    id: 3,
    title: "Fastrack Analog Watch",
    price: "₹1,299",
    category: "watch",
    image: "https://m.media-amazon.com/images/I/61t5zC6xGEL._SX679_.jpg",
  },
  {
    id: 4,
    title: "Noise ColorFit Smart Watch",
    price: "₹1,999",
    category: "watch",
    image: "https://m.media-amazon.com/images/I/61ZjlBOp+rL._SX679_.jpg",
  },
];

export default function Home() {
  const [category, setCategory] = useState("all");

  const filtered =
    category === "all"
      ? products
      : products.filter(p => p.category === category);

  return (
    <div style={styles.body}>
      <header style={styles.header}>
        <h1 style={styles.logo}>🔥 FireProduct</h1>
        <input style={styles.search} placeholder="Search products..." />
      </header>

      <div style={styles.categories}>
        <button onClick={() => setCategory("all")}>All</button>
        <button onClick={() => setCategory("makeup")}>Makeup</button>
        <button onClick={() => setCategory("watch")}>Watches</button>
      </div>

      <div style={styles.grid}>
        {filtered.map(p => (
          <div key={p.id} style={styles.card}>
            <img src={p.image} style={styles.image} />
            <h3>{p.title}</h3>
            <p style={styles.price}>{p.price}</p>
            <button style={styles.button}>View Product</button>
          </div>
        ))}
      </div>

      <footer style={styles.footer}>
        © 2026 FireProduct · Product Showcase
      </footer>
    </div>
  );
}

const styles = {
  body: { background: "#f2f2f2", minHeight: "100vh", fontFamily: "Arial" },
  header: {
    background: "#131921",
    color: "#fff",
    padding: "15px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: { color: "#ff9900" },
  search: { padding: "8px 15px", borderRadius: 4, border: "none" },
  categories: { padding: 20, display: "flex", gap: 15 },
  grid: {
    padding: 30,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    gap: 25,
  },
  card: {
    background: "#fff",
    padding: 15,
    borderRadius: 10,
    boxShadow: "0 10px 20px rgba(0,0,0,.1)",
  },
  image: { width: "100%", height: 220, objectFit: "contain" },
  price: { color: "#b12704", fontWeight: "bold" },
  button: {
    width: "100%",
    padding: 10,
    background: "#ff9900",
    border: "none",
    borderRadius: 6,
    fontWeight: "bold",
    cursor: "pointer",
  },
  footer: {
    background: "#000",
    color: "#aaa",
    textAlign: "center",
    padding: 20,
    marginTop: 40,
  },
};
