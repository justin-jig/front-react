
## React 19 주요 변경사항 정리 (Stable)

#### 요약 표

- React 19 안정화 공지 및 기능 요약 (2024‑12‑05), 정적 API/서버 컴포넌트/Actions/메타데이터 등
- React 19.2 릴리스 노트 (2025‑10‑01) – 추가 개선 사항

| 범주 | 주요 변경점 | 관련 API / 특징 |
|---|---|---|
| 데이터 변경 흐름 | **Actions** (비동기 전환과 결합) | `useTransition` 기반 async 전환, `<form action={fn}>`, 자동 pending/에러/리셋 |
| 폼 상태 | **useActionState / useFormStatus** | 액션 결과/대기 상태 반환, 디자인 컴포넌트에서 상위 `<form>` 상태 접근 |
| 낙관적 UI | **useOptimistic** | 요청 중 최종 상태를 미리 보여주고 실패 시 자동 롤백 |
| 데이터 읽기 | **use** | 렌더 중 Promise/Context를 읽고 자동 Suspend (조건부 호출 가능) |
| 메타데이터 | **Document Metadata** | `<title>`, `<meta>`, `<link>`를 컴포넌트 안에서 선언하면 자동으로 `<head>`로 호이스팅 |
| 스타일 | **Stylesheet precedence** | `<link rel="stylesheet" precedence="...">`로 삽입 순서/로딩 제어 |
| 호환성/개선 | **ref as prop**, **`<Context>` 제공자** | 함수 컴포넌트에서 `ref` 직접 사용, `<Context.Provider>` 대신 `<Context>` 사용 가능 |
| 웹 컴포넌트 | **Custom Elements 지원 강화** | 속성/프로퍼티/이벤트 처리 개선(SSR 포함) |
| 정적 출력 | **React DOM Static APIs** | `react-dom/static`의 `prerender`, `prerenderToNodeStream` |
| 성능/개선 | Suspense 사전 웜업, Hydration 오류 Diff, `useDeferredValue(initialValue)` | 개발자 경험/성능 개선 |

— 공식 변경점: React 팀 블로그(Dec 5, 2024), React 19.2(Oct 1, 2025) 참조.

---

### 1) Actions: 폼·데이터 변경의 표준화

- 비동기 전환(`startTransition`) 안에서 **대기/에러 처리**를 자동화
- `<form>`에 **함수**를 `action/formAction`으로 전달 → **제출/리셋 자동화**
- **낙관적 업데이트**(useOptimistic)·**에러 바운더리**와 자연스럽게 연동
- **useActionState**: 액션 래핑 → `[result, submitAction, pending]` 형태로 사용

> 코드 예시는 `react19.js`의 `ChangeName`/`SubmitButton` 참고

---

### 2) 폼 훅: useActionState / useFormStatus

- `useActionState(action, initialState)` → 액션 호출기와 결과/대기 상태를 제공
- 디자인 시스템에서 `<form>` 상태(예: pending)를 하위 버튼이 필요할 때
  `useFormStatus()`로 쉽게 접근

---

### 3) use(): 렌더 중 비동기 자원 소비

- `use(promise)` → **해결될 때까지 Suspense** (조건부로도 호출 가능)
- `use(Context)` → 조기 반환(early return)에서도 안전하게 컨텍스트 읽기

---

### 4) Document Metadata & Stylesheet

- 컴포넌트 안에 `<title>`, `<meta>`, `<link>`를 선언하면 **자동으로 `<head>`**로 이동
- `<link rel="stylesheet" precedence="high|default|low">`로 **삽입 순서·로딩 제어**

---

### 5) 호환성 개선: ref as prop / `<Context>` 제공자

- 함수 컴포넌트에서 **`ref`를 prop으로 직접** 받기 → `forwardRef` 점진적 대체 예정
- `<Context.Provider>` 대신 `<Context>`를 **제공자로 직접** 렌더링 가능

---

### 6) Web Components (Custom Elements)

- 리액트 19에서 **프로퍼티/이벤트 전달**이 일관되게 동작 (SSR 포함)
- 예: `<my-counter value={5} onincrement={...} />`

---

### 7) React DOM Static APIs (SSG)

- `react-dom/static`의 `prerender`, `prerenderToNodeStream` 도입
- **데이터가 모두 준비될 때까지 대기** 후 정적 HTML 생성 (스트리밍 SSR과는 별개)

---

### 8) 기타 개선

- Suspense **pre-warming**, Hydration **diff 로그** 향상
- `useDeferredValue(value, initialValue)`로 초기 표시값 제어

---

### 9) 업그레이드 팁

1. `react`/`react-dom`을 19로 올린 후, 빌드/테스트
2. 폼 처리/데이터 변경 로직에 **Actions** 적용 고려
3. `react-helmet` 등 메타 라이브러리는 **Document Metadata**와 병행 사용 가능
4. 컴포넌트에서 `forwardRef`를 새로 도입하는 대신 **ref as prop** 패턴 사용 검토
5. 정적 사이트는 `react-dom/static` API로 **SSG** 경로를 점검

> Breaking changes와 마이그레이션은 공식 Upgrade Guide 참조

---

### 샘플 코드 구성

- `react19.js`:
  - Actions + `<form>` + `useActionState`/`useFormStatus`/`useOptimistic`
  - `use()`로 Promise/Context 읽기 + `Suspense`
  - Document Metadata/Stylesheet / Custom Elements / ref as prop / `<Context>`
  - `useDeferredValue(initialValue)`
  - (주석) `react-dom/static` SSG API 사용 예시

---
