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

export default function PlantDrawer() {
  return (
    <Drawer>
      <DrawerTrigger>Open</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

const images = [
  { image: blueberry, title: "Blueberry" },
  { image: onion, title: "Onion" },
  { image: pepper, title: "Pepper" },
  { image: tomato, title: "Tomato" },
  { image: raspberry, title: "Raspberry" },
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
            <CarouselItem className="md:basis-1/2 lg:basis-1/4 rounded-lg">
              <div className="p-1">
                <DrawerTrigger>
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
                <DrawerDescription>Add to garden</DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <Button>Submit</Button>
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
