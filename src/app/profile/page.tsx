import { KamiyamaIcon } from "@/components/KamiyamaIcon";
import FadeInSection from "@/components/FadeInSection";

export default function ProfilePage() {
  return (
    <main>
      <section className="py-16">
        <h1 className="text-4xl font-bold text-center mb-8">PROFILE</h1>
        <KamiyamaIcon className="w-full h-30 text-black dark:text-white mb-8" />
        <div className="space-y-8 text-center max-w-2xl mx-auto">
          <h2 className="text-xl font-bold">自己紹介</h2>
          <p className="whitespace-pre-line px-4 text-left">
            Kamiyama（カミヤマ）です。関西在住の大学生エンジニアです。
            <br />
            プログラミングを始めてから約2年が経ち、主にWebアプリケーションの開発に取り組んでいます。
            <br />
            現在は長期インターンでRuby on
            Railsを中心に学びながら、フロントエンドからバックエンドまで幅広く経験を積んでいます。
            <br />
            将来的にはフルスタックエンジニアとして、多様な技術を駆使して価値あるサービスを提供したいと考えています。
          </p>
          <h2 className="text-xl font-bold">技術スタック</h2>
          <table className="mx-auto mb-8">
            <tbody>
              <tr>
                <td className="px-4 py-2 font-semibold text-right align-top">
                  フロントエンド
                </td>
                <td className="px-4 py-2 text-left">
                  React, Next.js, TypeScript, Tailwind CSS
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-semibold text-right align-top">
                  バックエンド
                </td>
                <td className="px-4 py-2 text-left">
                  Ruby on Rails, Laravel, Node.js
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-semibold text-right align-top">
                  データベース
                </td>
                <td className="px-4 py-2 text-left">
                  PostgreSQL, MySQL, SQLite
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-semibold text-right align-top">
                  その他
                </td>
                <td className="px-4 py-2 text-left">
                  AWS, Linux(Ubuntu) , Git, Docker
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <h2 className="text-xl font-bold">趣味</h2>
          <p>ギター、ツーリング、ガジェット収集</p>
        </div>
      </section>
    </main>
  );
}
