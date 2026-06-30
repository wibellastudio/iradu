import { Download, File } from 'lucide-react';

const Adriana = () => {
  return (
    <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold text-slate mb-6 text-center">
          Adriana
        </h1>
        <p className="text-center text-slate-600 text-lg mb-16">
          Contenido de la página de Adriana
        </p>

        {/* DOCUMENTOS */}
        <section className="mt-16 pt-16 border-t border-gray-200">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate mb-12 text-center">
            Documentos
          </h2>

          {/* NIE */}
          <div className="mb-12 p-8 lg:p-10 border-2 border-secondary rounded-2xl bg-gradient-to-br from-white to-blue-50 shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate mb-8 text-center">
              NIE
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="flex flex-col items-center p-8 bg-light-bg rounded-lg">
                <File className="w-12 h-12 text-secondary mb-4" />
                <h4 className="text-xl font-semibold mb-4">Frente</h4>
               <a
   href="https://drive.google.com/uc?export=download&id=1NBp0dFpHh6WeMPhaJhrcRFm0bEHF1ocN"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 px-6 py-3 bg-secondary text-white rounded-lg"
>
  <Download className="w-5 h-5" />
  Descargar .jpg
</a>
              </div>

              <div className="flex flex-col items-center p-8 bg-light-bg rounded-lg">
                <File className="w-12 h-12 text-secondary mb-4" />
                <h4 className="text-xl font-semibold mb-4">Detras</h4>
               <a
   href="https://drive.google.com/uc?export=download&id=1S2iaYJQsS4-qgtBxmsHaQstF514BIj-7"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 px-6 py-3 bg-secondary text-white rounded-lg"
>
  <Download className="w-5 h-5" />
  Descargar .jpg
</a>
              </div>
            </div>

            <div className="flex justify-center">
               <a
   href="https://drive.google.com/uc?export=download&id=11Ag1oT2-EAIxZgldaLAQB1lQ9XZpnbvd"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 px-6 py-3 bg-secondary text-white rounded-lg"
>
  <Download className="w-5 h-5" />
  Descargar NIE completo en PDF
</a>
            </div>
          </div>

  {/* DNI */}
<div className="mb-12 p-8 lg:p-10 border-2 border-red-500 rounded-2xl bg-gradient-to-br from-white to-red-50 shadow-sm hover:shadow-md transition-all duration-300">
  <h3 className="text-2xl lg:text-3xl font-bold text-slate mb-8 text-center">
    DNI
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

    <div className="flex flex-col items-center p-8 bg-light-bg rounded-lg">
      <File className="w-12 h-12 text-red-500 mb-4" />
      <h4 className="text-xl font-semibold mb-4">Frente</h4>
      <a
     href="https://drive.google.com/uc?export=download&id=1LhMGRthWmawIbhXpTykVMWyIN3bwK1ir"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-lg"
>
  <Download className="w-5 h-5" />
  Descargar .jpg
</a>
    </div>

    <div className="flex flex-col items-center p-8 bg-light-bg rounded-lg">
      <File className="w-12 h-12 text-red-500 mb-4" />
      <h4 className="text-xl font-semibold mb-4">Detrás</h4>
       <a
     href="https://drive.google.com/uc?export=download&id=1xKtRJPIUZPgF74Sb5GgS1bwWww57vHuB"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-lg"
>
  <Download className="w-5 h-5" />
  Descargar .jpg
</a>
    </div>

  </div>

  <div className="flex justify-center mt-10">
     <a
     href="https://drive.google.com/uc?export=download&id=18HsCsuvlRM6ZSSn2z78sD4Cv6JEpF5UB"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-lg"
>
  <Download className="w-5 h-5" />
  Descargar DNI completo en PDF
</a>
  </div>
</div>

          {/* PASAPORTE */}
          <div className="mb-12 p-8 lg:p-10 border-2 border-blue-500 rounded-2xl bg-gradient-to-br from-white to-blue-50">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate mb-8 text-center">
              PASAPORTE
            </h3>

            <div className="flex justify-center">
               <a
     href="https://drive.google.com/uc?export=download&id=12_EHfsAXl2EOJVno8ptJM2iigT1gD8hS"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-8 py-4 bg-blue-500 text-white rounded-lg font-semibold text-lg"
    >
      <Download className="w-6 h-6" />
      Descargar .pdf
    </a>
            </div>
          </div>

          {/* CERTIFICADO NACIMIENTO */}
          <div className="mb-12 p-8 lg:p-10 border-2 border-purple-500 rounded-2xl bg-gradient-to-br from-white to-purple-50">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate mb-8 text-center">
              CERTIFICADO DE NACIMIENTO
            </h3>

            <div className="flex justify-center">
               <a
     href="https://drive.google.com/uc?export=download&id=1SRrxWAlna6OUU7WkByB4wwX6z99ZoCgc"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-8 py-4 bg-purple-500 text-white rounded-lg font-semibold text-lg"
    >
      <Download className="w-6 h-6" />
      Descargar .pdf
    </a>
            </div>
          </div>

          {/* CERTIFICADO DIVORCIO */}
          <div className="p-8 lg:p-10 border-2 border-bg-gray-900 rounded-2xl bg-gradient-to-br from-white to-gray-50">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate mb-8 text-center">
              CERTIFICADO DE DIVORCIO
            </h3>

            <div className="flex justify-center">
              <a
     href="https://drive.google.com/uc?export=download&id=1cpsqj5BAFYl-F1iQVuJkEgEx0_8KrQYy"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-8 py-4 bg-gray-500 text-white rounded-lg font-semibold text-lg"
    >
      <Download className="w-6 h-6" />
      Descargar .pdf
    </a>
            </div>
          </div>

        </section>
      </div>
    </div>
  );
};

export default Adriana;