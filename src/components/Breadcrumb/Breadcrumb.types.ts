// NOTE: If you are using an Ant Design component as the base, make sure you extend the necessary props from the Ant Design component.
import { BreadcrumbProps as AntdBreadcrumbProps } from 'antd';
import { BreadcrumbItemType } from 'antd/es/breadcrumb/Breadcrumb';

export type subMenuItem = {
  key: number; // unique identifier for sub-menu item
  label: any; // React Node: Can use any React component with your own styling for your submenu
};

export type itemObj = BreadcrumbItemType & {
  href?: string; // Used for external links or different pages of the React App
  title: string;
  menu?: { items: subMenuItem[] };
};


export interface BreadcrumbProps extends AntdBreadcrumbProps {
  /**
   * Used by QA Team for automated testing. This field auto-changes with button text, DO NOT modify unless required to.
   */
  "data-testid": string;

  /***
   * List of items in the Breadcrumb
   */
  items: itemObj[];
  
  /**
   * Sets the max number of items that will be visible on the Breadcrumb. The earlier items will be collapsed into an overflow.
   */
  maxNumberVisibleItems?: number;
}

