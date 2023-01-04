import { FC } from "react";
type WrapperProps = {
    colour?: string;
    fontFamily?: string;
    textTransform?: "none" | "capitalize" | "uppercase" | "lowercase" | "full-width" | "full-size-kana";
};
type CalendarHeaderProps = {
    date: Date;
    className?: string;
    showHeader?: boolean;
    showYear?: boolean;
} & WrapperProps;
export declare const CalendarHeader: FC<CalendarHeaderProps>;
export {};
