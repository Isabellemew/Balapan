import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Profile() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showLevelUpModal, setShowLevelUpModal] = useState(false);
  const [previousStage, setPreviousStage] = useState(null);

  const birdStages = [
    { 
      name: 'В яйце', 
      image: '/yzo.png',
      description: 'Начало пути',
      minXP: 0
    },
    { 
      name: 'Вылупление', 
      image: '/balapan.png',
      description: 'Птенец вылупляется!',
      minXP: 375
    },
    { 
      name: 'Маленький птенец', 
      image: '/kniga.png',
      description: 'Растет и развивается',
      minXP: 750
    },
    { 
      name: 'Птенец-выпускник', 
      image: '/pusk (2).png',
      description: 'Готов к полету!',
      minXP: 1125
    }
  ];

  // Загрузка данных профиля при монтировании компонента
  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await fetch('/api/user/profile', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      
      if (!response.ok) {
        throw new Error('Ошибка загрузки профиля');
      }
      
      const data = await response.json();
      setUserData(data);
      setLoading(false);
    } catch (error) {
      console.error('Ошибка загрузки профиля:', error);
      setLoading(false);
      // Можно добавить обработку ошибок или редирект на логин
    }
  };

  // Функция для обновления данных после прохождения урока
  // Вызывайте эту функцию из компонента урока после успешного завершения
  const handleLessonComplete = async () => {
    try {
      const response = await fetch('/api/lesson/complete', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        }
      });
      
      const data = await response.json();
      
      // Проверяем, повысился ли уровень
      if (data.leveledUp) {
        setPreviousStage(userData.birdStage);
        setShowLevelUpModal(true);
      }
      
      // Обновляем данные пользователя
      setUserData({
        ...userData,
        xp: data.xp,
        birdStage: data.birdStage
      });
    } catch (error) {
      console.error('Ошибка при завершении урока:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#FFFECF' }}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-pink-400 mx-auto mb-4"></div>
          <p className="text-gray-700 font-medium">Загрузка профиля...</p>
        </div>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#FFFECF' }}>
        <div className="text-center">
          <p className="text-gray-700 font-medium mb-4">Не удалось загрузить профиль</p>
          <button 
            onClick={fetchUserData}
            className="bg-pink-400 text-white px-6 py-2 rounded-lg hover:bg-pink-500"
          >
            Попробовать снова
          </button>
        </div>
      </div>
    );
  }

  const currentStage = userData.birdStage || 0;
  const currentXP = userData.xp || 0;
  const nextStageXP = birdStages[Math.min(currentStage + 1, 3)]?.minXP || 1500;
  const progressPercent = Math.min(
    ((currentXP - birdStages[currentStage].minXP) / 
    (nextStageXP - birdStages[currentStage].minXP)) * 100,
    100
  );

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
                      <h1 className="text-2xl font-bold text-gray-900">
                        {userData.username || 'Пенелопа Хард'}
                      </h1>
                      <span className="text-2xl">🔥</span>
                      <span className="text-xl font-bold text-orange-500">
                        {userData.streak || 1}
                      </span>
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
                <span className="text-base font-bold text-gray-900">
                  {currentXP} / {nextStageXP} XP до следующего уровня
                </span>
              </div>
              <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full transition-all duration-500"
                  style={{ 
                    width: `${progressPercent}%`,
                    background: 'linear-gradient(to right, #FFDAEC, #FFDAEC)'
                  }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 mt-3">
                {currentStage < 3 
                  ? `Еще ${nextStageXP - currentXP} XP и ваш Балапан подрастет!`
                  : 'Ваш Балапан достиг максимального уровня!'}
              </p>
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
                {birdStages[currentStage].name}
              </h3>
              
              {/* Progress dots */}
              <div className="flex justify-center gap-2 mb-4">
                {birdStages.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx <= currentStage ? 'bg-pink-400 scale-125' : 'bg-gray-300'
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
                  className="relative z-10 transition-all duration-500"
                  style={{
                    filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))',
                    animation: currentStage === 1 ? 'shake 0.5s ease-in-out, float 3s ease-in-out infinite' : 'float 3s ease-in-out infinite'
                  }}
                >
                  <img 
                    src={birdStages[currentStage].image} 
                    alt={birdStages[currentStage].name}
                    className="w-32 h-32 object-contain"
                  />
                </div>

                {/* Hatching Effect */}
                {currentStage === 1 && (
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
                {currentStage === 3 && (
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
                {birdStages[currentStage].description}
              </p>

              {/* Удалены кнопки навигации - пользователь не может вручную менять стадию */}
            </div>

            {/* Chick Name */}
            <div className="bg-white rounded-2xl p-6 mb-4 shadow-sm">
              <p className="text-sm font-bold text-gray-700 mb-3">Имя птенца:</p>
              <input 
                type="text"
                value={userData.birdName || "Балапан"}
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
                {currentStage + 1}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Level Up Modal */}
      {showLevelUpModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn">
          <div className="bg-white rounded-3xl p-8 max-w-md mx-4 text-center transform animate-scaleIn">
            <div className="text-6xl mb-4 animate-bounce">🎉</div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Поздравляем!
            </h2>
            <p className="text-lg mb-6 text-gray-700">
              Ваш Балапан вырос!
            </p>
            
            {/* Показываем новую стадию */}
            <div className="bg-yellow-50 rounded-2xl p-6 mb-6">
              <img 
                src={birdStages[currentStage].image} 
                className="w-32 h-32 mx-auto mb-4 object-contain animate-bounce"
                alt="New stage"
              />
              <p className="text-xl font-bold text-gray-900 mb-2">
                {birdStages[currentStage].name}
              </p>
              <p className="text-sm text-gray-600">
                {birdStages[currentStage].description}
              </p>
            </div>
            
            <button 
              onClick={() => setShowLevelUpModal(false)}
              className="w-full text-white font-bold py-3 px-6 rounded-xl transition-all hover:opacity-90"
              style={{ backgroundColor: '#F9ADD1' }}
            >
              Отлично! 🎊
            </button>
          </div>
        </div>
      )}

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
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}