import { Tabs as AntdTabs } from "antd";
import type { TabsProps, TabItem } from "./Tabs.types";
import "./Tabs.scss";

export const Tabs = ({ items, ...rest }: TabsProps) => {
  return (
    <AntdTabs
      {...rest}
      items={items.map(({ label, key, children, ...paneProps }) => ({
        label,
        key,
        children,
        ...paneProps,
      }))}
    />
  );
};

export default Tabs;
