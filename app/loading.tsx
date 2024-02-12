export default function Loading() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex items-center justify-center w-20 h-20 border-t-4 border-b-4 border-primary rounded-full animate-spin"></div>
      <div>loading...</div>
    </div>
  );
}
