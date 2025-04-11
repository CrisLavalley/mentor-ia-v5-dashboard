import { useState } from "react";

export default function InputForm({ onSubmit }: { onSubmit: (tema: string, nivel: string) => void }) {
  const [tema, setTema] = useState("");
  const [nivel, setNivel] = useState("Primaria");

  return (
    <div className="flex flex-col md:flex-row items-center gap-4">
      <input
        type="text"
        value={tema}
        onChange={(e) => setTema(e.target.value)}
        placeholder="Ej. Revolución Francesa"
        className="w-full p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <select
        value={nivel}
        onChange={(e) => setNivel(e.target.value)}
        className="p-3 border rounded-xl shadow-sm focus:outline-none"
      >
        <option>Primaria</option>
        <option>Secundaria</option>
        <option>Preparatoria</option>
        <option>Universidad</option>
      </select>
      <button
        onClick={() => onSubmit(tema, nivel)}
        className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
      >
        Generar contenido IA
      </button>
    </div>
  );
}