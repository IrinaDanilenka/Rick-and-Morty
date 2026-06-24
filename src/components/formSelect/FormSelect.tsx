import {
  type Control,
  Controller,
  type FieldPath,
  type FieldValues
} from 'react-hook-form';

import {
  type DefaultOptionComponentProps,
  Select
} from '@/components/select/Select';

type FormSelectProps<TFieldValues extends FieldValues, TOption> = {
  name: FieldPath<TFieldValues>;
  control: Control<TFieldValues>;
  options: { label: string; value: TOption }[];
  placeholder: string;
  size: 'big' | 'small';
  label: string;
  className?: string;
  OptionComponent?: React.ComponentType<DefaultOptionComponentProps<TOption>>;
};

export function FormSelect<TFieldValues extends FieldValues, TOption>({
  name,
  control,
  options,
  placeholder,
  size,
  label,
  className,
  OptionComponent
}: FormSelectProps<TFieldValues, TOption>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Select
          options={options}
          value={field.value}
          onChange={field.onChange}
          placeholder={placeholder}
          size={size}
          label={label}
          className={className}
          OptionComponent={OptionComponent}
        />
      )}
    />
  );
}
