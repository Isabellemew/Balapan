import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BalapanLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted');
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
        <a href="/">
          <button className="p-3 mr-8 bg-white rounded-full hover:bg-pink-50 transition shadow-md hover:shadow-lg">
            <ArrowLeft size={24} color="#F9ADD1" strokeWidth={2.5} />
          </button>
        </a>
      </header>

      {/* Form Container */}
      <div className="max-w-lg mx-auto px-6 pt-16">
        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-10">
          Уже есть аккаунт?
        </h1>

        {/* Username Field */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-800 mb-2">
            Username:
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Aishausk"
            className={`w-full px-4 py-3 text-base border rounded-lg bg-white transition-colors ${
              username ? 'border-blue-400 text-gray-800' : 'border-gray-300 text-gray-500'
            }`}
          />
        </div>

        {/* Password Field */}
        <div className="mb-10">
          <label className="block text-sm font-semibold text-gray-800 mb-2">
            Password:
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Введите пароль"
            className={`w-full px-4 py-3 text-base border rounded-lg bg-white transition-colors ${
              password ? 'border-blue-400 text-gray-800' : 'border-gray-300 text-gray-500'
            }`}
          />
        </div>

        {/* Submit Button */}
        <Link 
          to="/language"
          className="block w-full bg-pink-300 hover:bg-pink-400 text-white font-bold py-4 px-8 rounded-2xl transition shadow-[0_4px_0_0_#C54554] text-center mb-4"
        >
          ПРОДОЛЖИТЬ
        </Link>

        {/* Forgot Password Link */}
        <Link to="/password" className="block text-center text-sm text-gray-600 hover:text-gray-800 transition">
          Забыли пароль? <span className="text-pink-300 font-semibold">Восстановить</span>
        </Link>
      </div>
    </div>
  );
}