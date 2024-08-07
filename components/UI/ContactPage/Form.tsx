"use client";

import { useForm } from "react-hook-form";
import FormField from "./Input";
import { FormData, UserSchema } from "@/lib/types/form";
import { zodResolver } from "@hookform/resolvers/zod";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(UserSchema) });

  const submitHandler = async (data: FormData) => {
    console.log(data);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(submitHandler)}>
      <FormField
        label="_name"
        name="name"
        type="text"
        register={register}
        placeholder="Your name"
        error={errors.name}
      />
      <FormField
        label="_email"
        name="email"
        type="email"
        register={register}
        placeholder="Your email"
        error={errors.email}
      />
      <label className="flex flex-col gap-2">
        _message:
        <textarea
          {...register("message")}
          placeholder="What you want say to me"
          className="rounded-lg border border-secondary-100 bg-primary-300 px-4 py-2 text-secondary-100"
        />
      </label>
      <button className="rounded-lg bg-lines px-3 py-2 text-white">
        submit-message
      </button>
    </form>
  );
};

export default ContactForm;
