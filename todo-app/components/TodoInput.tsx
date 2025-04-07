'use client';

import { useState } from 'react';

export function TodoInput() {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    // 나중에 여기에 Firebase 연동 코드가 들어갈 예정입니다
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="할 일을 입력하세요"
        className="w-full px-4 py-2 rounded-lg border border-gray-300"
      />
    </form>
  );
}
