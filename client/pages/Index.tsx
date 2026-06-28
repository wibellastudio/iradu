import { Link } from 'react-router-dom';

const Index = () => {
  const cards = [
    {
      id: 'ionut',
      name: 'Ionut',
      icon: '👨',
      path: '/ionut',
    },
    {
      id: 'adriana',
      name: 'Adriana',
      icon: '👩',
      path: '/adriana',
    },
    {
      id: 'delia',
      name: 'Delia',
      icon: '👧',
      path: '/delia',
    },
    {
      id: 'fotos',
      name: 'Fotos',
      icon: '🖼️',
      path: '/fotos',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 lg:py-40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {cards.map((card) => (
              <Link
                key={card.id}
                to={card.path}
                className="group"
              >
                {/* Card Container */}
                <div className="flex flex-col items-center justify-center text-center h-full transition-all duration-300">
                  {/* Icon/Avatar Box */}
                  <div className="relative mb-8 lg:mb-10 perspective">
                    <div className="flex items-center justify-center w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl lg:rounded-3xl transition-all duration-300 group-hover:shadow-2xl group-hover:from-blue-50 group-hover:to-blue-100">
                      <span className="text-6xl lg:text-8xl transition-transform duration-300 group-hover:scale-110">
                        {card.icon}
                      </span>
                    </div>
                  </div>

                  {/* Name */}
                  <h2 className="text-2xl lg:text-3xl font-bold text-slate mb-4 text-center font-['Open_Sans'] transition-colors duration-300 group-hover:text-secondary">
                    {card.name}
                  </h2>

                  {/* Hover indicator line */}
                  <div className="h-1.5 w-16 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
