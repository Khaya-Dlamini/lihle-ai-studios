import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { CheckCircle2, Loader2 } from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Project — Lihle Websites" },
      { name: "description", content: "Request a website or free consultation from Lihle Websites. Share your project details and we'll respond within one business day." },
      { property: "og:title", content: "Book a Project — Lihle Websites" },
      { property: "og:description", content: "Request a website or free consultation from Lihle Websites." },
      { property: "og:url", content: "/book" },
    ],
    links: [{ rel: "canonical", href: "/book" }],
  }),
  component: BookPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(120),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  projectType: z.enum(["website", "landing", "redesign", "consultation", "other"]),
  details: z.string().trim().min(20, "Please share at least a couple of sentences").max(2000),
});

type FormValues = z.infer<typeof schema>;

function BookPage() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      projectType: "website",
      details: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    await new Promise((r) => setTimeout(r, 700));
    console.log("Booking request:", values);
    toast.success("Thanks! Your request was sent. We'll reply within 1 business day.");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <SiteLayout>
        <section className="container-page py-24 md:py-32">
          <div className="mx-auto max-w-xl rounded-3xl border border-border bg-card p-10 text-center shadow-lg">
            <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <h1 className="mt-6 font-display text-3xl font-semibold">Request received</h1>
            <p className="mt-3 text-muted-foreground">Thanks for booking with Lihle Websites. We've received your project details and will reach out within one business day.</p>
            <Button className="mt-8" onClick={() => { setSubmitted(false); form.reset(); }}>Submit another request</Button>
          </div>
        </section>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <section className="container-page pt-6 pb-16 md:pt-8 md:pb-20">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.3fr]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Book a project</span>
            <h1 className="mt-3 font-display text-4xl font-semibold md:text-5xl">Tell us about your project.</h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Share a few details and we'll be in touch within one business day with
              next steps, timing and a free consultation.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Free 30-minute discovery call</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Tailored proposal & timeline</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> No obligation</li>
            </ul>
          </div>

          <form onSubmit={form.handleSubmit(onSubmit)} className="rounded-3xl border border-border bg-card p-6 shadow-sm md:p-10" noValidate>
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Your name" error={form.formState.errors.name?.message} htmlFor="name">
                <Input id="name" autoComplete="name" {...form.register("name")} />
              </Field>
              <Field label="Email" error={form.formState.errors.email?.message} htmlFor="email">
                <Input id="email" type="email" autoComplete="email" {...form.register("email")} />
              </Field>
              <Field label="Company (optional)" htmlFor="company" className="md:col-span-2">
                <Input id="company" autoComplete="organization" {...form.register("company")} />
              </Field>

              <Field label="Project type" htmlFor="projectType" className="md:col-span-2">
                <Select
                  defaultValue={form.getValues("projectType")}
                  onValueChange={(v) => form.setValue("projectType", v as FormValues["projectType"], { shouldValidate: true })}
                >
                  <SelectTrigger id="projectType"><SelectValue placeholder="Choose one" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="website">New website</SelectItem>
                    <SelectItem value="landing">Landing page</SelectItem>
                    <SelectItem value="redesign">Redesign / refresh</SelectItem>
                    <SelectItem value="consultation">Consultation only</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </Field>

              <Field label="Project details" error={form.formState.errors.details?.message} htmlFor="details" className="md:col-span-2">
                <Textarea id="details" rows={6} placeholder="Tell us about your goals, audience, references and any features you have in mind." {...form.register("details")} />
              </Field>
            </div>

            <Button type="submit" size="lg" className="mt-8 w-full md:w-auto" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? (<><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending…</>) : "Send request"}
            </Button>
            <p className="mt-4 text-xs text-muted-foreground">By submitting, you agree to be contacted about your enquiry. We never share your details.</p>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label, htmlFor, error, children, className,
}: { label: string; htmlFor: string; error?: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      <Label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium">{label}</Label>
      {children}
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}
