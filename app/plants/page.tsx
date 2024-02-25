import PlantDrawer from "@/components/drawer";
import { PlantCarousel } from "@/components/plant-carousel";

export default function Plants() {
  return (
    <div className="container">
      <h1>Plants</h1>
      <p>Learn about the different types of plants or something!</p>
      <div className="container">
        <h1 className="text-6xl py-5">Fruits</h1>
        <PlantCarousel />
      </div>
      <div className="container">
        <h1 className="text-6xl py-5">Veggies</h1>
        <PlantCarousel />
      </div>
      <div className="container">
        <h1 className="text-6xl py-5">Herbs</h1>
        <PlantCarousel />
      </div>
      <div className="container">
        <h1 className="text-6xl py-5">Flowers</h1>
        <PlantCarousel />
      </div>
    </div>
  );
}
