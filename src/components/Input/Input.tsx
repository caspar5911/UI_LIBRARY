import { Input as AntInput } from 'antd';
import type { InputProps } from './Input.types';
import './Input.scss';

const DEFAULT_VALUE = 'Input';

const Input = ({ 'data-testid': dataTestId = 'input-input', ...rest }: InputProps) => {
  return (
    <AntInput
      {...rest}
      className='ui-input'
      data-testid={dataTestId}
      defaultValue={DEFAULT_VALUE}
    />
  );
};

export default Input;
