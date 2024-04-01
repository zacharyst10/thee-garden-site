import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function ArtificialDelay1() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
}
export async function ArtificialDelay3() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
}
