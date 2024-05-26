import { Skeleton } from '@/components/ui/skeleton';

const ProductListSkeleton = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
      <div className="flex flex-col">
        <Skeleton className="h-[220px] w-full] rounded-xl" />
        <div className="space-y-2 mt-4">
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-4 w-[100px]" />
        </div>
      </div>
      <div className="flex flex-col">
        <Skeleton className="h-[220px] w-full] rounded-xl" />
        <div className="space-y-2 mt-4">
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-4 w-[100px]" />
        </div>
      </div>
      <div className="flex flex-col">
        <Skeleton className="h-[220px] w-full] rounded-xl" />
        <div className="space-y-2 mt-4">
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-4 w-[100px]" />
        </div>
      </div>
      <div className="flex flex-col">
        <Skeleton className="h-[220px] w-full] rounded-xl" />
        <div className="space-y-2 mt-4">
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-4 w-[100px]" />
        </div>
      </div>
      <div className="flex flex-col">
        <Skeleton className="h-[220px] w-full] rounded-xl" />
        <div className="space-y-2 mt-4">
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-4 w-[100px]" />
        </div>
      </div>
      <div className="flex flex-col">
        <Skeleton className="h-[220px] w-full] rounded-xl" />
        <div className="space-y-2 mt-4">
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-4 w-[100px]" />
        </div>
      </div>
      <div className="flex flex-col">
        <Skeleton className="h-[220px] w-full] rounded-xl" />
        <div className="space-y-2 mt-4">
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-4 w-[100px]" />
        </div>
      </div>
      <div className="flex flex-col">
        <Skeleton className="h-[220px] w-full] rounded-xl" />
        <div className="space-y-2 mt-4">
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-4 w-[100px]" />
        </div>
      </div>
    </div>
  );
};

export default ProductListSkeleton;
