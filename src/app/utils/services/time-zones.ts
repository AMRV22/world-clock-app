
const baseUrl = 'https://timeapi.io/api';

const fetchAvailableZones = async (): Promise<string[]> => {
    try {
        const res = await fetch('/mocks/zones.json');
        return res.json();
    } catch (error) {
        console.error(error);
        return [];
    }
};

export {
    fetchAvailableZones
};


