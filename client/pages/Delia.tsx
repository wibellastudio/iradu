import { Download, File } from 'lucide-react';

const Delia = () => {
  return (
    <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold text-slate mb-6 text-center">
          Delia
        </h1>
        <p className="text-center text-slate-600 text-lg mb-16">
          Contenido de la página de Delia
        </p>

        {/* DOCUMENTOS */}
        <section className="mt-16 pt-16 border-t border-gray-200">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate mb-12 text-center">
            Documentos
          </h2>

          {/* NIE */}
          <div className="mb-12 p-8 lg:p-10 border-2 border-blue-500 rounded-2xl bg-gradient-to-br from-white to-blue-50 shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate mb-8 text-center">
              NIE
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="flex flex-col items-center p-8 bg-light-bg rounded-lg">
                <File className="w-12 h-12 text-blue-500 mb-4" />
                <h4 className="text-xl font-semibold text-slate mb-4">Frente</h4>
                <button className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg">
                  <Download className="w-5 h-5" />
                  Descargar .jpg
                </button>
              </div>

              <div className="flex flex-col items-center p-8 bg-light-bg rounded-lg">
                <File className="w-12 h-12 text-blue-500 mb-4" />
                <h4 className="text-xl font-semibold text-slate mb-4">Detras</h4>
                <button className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg">
                  <Download className="w-5 h-5" />
                  Descargar .pdf
                </button>
              </div>
            </div>

            <div className="flex justify-center">
              <button className="flex items-center gap-2 px-8 py-4 bg-blue-500 text-white rounded-lg">
                <Download className="w-6 h-6" />
                Descargar NIE Frente y Detras en pdf
              </button>
            </div>
          </div>

          {/* DNI */}
          <div className="p-8 lg:p-10 border-2 border-secondary rounded-2xl bg-gradient-to-br from-white to-blue-50 shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate mb-8 text-center">
              DNI
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="flex flex-col items-center p-8 bg-light-bg rounded-lg">
                <File className="w-12 h-12 text-secondary mb-4" />
                <h4 className="text-xl font-semibold text-slate mb-4">Frente</h4>
                <button className="flex items-center gap-2 px-6 py-3 bg-secondary text-white rounded-lg">
                  <Download className="w-5 h-5" />
                  Descargar .jpg
                </button>
              </div>

              <div className="flex flex-col items-center p-8 bg-light-bg rounded-lg">
                <File className="w-12 h-12 text-secondary mb-4" />
                <h4 className="text-xl font-semibold text-slate mb-4">Detras</h4>
                <button className="flex items-center gap-2 px-6 py-3 bg-secondary text-white rounded-lg">
                  <Download className="w-5 h-5" />
                  Descargar .pdf
                </button>
              </div>
            </div>

            <div className="flex justify-center mb-12">
              <button className="flex items-center gap-2 px-8 py-4 bg-secondary text-white rounded-lg">
                <Download className="w-6 h-6" />
                Descargar DNI Frente y Detras en pdf
              </button>
            </div>
          </div>

          {/* 🟦 PASAPORTE */}
          <div className="mt-12 p-8 lg:p-10 border-2 border-red-300 rounded-2xl bg-white shadow-sm">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate mb-8 text-center">
              Pasaporte
            </h3>

            <div className="flex flex-col items-center">
              <File className="w-12 h-12 text-red-500 mb-4" />
              <button className="flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-lg">
                <Download className="w-5 h-5" />
                Descargar .pdf
              </button>
            </div>
          </div>

          {/* 🟩 CERTIFICADO NACIMIENTO */}
          <div className="mt-12 p-8 lg:p-10 border-2 border-green-300 rounded-2xl bg-white shadow-sm">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate mb-8 text-center">
              Certificado de nacimiento
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Literal */}
              <div className="flex flex-col items-center p-8 bg-light-bg rounded-lg">
                <File className="w-12 h-12 text-green-600 mb-4" />
                <h4 className="text-xl font-semibold text-slate mb-4">Literal</h4>
                <button className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg">
                  <Download className="w-5 h-5" />
                  Descargar .pdf
                </button>
              </div>

              {/* Plurilingüe */}
              <div className="flex flex-col items-center p-8 bg-light-bg rounded-lg">
                <File className="w-12 h-12 text-green-600 mb-4" />
                <h4 className="text-xl font-semibold text-slate mb-4">Plurilingüe</h4>
                <button className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg">
                  <Download className="w-5 h-5" />
                  Descargar .pdf
                </button>
              </div>

            </div>
          </div>

        </section>
      </div>
    </div>
  );
};

export default Delia;