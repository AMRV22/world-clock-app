interface ITimeZone {
    timezone?: {
        id:string, 
        capital:string,
        location: string,
        country_name : string
    },
    datetime?: {
        date_time_txt:string,
        date_time_ymd: string,
    },
}

export default ITimeZone;