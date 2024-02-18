import PlantDrawer from "@/components/drawer";
import { PlantCarousel } from "@/components/plant-carousel";

export default function Plants() {
  return (
    <div className="container">
      <h1>Plants</h1>
      <p>Learn about the different types of plants or something!</p>
      <div className="container">
        <PlantCarousel />
      </div>
    </div>
  );
}
