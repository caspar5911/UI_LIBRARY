import { Breadcrumb as AntdBreadcrumb } from 'antd';
import { BreadcrumbItemType, BreadcrumbSeparatorType } from 'antd/es/breadcrumb/Breadcrumb';
import clsx from 'clsx';
import type { BreadcrumbProps, itemObj, subMenuItem } from './Breadcrumb.types';
import './Breadcrumb.scss';
import { useEffect, useState } from 'react';

/**
 * Replace the AntButton placeholder code below with your own component and logic
 * Ensure your component references your props defined in your .types.ts file
 */
const Breadcrumb = ({
  items,
  className,
  maxNumberVisibleItems,
  ...rest
}: BreadcrumbProps) => {
  const [newItems, setNewItems] = useState<
    Partial<BreadcrumbItemType & BreadcrumbSeparatorType>[]
  >([]);

  // Process Items
  useEffect(() => {
    if (
      maxNumberVisibleItems === undefined ||
      items.length <= maxNumberVisibleItems
    ) {
      setNewItems(items);
    } else {
      // Extract the last few items to be shown on the breadcrumb
      let returnItems = items.slice(-maxNumberVisibleItems);

      // Convert the earlier items into an overflow breadcrumb item
      let overflowSubItems = items.slice(0, -maxNumberVisibleItems);
      let subItems = [];
      let count = 1;
      for (let overflowSubItem of overflowSubItems) {
        let subItem: subMenuItem = {
          key: count,
          label: <a href={overflowSubItem?.href}>{overflowSubItem.title}</a>,
        }
        subItems.push(subItem);
        count++;
      }
      let overflowItem: itemObj = {
        title: '...',
        menu: { items: subItems },
      };
      returnItems.unshift(overflowItem);
      setNewItems(returnItems);
    }
  }, [items, maxNumberVisibleItems]);

  return (
    <AntdBreadcrumb
        {...rest}
        className={clsx(
          'my-breadcrumb',
          className
        )}
    />
  );
};

export default Breadcrumb;
