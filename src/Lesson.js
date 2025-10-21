import { Home, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Lessons() {
  const lessons = [
    { id: 1, icon: '⭐', unlocked: true, completed: false, offsetX: 0 },
    { id: 2, icon: '📖', unlocked: false, completed: false, offsetX: -60 },
    { id: 3, icon: '🔒', unlocked: false, completed: false, offsetX: 50 },
    { id: 4, icon: '🎁', unlocked: false, completed: false, offsetX: -45 },
    { id: 5, icon: '🏆', unlocked: false, completed: false, offsetX: 55 },
  ];

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
          <div className="flex items-center gap-2 rounded-full px-4 py-2">
            <span className="text-2xl">🔥</span>
            <span className="font-bold text-orange-500 text-lg">1</span>
          </div>
          <Link to="/Profile">
            <img 
              src="/ava.jpg" 
              className="w-10 h-10 rounded-full object-cover"
              alt="Avatar"
            />
          </Link>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-48 px-4 py-6 space-y-2">
          <a 
            href="/lesson"
            className="flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition"
            style={{ backgroundColor: '#FFE0F0' }}
          >
            <Home size={20} style={{ color: '#F9ADD1' }} />
            <span className="text-gray-800">ИЗУЧЕНИЕ</span>
          </a>
          <a 
            href="/podcasts"
            className="flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm text-gray-600 hover:bg-pink-50 transition"
          >
            <Headphones size={20} style={{ color: '#A0A0FF' }} />
            <span>ПОДКАСТЫ</span>
          </a>
        </div>

        {/* Main Content */}
        <div className="flex-1 px-6 py-6 flex gap-6">
          {/* Lessons Path */}
          <div className="flex-1">
            {/* Level Header */}
            <div className="rounded-2xl p-6 mb-6" style={{ backgroundColor: '#FFE0F0' }}>
              <h2 className="text-2xl font-black text-gray-800 mb-1">Уровень 1</h2>
              <p className="text-base font-medium text-gray-700">Составление простых предложений</p>
            </div>

            {/* Lesson Path */}
            <div className="relative py-12">
              <div className="flex items-start justify-between gap-8">
                {lessons.map((lesson, index) => (
                  <div 
                    key={lesson.id} 
                    className="relative flex flex-col items-center"
                    style={{ 
                      transform: `translateY(${lesson.offsetX}px)`,
                      transition: 'transform 0.3s ease'
                    }}
                  >
<Link to='/Les'>

                  {index === 0 && lesson.unlocked && !lesson.completed && (
                    <div className="absolute -top-12 left-1 rounded-full px-6 py-2 border-2 font-black text-sm" 
                         style={{ 
                           backgroundColor: '#FFFECF',
                           borderColor: '#F9ADD1',
                           color: '#F9ADD1',
                           boxShadow: '0 4px 0 0 #FFFB57'
                         }}>
                      НАЧАТЬ
                    </div>
                  )}
                  </Link>

                  {/* Lesson Circle */}
                  <button
                    disabled={!lesson.unlocked}
                    className={`relative w-28 h-28 rounded-full flex items-center justify-center text-5xl transition-all ${
                      lesson.unlocked 
                        ? 'hover:scale-105 cursor-pointer' 
                        : 'cursor-not-allowed grayscale'
                    }`}
                    style={lesson.unlocked ? {
                      backgroundColor: '#FFDAEC',
                      boxShadow: '0 6px 0 0 #FF8EC4'
                    } : {
                      backgroundColor: '#E5E5E5',
                      boxShadow: '0 6px 0 0 #B0B0B0'
                    }}
                  >
                    {lesson.unlocked ? (
                      <span className="relative z-10" style={{ filter: 'hue-rotate(330deg) saturate(1.2)' }}>{lesson.icon}</span>
                    ) : (
                      <img 
                        src="/kniga.png" 
                        className="w-20 h-20 object-cover grayscale opacity-60"
                        alt="Locked"
                      />
                    )}
                  </button>
                </div>
              ))}
              </div>

              {/* Character */}
              <div className="absolute right-25 top-1/10 transform translate-x-8">
                <img 
                  src="/kni.png" 
                  className="w-56 h-56 object-contain"
                  alt="Character"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}