'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';

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

export default function RegisterPage() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '', confirmPassword: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  const validate = () => {
    if (!formData.username || !formData.password || !formData.confirmPassword || !formData.email) {
      return 'Vui lòng điền đầy đủ thông tin';
    }
    if (formData.password !== formData.confirmPassword) {
      return 'Mật khẩu xác nhận không khớp';
    }
    if (formData.password.length < 6) {
      return 'Mật khẩu phải có ít nhất 6 ký tự';
    }
    // Check if username already exists
    const existingUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]') as RegisteredUser[];
    if (existingUsers.some(u => u.username === formData.username)) {
      return 'Tên tài khoản đã tồn tại';
    }
    if (existingUsers.some(u => u.email === formData.email)) {
      return 'Email đã được đăng ký';
    }
    return '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError('');
    setSuccess('');
    setIsLoading(true);
    try {
      // Get existing users
      const existingUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]') as RegisteredUser[];
      
      // Add new user
      const newUser: RegisteredUser = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      };
      existingUsers.push(newUser);
      
      // Save to localStorage
      localStorage.setItem('registeredUsers', JSON.stringify(existingUsers));
      
      setSuccess('Đăng ký thành công! Chuyển hướng đến trang đăng nhập...');
      setFormData({ username: '', email: '', password: '', confirmPassword: '' });
      
      // Redirect to login after 2 seconds
      setTimeout(() => {
        router.push('/login');
      }, 2000);
    } catch (error) {
      setError('Đăng ký thất bại. Vui lòng thử lại.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-wood-900 p-4">
      <div className="bg-wood-800 border border-gold-500/20 rounded-lg shadow-2xl shadow-black/50 p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-gold-400 mb-8 text-center">Đăng ký</h1>
        {error && <div className="mb-4 p-3 bg-red-900/50 border border-red-500/50 text-red-200 rounded-lg text-sm">{error}</div>}
        {success && <div className="mb-4 p-3 bg-green-900/50 border border-green-500/50 text-green-200 rounded-lg text-sm">{success}</div>}
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            placeholder="Tên tài khoản"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            className={inputClass}
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={inputClass}
          />
          <PasswordInput value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} show={showPassword} onToggle={() => setShowPassword(!showPassword)} />
          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Xác nhận mật khẩu"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              className={inputClass}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gold-100/50 hover:text-gold-400 transition"
            >
              {showConfirmPassword ? <EyeOutlined className="text-xl" /> : <EyeInvisibleOutlined className="text-xl" />}
            </button>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gold-500 hover:bg-gold-400 text-wood-900 font-bold py-3 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-gold-500/20"
          >
            {isLoading ? 'Đang xử lý...' : 'Đăng ký'}
          </button>
        </form>
        <div className="mt-6 text-center text-gold-100/70">
          <span>Đã có tài khoản? </span>
          <Link href="/login" className="text-gold-400 hover:text-gold-300 font-semibold underline transition">
            Đăng nhập
          </Link>
        </div>
      </div>
    </div>
  );
}
