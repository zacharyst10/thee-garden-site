import Image from "next/image";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import blueberry from "@/public/plants/blueberry.jpg";
import onion from "@/public/plants/onion.jpg";
import pepper from "@/public/plants/pepper.jpg";
import tomato from "@/public/plants/tomato.jpg";
import raspberry from "@/public/plants/raspberry.jpg";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";

const images = [
  {
    image: blueberry,
    title: "Blueberry",
    fact: "Blueberries are perennial flowering plants with blue or purple berries. They are classified in the section Cyanococcus within the genus Vaccinium.",
  },
  {
    image: onion,
    title: "Onion",
    fact: "The onion, also known as the bulb onion or common onion, is a vegetable that is the most widely cultivated species of the genus Allium.",
  },
  {
    image: pepper,
    title: "Pepper",
    fact: "The chili pepper, from Nahuatl chīlli, is the fruit of plants from the genus Capsicum which are members of the nightshade family, Solanaceae.",
  },
  {
    image: tomato,
    title: "Tomato",
    fact: "The tomato is the edible berry of the plant Solanum lycopersicum, commonly known as a tomato plant.",
  },
  {
    image: raspberry,
    title: "Raspberry",
    fact: "The raspberry is the edible fruit of a multitude of plant species in the genus Rubus of the rose family, most of which are in the subgenus Idaeobatus.",
  },
];

export function PlantCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {images.map((image, index) => (
          <Drawer key={index}>
            <CarouselItem className="md:basis-1/2 lg:basis-1/4 rounded-lg ">
              <div className="p-1">
                <DrawerTrigger className="w-full h-full">
                  <Card className="p-0">
                    <CardContent className="flex p-0 aspect-square items-center rounded-lg justify-center w-full h-auto">
                      <Image
                        src={image.image}
                        alt="Plant"
                        className="object-cover w-full h-full rounded-lg"
                        placeholder="blur"
                      />
                    </CardContent>

                    <CardFooter className="flex justify-center text-5xl pt-5 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">
                      {image.title}
                    </CardFooter>
                  </Card>
                </DrawerTrigger>
              </div>
            </CarouselItem>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>{image.title}</DrawerTitle>
                <DrawerDescription>{image.fact}</DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <Button className=" max-w-xl mx-auto">Add to my garden</Button>
                <DrawerClose>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
