"use client";
import { useStore } from "@/app/stores/my-garden";

export default function Journal() {
  const { titles } = useStore();

  return (
    <div className="container">
      <h1>My Garden Journal</h1>
      <ul>
        {titles.map((title, index) => (
          <li key={index}>
            <h2>{title}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}
