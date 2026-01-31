import type { TagProps as AntdTagProps } from 'antd';

export type TagIntent = 'primary' | 'secondary';
export type TagColor = 'grey' | 'yellow' | 'red' | 'blue' | 'green'


export interface TagProps extends AntdTagProps {
  /**
   * Used by QA Team for automated testing. This field auto-changes with button text, DO NOT modify unless required to.
   */
  "data-testid": string;
  
  /**
   * Design-system intent (NOT AntD type). Default is primary
   */
  intent?: TagIntent;

  /**
   * Design-system color (NOT AntD color). Default is primary
   */
  tagColor?: TagColor;

}

