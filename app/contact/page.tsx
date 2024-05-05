import Link from "next/link"

export default function Contact() {
    return (
        <main>
            <h1>CONTACT</h1>
            <p>お問い合わせは以下のinstagramから</p>
            <Link href="https://www.instagram.com/jpnisto" target="_blank">
                <div className="box hover:bg-box-hover">
                    <h3>Instagram</h3>
                    <p>DMでお問い合わせください</p>
                </div>
            </Link>
        </main>
    )
}