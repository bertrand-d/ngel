import Image from "next/image";
import logoNgel from "../assets/img/logo-ngel.png";
import specialiste from "../assets/img/SPECIALISTE.png";
import Link from "next/link";

export default function Header() {
    return (
        <header className="py-4 fixed top-0 left-0 right-0 z-50 border-b border-primary-1 shadow-sm">
            <div className="max-container">
                <Link href="/" className="flex flex-col gap-2.5">
                    <Image src={logoNgel} alt="logo" width={150} height={100} />
                    <Image src={specialiste} alt="Votre specialiste PVC, ALU, Bois" width={250} height={100} />
                </Link>
                <nav>
                </nav>
            </div>
        </header>
    );
}