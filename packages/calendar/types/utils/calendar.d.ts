type Cell = {
    day: number;
    muted: boolean;
    isWeekend: boolean;
    disabled: boolean;
    value: Date;
};
export declare const getCalendarDateRows: (date: Date) => Cell[][];
export {};
