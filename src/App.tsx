import { useState } from "react";
import InputForm from "./components/InputForm";
import Results from "./components/Results";
import Loader from "./components/Loader";
import { Brain, BarChart3 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import Dashboard from "./components/Dashboard";

export default function App() {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  const handleGenerate = async (tema: string, nivel: string) => {
    setLoading(true);
    setContent("");

    const prompt = `
Quiero que actúes como tutor académico. Dado el siguiente tema: "${tema}" y el nivel educativo: "${nivel}", por favor:

1. Genera un amplio resumen claro y conciso del tema.
2. Sugiéreme una ruta de estudio de 5 pasos para entenderlo bien, explica qué se debe hacer en cada paso sugerido.
3. Crea 10 preguntas de opción múltiple para autoevaluarme. Marca la respuesta correcta.

Responde en Markdown estructurado con títulos claros para cada sección.
`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
      }),
    });

    const data = await response.json();
    setContent(data.choices?.[0]?.message?.content || "Error generando respuesta.");
    setLoading(false);
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold flex items-center justify-between mb-4">
        <span className="flex items-center gap-2">
          <Brain className="w-7 h-7 text-pink-600" />
          Mentor IA Académico
        </span>
        <button
          className="text-sm px-3 py-1 rounded-md bg-blue-100 hover:bg-blue-200 text-blue-700 transition"
          onClick={() => setShowDashboard(!showDashboard)}
        >
          {showDashboard ? "Ver Generador IA" : "Ver Dashboard IA"}
        </button>
      </h1>

      {showDashboard ? (
        <Dashboard />
      ) : (
        <>
          <InputForm onSubmit={handleGenerate} />
          <div className="prose max-w-none mt-10">
            {loading ? (
              <Loader />
            ) : (
              <ReactMarkdown>{content}</ReactMarkdown>
            )}
          </div>
        </>
      )}
    </div>
  );
}