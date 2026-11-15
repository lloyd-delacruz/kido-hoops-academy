"use client";

import { useSearchParams } from "next/navigation";
import InquiryForm from "@/components/InquiryForm";
import { programs } from "@/lib/site";

export default function RegisterForm() {
  const q = useSearchParams().get("program");
  const program = programs.some((p) => p.slug === q) ? q! : undefined;
  return <InquiryForm key={program ?? "default"} mode="booking" defaultProgram={program} />;
}
