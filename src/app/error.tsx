'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // エラーをロギングサービスに記録する
    console.error(error);
  }, [error]);

  return (
    <main>
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold mb-4">500 - Server Error</h1>
        <p className="mb-8">サーバーでエラーが発生しました。</p>
        <button
          onClick={() => reset()}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded mr-4"
        >
          再読み込み
        </button>
        <Link href="/" className="text-blue-500 hover:underline">トップページに戻る</Link>
      </section>
    </main>
  );
}
