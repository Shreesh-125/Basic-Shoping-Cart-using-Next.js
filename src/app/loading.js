import { Skeleton } from "@/components/ui/skeleton"


function Loading() {
  return (
    <div className="flex justify-center items-center mt-10">
      <Skeleton className="animate-spin border-t-4 border-gray-500 border-solid w-12 h-12 rounded-full " />
    </div>
    

  )
}

export default Loading