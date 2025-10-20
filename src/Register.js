import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', { username, password, email });
  };

  return (
    <div className="min-h-screen" style={{backgroundColor: '#FFFECF'}}>
      {/* Header */}
 <header className="px-6 py-4 flex justify-between items-center">
  <Link to="/">
    <img 
      src="/fav.png" 
      className="h-18 cursor-pointer hover:opacity-80 transition"
      alt="Balapan Logo"
    />
  </Link>
  <Link to="/">
    <button className="p-3 mr-8 bg-white rounded-full hover:bg-pink-50 transition shadow-md hover:shadow-lg">
      <ArrowLeft size={24} color="#F9ADD1" strokeWidth={2.5} />
    </button>
  </Link>
</header>
      {/* Form Container */}
      <div className="max-w-lg mx-auto px-8 py-16">
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-10">
          Начинаем изучение с Балапан
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
            placeholder="Введите username"
            className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg bg-white text-gray-800"
          />
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-800 mb-2">
            Password:
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Введите пароль"
            className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg bg-white text-gray-800"
          />
        </div>

        {/* Email Field */}
        <div className="mb-10">
          <label className="block text-sm font-semibold text-gray-800 mb-2">
            Почта:
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@gmail.com"
            className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg bg-white text-gray-800"
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-pink-300 hover:bg-pink-400 text-white font-bold py-3 px-8 rounded-2xl transition shadow-[0_4px_0_0_#C54554] text-center mb-4"
        >
          CONTINUE
        </button>

        {/* Login Link */}
        <Link to="/login" className="block text-center text-sm text-gray-500">
          уже есть аккаунт? <span className="text-pink-300 font-semibold">Войти</span>
        </Link>
      </div>
    </div>
  );
}