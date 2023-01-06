// Modal.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Modal as Component } from "./Modal";

export default {
  component: Component,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  argTypes: {
    title: {
      control: "text",
      description: "Event modal title."
    },
    themes: {
      control: "object",
      description: "Themes to select when an event is to be created.",
    },
  },
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Default = Template.bind({});
Default.args = {
  closeModal: () => {/*  */},
  title: "Add Event Details"
};
