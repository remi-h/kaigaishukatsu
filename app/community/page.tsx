import Link from "next/link"
import { IconBox } from "@/components/IconBox"

export default function Community() {
    return (
        <main>
            <h1>COMMUNITY</h1>
            <h2>WORK ABROAD on DISCORD</h2>
            <p>2024年5月にオープンした新しいコミュニティです。</p>
            <p>対象者：現地就職を目指している方・現地就職をされた方</p>
            <p>コミュニテイ運営：情報交換やオンラインミートアップ・場所が合えばオフラインイベントも開催する予定です。</p>
            <div className="max-w-[500px]">
                <Link href="https://discord.gg/edJbrWNQBW" target="_blank">
                    <IconBox icon="🌐" title="WORK ABROAD COMMUNITY on Discord" description="" />
                </Link>
            </div>
            
        </main>
    )
}