import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (id === "Admin" && password === "2024") {
      localStorage.setItem("logged", "true");
      navigate("/");
    } else {
      setError("ID o contraseña incorrectos");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-md w-80"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">
          Iniciar sesión
        </h1>

        <input
          className="w-full border rounded p-2 mb-4"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />

        <input
          type="password"
          className="w-full border rounded p-2 mb-4"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <p className="text-red-500 text-sm mb-4">{error}</p>
        )}

        <button
          className="w-full bg-blue-600 text-white rounded p-2 hover:bg-blue-700"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}