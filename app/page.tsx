'use client';

import { TodoInput } from '../components/TodoInput';
import { TodoList } from '../components/TodoList';
import { useState } from 'react';

interface Todo {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([
    // 예시 할 일을 초기 상태에 포함
    {
      id: '1',
      title: "첫 번째 할 일",
      description: "예시 할 일입니다.",
      isCompleted: false
    }
  ]);

  const addTodo = (title: string) => {
    const newTodo = {
      id: Date.now().toString(),
      title: title,
      description: "새로운 할 일입니다.",
      isCompleted: false
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    ));
  };

  // 삭제 함수 추가
  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // 수정 함수 추가
  const updateTodo = (id: string, title: string, description: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, title, description } : todo
    ));
  };

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Todo List</h1>
      <div className="max-w-2xl mx-auto">
        <TodoInput onAdd={addTodo} />
        <TodoList 
          todos={todos} 
          onToggle={toggleTodo}
          onDelete={deleteTodo}  // 삭제 함수 전달
          onUpdate={updateTodo}  // 수정 함수 전달
        />
      </div>
    </main>
  );
} 