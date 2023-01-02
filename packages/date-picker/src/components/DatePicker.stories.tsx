// DatePicker.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { DatePicker as Component } from "./DatePicker";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Date Picker",
  component: Component,
  parameters: {
    controls: { hideNoControlsWarning: true }
  },
  argTypes: {
    selectedDate: {
      control: "date",
      description: "The currently selected date.",
      type: {
        name: "string",
        required: false,
      },
      table: {
        defaultValue: {
          summary: "undefined",
        },
        // type: {
        //   summary: "Something short",
        //   detail: "Something really really long",
        // },
      },
    },
    calendar: {
      control: "boolean",
      description:
        "Determines whether to render a calendar or a date picker. When true, a calendar is rendered.",
      defaultValue: undefined,
      table: {
        defaultValue: {
          summary: "undefined",
        },
      },
    },
    onChange: {
      if: { arg: "calendar", neq: true },
    },
  },
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  selectedDate: new Date(),
  calendar: true,
  // onChange: (newDate) => {/*  */},
};

export const Calendar: ComponentStory<typeof Component> = () => (
  <Component calendar={true} />
);

export const DatePicker: ComponentStory<typeof Component> = () => (
  <Component onChange={() => {}} />
);
