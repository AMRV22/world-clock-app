import ITimeZoneResponse from "../interfaces/time-zone-response";

const fetchAvailableZones = async (): Promise<string[]> => {
    try {
        const res = await fetch('/mocks/zones.json');
        return res.json();
    } catch (error) {
        console.error(error);
        return [];
    }
};

const fetchTimeZone = async (zone_params:string): Promise<ITimeZoneResponse> => {
    try {
        const res = await fetch(`https://timezoneapi.io/api/timezone/?${zone_params}&token=aUAmExrwzzgfSiBHumAx`);
        return res.json();
    } catch (error) {
        console.error(error);
        throw(error)
    }
}

export {
    fetchAvailableZones,
    fetchTimeZone
};


