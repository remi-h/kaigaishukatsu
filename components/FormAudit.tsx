'use client';
import * as RadioGroup from '@radix-ui/react-radio-group';

const FormAudit = () => {
    return (
        <form name="cv-audit" method="POST" data-netlify="true" className='grid box gap-4'>
            <h3>添削サービス申込</h3>
            <span className='grid'>
                <label htmlFor="name">お名前（ニックネーム可）</label>
                <input type="text" id="name" name="name" />
            </span>
            <span className='grid'>
                <label htmlFor="email">メールアドレス</label>
                <input type="email" id="email" name="email" />
            </span>
            <div className="grid gap-2 items-start">
                <label htmlFor="service">添削サービス</label>
                <RadioGroup.Root
                    className="flex flex-col gap-2"
                    aria-label="service"
                >
                    <div className="flex items-center gap-2">
                        <RadioGroup.Item
                            className="bg-white w-[25px] h-[25px] rounded-full"
                            value="Simple"
                            id="simple"
                        >
                            <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-accent" />
                        </RadioGroup.Item>
                        <label className="" htmlFor="simple">
                            Simple (簡易版CV・レジュメの添削サービス。20日程度で添削します。)
                        </label>
                    </div>
                    <div className="flex items-center gap-2">
                        <RadioGroup.Item
                            className="bg-white w-[25px] h-[25px] rounded-full"
                            value="Premium"
                            id="premium"
                        >
                            <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-accent" />
                        </RadioGroup.Item>
                        <label className="" htmlFor="premium">
                            Premium (詳細版CV・レジュメの添削サービス。10日以内に添削します。)
                        </label>
                    </div>
                    <div className="flex items-center gap-2">
                        <RadioGroup.Item
                            className="bg-white w-[25px] h-[25px] rounded-full"
                            value="Invitation"
                            id="invitation"
                        >
                            <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-accent" />
                        </RadioGroup.Item>
                        <label className="" htmlFor="invitation">
                            Invitation (案内を受けた方のみ)
                        </label>
                    </div>
                </RadioGroup.Root>
            </div>
            <span className='grid'>
                <label htmlFor="jd">受ける企業・職種名・Job Description</label>
                <textarea id="jd" name="jd" rows={10} placeholder='リンクを貼り付けていただいても、直に入力していただいても構いません。' />
            </span>

            <span className='grid'>
                <label htmlFor="jd">CV・レジュメアップロード</label>
                <input type="file" id="cv" name="cv" accept=".pdf, .docx, .doc, .png, .jpg, .jpeg .heic" />
            </span>

            <span className='grid'>
                <label htmlFor="jd">Premiumを選択された方：カバーレターのアップロード</label>
                <input type="file" id="cl" name="cl" accept=".pdf, .docx, .doc, .png, .jpg, .jpeg .heic" />
            </span>

            <span className='grid'>
                <label htmlFor="message">メッセージ</label>
                <textarea id="message" name="message" rows={3} placeholder='何か伝えたいことがあればご記入ください。' />
            </span>

            <span className='grid'>
                <label htmlFor='fee'>お支払い方法のご希望</label>
                <select id='fee' name='fee'>
                    <option value='bank'>銀行振込（日本から）</option>
                    <option value='bank'>銀行振込（海外から）</option>
                    <option value='paypal'>PayPay</option>
                    <option value='card'>カード・Apple Pay</option>
                </select>
            </span>

            <button className="w-60 m-auto border-2 bg-accent text-white p-3 rounded hover:bg-box hover:text-accent hover:border-accent inline" type="submit">送信</button>
        </form>
    );
}
export default FormAudit;