"use client";

import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('送信中...');

    // ここで実際にバックエンドにデータを送信する処理を実装します。
    // 今回は例としてコンソールに表示し、成功メッセージを出すシミュレーションを行います。
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log({ name, email, message });

    setStatus('メッセージが送信されました。ありがとうございます！');
    setName('');
    setEmail('');
    setMessage('');

    // 5秒後にステータスメッセージをクリア
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <div className="max-w-2xl mx-auto px-4">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">お名前</label>
          <input
            type="text" id="name" name="name" value={name}
            onChange={(e) => setName(e.target.value)} required
            className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">メールアドレス</label>
          <input
            type="email" id="email" name="email" value={email}
            onChange={(e) => setEmail(e.target.value)} required
            className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">お問い合わせ内容</label>
          <textarea
            id="message" name="message" rows={4} value={message}
            onChange={(e) => setMessage(e.target.value)} required
            className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          ></textarea>
        </div>
        <div>
          <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">送信</button>
        </div>
      </form>
      {status && <p className="text-center mt-4 text-gray-600 dark:text-gray-300">{status}</p>}
    </div>
  );
}
