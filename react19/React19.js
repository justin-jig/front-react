/** ----------------------------------------------------------------
 *  0) 설치/임포트 (React 19)
 *  npm i react@^19 react-dom@^19
 *  ---------------------------------------------------------------- */
import React, {
  Suspense,
  lazy,
  use,
  useDeferredValue,
  useId,
  useState,
  useTransition,
  useOptimistic,
  useActionState,
  createContext,
  useRef,
} from 'react';
import { createRoot } from 'react-dom/client';
import { useFormStatus } from 'react-dom';

/** ----------------------------------------------------------------
 *  1) 최상위 root (React 19에서도 동일)
 *  ---------------------------------------------------------------- */
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<h1>React 19 Hello!</h1>);

/** ----------------------------------------------------------------
 *  2) Actions + <form> + useActionState/useFormStatus/useOptimistic
 *  ---------------------------------------------------------------- */
async function updateNameOnServer(name) {
  // 데모용 가짜 API
  await new Promise((r) => setTimeout(r, 800));
  if (!name) return '이름은 필수입니다.';
  return null; // 에러 없음
}

function SubmitButton() {
  // 부모 <form>의 pending 상태에 접근
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? '저장 중…' : '저장'}
    </button>
  );
}

function ChangeName() {
  // 낙관적 UI
  const [name, setOptimisticName] = useOptimistic('Josh');
  // 액션 래핑 (이전 useFormState → React 19에서 useActionState)
  const [error, submitAction, isPending] = useActionState(
    async (_prev, formData) => {
      const newName = formData.get('name');
      setOptimisticName(newName); // 낙관적 업데이트
      const err = await updateNameOnServer(newName);
      if (err) return err; // 오류 시 에러를 반환하면 자동으로 롤백됨
      // 성공 후 라우팅/리프레시 등
      // redirect('/profile'); // 프레임워크에 따라 사용
      return null;
    },
    null
  );

  return (
    <form action={submitAction}>
      <input name="name" defaultValue={name} />
      <SubmitButton />
      {isPending && <p>서버 반영 중…</p>}
      {error && <p role="alert">{error}</p>}
    </form>
  );
}

/** ----------------------------------------------------------------
 *  3) use(): Promise/Context를 렌더 중 읽기 (Suspense와 연계)
 *     - 조건부로도 호출 가능 (hooks와 차이점)
 *  ---------------------------------------------------------------- */
function fetchComments() {
  return new Promise((resolve) =>
    setTimeout(() => resolve([{ id: 1, text: 'React 19 👍' }]), 700)
  );
}
const commentsPromise = fetchComments();

const ThemeContext = createContext({ color: 'teal' });

function Comments() {
  // use()는 Promise가 해결될 때까지 컴포넌트를 Suspend
  const comments = use(commentsPromise);
  return (
    <ul>
      {comments.map((c) => (
        <li key={c.id}>{c.text}</li>
      ))}
    </ul>
  );
}

function ThemedTitle({ children }) {
  // use(Context) — early return 구조에서도 안전
  const theme = use(ThemeContext);
  return <h2 style={{ color: theme.color }}>{children}</h2>;
}

/** ----------------------------------------------------------------
 *  4) Document Metadata & Stylesheet 지원 (자동 head 호이스팅)
 *     - <title>, <meta>, <link rel="stylesheet" precedence="...">
 *  ---------------------------------------------------------------- */
function Article({ title, keywords }) {
  return (
    <article>
      <title>{title}</title>
      <meta name="keywords" content={keywords.join(',')} />
      <link rel="stylesheet" href="/article.css" precedence="default" />
      <h3>{title}</h3>
      <p>문서 메타데이터와 스타일시트를 컴포넌트 내부에서 선언합니다.</p>
    </article>
  );
}

/** ----------------------------------------------------------------
 *  5) Custom Elements(웹 컴포넌트) & ref as prop & <Context> 제공자
 *  ---------------------------------------------------------------- */
function MyInput({ placeholder, ref }) {
  // 함수 컴포넌트에서 forwardRef 없이 ref prop 사용 (React 19)
  return <input placeholder={placeholder} ref={ref} />;
}

function CustomElementsDemo() {
  const ref = useRef();
  // 커스텀 엘리먼트에 프로퍼티/이벤트 전달
  return (
    <div>
      <my-counter
        value={5}
        onincrement={(e) => console.log('increment', e.detail)}
      />
      <MyInput placeholder="ref as prop" ref={ref} />
    </div>
  );
}

function App() {
  const [q, setQ] = useState('');
  // useDeferredValue 초기값 (initialValue) 옵션 사용
  const deferred = useDeferredValue(q, '');

  return (
    <ThemeContext value={{ color: 'purple' /* <Context> as provider */ }}>
      <ThemedTitle>React 19 데모</ThemedTitle>

      <section>
        <h4>① Actions 폼</h4>
        <ChangeName />
      </section>

      <section>
        <h4>② use() + Suspense</h4>
        <Suspense fallback={<p>댓글 불러오는 중…</p>}>
          <Comments />
        </Suspense>
      </section>

      <section>
        <h4>③ Document Metadata / Stylesheet</h4>
        <Article title="React 19 메타데이터" keywords={['react', 'v19']} />
      </section>

      <section>
        <h4>④ Custom Elements & ref as prop</h4>
        <CustomElementsDemo />
      </section>

      <section>
        <h4>⑤ useDeferredValue(initialValue)</h4>
        <input value={q} onChange={(e) => setQ(e.target.value)} />
        <p>검색어(지연 값): {deferred}</p>
      </section>
    </ThemeContext>
  );
}

root.render(<App />);

/** ----------------------------------------------------------------
 *  6) 참고: 정적 SSG 전용 API (react-dom/static) - prerender*
 *      - Node/Web Streams에서 데이터가 모두 준비될 때까지 대기 후 HTML 생성
 *      - 프레임워크/런타임에 맞게 서버 핸들러에서 사용
 *  ---------------------------------------------------------------- */
// import { prerender } from 'react-dom/static';
// async function handler(request) {
//   const { prelude } = await prerender(<App />, {
//     bootstrapScripts: ['/main.js'],
//   });
//   return new Response(prelude, {
//     headers: { 'content-type': 'text/html' },
//   });
// }
