import { FieldError, UseFormRegister } from "react-hook-form";
import { z, ZodType } from "zod";

export interface FormData {
  name: string;
  email: string;
  message: string;
}

export type FormFieldProps = {
  label: string;
  type: string;
  placeholder: string;
  name: ValidFieldNames;
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
};

export type ValidFieldNames = "name" | "email" | "message";

export const UserSchema: ZodType<FormData> = z.object({
  name: z.string().min(3, { message: "At least 3 letters" }),
  email: z.string().email(),
  message: z.string().min(3, { message: "At least 3 letters" }),
});
