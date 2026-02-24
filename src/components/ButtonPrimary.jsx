import Link from "next/link";

export default function ButtonPrimary({ href = "#form-steps", className }) {
    return (
        <Link
            href={href}
            className={`block bg-primary-1 py-3 px-5 text-white text-center text-2xl font-bold w-fit hover:bg-secondary-1 transition-colors duration-300 ${className}`}
        >
            DEMANDER UN DEVIS <br />
            <span className="block font-normal text-sm">
                Précis - clair - sans surprise
            </span>
        </Link>
    );
}