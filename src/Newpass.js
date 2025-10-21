import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BalapanResetPassword() {
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New password submitted');
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
        <a href="/password">
          <button className="p-3 mr-8 bg-white rounded-full hover:bg-pink-50 transition shadow-md hover:shadow-lg">
            <ArrowLeft size={24} color="#F9ADD1" strokeWidth={2.5} />
          </button>
        </a>
      </header>

      {/* Form Container */}
      <div className="max-w-lg mx-auto px-6 pt-16">
        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-10">
          Восстановить пароль
        </h1>

        {/* New Password Field */}
        <div className="mb-32">
          <label className="block text-sm font-semibold text-gray-800 mb-2">
            Новый пароль:
          </label>
          <input
            type="text"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Aishausk007"
            className={`w-full px-4 py-3 text-base border rounded-lg bg-white transition-colors ${
              newPassword ? 'border-blue-400 text-gray-800' : 'border-gray-300 text-gray-500'
            }`}
          />
        </div>

        {/* Submit Button */}
        <Link 
          to="/login"
          className="block w-full bg-pink-300 hover:bg-pink-400 text-white font-bold py-4 px-8 rounded-2xl transition shadow-[0_4px_0_0_#C54554] text-center"
        >
          ПРОДОЛЖИТЬ
        </Link>
      </div>
    </div>
  );
}