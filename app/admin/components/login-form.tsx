"use client";

import axios from "axios";
import { LoaderCircle } from "lucide-react";
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
        className="input w-full"
      />
      <button
        onClick={login}
        type="submit"
        className={`btn flex justify-center items-center h-10`}
        disabled={loading}
      >
        {loading ? (
          <LoaderCircle className="animate-spin h-5 w-5 text-secondary" />
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