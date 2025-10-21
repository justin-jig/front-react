/** ----------------------------------------------------------------
 *  0) 설치/임포트
 *  npm i react react-dom
 *  ---------------------------------------------------------------- */
import React, { Suspense, lazy, useDeferredValue, useId, useState, useTransition } from 'react';
import { createRoot } from 'react-dom/client';

/** ----------------------------------------------------------------
 *  1) 최상위 root (React 18)
 *  ---------------------------------------------------------------- */
const container = document.getElementById('root');
const root = createRoot(container); // ✅ React 18 방식
root.render(<h1>Hello, world!</h1>);

// (참고) React 18 이전 방식: ❌ 더는 권장되지 않음
// ReactDOM.render(<h1>Hello, world!</h1>, document.getElementById('root'));

/** ----------------------------------------------------------------
 *  2) JSX 기본 (표현식/속성/보안)
 *  ---------------------------------------------------------------- */
// 표현식
const jsx = <h1>Hello, world!</h1>;
const jsxName = 'Josh Perez';
function jsxUserFormatName(user) {
  return `${user.firstName} ${user.lastName}`;
}
const jsxUser = { firstName: 'Harper', lastName: 'Perez' };

// 속성 지정
const jsxAttr = <a href="https://react.dev">link</a>;
// 표현식은 { }로 묶음. 실제로는 유효한 URL을 넣어야 함.
const avatarUrl = `https://example.com/avatar/${jsxUser.firstName}.png`;
const jsxAttr2 = <img src={avatarUrl} alt={`${jsxUser.firstName} avatar`} />;

// XSS 방지: React DOM은 JSX 값들을 렌더 전 이스케이프 처리
const title = response?.potentiallyMaliciousInput;
const jsxElement4 = <h1>{title}</h1>;

// Babel은 JSX를 createElement로 컴파일
const jsxCreateElement = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
// 아래와 동일한 의미
// React.createElement('h1', { className: 'greeting' }, 'Hello, world!');

/** ----------------------------------------------------------------
 *  3) 렌더링 예시 (tick: 1초마다 현재 시각 갱신)
 *  ---------------------------------------------------------------- */
const clockRoot = createRoot(document.getElementById('clock'));
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  clockRoot.render(element); // ✅ 올바른 root에 렌더
}
setInterval(tick, 1000);

/** ----------------------------------------------------------------
 *  4) Automatic Batching (이벤트/비동기 모두 배칭)
 *  ---------------------------------------------------------------- */
function BatchingExample() {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  function handleClick() {
    // 이벤트 핸들러 안: 자동 배칭
    setIsFetching(false);
    setError(null);
    setStatus('success');
    // 하나의 렌더로 합쳐짐
  }

  async function handleAsync() {
    setIsFetching(true);
    await fetch('/something');
    // Promise 컨텍스트에서도 자동 배칭 (React 18)
    setIsFetching(false);
    setError(null);
    setStatus('success');
  }

  return (
    <div>
      <button onClick={handleClick}>배칭(이벤트)</button>
      <button onClick={handleAsync}>배칭(비동기)</button>
      <p>{String({ status, isFetching, error })}</p>
    </div>
  );
}

/** ----------------------------------------------------------------
 *  5) Suspense + lazy (클라이언트) & Streaming SSR(서버는 프레임워크에서)
 *  ---------------------------------------------------------------- */
const SlowComponent = lazy(() => import('./SlowComponent')); // 코드 스플리팅

function SuspenseExample() {
  return (
    <Suspense fallback={<div>로딩 중…</div>}>
      <SlowComponent />
    </Suspense>
  );
}

/** ----------------------------------------------------------------
 *  6) Concurrent Rendering 관련 API
 *  - startTransition/useTransition: 낮은 우선순위 업데이트
 *  - useDeferredValue: 입력값과 무거운 계산의 분리
 *  - useId: SSR/CSR 일관된 ID
 *  ---------------------------------------------------------------- */
function SearchBox() {
  const [text, setText] = useState('');
  const [isPending, startTransition] = useTransition();
  const deferred = useDeferredValue(text); // 무거운 리스트 필터링에 사용

  const id = useId(); // 접근성/SSR에 안정적인 ID
  const items = bigListFilter(deferred); // deferred를 기준으로 느슨하게 필터링

  return (
    <div>
      <label htmlFor={id}>검색</label>
      <input
        id={id}
        value={text}
        onChange={(e) => {
          const v = e.target.value;
          // 입력 반응성은 유지하고, 리스트 필터링은 낮은 우선순위로
          startTransition(() => setText(v));
        }}
      />
      {isPending && <span>필터링 중…</span>}
      <ul>{items.map(i => <li key={i.id}>{i.name}</li>)}</ul>
    </div>
  );
}

function bigListFilter(q) {
  // 데모용: 실제로는 memoization 등 최적화 권장
  return q ? DUMMY_ITEMS.filter(i => i.name.includes(q)) : DUMMY_ITEMS;
}

/** ----------------------------------------------------------------
 *  7) 외부 스토어 동기화 (useSyncExternalStore) – 라이브러리 제작 시 유용
 *  ---------------------------------------------------------------- */
// import { useSyncExternalStore } from 'react'; // 상단에서 임포트됨
function subscribe(callback) {
  window.addEventListener('resize', callback);
  return () => window.removeEventListener('resize', callback);
}
function getSnapshot() {
  return { w: window.innerWidth, h: window.innerHeight };
}
function getServerSnapshot() {
  return { w: 0, h: 0 }; // SSR 기본값
}
function WindowSize() {
  const size = React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return <p>{size.w} × {size.h}</p>;
}

/** ----------------------------------------------------------------
 *  8) 마운트
 *  ---------------------------------------------------------------- */
const App = () => (
  <>
    <div id="clock" />
    <BatchingExample />
    <SuspenseExample />
    <SearchBox />
    <WindowSize />
  </>
);

root.render(<App />);
