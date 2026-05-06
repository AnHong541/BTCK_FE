'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { useAuth } from '@/app/context/AuthContext';

const inputClass = 'w-full px-4 py-3 border border-gold-500/30 bg-wood-700 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent transition text-gold-100 font-semibold placeholder:text-gold-100/50';

interface PasswordInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  show: boolean;
  onToggle: () => void;
}

interface RegisteredUser {
  username: string;
  email: string;
  password: string;
}

function PasswordInput({ value, onChange, show, onToggle }: PasswordInputProps) {
  return (
    <div className="relative">
      <input
        type={show ? 'text' : 'password'}
        placeholder="Mật khẩu"
        value={value}
        onChange={onChange}
        className={inputClass}
      />
      <button
        type="button"
        onClick={onToggle}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gold-100/50 hover:text-gold-400 transition"
      >
        {show ? <EyeOutlined className="text-xl" /> : <EyeInvisibleOutlined className="text-xl" />}
      </button>
    </div>
  );
}

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      if (!username.trim() || !password.trim()) {
        setError('Vui lòng nhập tên tài khoản và mật khẩu.');
        setIsLoading(false);
        return;
      }
      
      // Check if it's the admin account
      if (username === 'TaivaAndeptrai' && password === '1234567') {
        login(username, 'admin');
        router.push('/');
        return;
      }
      
      // Check registered users
      const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]') as RegisteredUser[];
      const user = registeredUsers.find(u => u.username === username && u.password === password);
      
      if (user) {
        login(username, 'user');
        router.push('/');
      } else {
        setError('Tên tài khoản hoặc mật khẩu không chính xác.');
      }
    } catch (err) {
      setError('Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-wood-900 p-4">
      <div className="bg-wood-800 border border-gold-500/20 rounded-lg shadow-2xl shadow-black/50 p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-gold-400 mb-8 text-center">Đăng nhập</h1>
        {error && <div className="mb-4 p-3 bg-red-900/50 border border-red-500/50 text-red-200 rounded-lg text-sm">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            placeholder="Tên tài khoản"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={isLoading}
            className={inputClass}
          />
          <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} show={showPassword} onToggle={() => setShowPassword(!showPassword)} />

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gold-500 hover:bg-gold-400 text-wood-900 font-bold py-3 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-gold-500/20"
          >
            {isLoading ? 'Đang xử lý...' : 'Đăng nhập'}
          </button>
        </form>
        <div className="mt-6 text-center text-gold-100/70">
          <span>Chưa có tài khoản? </span>
          <Link href="/register" className="text-gold-400 hover:text-gold-300 font-semibold underline transition">
            Đăng ký
          </Link>
        </div>
      </div>
    </div>
  );
}
