// Calendar.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Calendar as Component } from "./Calendar";

export default {
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
        required: true,
      },
      table: {
        defaultValue: {
          summary: "undefined",
        },
      },
    },
    shownDate: {
      control: "date",
      description: "The date visible on the calendar.",
      type: {
        name: "string",
        required: true,
      },
      table: {
        defaultValue: {
          summary: "undefined",
        },
      },
    },
    showHeader: {
      control: "boolean",
      description: "Toggles the header property. If `true` a header with the month is shown.",
      type: {
        name: "boolean",
        required: false,
      },
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    showYear: {
      control: "boolean",
      description: "Toggles the year property. If `true` the year is included in the header provided `showHeader` property is `true` as well.",
      type: {
        name: "boolean",
        required: false,
      },
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    onChange: {
      description: "Date selection handler."
    },
  },
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  selectedDate: new Date(),
  shownDate: new Date(),
  // onChange: (newDate) => {/*  */},
};

export const WithHeader = Template.bind({});
WithHeader.args = {
  selectedDate: new Date(),
  shownDate: new Date(),
  showHeader: true,
};

export const WithYear = Template.bind({});
WithYear.args = {
  selectedDate: new Date(),
  shownDate: new Date(),
  showHeader: true,
  showYear: true
};
