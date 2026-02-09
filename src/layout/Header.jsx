import Image from "next/image";

export default function Header() {
  return (
    <header>
        <Image src="/logo-ngel.png" alt="logo" width={100} height={100} />
        <Image src="/SPECIALISTE.png" alt="Votre specialiste PVC, ALU, Bois" width={100} height={100} />
        <nav>

        </nav>
    </header>
  );
}