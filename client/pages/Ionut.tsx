import { Download, File } from 'lucide-react';

const Ionut = () => {
  return (
    <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl lg:text-5xl font-bold text-slate mb-6 text-center">
          Ionut
        </h1>

        <p className="text-center text-slate-600 text-lg mb-16">
          Contenido de la página de Ionut
        </p>

        {/* DOCUMENTOS */}
        <section className="mt-16 pt-16 border-t border-gray-200">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate mb-12 text-center">
            Documentos
          </h2>

          <div className="mb-12 p-8 lg:p-10 border-2 border-blue-500 rounded-2xl bg-gradient-to-br from-white to-blue-50 shadow-sm hover:shadow-md transition-all duration-300">
  <h3 className="text-2xl lg:text-3xl font-bold text-slate mb-8 text-center">
    NIE
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">

    <div className="flex flex-col items-center p-8 bg-light-bg rounded-lg">
      <File className="w-12 h-12 text-blue-500 mb-4" />
      <h4 className="text-xl font-semibold text-slate mb-4">Frente</h4>
      <a
  href="https://drive.google.com/uc?export=download&id=14nRPgoUaaM8B4OSKRRMaKet4Cu-lqS9b"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg"
>
  <Download className="w-5 h-5" />
  Descargar .jpg
</a>
    </div>

    <div className="flex flex-col items-center p-8 bg-light-bg rounded-lg">
      <File className="w-12 h-12 text-blue-500 mb-4" />
      <h4 className="text-xl font-semibold text-slate mb-4">Detrás</h4>
      <a
  href="https://drive.google.com/uc?export=download&id=1yMzbVSTdgjBamyJMBaVaQmkdiee1mu5H"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg"
>
  <Download className="w-5 h-5" />
  Descargar .jpg
</a>
    </div>

  </div>

  <div className="flex justify-center">
   <a
  href="https://drive.google.com/uc?export=download&id=1r1za5KObrCv-USec0T7hVPOwygW7Ch-P"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg"
>
  <Download className="w-5 h-5" />
Descargar NIE completo en PDF</a>
  </div>
</div>

          {/* ================= DNI ================= */}
          <div className="mb-12 p-8 lg:p-10 border-2 border-secondary rounded-2xl bg-gradient-to-br from-white to-blue-50 shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate mb-8 text-center">
              DNI
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="flex flex-col items-center p-8 bg-light-bg rounded-lg">
                <File className="w-12 h-12 text-secondary mb-4" />
                <h4 className="text-xl font-semibold text-slate mb-4">Frente</h4>
                <a
  href="https://drive.google.com/uc?export=download&id=12pO_92AxAjhQNJ9tR2jQgrUYbtuXuWCR"
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
                <h4 className="text-xl font-semibold text-slate mb-4">Detrás</h4>
                 <a
  href="https://drive.google.com/uc?export=download&id=1W1_QIa1t6tIKxk2ljYPjX-h52tI64kNI"
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
  href="https://drive.google.com/uc?export=download&id=1c1oUntnTa1HkXFiiKZtOMi8fJ_MtnkOP"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 px-6 py-3 bg-secondary text-white rounded-lg"
>
  <Download className="w-5 h-5" />
  Descargar .pdf
</a>
            </div>
          </div>

          {/* ================= PASAPORTE ================= */}
<div className="mb-12 p-8 lg:p-10 border-2 border-red-500 rounded-2xl bg-gradient-to-br from-white to-red-50 shadow-sm hover:shadow-md transition-all duration-300">
  <h3 className="text-2xl lg:text-3xl font-bold text-slate mb-8 text-center">
    PASAPORTE
  </h3>

  <div className="flex justify-center">
    <a
      href="https://drive.google.com/uc?export=download&id=1Y4tCWOIV9XtatVui5OZRjTniFKzO6HYn"
      download
      className="flex items-center gap-2 px-8 py-4 bg-red-500 text-white rounded-lg"
    >
      <Download className="w-6 h-6" />
      Descargar .pdf
    </a>
  </div>
</div>

{/* ================= CERTIFICADO DE NACIMIENTO ================= */}
<div className="mb-12 p-8 lg:p-10 border-2 border-gray-700 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-sm hover:shadow-md transition-all duration-300">
  <h3 className="text-2xl lg:text-3xl font-bold text-slate mb-8 text-center">
    CERTIFICADO DE NACIMIENTO
  </h3>

  <div className="flex justify-center">
    <a
      href="https://drive.google.com/uc?export=download&id=1JRn5FNJg50Zck0RlkQYlNEFZBRpy-SWh"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-8 py-4 bg-gray-700 text-white rounded-lg"
    >
      <Download className="w-6 h-6" />
      Descargar .pdf
    </a>
  </div>
</div>

          {/* ================= CERTIFICADO DE MATRIMONIO ================= */}
<div className="p-8 lg:p-10 border-2 border-purple-500 rounded-2xl bg-gradient-to-br from-white to-purple-50 shadow-sm hover:shadow-md transition-all duration-300">
  <h3 className="text-2xl lg:text-3xl font-bold text-slate mb-8 text-center">
    CERTIFICADO DE MATRIMONIO
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

    {/* LITERAL */}
    <div className="flex flex-col items-center p-8 bg-light-bg rounded-lg">
      <File className="w-12 h-12 text-purple-500 mb-4" />
      <h4 className="text-xl font-semibold text-slate mb-4">Literal</h4>
      <a
         href="https://drive.google.com/uc?export=download&id=10jcNy2LTyAgywL5tWl30dvk8HVY2vooR"
        download
        className="flex items-center gap-2 px-6 py-3 bg-purple-500 text-white rounded-lg"
      >
        <Download className="w-5 h-5" />
        Descargar .pdf
      </a>
    </div>

    {/* PLURILINGÜE */}
    <div className="flex flex-col items-center p-8 bg-light-bg rounded-lg">
      <File className="w-12 h-12 text-purple-500 mb-4" />
      <h4 className="text-xl font-semibold text-slate mb-4">Plurilingüe</h4>
      <a
        href="https://drive.google.com/uc?export=download&id=1zxdeMGlQUcbdrnlZxWJHm0p5rm7RgG_F"
        download
        className="flex items-center gap-2 px-6 py-3 bg-purple-500 text-white rounded-lg"
      >
        <Download className="w-5 h-5" />
        Descargar .pdf
      </a>
    </div>

  </div>
</div>
        </section>
      </div>
    </div>
  );
};

export default Ionut;