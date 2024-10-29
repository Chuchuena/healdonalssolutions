"use client";

import Image from "next/image";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import LoginPage from "./login/page";
import { useUserStore } from "@/lib/store/use-user-store";

export default function Home() {
  const userName = useUserStore((s) => s.userName);
  if (!userName) {
    return <LoginPage />;
  }
  return <div>Merguez</div>;
}
