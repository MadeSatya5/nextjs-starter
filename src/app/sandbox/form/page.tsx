"use client";

import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";

import Typography from "@/components/Typography";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import InputSelect from "@/components/ui/input-select";
import { Textarea } from "@/components/ui/textarea";

export default function FormSandbox() {
  const methods = useForm({
    defaultValues: {
      "input-text": "",
      "input-password": "",
      "input-select": "option-1"
    },
  });

  const { handleSubmit } = methods;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <main className="mx-auto min-h-screen max-w-[1200px] items-center justify-center py-20">
      <div className="flex flex-col">
        <Typography as="h1" variant="h4" weight="bold">
          Form Sandbox
        </Typography>

        <FormProvider {...methods}>
          <form
            className="mt-8 w-[600px] space-y-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-5">
              <Typography as="h2" variant="h5" weight="bold">
                Inputs
              </Typography>

              <Input
                name="input-text"
                label="Text Input"
                placeholder="Masukin Text"
                helperText="*Masukkan text"
                helperTextClassname="text-red-500"
              />

              <Input
                name="input-password"
                label="Input Password"
                placeholder="Masukkan Password"
                type="password"
              />
            </div>

            <div>
              <Typography as="h2" variant="h5" weight="bold" className="mb-4">
                Select
              </Typography>

              <InputSelect
                name="input-select"
                options={optionItems}
                label="Ini Input Select"
                placeholder="Pilih Options"
              />
            </div>

            <div>
              <Typography as="h2" variant="h5" weight="bold">
                Textarea
              </Typography>

              <Textarea placeholder="Enter your message here..." />
            </div>

            <div>
              <Typography as="h2" variant="h5" weight="bold">
                Checkbox
              </Typography>

              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label htmlFor="terms" className="text-sm font-medium">
                  Accept terms and conditions
                </label>
              </div>
            </div>

            <Button
              className="mt-12 w-max"
              type="submit"
              onClick={() => toast.success("Form submitted!")}
            >
              Submit
            </Button>
          </form>
        </FormProvider>
      </div>
    </main>
  );
}

const optionItems = [
  {
    label: "Option 1",
    value: "option-1",
  },
  {
    label: "Option 2",
    value: "option-2",
  },
  {
    label: "Option 3",
    value: "option-3",
  },
];
