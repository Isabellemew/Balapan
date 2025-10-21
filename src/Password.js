import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BalapanForgotPassword() {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFECF' }}>
      <header className="px-6 py-4 flex justify-between items-center">
        <a href="/">
          <img 
            src="/fav.png" 
            className="h-18 cursor-pointer hover:opacity-80 transition"
            alt="Balapan Logo"
          />
        </a>
        <a href="/login">
          <button className="p-3 mr-8 bg-white rounded-full hover:bg-pink-50 transition shadow-md hover:shadow-lg">
            <ArrowLeft size={24} color="#F9ADD1" strokeWidth={2.5} />
          </button>
        </a>
      </header>

      <div className="max-w-lg mx-auto px-6 pt-16">
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-10">
          Восстановить пароль
        </h1>

        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-800 mb-2">
            Gmail:
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@gmail.com"
            className={`w-full px-4 py-3 text-base border rounded-lg bg-white transition-colors ${
              email ? 'border-blue-400 text-gray-800' : 'border-gray-300 text-gray-500'
            }`}
          />
        </div>

        <div className="mb-3">
          <div className="relative">
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="******"
              className={`w-full px-4 py-3 pr-24 text-base border rounded-lg bg-white transition-colors ${
                code ? 'border-blue-400 text-gray-800' : 'border-gray-300 text-gray-500'
              }`}
            />
            <button
              onClick={() => console.log('Verify')}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1.5 text-sm text-gray-600 hover:text-gray-800 transition font-medium"
            >
              Проверка
            </button>
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-10 text-center">
          Введите код, который пришел вам на почту (60 сек)
        </p>

        <Link 
          to="/newpass"
          className="block w-full bg-pink-300 hover:bg-pink-400 text-white font-bold py-4 px-8 rounded-2xl transition shadow-[0_4px_0_0_#C54554] text-center"
        >
          ПРОДОЛЖИТЬ
        </Link>
      </div>
    </div>
  );
}