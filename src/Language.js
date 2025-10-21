import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom'; 

export default function Language() {
  const [selectedLanguage, setSelectedLanguage] = useState('kazakh');

  const languages = [
    {
      id: 'kazakh',
      name: 'Қазақ тілі',
      image: '/kt.jpg', 
      bgColor: '#D4F1F4'
    },
    {
      id: 'russian',
      name: 'Русский язык',
      image: '/rf.jpg', 
      bgColor: '#FFE0F0'
    },
    {
      id: 'english',
      name: 'English language',
      image: '/usa.png', 
      bgColor: '#FFE0F0'
    },
    {
      id: 'german',
      name: 'German',
      image: '/gm.jpg', 
      bgColor: '#D0D0D0',
      disabled: true
    }
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
        <a href="/">
          <button className="p-3 mr-8 bg-white rounded-full hover:bg-pink-50 transition shadow-md hover:shadow-lg">
            <ArrowLeft size={24} color="#F9ADD1" strokeWidth={2.5} />
          </button>
        </a>
      </header>

      {/* Content Container */}
      <div className="max-w-2xl mx-auto px-6 pt-8">
        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-10">
          Языки
        </h1>

        {/* Language Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {languages.map((lang) => (
            <button
              key={lang.id}
              onClick={() => !lang.disabled && setSelectedLanguage(lang.id)}
              disabled={lang.disabled}
              className={`relative rounded-2xl p-6 transition-all ${
                lang.disabled 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:scale-105 cursor-pointer'
              } ${
                selectedLanguage === lang.id 
                  ? 'ring-4 ring-pink-400' 
                  : ''
              }`}
              style={{ backgroundColor: lang.bgColor }}
            >
              <div className="flex flex-col items-center">
                <img 
                  src={lang.image} 
                  alt={lang.name}
                  className="w-16 h-16 object-contain mb-3"
                />
                <p className="text-sm font-medium text-gray-800 text-center">
                  {lang.name}
                </p>
                {lang.disabled && (
                  <span className="absolute top-2 right-2 text-xs text-gray-600 bg-white px-2 py-1 rounded">
                    Скоро
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Continue Button */}
        <Link 
          to="/lesson"
          className="block w-full max-w-md mx-auto bg-pink-300 hover:bg-pink-400 text-white font-bold py-4 px-8 rounded-2xl transition shadow-[0_4px_0_0_#C54554] text-center"
        >
          ПРОДОЛЖИТЬ
        </Link>
      </div>
    </div>
  );
}