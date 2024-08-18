"use client";

import { useForm } from "react-hook-form";
import FormField from "./Input";
import { FormData, UserSchema } from "@/lib/types/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Box, Modal, Typography } from "@mui/material";
import { Button } from "../Buttons";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(UserSchema) });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [showModal, setShowModal] = useState(false);

  const submitHandler = async (data: FormData) => {
    setStatus("sending");
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: "li.bogdan44@gmail.com",
        subject: "Test Email",
        text: `${data.email} \n ${data.message}`,
      }),
    });

    if (response.ok) {
      setStatus("sent");
      setShowModal(true);
      reset();
    } else {
      setStatus("error");
      setShowModal(true);
      console.error("Failed to send email");
    }
  };

  return (
    <>
      <Modal
        open={showModal}
        onClose={() => {
          setShowModal(false);
          setStatus("idle");
        }}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{ bgcolor: "#011627", color: "#607B96", p: 2, borderRadius: 2 }}
        >
          <Typography variant="h4">
            {status === "sent"
              ? "Email sent successfully"
              : status === "error"
                ? "Error while sending message"
                : "Email sent successfully"}
          </Typography>
          <Button
            className="mt-4 w-full"
            onClick={() => {
              setShowModal(false);
              setStatus("idle");
            }}
          >
            Close
          </Button>
        </Box>
      </Modal>
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
            disabled={status === "sending"}
            {...register("message")}
            placeholder="What you want say to me"
            className="rounded-lg border border-secondary-100 bg-primary-300 px-4 py-2 text-secondary-100"
          />
        </label>
        <Button>submit-message</Button>
      </form>
    </>
  );
};

export default ContactForm;
