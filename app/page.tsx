"use client";
import Image from "next/image";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { IconBox } from "@/components/IconBox";

const checkList = [
  "海外就活に特化した情報",
  "実体験に基づくコンテンツ",
  "定期的な情報更新",
]

export default function Home() {
  return (
    <main className="flex flex-col gap-6">
      <h1>新卒の海外就活ガイド</h1>
      <div className="flex gap-4">
        {checkList.map((item, index) => (
          <div key={index} className="flex items-center gap-1">
            <CheckCircledIcon width="22" height="22" />
            <p className="text-xl">{item}</p>
          </div>
        ))}
      </div>
      <div className="relative h-96">
        <Image src="/stockholm.jpeg" alt="Stockholm" fill objectFit="cover" />
      </div>
      <div className="flex flex-col gap-3">
        <div>
          <h2>サイトについて</h2>
          <p>
            小さい頃から、将来は海外で働きたいと考えていました。高校卒業の直前、初めて一人で海外に行った日の高揚感は今でも忘れられません。その後大学在学中にスウェーデンへ交換留学をし、卒業後、スウェーデンでの新卒プログラムに参加し現地での就職を果たしました。このサイトでは、私の経験を元に、海外での就活に役立つ情報を提供しています。
          </p>
        </div>
        <div>
          <h2>サイトの使い方</h2>
          <p>
            海外での就職を見据える中高生の皆さんは、ロードマップを参考に、将来海外で働くための準備を始めてみてください。<br />
            大学生の皆さんは、ロードマップを参考に課外活動などに参加しながら、CV・レジュメの書き方やポイントをチェックし、海外の新卒プログラムに応募する際の準備をしてみてください。
          </p>
        </div>
      </div>
      <section className="flex flex-col gap-2">
        <h2>コンテンツ</h2>
        <div className="grid grid-flow-col auto-cols-fr gap-2">
          <Link href="/roadmap">
            <IconBox icon="🚀" title="Road Map" description="中高・大学生のうちから海外での就活を見据えている場合のロードマップ" />
          </Link>
          <Link href="/cvaudit">
            <IconBox icon="📝" title="CV Checker" description="CV・レジュメの書き方やポイントをチェックリストで紹介します。添削も承ります。" />
          </Link>
          <Link href="/community">
            <IconBox icon="🌐" title="Community" description="海外就活に関する情報交換や質問を行うコミュニティ" />
          </Link>
        </div>
        <div className="grid grid-flow-col auto-cols-fr gap-2">
          <Link href="/contact">
            <div className="box hover:bg-box-hover">
              <h3>お問い合わせ</h3>
              <p>ご質問やご要望がありましたら、フォームからご気軽にご連絡ください。<br />なんでも気軽にどうぞ！</p>
            </div>
          </Link>
          <Link href="/about">
            <div className="box hover:bg-box-hover">
              <h3>サイトやサイト管理人について詳しく</h3>
              <p>サイト開設の意図や管理人について詳しく知りたい方、開発方法についてはこちらをご覧ください</p>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
