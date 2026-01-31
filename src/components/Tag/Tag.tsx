import { Tag as AntTag } from 'antd';
import clsx from 'clsx';
import type { TagProps } from './Tag.types';
import './Tag.scss';

const Tag = ({
  children,
  className,
  intent = 'primary',
  tagColor = 'grey',
  icon,
  ...rest
}: TagProps) => {

  return (
    <AntTag
        {...rest}
        icon={icon}
        className={clsx(
          'my-tag',
          `my-tag--${intent}-${tagColor}`,
          className
        )}
    >
      <span >{children}</span>
    </AntTag>
  );
};

export default Tag;
