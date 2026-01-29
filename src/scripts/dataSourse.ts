import data from "../data.json";

type TPeriod = {
    "start": number,
    "end": number
}

type TEvent = {
    "year": number,
    "title"?: string,
    "text": string
}

export function getPeriods(): TPeriod[] {
    return data.periods as TPeriod[];
}

export function getEvents(): TEvent[] {
    return data.events as TEvent[];
}

export type TDataSourceFunc = () => TDisplayData[];

type TDisplayData = {
    "start": number,
    "end": number,
    "title": string,
    "events": TEvent[]
}

function getTitle(events: TEvent[]): string {
    let titles = new Set(events.map((e) => e.title))
    return titles.size === 1 ? events[0].title : ''
}

export function getDisplayData(): TDisplayData[] {
    let result: TDisplayData[] = [];
    getPeriods().forEach((period) => {        
        let start = period.start;
        let end = period.end;
        let events = getEvents().filter((event) => event.year >= start && event.year <= end);
        let title = getTitle(events);
        let data: TDisplayData = {
            start: start,
            end: end,
            events: events,
            title: title
        };
        result.push(data)
    })
    return result.sort((a, b) => a.start - b.start)
}
