import type {
  TabsProps as AntdTabsProps,
  TabPaneProps as AntdTabPaneProps,
} from "antd";
import { ReactNode } from "react";

// Only expose the props that are part of the Ant Design Tabs API and are needed for the wrapper
export interface TabsProps extends Omit<AntdTabsProps, "items" | "children"> {
  /**
   * Tabs to render (array of tab definitions)
   */
  items: TabItem[];
}

export interface TabItem extends Omit<AntdTabPaneProps, "children"> {
  /**
   * Tab label
   */
  label: ReactNode;
  /**
   * Tab key (unique)
   */
  key: string;
  /**
   * Tab content
   */
  children?: ReactNode;
}
