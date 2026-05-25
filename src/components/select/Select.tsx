import './Select.css';

import { useEffect, useRef, useState } from 'react';

import { ArrowDropDown } from '@/assets';

type Option<T> = {
  label: string;
  value: T;
};

export type DefaultOptionComponentProps<T> = {
  option: Option<T>;
};

type SelectProps<T> = {
  options: Option<T>[];
  value: T | '';
  placeholder: string;
  size: 'big' | 'small';
  label: string;
  OptionComponent?: React.ComponentType<DefaultOptionComponentProps<T>>;
  onChange: (value: T) => void;
};

const DefaultOptionComponent = <T,>({
  option
}: DefaultOptionComponentProps<T>) => {
  return <span className='select__option-text'>{option.label}</span>;
};

export const Select = <T,>({
  options,
  value,
  placeholder,
  size,
  label,
  OptionComponent = DefaultOptionComponent,
  onChange
}: SelectProps<T>) => {
  const selectedOption = options.find((option) => option.value === value);
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleSelectClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (optionValue: T) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`select select--${size}`}
      ref={selectRef}
    >
      <span className='select__label'>{label}</span>

      <div className='select__control'>
        <button
          type='button'
          className='select__button'
          aria-expanded={isOpen}
          aria-haspopup='listbox'
          onClick={handleSelectClick}
        >
          <span
            className={`select__value ${!selectedOption ? 'select__value--placeholder' : ''}`}
          >
            {selectedOption ? (
              <OptionComponent option={selectedOption} />
            ) : (
              placeholder
            )}
          </span>

          <ArrowDropDown
            className={`select__arrow ${isOpen ? 'select__arrow--open' : ''}`}
            aria-hidden
          />
        </button>

        {isOpen && (
          <ul
            className='select__dropdown'
            role='listbox'
          >
            {options.map((option) => (
              <li
                key={String(option.value)}
                className='select__option'
                role='option'
                aria-selected={option.value === value}
                onClick={() => handleOptionClick(option.value)}
              >
                <OptionComponent option={option} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
