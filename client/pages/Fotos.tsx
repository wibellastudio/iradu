import { Download } from "lucide-react";

const Fotos = () => {
  return (
    <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold text-slate mb-6 text-center">
          Fotos
        </h1>

        <p className="text-center text-slate-600 text-lg mb-12">
          Contenido de la página de Fotos
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="https://drive.google.com/drive/folders/1IOykAjrwJ-BdL4zm_Bh72WqQClyWUpQ1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            <Download className="w-5 h-5" />
            DEURCAT001
          </a>

          <a
            href="https://drive.google.com/drive/folders/1J9EoACCVKqGhWKoSEDf2wf3JZpEwForO"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            <Download className="w-5 h-5" />
            DEURCAT002
          </a>
        </div>
      </div>
    </div>
  );
};

export default Fotos;