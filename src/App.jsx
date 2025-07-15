import "./App.css";

function App() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 text-gray-800 font-sans leading-relaxed">
      <h1 className="text-3xl font-bold text-center text-purple-600 mb-6">👨‍💻 Louis | Game & Web Developer</h1>

      <p className="text-center text-lg mb-10">Unity · C# · React · Spring Boot · Git</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">✨ 소개</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>🎮 게임과 상상력을 좋아하는 개발자입니다</li>
          <li>🌍 글로벌 출시를 목표로 캐주얼 게임을 개발하고 있습니다</li>
          <li>💻 Unity + Web 풀스택을 병행하며 꾸준히 기록하고 성장 중입니다</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">🔧 기술 스택</h2>
        <p className="mb-1">🎮 Unity, C#, Firebase</p>
        <p className="mb-1">🌐 React, Spring Boot, TailwindCSS</p>
        <p className="mb-1">⚙ Git, GitHub, Notion</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">🗂 프로젝트</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>WarmFriends</strong> – Unity 기반 Match-3 + 펫 수집 게임
          </li>
          <li>
            <strong>운빨좇망겜 리메이크</strong> – 유닛 조합 전략 디펜스
          </li>
          <li>
            <strong>깃허브 & 블로그</strong> – 기술 정리 및 포트폴리오 문서화
          </li>
        </ul>
        <a
          href="https://www.notion.so/1e5339be58d980ba90f5c397e02074b6?source=copy_link"
          target="_blank"
          className="inline-block mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
        >
          🔗 Notion 포트폴리오 보기
        </a>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">💡 개발 철학</h2>
        <p>
          “좋은 게임은 감정을 전달한다.” <br />
          사용자가 따뜻한 경험을 할 수 있도록, <br />
          꾸준한 기록과 개발을 통해 성장하는 개발자가 되겠습니다.
        </p>
      </section>
    </div>
  );
}

export default App;
