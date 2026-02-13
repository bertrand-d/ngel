import Link from "next/link";

export default function ButtonPrimary({ href = "/", className }) {
    return (
        <Link
            href={href}
            className={`bg-primary-1 py-3 px-10 text-white text-center text-xl font-bold w-fit ml-auto mt-auto ${className}`}
        >
            DEMANDER UN DEVIS <br />
            <span className="font-normal text-sm">
                Précis - clair - sans surprise
            </span>
        </Link>
    );
}