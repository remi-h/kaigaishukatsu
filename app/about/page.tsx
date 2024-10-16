import Link from "next/link"

export default function About() {
    return (
        <main className="flex flex-col gap-2">
            <h1>ABOUT</h1>
            <h2>サイト管理人・開発の意図について</h2>
            <p>管理人のレミです。<br />
                日本生まれ、日本育ちの23歳です。都内の高校を卒業後慶應義塾大学に入学し、在学中に交換留学生としてスウェーデンのストックホルムで１年間過ごしました。<br />
                小さい頃から海外で働きたいと思っていたのと、スウェーデンでの日々があまりに楽しく戻ってきたいという思いから新卒での海外就職を志しました。就職活動が幸い上手くいき、現在はスウェーデンで働いています。
            </p>
            <p>サイト開発の意図は、サークルの後輩などから海外就職について聞かれることが増え、もしかしたら需要があるのではないかと思い情報を共有することにしたからです。また、自分の経験を振り返り、もっと早く知っていればと思うことが多々あったので、そのような方々に少しでも役立てばと思いサイトを立ち上げました。
            </p>
            <Link href="https://www.instagram.com/jpnisto" target="_blank">
                <div className="box hover:bg-box-hover">
                    <h3>Instagramはこちら</h3>
                    <p>JPNISTOというアカウントでときどき情報を更新しています。</p>
                </div>
            </Link>
            <h3>開発方法</h3>
            <p>このサイトはnext.jsというフレームワークを使って開発しています。CMSはまだ搭載しておらず、内容を更新するときはIDEで手入力しています。netlifyでホストしています。</p>
            <h3>今後</h3>
            <p>今後はサイトの内容を充実させていくとともに、コミュニティを成長させていきたいと思っています。ここまで読んでくれた方で興味のある方がいればぜひ共同管理者としてお手伝いいただければ幸いです。海外就職に興味がある方やすでに海外で働かれている方、ぜひよろしくお願いします。<br />
            詳しく知りたい方はinstagramのDMへご連絡ください。</p>
        </main>
    )
}