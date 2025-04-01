import { Skeleton } from "@/components/ui/skeleton"

const LoaderDashboard = () => {
    return (
        <div className="container mx-auto max-sm:px-[3rem]">
            <section className="mt-3">
                <p>Halaman</p>
                <h1 className="font-bold">
                    DASHBOARD
                </h1>
            </section>
            <section className="mt-8 grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
                <div className="pt-3">
                    <Skeleton className= "h-[40px] w-[250px] mb-1"></Skeleton>
                    <Skeleton className="h-[60px] w-[250px]"></Skeleton>
                </div>   
                <div className="pt-3">
                    <Skeleton className= "h-[40px] w-[250px] mb-1"></Skeleton>
                    <Skeleton className="h-[60px] w-[250px]"></Skeleton>
                </div>  
                <div className="pt-3">
                    <Skeleton className= "h-[40px] w-[250px] mb-1"></Skeleton>
                    <Skeleton className="h-[60px] w-[250px]"></Skeleton>
                </div>  
                <div className="pt-3">
                    <Skeleton className= "h-[40px] w-[250px] mb-1"></Skeleton>
                    <Skeleton className="h-[60px] w-[250px]"></Skeleton>
                </div>  
            </section>
            <section className="mt-3 grid grid-cols-3 gap-5 max-lg:grid-cols-1">         
                <div className="flex flex-col my-5 col-span-2">
                    <Skeleton className="h-[60px] w-[750px] mb-1"></Skeleton>
                    <Skeleton className="h-[350px] w-[750px] mb-1"></Skeleton>
                    <Skeleton className="h-[60px] w-[750px]"></Skeleton>
                </div>
                <div className="flex flex-col my-5 ml-8">
                    <Skeleton className="h-[60px] w-[320px] mb-1"></Skeleton>
                    <Skeleton className="h-[410px] w-[320px]"></Skeleton>
                </div>
            </section>
        </div>
    )
}

export default LoaderDashboard;