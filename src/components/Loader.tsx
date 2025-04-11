export default function Loader() {
  return (
    <div className="flex justify-center items-center flex-col gap-4 py-10 text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"></div>
      <p className="text-lg font-semibold text-gray-600 dark:text-gray-300">
        Cargando contenido educativo...
      </p>
    </div>
  );
}
