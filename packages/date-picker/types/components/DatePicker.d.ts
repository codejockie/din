import React from "react";
import "./DatePicker.css";
type CommonProps = {
    selectedDate?: Date;
    fontFamily?: string;
};
type TruncateProps = {
    calendar?: false;
    onChange(newDate: Date): void;
} | {
    calendar: true;
    onChange?: never;
};
type DatePickerProps = CommonProps & TruncateProps;
export declare const DatePicker: React.FC<DatePickerProps>;
export {};
