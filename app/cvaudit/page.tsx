import Link from 'next/link';
import IconBox from '@/components/IconBox';
import CVChecklist from '@/components/CVChecklist';
import Image from 'next/image';

export default function CVAudit() {
    return (
        <main className='flex flex-col gap-4'>
            <h1>CV Audit</h1>
            <h2>CV・レジュメの書き方と添削サービス</h2>
            <p>CV・レジュメとは日本でいう履歴書のようなものですが、フォーマットが決まっていない場合が多く、応募する職種に合わせてフォーマットや内容を変えることが一般的です。
                ここでは、CV・レジュメの書き方やポイントを紹介します。また、CV・レジュメの添削サービスも行っています。<br />
            </p>
            <div className="grid grid-flow-col auto-cols-fr gap-2">
                <IconBox icon="👀" title="Self Audit" description="一旦CV・レジュメを作って、自分で自分のCV・レジュメをチェック" />
                <IconBox icon="✅" title="Simple Audit Service" description="簡易版CV・レジュメの添削サービス。20日程度で添削します。" />
                <IconBox icon="⭐️" title="Premium Audit Service" description="詳細版CV・レジュメの添削サービス。10日以内に添削します。 " />
                <IconBox icon="💨" title="Quick Service" description="詳細版CV・レジュメの添削サービス。3日以内に添削します" />
            </div>
            <div className='flex'>
                <div className='relative h-96 flex-1'>
                    <Image src="/flow.png" alt="CV Audit" fill objectFit='contain' />
                </div>
                <div className='relative h-96 flex-1'>
                    <Image src="/cvcl.png" alt="CV Audit" fill objectFit='contain' />
                </div>
            </div>
            <div id="list">
                <h3>Self Audit Checklist</h3>
                <CVChecklist />
            </div>
            <h2>添削サービス</h2>
            <p>本当は無料で添削したいのですが、一人で運営していて大量に来てしまうと大変なので、少額の料金をいただいております。ご了承ください。</p>
        </main>
    )
}