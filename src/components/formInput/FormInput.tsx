import {
  type Control,
  Controller,
  type FieldPath,
  type FieldValues
} from 'react-hook-form';

import { Input } from '../input/Input';

type FormInputProps<T extends FieldValues> = {
  name: FieldPath<T>;
  control: Control<T>;
  placeholder: string;
  variant: 'underlined' | 'bordered';
  className?: string;
  icon?: React.ReactNode;
};

export function FormInput<T extends FieldValues>({
  name,
  control,
  placeholder,
  variant,
  className,
  icon
}: FormInputProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Input
          placeholder={placeholder}
          value={field.value}
          onChange={field.onChange}
          variant={variant}
          className={className}
          icon={icon}
        />
      )}
    />
  );
}
