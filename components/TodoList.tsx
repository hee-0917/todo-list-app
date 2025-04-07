'use client';

import { useState } from 'react';

interface Todo {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
}

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, title: string, description: string) => void;
}

export function TodoList({ todos, onToggle, onDelete, onUpdate }: TodoListProps) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');

  const handleEdit = (todo: Todo) => {
    setEditingId(todo.id);
    setEditTitle(todo.title);
    setEditDescription(todo.description);
  };

  const handleSave = (id: string) => {
    if (editTitle.trim()) {
      onUpdate(id, editTitle, editDescription);
      setEditingId(null);
    }
  };

  return (
    <div className="space-y-4">
      {todos.map(todo => (
        <div key={todo.id} className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            {editingId === todo.id ? (
              <div className="flex-1 space-y-2">
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg"
                  placeholder="할 일 제목"
                />
                <input
                  type="text"
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg"
                  placeholder="할 일 설명"
                />
                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => setEditingId(null)}
                    className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-lg"
                  >
                    취소
                  </button>
                  <button
                    onClick={() => handleSave(todo.id)}
                    className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  >
                    저장
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={todo.isCompleted}
                    onChange={() => onToggle(todo.id)}
                    className="w-5 h-5 rounded border-gray-300 text-blue-600"
                  />
                  <div>
                    <h3 className={`text-lg font-medium ${todo.isCompleted ? 'line-through text-gray-400' : ''}`}>
                      {todo.title}
                    </h3>
                    <p className={`text-gray-600 ${todo.isCompleted ? 'line-through text-gray-400' : ''}`}>
                      {todo.description}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => handleEdit(todo)}
                    className="px-3 py-1 text-blue-500 hover:bg-blue-50 rounded-lg"
                  >
                    ✏️ 수정
                  </button>
                  <button 
                    onClick={() => onDelete(todo.id)}
                    className="px-3 py-1 text-red-500 hover:bg-red-50 rounded-lg"
                  >
                    🗑️ 삭제
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
} 