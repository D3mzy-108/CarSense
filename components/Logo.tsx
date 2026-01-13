import logo from "@/assets/logo.png";
import Image from "next/image";

export function LogoComponent() {
  return (
    <Image
      src={logo}
      alt="Logo"
      className="aspect-video w-[120px] sm:w-[150px]"
    />
  );
}
