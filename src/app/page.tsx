"use client";
import AutoCompleteComponent from "./components/AutoCompleteComponent";
import ClockComponentContainer from "./components/ClockComponentContainer";
import { useQuery } from "@tanstack/react-query";
import { useGlobalContext } from "./context/StoreProvider";
import { fetchAvailableZones } from "./utils/services/time-zones";
import IAutoComplete from "@/app/utils/types/autocomplete";
import { useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { RiLoader4Fill } from "@remixicon/react";
import React,{ useEffect, Suspense } from "react";

const Home =()  => {
  const router = useRouter();

  const searchParams = useSearchParams();

  const search = searchParams.getAll("timeZone");

  const { setZone, zone } = useGlobalContext();

  const { data } = useQuery({
    queryKey: ["zones"],
    queryFn: fetchAvailableZones,
  });

  const handleZoneChange = (newZone: IAutoComplete[]) => {
    let queryParams = search.length > 0 ? `${search.join("&")}` : "";

    if (newZone.length > 0) {
        const zone_params = newZone.map((zone) => `timeZone=${zone.name}`).join("&");
        router.push(`/?${zone_params}${queryParams ? '' : ''}`);
    } else {
        // Remove all 'timeZone' parameters from the URL
        queryParams = '';
        router.push(`/?${queryParams}`);
    }
};

  const assignZone = useCallback(() => {
    const zoneArray = search.map((zone, index) => ({
      id: index,
      name: zone,
    }));
    return zoneArray;
  }, [search]);

  useEffect(() => {
    const newZoneArray = assignZone();
    if (JSON.stringify(zone) !== JSON.stringify(newZoneArray)) {
      setZone(newZoneArray);
    }
  }, [assignZone]);

  const zones =
    data?.map((zone: string, index: number) => ({ id: index, name: zone })) ||
    [];

  return (
    <main className="flex min-h-screen flex-col  p-24">
      <h1 className="text-8xl font-bold text-center text-white">
        World timezone app
      </h1>
      <div className="pt-8">
        <AutoCompleteComponent options={zones} onChange={handleZoneChange} />
      </div>

      <ClockComponentContainer />
    </main>
  );
}

export default function PageWithSuspense() {
  return (
    <Suspense fallback={<div><RiLoader4Fill className="animate-spin text-6xl text-blue-50" /></div>}>
      <Home />
    </Suspense>
  );
}
