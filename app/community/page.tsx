export default function Community() {
  return (
    <main>
      <h1>COMMUNITY</h1>
      <h2>WORK ABROAD Coming Soon</h2>
      <p>対象者：現地就職を目指している方・現地就職をされた方</p>
      <p>
        コミュニテイ運営：情報交換やオンラインミートアップ・場所が合えばオフラインイベントも開催する予定です。
      </p>
      <div className="bg-grey-200 p-4 border-black border rounded">
        <p> Waiting list 登録 </p>
        <form name="waitinglist" method="POST" data-netlify="true" action="/cvchecker/success">
          <label>Email: </label>
          <input className="max-w-96 p-2 m-2" type="email" />
          <br />
          <label>お名前(ニックネーム可):</label>
          <input className="max-w-96 p-2 m-2" type="text" />
          <br />
          <button
            className="w-60 m-auto border-2 bg-accent text-white p-3 rounded hover:bg-box hover:text-accent hover:border-accent inline"
            type="submit"
          >
            送信
          </button>
        </form>
      </div>
    </main>
  );
}
