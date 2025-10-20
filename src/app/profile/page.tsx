import { KamiyamaIcon } from "@/components/KamiyamaIcon";
import FadeInSection from "@/components/FadeInSection";

export default function ProfilePage() {
  return (
    <main>
      <section className="py-16">
        <h1 className="text-4xl font-bold text-center mb-8">PROFILE</h1>
          <KamiyamaIcon className="w-full h-30 text-black dark:text-white mb-8" />
        <div className="space-y-8 text-center max-w-2xl mx-auto">
          <h2 className="text-xl font-bold">専門分野</h2>
          <p className="pb-6">音楽制作 アプリ開発 プログラミング</p>
          <h2 className="text-xl font-bold">経歴</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="whitespace-nowrap px-4 py-4 font-medium align-top">2022年4月</td>
                  <td className="px-4 py-4">京都府の大学に入学後、ほぼ同時に大学の軽音楽部とコンピュータクラブに入部。</td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-4 py-4 font-medium align-top">同年9月</td>
                  <td className="px-4 py-4">大学のヘルプデスクのアルバイトを開始。そこで受けたhtmlの研修をきっかけにプログラミング興味を持つ。</td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-4 py-4 font-medium align-top">2023年8月</td>
                  <td className="px-4 py-4">Kyoto Innovativeハッカソンに出場し、最優秀賞を受賞する。</td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-4 py-4 font-medium align-top">2023年9月</td>
                  <td className="px-4 py-4">コンピュータクラブの部長に就任。</td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-4 py-4 font-medium align-top">2025年5月</td>
                  <td className="px-4 py-4">内定先のFINTECH系企業の長期インターンに参加し、Ruby on Railsの実務経験を積む。</td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-4 py-4 font-medium align-top">2025年8月</td>
                  <td className="px-4 py-4">軽音部のスタジオ予約サイトをLaravelで開発&リリース。</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2 className="text-xl font-bold">趣味</h2>
          <p>ギター、ツーリング、ガジェット収集</p>
        </div>
      </section>
    </main>
  );
}
