import React from "react";
import LevelUpDisplay from "../components/Display/LevelUpDisplay/index.js";

export default {
  title: "LUDisplay",
  component: LevelUpDisplay,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  argTypes: {
    backgroundColor: { control: "color" },
  },
};
