"use client"
import AutoCompleteComponent from "./components/AutoCompleteComponent/AutoCompleteComponent";
import ClockComponent from "./components/ClockComponent/ClockComponent";
import { useQuery } from "@tanstack/react-query";
import { useGlobalContext } from './context/StoreProvider';
import { fetchAvailableZones } from "./utils/services/time-zones";
import IAutoComplete from "@/app/utils/types/autocomplete";
import { useCallback } from "react";


export default function Home() {

  const { setZone, zone, timeZone, setTimeZone } = useGlobalContext();

  const { isPending, error, data } = useQuery({
    queryKey: ["zones"],
    queryFn: fetchAvailableZones
  })

  const handleZoneChange = useCallback((newZone: IAutoComplete[]) => {
    setZone(newZone);
  }, [setZone]);


  const zones = data?.map((zone: string, index: number) => ({ id: index, name: zone })) || [];
  return (
    <main className="flex min-h-screen flex-col  p-24">
      <h1 className="text-8xl font-bold text-center text-white">
        World timezone app
      </h1>
      <div className="pt-8">
        <AutoCompleteComponent options={zones} onChange={handleZoneChange} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-12">
        <ClockComponent />
      </div>
    </main>
  );
}
