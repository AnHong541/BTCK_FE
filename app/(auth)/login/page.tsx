'use client';

import { useState } from 'react';
import Link from 'next/link';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // TODO: Implement login API call here
      console.log('Login attempt:', { username, password });
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-500 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Đăng nhập
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Username Input */}
          <div>
            <input
              type="text"
              placeholder="Tên tài khoản"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition text-gray-900 font-semibold placeholder:text-gray-600"
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition pr-10 text-gray-900 font-semibold placeholder:text-gray-600"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800 transition"
            >
              {showPassword ? (
                <EyeOutlined className="text-xl" />
              ) : (
                <EyeInvisibleOutlined className="text-xl" />
              )}
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Đang xử lý...' : 'Đăng nhập'}
          </button>
        </form>

        {/* Register Link */}
        <div className="mt-6 text-center text-gray-600">
          <span>Chưa có tài khoản? </span>
          <Link
            href="/register"
            className="text-gray-600 hover:text-gray-800 font-semibold underline transition"
          >
            Đăng ký
          </Link>
        </div>
      </div>
    </div>
  );
}
