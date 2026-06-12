import './Input.scss';

import { Close } from '@/assets';
import { classNames } from '@/helpers';

type InputProps = {
  placeholder: string;
  value: string;
  variant: 'underlined' | 'bordered';
  onChange?: (value: string) => void;
  icon?: React.ReactNode;
  className?: string;
};

export const Input = ({
  placeholder,
  value,
  variant,
  onChange,
  icon,
  className
}: InputProps) => {
  return (
    <div className={classNames('input', `input--${variant}`, className)}>
      {icon && <span className='input__icon'>{icon}</span>}

      <input
        className='input__field'
        type='text'
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />

      {value && (
        <Close
          className='input__close-icon'
          onClick={() => onChange('')}
        />
      )}
    </div>
  );
};
