import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Profile() {
  const [stage, setStage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // XP и уровни для птенца
  const userXP = 750;
  const currentLevel = Math.floor(userXP / 1500);
  const stageFromXP = Math.min(Math.floor(userXP / 375), 3); // 0-375-750-1125-1500

  const birdStages = [
    { 
      name: 'В яйце', 
      image: '/yzo.png',
      description: 'Начало пути',
      minXP: 0
    },
    { 
      name: 'Вылупление', 
      image: '/balapan.png', // замените на ваше изображение вылупления
      description: 'Птенец вылупляется!',
      minXP: 375
    },
    { 
      name: 'Маленький птенец', 
      image: '/kniga.png', // замените на ваше изображение маленького птенца
      description: 'Растет и развивается',
      minXP: 750
    },
    { 
      name: 'Птенец-выпускник', 
      image: '/pusk (2).png', // замените на ваше изображение выпускника
      description: 'Готов к полету!',
      minXP: 1125
    }
  ];

  const nextStage = () => {
    if (stage < birdStages.length - 1 && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setStage(stage + 1);
        setIsAnimating(false);
      }, 600);
    }
  };

  const prevStage = () => {
    if (stage > 0 && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setStage(stage - 1);
        setIsAnimating(false);
      }, 600);
    }
  };

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
            {/* Bird Evolution Card */}
            <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
              <h3 className="text-base font-bold text-gray-900 mb-4 text-center">
                {birdStages[stage].name}
              </h3>
              
              {/* Progress dots */}
              <div className="flex justify-center gap-2 mb-4">
                {birdStages.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx <= stage ? 'bg-pink-400 scale-125' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* Animated Bird */}
              <div className="relative h-48 flex items-center justify-center mb-4 overflow-hidden rounded-xl" style={{ backgroundColor: '#FFFECF' }}>
                {/* Decorative background */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <div className="w-32 h-32 bg-pink-300 rounded-full blur-2xl"></div>
                </div>

                {/* Bird Image */}
                <div
                  className={`relative z-10 transition-all duration-500 ${
                    isAnimating ? 'scale-0 rotate-180 opacity-0' : 'scale-100 rotate-0 opacity-100'
                  }`}
                  style={{
                    filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))',
                    animation: stage === 1 ? 'shake 0.5s ease-in-out, float 3s ease-in-out infinite' : 'float 3s ease-in-out infinite'
                  }}
                >
                  <img 
                    src={birdStages[stage].image} 
                    alt={birdStages[stage].name}
                    className="w-32 h-32 object-contain"
                  />
                </div>

                {/* Hatching Effect */}
                {stage === 1 && !isAnimating && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute"
                        style={{
                          animation: `sparkle 1.5s ease-out infinite`,
                          animationDelay: `${i * 0.2}s`,
                          transform: `rotate(${i * 60}deg) translateY(-50px)`
                        }}
                      >
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Confetti for Graduate */}
                {stage === 3 && !isAnimating && (
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(15)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 rounded-full"
                        style={{
                          backgroundColor: ['#fbbf24', '#f59e0b', '#ec4899', '#8b5cf6'][i % 4],
                          left: `${Math.random() * 100}%`,
                          animation: `fall ${2 + Math.random() * 2}s linear infinite`,
                          animationDelay: `${Math.random() * 2}s`
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>

              <p className="text-sm text-gray-600 text-center mb-4">
                {birdStages[stage].description}
              </p>

              {/* Navigation buttons */}
              <div className="flex gap-2">
                <button
                  onClick={prevStage}
                  disabled={stage === 0 || isAnimating}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 disabled:bg-gray-50 disabled:text-gray-300 text-gray-700 font-medium py-2 px-3 rounded-lg transition-all text-sm disabled:cursor-not-allowed"
                >
                  ←
                </button>
                <button
                  onClick={nextStage}
                  disabled={stage === birdStages.length - 1 || isAnimating}
                  className="flex-1 hover:opacity-90 disabled:opacity-50 text-white font-medium py-2 px-3 rounded-lg transition-all text-sm disabled:cursor-not-allowed"
                  style={{ backgroundColor: '#F9ADD1' }}
                >
                  →
                </button>
              </div>
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
                {stage + 1}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-8px) rotate(-3deg); }
          75% { transform: translateX(8px) rotate(3deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes sparkle {
          0% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(0); }
        }
        @keyframes fall {
          0% { transform: translateY(-50px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(200px) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}