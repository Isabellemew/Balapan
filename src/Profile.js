import { Link } from 'react-router-dom';

export default function Profile() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFECF' }}>
      {/* Header */}
      <header className="px-6 py-4 flex justify-between items-center">
        <a href="/">
          <img 
            src="/fav.png" 
            className="h-18 cursor-pointer hover:opacity-80 transition"
            alt="Balapan Logo"
          />
        </a>
        <div className="flex items-center gap-4">
          <a href="/lesson" className="text-base font-bold text-gray-700 hover:text-gray-900">
           Уроки
          </a>
          <Link to='/Profile'>
          <img 
            src="/ava.jpg" 
            className="w-10 h-10 rounded-full object-cover cursor-pointer"
            alt="Avatar"
          />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex gap-6">
          {/* Left Column */}
          <div className="flex-1">
            {/* Profile Card */}
            <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <img 
                    src="/ava.jpg" 
                    className="w-20 h-20 rounded-full object-cover"
                    alt="Profile"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h1 className="text-2xl font-bold text-gray-900">Пенелопа Хард</h1>
                      <span className="text-2xl">🔥</span>
                      <span className="text-xl font-bold text-orange-500">1</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Русский язык</p>
                    <button className="text-sm font-medium mt-2 flex items-center gap-1" style={{ color: '#F9ADD1' }}>
                      <span>✏️</span>
                      <Link to='/edit'>
                      <span>Редактировать профиль</span>
                      </Link>
                    </button>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="6" r="1.5" fill="currentColor"/>
                    <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
                    <circle cx="12" cy="18" r="1.5" fill="currentColor"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* XP Progress */}
            <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-base font-bold text-gray-900">750 / 1500 XP до следующего уровня</span>
              </div>
              <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full transition-all"
                  style={{ 
                    width: '50%',
                    background: 'linear-gradient(to right, #FFDAEC, #FFDAEC)'
                  }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 mt-3">Еще 750 XP и ваш Балапан подрастет!</p>
            </div>

            {/* Current Course */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Текущий курс</h2>
              <div className="flex items-center gap-4 p-4 rounded-xl" style={{ backgroundColor: '#FFDAEC' }}>
                <img 
                  src="/rf.jpg" 
                  className="w-16 h-16 object-contain rounded-lg"
                  alt="Flag"
                />
                <div className="flex-1">
                  <p className="text-sm font-bold text-gray-900 mb-1">Раздел 1</p>
                  <div className="w-full h-2 bg-white rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full"
                      style={{ 
                        width: '35%',
                        backgroundColor: '#FDE047'
                      }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">35% пройдено</p>
                </div>
              </div>
              <p className="text-sm font-medium text-gray-700 mt-3">Русский язык</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-80">
            {/* Egg Achievement */}
            <div className="rounded-2xl p-6 mb-6 text-center" style={{ backgroundColor: '#FFFECF', border: '2px solid #E5E5E5' }}>
              <img 
                src="/yzo.png" 
                className="w-32 h-32 mx-auto mb-4 object-contain"
                alt="Egg Achievement"
              />
              <p className="text-sm font-bold text-gray-900">Первый уровень</p>
            </div>

            {/* Chick Name */}
            <div className="bg-white rounded-2xl p-6 mb-4 shadow-sm">
              <p className="text-sm font-bold text-gray-700 mb-3">Имя птенца:</p>
              <input 
                type="text"
                value="Балапан"
                readOnly
                className="w-full px-4 py-3 rounded-xl text-sm font-medium text-gray-900"
                style={{ backgroundColor: '#F3F4F6', border: '2px solid #E5E7EB' }}
              />
            </div>

            {/* Chick Level */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="text-sm font-bold text-gray-700 mb-3">Уровень птенца:</p>
              <div className="px-4 py-3 rounded-xl text-sm font-medium text-gray-900 text-center"
                   style={{ backgroundColor: '#F3F4F6', border: '2px solid #E5E7EB' }}>
                1
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}