"use client";

import axios from "axios";
import { useState } from "react";

export default function LoginForm() {
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function login(e: React.FormEvent) {
    e.preventDefault();
    if (!password) {
      setError("please enter a password");
      return;
    };

    setLoading(true);
    try {
      const response = await axios.post('/api/admin-login', { password });

      if (response.data.authenticated) {
        window.location.reload(); // Refresh to load protected content
      } else {
        setError("incorrect password");
      }
    } catch (error: any) {
      if (error.response.status === 401) {
        setError("incorrect password");
      } else {
      console.error('Error authenticating:', error);
      setError('failed to authenticate');
      }
    }
    setLoading(false);
  }

  return (
    <form onSubmit={login} className="flex flex-col self-center items-center justify-center gap-4 my-20 px-8 max-w-2xl">
      <h1 className="text-xl mb-4">admin login</h1>
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input w-full rounded"
      />
      <button
        onClick={login}
        type="submit"
        className={`btn flex justify-center items-center h-10`}
        disabled={loading}
      >
        {loading ? (
          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        ) : (
          <div className="flex items-center gap-2">
            login
          </div>
        )}
      </button>
      {error && <div className="text-primary text-sm">{error}</div>}
    </form>
  );
}