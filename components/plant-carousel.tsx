import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
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

const images = [blueberry, onion, pepper, tomato, raspberry];

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
          <CarouselItem
            key={index}
            className="md:basis-1/2 lg:basis-1/4 rounded-lg"
          >
            <div className="p-1">
              <Card className="p-0">
                <CardContent className="flex p-0 aspect-square items-center rounded-lg justify-center w-full h-auto">
                  <Image
                    src={image}
                    alt="Plant"
                    className="object-cover w-full h-full rounded-lg"
                    placeholder="blur"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
