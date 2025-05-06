"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Textarea } from "./ui/textarea";

export function ContactMeForm() {
  const [result, setResult] = React.useState("");
  const [contactForm, setContactForm] = React.useState<{
    firstName: string;
    lastName: string;
    email: string;
    message: string;
  }>({ firstName: "", lastName: "", email: "", message: "" });

  const accessKey: string = process.env.NEXT_PUBLIC_ACCESS_KEY ?? "";

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", accessKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");

      setContactForm({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    } else {
      console.error("Error", data);
      setResult(data.message);
    }

    setTimeout(() => {
      setResult("");
    }, 1000);
  };
  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-primary p-4 md:rounded-2xl md:p-8 ">
      <h2 className="text-xl font-bold text-neutral-300 ">
        Lets get in contact!
      </h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-300 ">
        Reach out to me so we can begin work together.
      </p>

      <form className="my-8" onSubmit={onSubmit}>
        <input type="hidden" name="access_key" value={accessKey}></input>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input
              id="firstname"
              placeholder="First Name"
              type="text"
              name="firstname"
              onChange={(e) =>
                setContactForm((prev) => ({
                  ...prev,
                  firstName: e.target.value,
                }))
              }
              value={contactForm.firstName}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input
              id="lastname"
              placeholder="Last Name"
              type="text"
              name="lastname"
              onChange={(e) =>
                setContactForm((prev) => ({
                  ...prev,
                  lastName: e.target.value,
                }))
              }
              value={contactForm.lastName}
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="Email Address"
            type="email"
            name="email"
            onChange={(e) =>
              setContactForm((prev) => ({
                ...prev,
                email: e.target.value,
              }))
            }
            value={contactForm.email}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            placeholder="Enter Message"
            onChange={(e) =>
              setContactForm((prev) => ({
                ...prev,
                message: e.target.value,
              }))
            }
            value={contactForm.message}
          />
        </LabelInputContainer>

        <button
          className="cursor-pointer group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-neutral-300 to-neutral-100 font-medium text-neutral-500 shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>
      </form>
      <span className="text-blue-400">{result}</span>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
