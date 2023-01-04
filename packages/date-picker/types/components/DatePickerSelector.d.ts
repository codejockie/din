type SelectorProps = {
    fontFamily?: string;
};
type DatePickerSelectorProps = {
    date: Date;
    setDate(newDate: Date): void;
} & SelectorProps;
export declare const DatePickerSelector: ({ date, fontFamily, setDate, }: DatePickerSelectorProps) => JSX.Element;
export {};
