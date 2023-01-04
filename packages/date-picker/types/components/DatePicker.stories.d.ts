import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DatePicker as Component } from "./DatePicker";
declare const _default: ComponentMeta<React.FC<{
    selectedDate?: Date | undefined;
    fontFamily?: string | undefined;
} & ({
    calendar?: false | undefined;
    onChange(newDate: Date): void;
} | {
    calendar: true;
    onChange?: undefined;
})>>;
export default _default;
export declare const Primary: ComponentStory<React.FC<{
    selectedDate?: Date | undefined;
    fontFamily?: string | undefined;
} & ({
    calendar?: false | undefined;
    onChange(newDate: Date): void;
} | {
    calendar: true;
    onChange?: undefined;
})>>;
export declare const Calendar: ComponentStory<typeof Component>;
export declare const DatePicker: ComponentStory<typeof Component>;
