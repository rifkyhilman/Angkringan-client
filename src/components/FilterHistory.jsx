import { useState } from "react";
import { CalendarIcon, Search } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { Label } from "@/components/ui/label";



const FilterHistory = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
  
    return (
       <div className="flex bg-white p-5 mt-5 max-sm:flex-col">
            <Popover>
                <div className="w-1/2 mr-5">
                    <PopoverTrigger asChild >
                        <div>
                            <Label>Tanggal Mulai</Label>
                            <Button className="flex justify-between mt-2 w-full border-2 border-gray-200 text-gray-700">
                                {startDate ? format(startDate, "dd/MM/yyyy") : "Hari/Bulan/Tahun"}
                                <CalendarIcon className="w-4 h-4 text-black" />
                            </Button>
                        </div>
                    </PopoverTrigger>
                    <PopoverContent>
                        <Calendar mode="single" selected={startDate} onSelect={setStartDate} />
                    </PopoverContent>
                </div>
            </Popover>
            <Popover>
                <div className="w-1/2">
                    <PopoverTrigger asChild>
                        <div>
                            <Label>Tanggal Akhir</Label>
                            <Button className="flex justify-between mt-2 w-full border-2 border-gray-200 text-gray-700">
                                {endDate ? format(endDate, "dd/MM/yyyy") : "Hari/Bulan/Tahun"}
                                <CalendarIcon className="w-4 h-4 text-black" />
                            </Button>
                        </div>
                    </PopoverTrigger>
                    <PopoverContent>
                        <Calendar mode="single" selected={endDate} onSelect={setEndDate} />
                    </PopoverContent>
                </div>
            </Popover>
            <div className="flex items-end ml-5">
                <Button className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-3xl text-sm px-10 py-2.5 text-center">
                    <Search/>
                    Cari
                </Button>
            </div>
        </div>
    );
};

export default FilterHistory;