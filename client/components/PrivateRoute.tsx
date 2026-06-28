import { Navigate } from "react-router-dom";

interface Props {
  children: JSX.Element;
}

export default function PrivateRoute({ children }: Props) {
  const logged = localStorage.getItem("logged") === "true";

  if (!logged) {
    return <Navigate to="/login" replace />;
  }

  return children;
}