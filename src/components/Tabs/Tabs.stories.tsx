import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import {
  PlusOutlined,
  UserOutlined,
  SettingOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Dropdown, Menu } from "antd";
import Tabs from "./Tabs";
import type { TabsProps, TabItem } from "./Tabs.types";

import {
  Title,
  Subtitle,
  Description,
  Primary as DocsPrimary,
  Controls,
  Stories,
} from "@storybook/addon-docs/blocks";

const items: TabItem[] = [
  {
    label: (
      <span>
        <UserOutlined /> Tab 1
      </span>
    ),
    key: "1",
    children: "Content of Tab Pane 1",
  },
  {
    label: (
      <span>
        <SettingOutlined /> Tab 2
      </span>
    ),
    key: "2",
    children: "Content of Tab Pane 2",
    disabled: false,
  },
  {
    label: "Tab 3",
    key: "3",
    children: "Content of Tab Pane 3",
  },
];

const menu = (
  <Menu>
    <Menu.Item key="1">Menu Item 1</Menu.Item>
    <Menu.Item key="2">Menu Item 2</Menu.Item>
  </Menu>
);

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  args: {
    items,
    defaultActiveKey: "1",
    type: "line",
    size: "middle",
    centered: false,
    tabPosition: "top",
    animated: true,
    destroyInactiveTabPane: false,
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />

          <h2>Usage guidelines</h2>
          <h3>When to use</h3>
          <ul>
            <li>Use for navigation between related content sections.</li>
            <li>
              When you want to keep content in a single page but separate by
              context.
            </li>
          </ul>
          <h3>When not to use</h3>
          <ul>
            <li>When content is unrelated or navigation is not needed.</li>
          </ul>
          <h2>Design checklist</h2>
          <ul>
            <li>Tabs should be clearly labeled.</li>
            <li>Active tab should be visually distinct.</li>
            <li>Tab order should be logical.</li>
          </ul>
          <h2>Playground</h2>
          <DocsPrimary />
          <h2>Variables</h2>
          <Controls />
          <Stories />
        </>
      ),
    },
  },
  argTypes: {
    items: { control: false },
    onChange: { action: "changed", table: { category: "Events" } },
    defaultActiveKey: { control: "text" },
    type: {
      control: "inline-radio",
      options: ["line", "card", "editable-card"],
    },
    size: { control: "inline-radio", options: ["small", "middle", "large"] },
    centered: { control: "boolean" },
    tabPosition: {
      control: "select",
      options: ["top", "right", "bottom", "left"],
    },
    animated: { control: "boolean" },
    destroyInactiveTabPane: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Basic: Story = {
  args: {
    items,
  },
};

export const CardType: Story = {
  args: {
    items,
    type: "card",
  },
  parameters: {
    docs: { description: { story: "Card style tabs." } },
  },
};

export const EditableCard: Story = {
  render: (args) => {
    const [tabs, setTabs] = useState([
      { label: "Tab 1", key: "1", children: "Content of Tab 1" },
      { label: "Tab 2", key: "2", children: "Content of Tab 2" },
    ]);
    const [activeKey, setActiveKey] = useState("1");
    const onEdit = (
      targetKey: string | React.MouseEvent | React.KeyboardEvent,
      action: "add" | "remove",
    ) => {
      if (action === "add") {
        const newKey = `${tabs.length + 1}`;
        setTabs([
          ...tabs,
          {
            label: `Tab ${newKey}`,
            key: newKey,
            children: `Content of Tab ${newKey}`,
          },
        ]);
        setActiveKey(newKey);
      } else if (action === "remove") {
        const filtered = tabs.filter((tab) => tab.key !== targetKey);
        setTabs(filtered);
        setActiveKey(filtered[0]?.key || "");
      }
    };
    return (
      <Tabs
        {...args}
        type="editable-card"
        items={tabs}
        activeKey={activeKey}
        onChange={setActiveKey}
        onEdit={onEdit}
      />
    );
  },
  parameters: {
    docs: { description: { story: "Editable-card tabs with add/remove." } },
  },
};

export const TabPositions: Story = {
  render: (args) => (
    <>
      <Tabs {...args} tabPosition="top" items={items} />
      <Tabs
        {...args}
        tabPosition="left"
        items={items}
        style={{ marginTop: 16 }}
      />
      <Tabs
        {...args}
        tabPosition="right"
        items={items}
        style={{ marginTop: 16 }}
      />
      <Tabs
        {...args}
        tabPosition="bottom"
        items={items}
        style={{ marginTop: 16 }}
      />
    </>
  ),
  parameters: {
    docs: { description: { story: "Tabs with all tabPosition options." } },
  },
};

export const Sizes: Story = {
  render: (args) => (
    <>
      <Tabs {...args} size="small" items={items} />
      <Tabs {...args} size="middle" items={items} style={{ marginTop: 16 }} />
      <Tabs {...args} size="large" items={items} style={{ marginTop: 16 }} />
    </>
  ),
  parameters: {
    docs: { description: { story: "Tabs with all size options." } },
  },
};

export const DisabledTabs: Story = {
  args: {
    items: [
      { label: "Active Tab", key: "1", children: "Active content" },
      {
        label: "Disabled Tab",
        key: "2",
        children: "Disabled content",
        disabled: true,
      },
    ],
    defaultActiveKey: "1",
  },
  parameters: {
    docs: { description: { story: "Tabs with a disabled tab." } },
  },
};

export const WithTabBarExtraContent: Story = {
  args: {
    items,
    tabBarExtraContent: (
      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={() => alert("Extra action!")}>
          <PlusOutlined />
        </button>
        <Dropdown
          menu={{
            items: [
              { key: "1", label: "Menu Item 1" },
              { key: "2", label: "Menu Item 2" },
            ],
          }}
          trigger={["click"]}
        >
          <a onClick={(e) => e.preventDefault()}>
            More <DownOutlined />
          </a>
        </Dropdown>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: "Tabs with tabBarExtraContent (custom content in the tab bar).",
      },
    },
  },
};

export const WithEventHandlers: Story = {
  args: {
    items,
    onChange: (activeKey) => {
      alert(`Tab changed to key: ${activeKey}`);
    },
    onTabClick: (key, event) => {
      alert(`Tab clicked: key=${key}`);
    },
    onTabScroll: (info) => {
      alert(`Tab scrolled: ${JSON.stringify(info)}`);
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates onChange, onTabClick, and onTabScroll event handlers.",
      },
    },
  },
};

export const AnimatedAndDestroyInactive: Story = {
  args: {
    items,
    animated: { inkBar: true, tabPane: true },
    destroyInactiveTabPane: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Tabs with animated and destroyInactiveTabPane options.",
      },
    },
  },
};

export const CustomRenderTabBar: Story = {
  args: {
    items,
    renderTabBar: (props, DefaultTabBar) => (
      <div style={{ background: "#fafafa", borderRadius: 4, padding: 4 }}>
        <DefaultTabBar {...props} />
      </div>
    ),
  },
  parameters: {
    docs: { description: { story: "Custom renderTabBar example." } },
  },
};

export const Accessibility: Story = {
  args: {
    items: [
      {
        label: (
          <span aria-label="User Tab" role="tab">
            User
          </span>
        ),
        key: "1",
        children: <div tabIndex={0}>User content (focusable)</div>,
      },
      {
        label: (
          <span aria-label="Settings Tab" role="tab">
            Settings
          </span>
        ),
        key: "2",
        children: <div tabIndex={0}>Settings content (focusable)</div>,
      },
    ],
    defaultActiveKey: "1",
  },
  parameters: {
    docs: {
      description: {
        story: "Accessibility (a11y) example with ARIA and keyboard focus.",
      },
    },
  },
};
