import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, LineChart, Line, CartesianGrid, ResponsiveContainer } from "recharts";

export default function Dashboard() {
  const temasPorNivel = [
    { nivel: "Primaria", cantidad: 4 },
    { nivel: "Secundaria", cantidad: 7 },
    { nivel: "Preparatoria", cantidad: 5 },
    { nivel: "Universidad", cantidad: 9 },
  ];

  const tipoPreguntas = [
    { tipo: "Opción múltiple", valor: 10 },
    { tipo: "Verdadero/Falso", valor: 3 },
    { tipo: "Relacionar columnas", valor: 2 },
  ];

  const actividadSemanal = [
    { dia: "Lun", usos: 5 },
    { dia: "Mar", usos: 7 },
    { dia: "Mié", usos: 4 },
    { dia: "Jue", usos: 6 },
    { dia: "Vie", usos: 9 },
    { dia: "Sáb", usos: 3 },
    { dia: "Dom", usos: 2 },
  ];

  const colores = ["#60a5fa", "#f472b6", "#34d399"];

  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white rounded-xl shadow p-4">
        <h2 className="text-lg font-semibold mb-2">Temas generados por nivel</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={temasPorNivel}>
            <XAxis dataKey="nivel" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="cantidad" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white rounded-xl shadow p-4">
        <h2 className="text-lg font-semibold mb-2">Tipo de preguntas generadas</h2>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={tipoPreguntas}
              dataKey="valor"
              nameKey="tipo"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {tipoPreguntas.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colores[index % colores.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white rounded-xl shadow p-4 col-span-1 md:col-span-2">
        <h2 className="text-lg font-semibold mb-2">Actividad semanal IA</h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={actividadSemanal}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="dia" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="usos" stroke="#10b981" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}