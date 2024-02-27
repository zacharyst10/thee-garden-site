"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Pea from "@/public/icons/peas.png";

type ZoneData = {
  zone: string;
  temperature_range: string;
  coordinates: {
    lat: number;
    lon: number;
  };
};

type LocationResponse = {
  address: {
    town: string;
  };
};

export default function ZoneFinder() {
  const [zoneData, setZoneData] = useState<ZoneData | null>(null);
  const [inputZip, setInputZip] = useState("");
  const [city, setCity] = useState<string | null>(null);

  const handleSubmit = () => {
    fetch(`https://phzmapi.org/${inputZip}.json`)
      .then((response) => response.json())
      .then((data: ZoneData) => {
        setZoneData(data);

        if (data.coordinates) {
          fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${data.coordinates.lat}&lon=${data.coordinates.lon}`
          )
            .then((response) => response.json())
            .then((locationData: LocationResponse) => {
              setCity(locationData.address.town);
            })
            .catch((error) => console.error("Error:", error));
        }
      })
      .catch((error) => console.error("Error:", error));

    setInputZip(inputZip);
    setInputZip("");
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="flex items-center ">
            <Image
              src={Pea}
              alt="Pea"
              width={75}
              height={75}
              className="mr-5"
            />
            <div>
              <p className="text-base font-semibold leading-7 text-green8">
                Find your zone!
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                USDA Hardiness Zones
              </h1>
            </div>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
            <div>
              <p>
                USDA hardiness zones are a standardized classification system
                used to determine the suitability of plants for specific regions
                based on their ability to withstand the average minimum winter
                temperatures.
              </p>
              <p className="mt-8">
                Knowing the USDA hardiness zone for your area helps you select
                plants that are most likely to thrive in your climate. It allows
                you to make informed choices about what to plant in your garden
                or landscape, increasing the chances of successful growth and
                reducing the risk of plants being damaged or killed by extreme
                cold temperatures.
              </p>
            </div>
            <div>
              <p>
                If you&apos;re interested, you can find out more information
                here if you care:{" "}
                <Link href="https://planthardiness.ars.usda.gov">
                  USDA Hardiness Website
                </Link>
              </p>
              <p className="mt-8">
                <div className=" flex w-[300px] flex-col  text-center ">
                  <h1 className="p-4">Zone Finder</h1>
                  <div className="mt-5 justify-center">
                    <input
                      className="selection:color-white inline-flex h-[35px] w-[200px] appearance-none items-center justify-center rounded-[4px] bg-white px-[10px] text-[15px] leading-none text-black outline-none"
                      type="text"
                      placeholder="Enter Zip Code"
                      value={inputZip}
                      onChange={(e) => setInputZip(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          if (inputZip !== "") {
                            handleSubmit();
                          }
                        }
                      }}
                    />
                    <button
                      className="m-3 inline-flex h-[35px] cursor-default items-center justify-center rounded bg-green4 px-[15px] text-[15px] font-medium leading-none text-green11 outline-none hover:bg-green5 focus:shadow-[0_0_0_2px] focus:shadow-green7"
                      onClick={handleSubmit}
                    >
                      Find Zone
                    </button>
                  </div>
                  {zoneData && (
                    <div>
                      Your Zone is: {zoneData.zone}
                      <div>
                        Your temperature range is: {zoneData.temperature_range}
                      </div>
                      <div>{city && <div>City: {city}</div>}</div>
                    </div>
                  )}
                </div>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
