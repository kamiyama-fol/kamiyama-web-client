
import { FC } from 'react';

const products = [
  {
    name: 'image-spliter',
    description:
      'twitterの画像を分割するためのアプリです。Twitterの縦に4分割された画像を簡単に作成できます。',
    url: 'https://ximage.kamiyama-fol.com',
    language: 'TypeScript',
    languageColor: '#2b7489',
  },
  {
    name: 'youtube_downloader',
    description:
      'YouTubeの動画をmp3かmp4形式でダウンロードするアプリです。',
    url: 'https://github.com/kamiyama-fol/youtube_downloader',
    language: 'Python',
    languageColor: '#3572A5',
  },
  {
    name: 'dotfiles',
    description: 'Kamiyamaの設定ファイル',
    url: 'https://github.com/kamiyama-fol/dotfiles',
    language: 'Shell',
    languageColor: '#89e051',
  },
];

const ProductsPage: FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.name}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {product.name}
                </a>
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {product.description}
              </p>
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  <span
                    className="inline-block w-3 h-3 rounded-full mr-1"
                    style={{ backgroundColor: product.languageColor }}
                  ></span>
                  {product.language}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
