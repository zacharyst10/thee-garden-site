import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const plants = [
  {
    plantName: "Rose",
    scientificName: "Rosa spp.",
    preferredClimate: "Temperate",
    bloomingSeason: "Late spring to fall",
  },
  {
    plantName: "Lavender",
    scientificName: "Lavandula spp.",
    preferredClimate: "Mediterranean",
    bloomingSeason: "Summer",
  },
  {
    plantName: "Sunflower",
    scientificName: "Helianthus annuus",
    preferredClimate: "Warm",
    bloomingSeason: "Summer",
  },
  {
    plantName: "Tulip",
    scientificName: "Tulipa spp.",
    preferredClimate: "Temperate",
    bloomingSeason: "Spring",
  },
  {
    plantName: "Orchid",
    scientificName: "Orchidaceae",
    preferredClimate: "Tropical",
    bloomingSeason: "Varies",
  },
  {
    plantName: "Daffodil",
    scientificName: "Narcissus spp.",
    preferredClimate: "Temperate",
    bloomingSeason: "Spring",
  },
  {
    plantName: "Azalea",
    scientificName: "Rhododendron spp.",
    preferredClimate: "Temperate",
    bloomingSeason: "Spring",
  },
];

export default function Almanac() {
  return (
    <Table className="container">
      <TableCaption>A list of your plants in your Almanac.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[150px]">Plant Name</TableHead>
          <TableHead>Scientific Name </TableHead>
          <TableHead>Preferred Climate</TableHead>
          <TableHead className="text-right">Blooming Season</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {plants.map((plant) => (
          <TableRow key={plant.plantName}>
            <TableCell className="font-medium">{plant.plantName}</TableCell>
            <TableCell>{plant.scientificName}</TableCell>
            <TableCell>{plant.preferredClimate}</TableCell>
            <TableCell className="text-right">{plant.bloomingSeason}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">7</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
