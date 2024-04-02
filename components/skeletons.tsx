import { Skeleton } from "./ui/skeleton";

export default function OrderInfoSkeleton() {
  return (
    <div className="flex">
      <Skeleton className="w-[592px] h-[150px]">
        <Skeleton className="h-[20px] w-[150px] rounded" /> {/* CardTitle */}
        <Skeleton className="h-[10px] w-[250px] mt-2 mb-4 rounded" />{" "}
        {/* CardDescription */}
        <Skeleton className="h-[40px] w-[150px] rounded" />{" "}
        {/* Button Placeholder */}
      </Skeleton>
      <Skeleton className="w-[288px] mx-5">
        <Skeleton className="h-[20px] w-[150px] rounded" /> {/* CardTitle */}
        <Skeleton className="h-[10px] w-[250px] mt-2 mb-4 rounded" />{" "}
        {/* CardDescription */}
        <Skeleton className="h-[40px] w-[150px] rounded" />{" "}
        {/* Button Placeholder */}
      </Skeleton>
      <Skeleton className="w-[288px]">
        <Skeleton className="h-[20px] w-[150px] rounded" /> {/* CardTitle */}
        <Skeleton className="h-[10px] w-[250px] mt-2 mb-4 rounded" />{" "}
        {/* CardDescription */}
        <Skeleton className="h-[40px] w-[150px] rounded" />{" "}
        {/* Button Placeholder */}
      </Skeleton>
    </div>
  );
}
