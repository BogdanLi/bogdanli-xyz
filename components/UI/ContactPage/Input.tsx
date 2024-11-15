import { FormFieldProps } from "@/lib/types/form";

const FormField = ({
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber,
  label,
}: FormFieldProps) => {
  return (
    <label className="flex flex-col gap-2">
      {label}
      <input
        {...register(name, { valueAsNumber })}
        placeholder={placeholder}
        type={type}
        className="rounded-lg border border-secondary-100 bg-primary-300 px-4 py-2 text-secondary-100 outline-none focus:border-secondary-300"
      />
      {error && <span className="text-red-400">{error.message}</span>}
    </label>
  );
};

export default FormField;
