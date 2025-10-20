import Link from 'next/link';

export default function NotFound() {
  return (
    <main>
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="mb-8">お探しのページは見つかりませんでした。</p>
        <Link href="/" className="text-blue-500 hover:underline">
          トップページに戻る
        </Link>
      </section>
    </main>
  );
}
