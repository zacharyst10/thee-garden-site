import React from "react";

export default function Home() {
  return (
    <main className="container pt-20">
      <h1>Welcome to the Garden Site!</h1>
      <p>Explore the beauty of nature and discover the joy of gardening.</p>
      <button>Get Started</button>
      <section>
        <h2>Featured Plants</h2>
        <ul>
          <li>Rose</li>
          <li>Sunflower</li>
          <li>Tulip</li>
        </ul>
      </section>
      <section>
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          auctor, nunc id aliquam tincidunt, velit nunc lacinia nunc, id lacinia
          nunc urna id lectus.
        </p>
      </section>
    </main>
  );
}
