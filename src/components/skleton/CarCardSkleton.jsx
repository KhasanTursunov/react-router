function CarCardSkleton() {
  
  return (
    <div className="w-full max-w-sm rounded-md border border-gray-300 p-4">
      <div className="flex flex-col animate-pulse gap-4">
        <div className="w-full h-40 rounded-md bg-gray-200"></div>
        <div className="w-full grid grid-cols-2 gap-4">
          <div className="h-4 rounded bg-gray-200"></div>
          <div className="h-4 rounded bg-gray-200"></div>
          <div className="h-4 rounded bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
}

export default CarCardSkleton;
