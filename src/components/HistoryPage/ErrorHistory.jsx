import {TriangleAlert} from "lucide-react";

const ErrorHistory = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-red-700">
                <TriangleAlert className="h-[150px] w-[150px] ml-10 mb-5"/>
                <div className="text-2xl">
                    <h1>Server Bermasalah !</h1>
                </div>
            </div>
        </div>
    )
}

export default ErrorHistory;