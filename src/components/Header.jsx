import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Header() {
  const { dark, setDark } = useContext(ThemeContext);

  return (
    <header className="p-4 flex justify-between">
      <h1 className="text-xl font-bold text-primary">
        Chemistry Explorer
      </h1>

      <button
        onClick={() => setDark(!dark)}
        className="px-3 py-1 bg-secondary rounded"
      >
        Toggle
      </button>
    </header>
  );
}