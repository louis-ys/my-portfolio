import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-neutral-900 dark:text-white transition-colors duration-300">
      {/* 사이드바 */}
      <aside className="hidden md:block fixed left-0 top-0 h-full w-48 bg-gray-100 dark:bg-gray-800 p-4 shadow">
        <h2 className="text-lg font-bold mb-4">Louis</h2>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="#philosophy" className="hover:text-purple-600">
              {" "}
              철학
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-purple-600">
              {" "}
              소개
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-purple-600">
              🛠 기술 스택
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-purple-600">
              📁 프로젝트
            </a>
          </li>
          <li>
            <a href="#github" className="hover:text-purple-600">
              📊 GitHub 활동
            </a>
          </li>
        </ul>
      </aside>

      {/* 메인 콘텐츠 */}
      <main className="ml-0 md:ml-52 max-w-4xl px-4">
        {/* 상단 프로필 */}
        <header className="mb-12 text-center">
          <img
            src="/images/profile.png"
            alt="Profile"
            className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-white dark:border-gray-700 shadow"
          />
          <h1 className="text-3xl font-bold mb-2">👨 Louis | Game & Web Developer</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Unity · C# · React · Spring Boot · Git</p>
        </header>

        {/* 개발 철학 */}
        <section id="philosophy" className="mb-16 text-left">
          <h2 className="text-xl font-semibold mb-2 text-center"> 개발 철학</h2>
          <blockquote className="text-gray-300 italic pl-4">
            “좋은 게임은 감정을 전달한다.” <br />
            사용자가 따뜻한 경험을 할 수 있도록,
            <br />
            꾸준한 기록과 개발을 통해 성장하는 개발자가 되겠습니다.
          </blockquote>
        </section>

        {/* 소개 */}
        <section id="about" className="mb-16 text-left">
          <h2 className="text-xl font-semibold mb-2 text-center"> 소개</h2>
          <ul className="list-none pl-0 text-gray-300 space-y-1">
            <li>🎮 게임과 상상력을 좋아하는 개발자입니다</li>
            <li>🌍 글로벌 출시를 목표로 캐주얼 게임을 개발하고 있습니다</li>
            <li>💻 Unity + Web 풀스택을 병행하며 꾸준히 기록하고 성장 중입니다</li>
          </ul>
        </section>

        {/* 기술 스택 */}
        <section id="skills" className="mb-16">
          <h2 className="text-xl font-semibold mb-4 text-center">🛠 기술 스택</h2>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2 text-center">🎮 Game Development</h3>
            <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2">
              <img src="https://img.shields.io/badge/Unity-100000?style=for-the-badge&logo=unity&logoColor=white" />
              <img src="https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white" />
              <img src="https://img.shields.io/badge/Firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black" />
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2 text-center">🌐 Web Development</h3>
            <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2">
              <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
              <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
              <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
              <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
              <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
              <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
              <img src="https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-center">🧰 Tools & Collaboration</h3>
            <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2">
              <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" />
              <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" />
              <img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white" />
            </div>
          </div>
        </section>

        {/* 프로젝트 */}
        <section id="projects" className="mb-16 text-left">
          <h2 className="text-xl font-semibold mb-6 text-center">📁 프로젝트</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-neutral-800 rounded-xl p-5 shadow hover:shadow-lg transition">
              <h3 className="text-lg font-bold text-purple-400 mb-2">WarmFriends</h3>
              <p className="text-gray-300 text-sm mb-3">Unity 기반 Match-3 + 펫 수집 게임</p>
              <a
                href="https://www.notion.so/1e5339be58d980ba90f5c397e02074b6?source=copy_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-purple-500 underline hover:text-purple-300"
              >
                🔗 프로젝트 보기
              </a>
            </div>

            <div className="bg-neutral-800 rounded-xl p-5 shadow hover:shadow-lg transition">
              <h3 className="text-lg font-bold text-purple-400 mb-2">운빨좇망겜 리메이크</h3>
              <p className="text-gray-300 text-sm mb-3">유닛 조합 전략 디펜스</p>
            </div>

            <div className="bg-neutral-800 rounded-xl p-5 shadow hover:shadow-lg transition">
              <h3 className="text-lg font-bold text-purple-400 mb-2">깃허브 & 블로그</h3>
              <p className="text-gray-300 text-sm mb-3">기술 정리 및 포트폴리오 문서화</p>
            </div>
          </div>
        </section>

        {/* GitHub 활동 */}
        <section id="github" className="mb-20 text-left">
          <h2 className="text-xl font-semibold mb-4 text-center">📊 GitHub 활동</h2>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <img
              src="https://github-readme-stats.vercel.app/api?username=louis-ys&show_icons=true&theme=tokyonight&hide_border=true"
              alt="GitHub stats"
              className="mb-4 md:mb-0 md:w-1/2"
            />
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=louis-ys&theme=tokyonight&hide_border=true"
              alt="GitHub streak"
              className="md:w-1/2"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
