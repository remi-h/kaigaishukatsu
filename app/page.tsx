"use client";
import Image from "next/image";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const checkList = [
  "海外就活に特化した情報",
  "実体験に基づくコンテンツ",
  "定期的な情報更新",
]

export default function Home() {
  return (
    <main className="flex flex-col gap-6">
      <h1>新卒の海外就活辞典</h1>
      <div className="flex gap-4">
        {checkList.map((item, index) => (
          <div key={index} className="flex items-center gap-1">
            <CheckCircledIcon width="22" height="22" />
            <p className="text-xl">{item}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <Link href="/roadmap">
          <div className="box flex-1">
            <div className="relative h-[130px]">
              <Image src="/map.jpeg" layout="fill" objectFit="cover" alt="roadmap" className="rounded-md" />
            </div>
            <h2>🚀 Road Map</h2>
            <p>中高・大学生のうちから海外での就活を見据えている場合のロードマップ</p>
          </div>
        </Link>
        <Link href="/cvaudit">
          <div className="box flex-1">
            <div className="relative h-[130px]">
              <Image src="/cv.jpeg" layout="fill" objectFit="cover" alt="roadmap" className="rounded-md" />
            </div>
            <h2>📝 CV Audit</h2>
            <p>CV・レジュメの書き方やポイントを紹介します。添削も承ります。</p>
          </div>
        </Link>
        <Link href="/community">
          <div className="box flex-1 break-words">
            <div className="relative h-[130px]">
              <Image src="/community.jpeg" layout="fill" objectFit="cover" alt="roadmap" className="rounded-md" />
            </div>
            <h2>💬 Community</h2>
            <p>海外就職を目指す人のコミュニティです。チャットでの情報交換や、交流会・イベントに参加できます。</p>
          </div>
        </Link>
      </div>
    </main>
  );
}
