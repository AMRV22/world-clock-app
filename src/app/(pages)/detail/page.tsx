"use client";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import MapComponent from "@/app/components/MapComponent";
import { useQuery } from "@tanstack/react-query";
import { fetchTimeZone } from "../../utils/services/time-zones";
import TimeZone from "../../utils/interfaces/time-zone";
import { InfoContainer, MapContainer } from "./styles";
import { format } from "date-fns";
import { RiLoader4Fill } from "@remixicon/react";
import { useRouter, useSearchParams } from "next/navigation";

const Page = () => {
  const [currentZone, setCurrentZone] = useState<TimeZone>({});

  const router = useRouter();
  const searchParams = useSearchParams();

  const search = searchParams.get("zone") || "";

  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ["zone"],
    queryFn: () => fetchTimeZone(search),
    enabled: !!search,
    refetchInterval: false,
  });

  useEffect(() => {
    if (isSuccess && data !== null) {
      setCurrentZone(data.data);
    }
  }, [data]);

  const { datetime, timezone } = currentZone;

  const formattedDateTxt = useMemo(() => {
    return datetime?.date_time_txt
      ? format(datetime?.date_time_txt, "PPPPP")
      : "";
  }, [datetime]);

  const formattedTimeTxt = useMemo(() => {
    return datetime?.date_time_txt ? format(datetime?.date_time_txt, "p") : "";
  }, [datetime]);

  const location = useMemo(() => {
    return timezone?.location ? timezone.location.split(",").map(Number) : [];
  }, [timezone]);

  const goBack = useCallback(() => {
    router.back();
  }, [router]);

  if (isLoading)
    return (
      <div>
        <RiLoader4Fill className="animate-spin text-6xl text-blue-50" />
      </div>
    );

  return (
    <div className="flex flex-wrap align-center pt-24">
      <InfoContainer>
        <span className="text-2xl font-semibold text-blue-50  break-words text-center">
          {timezone?.id}
        </span>
        <p className="text-xl font-semibold text-center text-white">
          Country: {timezone?.country_name}
        </p>
        <p className="text-xl font-semibold text-center text-white">
          Capital: {timezone?.capital}
        </p>
        <p className="text-xl text-blue-50 text-center">{formattedDateTxt}</p>
        <p className="text-xl text-blue-50 text-center">{formattedTimeTxt}</p>
        <div className="my-4 flex justify-center">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={goBack}>
            Go back
          </button>
        </div>
      </InfoContainer>
      <MapContainer>
        {location.length === 2 ? (
          <MapComponent location={location} />
        ) : (
          <div className="text-xl text-blue-50 text-center">Location data not available</div>
        )}
      </MapContainer>
    </div>
  );
};

export default Page;
