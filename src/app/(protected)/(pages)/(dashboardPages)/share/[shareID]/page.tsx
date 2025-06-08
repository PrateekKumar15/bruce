"use client";

import PresentationMode from "@/app/(protected)/presentation/[presentationId]/_components/Navbar/PresentationMode";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();

  return (
    <PresentationMode
      onClose={() => {
        router.push("/dashboard");
      }}
    />
  );
};

export default Page;
