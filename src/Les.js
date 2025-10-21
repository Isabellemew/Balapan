import { Link } from 'react-router-dom';

export default function LessonExercise() {
  const sections = [
    { name: 'СЕКЦИЯ 1', path: '/Les' },
    { name: 'СЕКЦИЯ 2', path: '/Set' },
    { name: 'СЕКЦИЯ 3', path: '/section3' },
    { name: 'СЕКЦИЯ 4', path: '/section4' },
    { name: 'СЕКЦИЯ 5', path: '/section5' },
    { name: 'СЕКЦИЯ 6', path: '/section6' },
    { name: 'ДОМАШНЯЯ РАБОТА', path: '/homework' }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFECF' }}>
      {/* Header */}
      <header className="px-6 py-4 flex justify-between items-center">
        <Link to="/">
          <img 
            src="/fav.png" 
            className="h-18 cursor-pointer hover:opacity-80 transition"
            alt="Balapan Logo"
          />
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/lessons" className="text-base font-bold text-gray-700 hover:text-gray-900">
            Learn
          </Link>
          <Link to="/profile">
            <img 
              src="/ava.jpg" 
              className="w-10 h-10 rounded-full object-cover cursor-pointer"
              alt="Avatar"
            />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex gap-6">
          {/* Left Column */}
          <div className="flex-1">
            {/* Warm Up Button */}
            <div className="mb-6">
              <button 
                className="px-6 py-2 rounded-full font-bold text-sm border-2 transition"
                style={{ 
                  backgroundColor: '#FFFECF',
                  borderColor: '#000000',
                  color: '#000000'
                }}
              >
                РАЗОГРЕВ
              </button>
            </div>

            {/* Exercise Card */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              {/* Image */}
              <div className="mb-6">
                <img 
                  src="/hogwarts.png" 
                  className="w-full h-64 object-cover rounded-xl"
                  alt="Exercise"
                />
              </div>

              {/* Question */}
              <div className="mt-6">
                <p className="text-sm font-bold text-gray-900 leading-relaxed">
                  ЧТО ВЫ ВИДИТЕ НА КАРТИНЕ? ПРЕДСТАВЬТЕ ЧТО ВЫ СТУДЕНТ В ХОГВАРТСЕ. КАК ВАС ЗОВУТ? В КАКОМ ВАШЕМ ДОМЕ? ЧТО, ПО ВАШЕМУ МНЕНИЮ, СТУДЕНТЫ ДЕЛАЮТ КАЖДЫЙ ДЕНЬ В ХОГВАРТСЕ?
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Sections */}
          <div className="w-80">
            {/* Chick Decoration */}
            <div className="rounded-2xl p-0 mb-6 relative" style={{ backgroundColor: '#FFDAEC' }}>
              <div className="flex justify-center">
                <img 
                  src="/mal.png" 
                  className="w-30 h-30 object-contain"
                  alt="Chick"
                />
              </div>
            </div>

            {/* Sections List */}
            <div className="rounded-2xl p-6 space-y-3" style={{ backgroundColor: '#FFDAEC' }}>
              {sections.map((section, index) => (
                <Link 
                  key={index}
                  to={section.path}
                  className="block px-4 py-3 rounded-lg font-bold text-sm text-gray-900 border-b-2 border-black hover:bg-opacity-80 transition"
                  style={{ backgroundColor: '#FFDAEC' }}
                >
                  {section.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}