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
          <ul className="pl-8 text-left">
            <li className="pb-6">2022年4月に京都府の大学に入学後、ほぼ同時に大学の軽音楽部とコンピュータクラブに入部。</li>
            <li className="pb-6">同年9月に大学のヘルプデスクのアルバイトを開始。そこで受けたhtmlの研修をきっかけにプログラミング興味を持つ。</li>
            <li className="pb-6">2023年8月にKyoto Innovativeハッカソンに出場し、最優秀賞を受賞する。</li>
            <li className="pb-6">2023年9月にコンピュータクラブの部長に就任。</li>
            <li className="pb-6">2025年5月 内定先のweb系企業の長期インターンに参加し、Ruby on Railsの実務経験を積む。</li>
            <li className="pb-6">2025年8月 軽音部のスタジオ予約サイトを開発&リリース。</li>
          </ul>
          <h2 className="text-xl font-bold">趣味</h2>
          <p>ギター、ツーリング、ガジェット収集</p>
        </div>
      </section>
    </main>
  );
}
