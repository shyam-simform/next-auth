"use client";

import { useRouter } from "next/navigation";

interface LoginButtonInterface {
  children: React.ReactNode;
  mode?: "model" | "redirect";
  asChild?: boolean;
}

const LoginButton = ({
  children,
  asChild,
  mode = "redirect",
}: LoginButtonInterface) => {
  const router = useRouter();
  const onClick = () => {
    router.push("login");
  };

  if (mode === "model") {
    return <span>TODO: Implement Model</span>;
  }

  return (
    <span className="cursor-pointer" onClick={onClick}>
      {children}
    </span>
  );
};

export default LoginButton;
