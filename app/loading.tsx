import { LoaderPage } from "@/components/loader";

export default function Loading() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <LoaderPage size={200} />
      <div>loading...</div>
    </div>
  );
}
