import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

export default function BalapanSignup() {
  const [username, setUsername] = useState('Aishausk');
  const [password, setPassword] = useState('Aishausk007');
  const [email, setEmail] = useState('example@gmail.com');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div style={{ backgroundColor: '#FFFECF', minHeight: '100vh', padding: '24px' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '80px' }}>
          <div style={{ 
            fontSize: '32px', 
            fontWeight: 'bold',
            color: '#F9ADD1',
            fontFamily: 'Arial, sans-serif',
            letterSpacing: '2px'
          }}>
            BALAPAN
          </div>
          <button style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px'
          }}>
            <ArrowLeft size={32} color="#F9ADD1" strokeWidth={2.5} />
          </button>
        </div>

        {/* Form Container */}
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
          {/* Title */}
          <h1 style={{
            textAlign: 'center',
            fontSize: '24px',
            fontWeight: '600',
            color: '#333',
            marginBottom: '40px',
            fontFamily: 'Arial, sans-serif'
          }}>
            Начинаем изучение с Балапан
          </h1>

          {/* Username Field */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '600',
              color: '#333',
              marginBottom: '8px',
              fontFamily: 'Arial, sans-serif'
            }}>
              Username:
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                width: '100%',
                padding: '14px 16px',
                fontSize: '15px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                backgroundColor: 'white',
                color: '#999',
                fontFamily: 'Arial, sans-serif',
                boxSizing: 'border-box'
              }}
            />
          </div>

          {/* Password Field */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '600',
              color: '#333',
              marginBottom: '8px',
              fontFamily: 'Arial, sans-serif'
            }}>
              Password:
            </label>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '14px 16px',
                fontSize: '15px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                backgroundColor: 'white',
                color: '#999',
                fontFamily: 'Arial, sans-serif',
                boxSizing: 'border-box'
              }}
            />
          </div>

          {/* Email Field */}
          <div style={{ marginBottom: '40px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '600',
              color: '#333',
              marginBottom: '8px',
              fontFamily: 'Arial, sans-serif'
            }}>
              Почта:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '100%',
                padding: '14px 16px',
                fontSize: '15px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                backgroundColor: 'white',
                color: '#999',
                fontFamily: 'Arial, sans-serif',
                boxSizing: 'border-box'
              }}
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            style={{
              width: '100%',
              padding: '16px',
              fontSize: '14px',
              fontWeight: '600',
              color: 'white',
              backgroundColor: '#F9ADD1',
              border: 'none',
              borderRadius: '30px',
              cursor: 'pointer',
              fontFamily: 'Arial, sans-serif',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              boxShadow: '0 4px 12px #FF8EC4',
              marginBottom: '16px'
            }}
          >
            Continue
          </button>

          {/* Login Link */}
          <div style={{
            textAlign: 'center',
            fontSize: '13px',
            color: '#999',
            fontFamily: 'Arial, sans-serif'
          }}>
            уже есть аккаунт
          </div>
        </div>
      </div>
    </div>
  );
}