import { ReactNode, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const navigate = useNavigate();
  const logout = () => {
  localStorage.removeItem("logged");
  navigate("/login");
};
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Inicio', path: '/' },
    { label: 'Ionut', path: '/ionut' },
    { label: 'Adriana', path: '/adriana' },
    { label: 'Delia', path: '/delia' },
    { label: 'Fotos', path: '/fotos' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <span className="text-2xl lg:text-3xl font-semibold text-slate font-['Baloo_Tamma_2'] hover:text-secondary transition-colors duration-300">
                iRadu
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-10">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm lg:text-base font-['Montserrat'] font-semibold tracking-wide transition-all duration-300 relative group ${
                    isActive(item.path)
                      ? 'text-secondary'
                      : 'text-slate hover:text-secondary'
                  }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 right-0 h-1 bg-secondary transition-all duration-300 ${
                    isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              ))}
              <button
  onClick={logout}
  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
>
  Cerrar sesión
</button>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-slate hover:bg-gray-100 transition-colors duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-gray-100">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-2 py-3 text-sm font-['Montserrat'] font-semibold transition-colors duration-300 ${
                    isActive(item.path)
                      ? 'text-secondary'
                      : 'text-slate hover:text-secondary'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <button
  onClick={() => {
    logout();
    setMobileMenuOpen(false);
  }}
  className="block w-full text-left px-2 py-3 text-red-600 font-semibold hover:bg-gray-100"
>
  Cerrar sesión
</button>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer - Empty as requested */}
      <footer className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4" />
      </footer>
    </div>
  );
};

export default Layout;
