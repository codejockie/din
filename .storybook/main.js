module.exports = {
  "stories": [
    "../packages/calendar/src/**/*.stories.@(tsx|mdx)",
    "../packages/date-picker/src/**/*.stories.@(tsx|mdx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react"
}