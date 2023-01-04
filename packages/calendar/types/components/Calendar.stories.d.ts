import { ComponentStory, ComponentMeta } from "@storybook/react";
declare const _default: ComponentMeta<({ selectedDate, shownDate, showHeader, showYear, cellProps, headerProps, onChange, }: {
    selectedDate: Date;
    shownDate: Date;
    showHeader?: boolean | undefined;
    showYear?: boolean | undefined;
    cellProps?: {
        fontFamily?: string | undefined;
        selectedBg?: string | undefined;
        selectedColour?: string | undefined;
    } | undefined;
    headerProps?: {
        colour?: string | undefined;
        fontFamily?: string | undefined;
    } | undefined;
    onChange?(newDate: Date): void;
}) => JSX.Element>;
export default _default;
export declare const Default: ComponentStory<({ selectedDate, shownDate, showHeader, showYear, cellProps, headerProps, onChange, }: {
    selectedDate: Date;
    shownDate: Date;
    showHeader?: boolean | undefined;
    showYear?: boolean | undefined;
    cellProps?: {
        fontFamily?: string | undefined;
        selectedBg?: string | undefined;
        selectedColour?: string | undefined;
    } | undefined;
    headerProps?: {
        colour?: string | undefined;
        fontFamily?: string | undefined;
    } | undefined;
    onChange?(newDate: Date): void;
}) => JSX.Element>;
export declare const WithHeader: ComponentStory<({ selectedDate, shownDate, showHeader, showYear, cellProps, headerProps, onChange, }: {
    selectedDate: Date;
    shownDate: Date;
    showHeader?: boolean | undefined;
    showYear?: boolean | undefined;
    cellProps?: {
        fontFamily?: string | undefined;
        selectedBg?: string | undefined;
        selectedColour?: string | undefined;
    } | undefined;
    headerProps?: {
        colour?: string | undefined;
        fontFamily?: string | undefined;
    } | undefined;
    onChange?(newDate: Date): void;
}) => JSX.Element>;
export declare const WithYear: ComponentStory<({ selectedDate, shownDate, showHeader, showYear, cellProps, headerProps, onChange, }: {
    selectedDate: Date;
    shownDate: Date;
    showHeader?: boolean | undefined;
    showYear?: boolean | undefined;
    cellProps?: {
        fontFamily?: string | undefined;
        selectedBg?: string | undefined;
        selectedColour?: string | undefined;
    } | undefined;
    headerProps?: {
        colour?: string | undefined;
        fontFamily?: string | undefined;
    } | undefined;
    onChange?(newDate: Date): void;
}) => JSX.Element>;
