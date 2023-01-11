// FullCalendar.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FullCalendar as Component } from "./FullCalendar";

export default {
  component: Component,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  argTypes: {
    date: {
      control: "date",
      description: "Date to show on the calendar.",
    },
    events: {
      control: "object",
      description: "Events to render on the calendar dates.",
    },
  },
} as ComponentMeta<typeof Component>;

export const Default: ComponentStory<typeof Component> = (args) => (
  <Component {...args} date={new Date(args.date)} />
);

const date = new Date();

// Theme colours
/*
  Tomato: rgb(213, 0, 0)
  Flamingo: rgb(230, 124, 115)
  Tangerine: rgb(244, 81, 30)
  Banana: rgb(246, 191, 38)
  Sage: rgb(51, 182, 121)
  Basil: rgb(11, 128, 67)
  Peacock: rgb(3, 155, 229)
  Blueberry: rgb(63, 81, 181)
  Lavender: rgb(121, 134, 203)
  Grape: rgb(142, 36, 170)
  Graphite: rgb(97, 97, 97)
 */

const events = [
  {
    date,
    title: "Hiking Day",
    theme: "rgb(51, 182, 121)",
  },
  {
    date,
    title: "Doe's Birthday",
    theme: "rgb(3, 155, 229)",
  },
  {
    date,
    title: "Jean's Birthday",
    theme: "tomato",
  },
  {
    date: new Date(date.getFullYear(), date.getMonth(), 25),
    title: "Snowboarding",
    theme: "rgb(121, 134, 203)",
  },
];

Default.args = {
  date,
  events,
  addEvent(newEvent) {
    events?.push(newEvent as any);
  },
};
Default.argTypes = {
  locale: {
    control: false,
    table: {
      disable: true,
    },
  },
};

export const Localised: ComponentStory<typeof Component> = (args) => (
  <Component {...args} date={new Date(args.date)} />
);

Localised.args = {
  date,
  events,
  locale: "ja-JP",
  addEvent(newEvent) {
    events?.push(newEvent as any);
  },
};
