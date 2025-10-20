import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

export default function BalapanLogin() {
  const [username, setUsername] = useState('Aishausk');
  const [password, setPassword] = useState('Aishausk007');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted');
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#e5e7eb' }}>
      <div className="w-full max-w-4xl mx-4">
        <div className="text-sm text-gray-500 mb-4 px-2">Модальное окно входа</div>
        
        <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ backgroundColor: '#FFFECF' }}>
          {/* Header */}
          <header className="px-8 py-6 flex justify-between items-center">
            <a href="/" className="no-underline">
              <div className="text-4xl font-bold" style={{ 
                color: '#F9ADD1',
                fontFamily: 'Arial, sans-serif',
                letterSpacing: '2px'
              }}>
                BALAPAN
              </div>
            </a>
            <a href="/" className="no-underline">
              <button className="bg-transparent border-0 cursor-pointer p-2 hover:opacity-80 transition-opacity">
                <ArrowLeft size={32} color="#F9ADD1" strokeWidth={2.5} />
              </button>
            </a>
          </header>

          {/* Form Container */}
          <div className="px-8 pb-16 pt-8">
            <div className="max-w-md mx-auto">
              {/* Title */}
              <h1 className="text-center text-3xl font-bold text-gray-800 mb-12">
                Уже есть аккаунт?
              </h1>

              {/* Username Field */}
              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-900 mb-2">
                  Username:
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-4 text-base border-2 border-gray-200 rounded-xl bg-white text-gray-500 outline-none transition-colors focus:border-pink-300"
                  style={{ fontFamily: 'Arial, sans-serif' }}
                />
              </div>

              {/* Password Field */}
              <div className="mb-12">
                <label className="block text-sm font-bold text-gray-900 mb-2">
                  Password:
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-4 text-base border-2 border-gray-200 rounded-xl bg-white text-gray-500 outline-none transition-colors focus:border-pink-300"
                  style={{ fontFamily: 'Arial, sans-serif' }}
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full py-4 text-sm font-bold text-white uppercase tracking-wide rounded-full mb-5 transition-all hover:opacity-90"
                style={{
                  backgroundColor: '#F9ADD1',
                  boxShadow: '0 4px 0 0 #FF8EC4',
                  fontFamily: 'Arial, sans-serif',
                  letterSpacing: '1px'
                }}
              >
                Continue
              </button>

              {/* Forgot Password Link */}
              <a href="/forgot-password" className="block text-center text-sm text-gray-600 no-underline hover:text-gray-800 transition-colors">
                Забыли пароль?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}