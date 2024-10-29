"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUserStore } from "@/lib/store/use-user-store";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const userStore = useUserStore();
  const router = useRouter();

  return (
    <div className="relative flex h-full flex-col items-center justify-center gap-4 py-4">
      <div className="absolute left-2 top-2 rotate-12">
        <Image
          src="/img/categorie/burger.png"
          alt="burger"
          width={50}
          height={50}
        />
      </div>
      <div className="absolute right-2 top-2 -rotate-6">
        <Image
          src="/img/categorie/dessert.png"
          alt="dessert"
          width={50}
          height={50}
        />
      </div>
      <div className="absolute right-2 bottom-2 rotate-6">
        <Image
          src="/img/categorie/fries.png"
          alt="fries"
          width={50}
          height={50}
        />
      </div>
      <div className="absolute left-2 bottom-2 -rotate-12">
        <Image
          src="/img/categorie/nuggets.png"
          alt="nuggets"
          width={50}
          height={50}
        />
      </div>
      <h1 className="text-2xl font-bold"> Welcome to HealthDonals</h1>
      <p>Login First to access our application.</p>
      <form
        action={(formData) => {
          const userName = formData.get("userName");
          userStore.login(userName);
          router.push("/");
        }}
        className="flex items-center gap-2"
      >
        <Input name="userName" type="text" placeholder="Username" />
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}
