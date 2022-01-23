import { useBreakpoint } from "../../../../../hooks/tailwind";
import { MdFormatAlignJustify } from "react-icons/md";

export function SignIn() {
  const isDesktop = useBreakpoint("sm");

  return (
    <>
      {isDesktop ? (
        <button className="hidden p-3 px-6 text-white border border-btn-border rounded-xl font-grotesk hover:bg-btn-border sm:inline">
          Entrar
        </button>
      ) : (
        <button>
          <MdFormatAlignJustify color="white" size={24} />
        </button>
      )}
    </>
  );
}
