type CalendarProps = {
    selectedDate: Date;
    shownDate: Date;
    showHeader?: boolean;
    showYear?: boolean;
    cellProps?: {
        fontFamily?: string;
        selectedBg?: string;
        selectedColour?: string;
    };
    headerProps?: {
        colour?: string;
        fontFamily?: string;
    };
    onChange?(newDate: Date): void;
};
export declare const Calendar: ({ selectedDate, shownDate, showHeader, showYear, cellProps, headerProps, onChange, }: CalendarProps) => JSX.Element;
export {};
