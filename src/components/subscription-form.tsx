
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

export function SubscriptionForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Subscribed!",
      description: "Thanks for joining our mailing list. You're all set.",
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="flex w-full items-start space-x-2">
            <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
                <FormItem className="flex-1">
                <FormControl>
                    <Input type="email" placeholder="Email address" {...field} />
                </FormControl>
                <FormMessage className="pt-2 text-left" />
                </FormItem>
            )}
            />
            <Button type="submit">Subscribe</Button>
        </div>
      </form>
    </Form>
  );
}
