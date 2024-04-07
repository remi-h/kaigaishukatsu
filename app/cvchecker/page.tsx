import Link from 'next/link';
import { IconBox, IconBoxRich } from '@/components/IconBox';
import { CVChecklistWhat, CVChecklistHow } from '@/components/CVChecklist';
import Image from 'next/image';
import { CheckCircledIcon } from '@radix-ui/react-icons';
import FormAudit from '@/components/FormAudit';

export default function CVChecker() {
    return (
        <main className='flex flex-col gap-6'>
            <div className='flex flex-col gap-3'>
                <h1>CV Checker</h1>
                <h2>CV・レジュメの書き方と添削サービス</h2>
                <p>CV・レジュメとは日本でいう履歴書のようなものですが、フォーマットが決まっていない場合が多く、応募する職種に合わせてフォーマットや内容を変えることが一般的です。
                    ここでは、CV・レジュメの書き方やポイントを紹介します。また、CV・レジュメの添削サービスも行っています。<br />
                </p>
                <Link href="#audit" className='flex-inline'>
                    <div className='scroll-button'>添削サービスについて詳しく</div>
                </Link>
            </div>
            <div className='flex flex-col gap-3'>
                <h3>海外の新卒プログラムでよくある選考フロー</h3>
                <p>
                    日本の新卒一括採用と似たような仕組みとして、「Graduate Program」や「Trainee Program」というものがあります。1年間程度、研修やジョブローテーションなどをした後、企業に雇用してもらうというものです。サイトの管理人もスウェーデンでTrainee Programに参加し、就職しました。
                </p>
                <p>
                    新卒プログラムの選考フローとしては、まずはCV・レジュメ、カバーレターを提出し、その後、ビデオ面接やケース面接、グループ面接などがあります。その後、オファーが出るかどうかが決まります。
                </p>
                <div className='flex'>
                    <div className='relative h-96 flex-1'>
                        <Image src="/flow.png" alt="CV Audit" fill className='object-contain' />
                    </div>
                    <div className='relative h-96 flex-1'>
                        <Image src="/cvcl.png" alt="CV Audit" fill className='object-contain' />
                    </div>
                </div>
            </div>
            <div id="list" className='flex flex-col gap-4'>
                <h1>Self Audit</h1>
                <p>CV・レジュメを作成するときに気をつけることやコツをリストにしたので、参考にしてください。応募する職種のJob Description を読み、それに合う内容を記載するようにしてください。また、言い回しなどは一例なので、ご自身でしっくりくるものを使ってください。</p>
                <h3 className='flex items-center gap-1'><CheckCircledIcon width={30} height={30} />What To Write</h3>
                <CVChecklistWhat />
                <h3 className='flex items-center gap-1'><CheckCircledIcon width={30} height={30} />How To Write</h3>
                <CVChecklistHow />
            </div>
            <div id="audit" className='flex flex-col gap-3'>
                <h1>CV Audit</h1>
                <div className="grid grid-flow-col auto-cols-fr gap-2">
                    <IconBoxRich icon="✅" title="Simple Audit Service" description="簡易版CV・レジュメの添削サービス。20日程度で添削します。結果はメールでお送りします。">
                        <h3 className='text-base'>料金：1000円</h3>
                        <ul className='px-2 list-disc list-inside'>
                            <li>CV・レジュメのフォーマットチェック</li>
                            <li>内容のチェック</li>
                            <li>改善のアドバイス（簡易版）</li>
                        </ul>
                        <p>一旦CVを作ってみたのでチェックして欲しいという方向け</p>
                    </IconBoxRich>
                    <IconBoxRich icon="⭐️" title="Premium Audit Service" description="詳細版CV・レジュメの添削サービス。10日以内に添削します。結果はメールでお送りします。">
                        <h3 className='text-base'>料金：1600円</h3>
                        <ul className='px-2 list-disc list-inside'>
                            <li>CV・レジュメのフォーマットチェック</li>
                            <li>内容のチェック</li>
                            <li>改善のアドバイス（詳細版）</li>
                            <li>応募先企業に合わせたフィードバック</li>
                            <li>カバーレターのチェック</li>
                        </ul>
                        <p>受けたい企業が決まっている方向け</p>
                    </IconBoxRich>
                    <IconBoxRich icon='🎖️' title="Invitation Only Service*" description="原則レジュメ添削サービスを利用いただいた方から選抜してご案内しています。" >
                        <h3 className='text-base'>料金：個別</h3>
                        <ul className='px-2 list-disc list-inside'>
                            <li>ビデオ面接の練習</li>
                            <li>グループ・ケース面接のコツ など</li>
                        </ul>
                        <p>個別対応します</p>
                    </IconBoxRich>
                </div>
                <p>
                    本当は無料で添削したいのですが、一人で運営していて大量に来てしまうと大変なので、少額の料金をいただいております、ご了承ください。添削サービスを希望する方も、以下のリストを使って、一旦セルフチェックをしてみてください。<br />
                    *Invitation Only Service については、一度、Simple または Premium Audit Service 利用いただいた方から選抜してご案内しています。企業に合わせた面接の練習やケース・グループ面接のコツをお伝えすることを目的としています。
                </p>
                <FormAudit />
            </div>
        </main>
    )
}