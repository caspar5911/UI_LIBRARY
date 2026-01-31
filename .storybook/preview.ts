import type { Preview } from "@storybook/react";
import "antd/dist/reset.css";

const preview: Preview = {
  // Autodocs for all components :contentReference[oaicite:4]{index=4}
  tags: ["autodocs"],

  parameters: {
    options: {
      storySort: {
        order: ["Introduction", "Foundation", "Components"], // 👈 sidebar order
      },
    },
    controls: { expanded: true },
    docs: {
      toc: {
        title: "Table of Contents",
        headingSelector: "h2, h3, h4",
      },
      // Show the “Show code” panel by default inside Canvas blocks :contentReference[oaicite:5]{index=5}
      canvas: { sourceState: "hidden" },

      // Makes source update based on args (useful for designers tweaking controls)
      source: { type: "dynamic" },
    },
  },
};

export default preview;
