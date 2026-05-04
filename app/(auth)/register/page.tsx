'use client';

import { useState } from 'react';
import Link from 'next/link';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Validate inputs
    if (!username || !password || !confirmPassword || !email) {
      setError('Vui lòng điền đầy đủ thông tin');
      setIsLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError('Mật khẩu xác nhận không khớp');
      setIsLoading(false);
      return;
    }

    if (password.length < 6) {
      setError('Mật khẩu phải có ít nhất 6 ký tự');
      setIsLoading(false);
      return;
    }

    try {
      // TODO: Implement register API call here
      console.log('Register attempt:', { username, email, password });
    } catch (error) {
      console.error('Register failed:', error);
      setError('Đăng ký thất bại. Vui lòng thử lại.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-500 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Đăng ký
        </h1>

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
            {error}
          </div>
        )}

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

          {/* Confirm Password Input */}
          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Xác nhận mật khẩu"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition pr-10 text-gray-900 font-semibold placeholder:text-gray-600"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800 transition"
            >
              {showConfirmPassword ? (
                <EyeOutlined className="text-xl" />
              ) : (
                <EyeInvisibleOutlined className="text-xl" />
              )}
            </button>
          </div>

          {/* Email Input */}
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition text-gray-900 font-semibold placeholder:text-gray-600"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Đang xử lý...' : 'Đăng ký'}
          </button>
        </form>

        {/* Login Link */}
        <div className="mt-6 text-center text-gray-600">
          <span>Đã có tài khoản? </span>
          <Link
            href="/login"
            className="text-gray-600 hover:text-gray-800 font-semibold underline transition"
          >
            Đăng nhập
          </Link>
        </div>
      </div>
    </div>
  );
}
