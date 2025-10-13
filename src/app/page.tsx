import Image from "next/image";
import { KamiyamaIcon } from "@/components/KamiyamaIcon";
import FadeInSection from "@/components/FadeInSection";
import noteImage from "@/app/assets/images/note.png";
import Parser from "rss-parser";

interface Article {
  title?: string;
  link?: string;
  pubDate?: string;
  thumbnail?: string;
}

const parser = new Parser({
  customFields: {
    item: ["media:thumbnail"],
  },
});

async function getArticles() {
  try {
    const feed = await parser.parseURL("https://note.com/kamiyama_fol/rss");
    return feed.items.map((item) => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      thumbnail: item["media:thumbnail"] || noteImage,
    }));
  } catch (error) {
    console.error("Error fetching RSS feed:", error);
    return [];
  }
}

export default async function Home() {
  const articles = await getArticles();

  return (
    <main>
      <FadeInSection className="py-0 px-0 my-8">
        <KamiyamaIcon className="w-full h-30 text-black dark:text-white" />
      </FadeInSection>

      <section className="py-40px px-0 border-b border-gray-700 my-16">
        <h2 className="text-3xl font-bold text-center mb-8">BLOG</h2>
        <ul className="space-y-4">
          {articles.slice(0, 3).map((article, index) => (
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
            <li className="border-b border-gray-200 dark:border-gray-700 pb-4">
              <span className="text-gray-500 dark:text-gray-400">{article.pubDate
                    ? new Date(article.pubDate).toLocaleDateString()
                    : ""}</span>
              <p>{article.title}</p>
            </li>
            </a>
          ))}

        </ul>
      </section>

      <section className="py-40px px-0 border-b border-gray-700 my-16">
        <h2 className="text-3xl font-bold text-center mb-8">CONTENTS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <a
              href="https://note.com/kamiyama_fol"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={noteImage}
                alt="note"
                width={400}
                height={400}
                className="w-full aspect-square object-cover"
              />
              <p className="mt-2">もっと見る</p>
              <p className="text-gray-500 dark:text-gray-400">
                noteのプロフィールページへ
              </p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
