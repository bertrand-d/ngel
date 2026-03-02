export default function ButtonPrimary({ className }) {
    return (
        <button
            onClick={() => {
                document
                  .getElementById("form-steps")
                  ?.scrollIntoView({ behavior: "smooth" })
              }}
            className={`cursor-pointer block bg-primary-1 py-3 px-5 text-white text-center text-2xl font-bold w-fit hover:bg-secondary-1 transition-colors duration-300 ${className}`}
        >
            DEMANDER UN DEVIS <br />
            <span className="block font-normal text-sm">
                Précis - clair - sans surprise
            </span>
        </button>
    );
}