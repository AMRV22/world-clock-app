import React, { useEffect, useCallback } from "react";
import ClockComponent from "../ClockComponent";
import { useQuery } from "@tanstack/react-query";
import { useGlobalContext } from "../../context/StoreProvider";
import { fetchTimeZone } from "../../utils/services/time-zones";


const MemoizedClockComponent = React.memo(ClockComponent);

const ClockComponentContainer = () => {
  const { zone, timeZone, setTimeZone } = useGlobalContext();

  const lastZone = zone[zone.length - 1];

  const { data, isPending, isSuccess } = useQuery({
    queryKey: ["time-zones", ...zone],
    queryFn: useCallback(() => {
      if (zone.length === 0) {
        return Promise.reject(new Error("No well zone"));
      }
      const zoneExists = timeZone.some(
        (tz) => tz.timezone && tz.timezone.id === lastZone.name
      );
      if (!zoneExists) {
        return fetchTimeZone(lastZone.name);
      }
      return Promise.resolve(null);
    }, [zone, timeZone, lastZone]),
    enabled: zone.length > 0,
    refetchInterval: false,
  });

  useEffect(() => {
    if (isSuccess && data !== null) {
      setTimeZone((prevTimeZone) => [...prevTimeZone, data.data]);
    }
  }, [data]);

  useEffect(() => {
    const updatedTimeZone = timeZone.filter((tz) =>
      zone.some((z) => z.name === (tz.timezone?.id ?? ""))
    );
    setTimeZone(updatedTimeZone);
  }, [zone]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-12">
      {timeZone.map((zone, index) => (
        <div
          className="flex flex-col h-full bg-gradient-to-t from-blue-400  to-blue-800  rounded-lg "
          key={index}>
          <MemoizedClockComponent data={zone} />
        </div>
      ))}
    </div>
  );
};

export default ClockComponentContainer;