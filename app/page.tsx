"use client";
import Image from "next/image";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import IconBox from "@/components/IconBox";

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
      <div className="grid grid-flow-col auto-cols-fr gap-2">
        <Link href="/roadmap">
          <IconBox icon="🚀" title="Road Map" description="中高・大学生のうちから海外での就活を見据えている場合のロードマップ" />
        </Link>
        <Link href="/cvaudit">
          <IconBox icon="📝" title="CV Audit" description="CV・レジュメの書き方やポイントを紹介します。添削も承ります。" />
        </Link>
        <Link href="/community">
          <IconBox icon="🌐" title="Community" description="海外就活に関する情報交換や質問を行うコミュニティ" />
        </Link>
      </div>
    </main>
  );
}
