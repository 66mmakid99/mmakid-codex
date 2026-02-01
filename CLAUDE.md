# CLAUDE.md - 격투가 인명사전 AI 어시스턴트 가이드

격투가 인명사전(Fighter Encyclopedia) 프로젝트를 위한 AI 어시스턴트 가이드입니다.

## 언어 규칙

- **모든 문서는 한국어로 작성한다**
- **모든 대화는 한국어로 진행한다**
- 코드 주석: 한국어 권장 (복잡한 로직 설명 시)
- 커밋 메시지: 한국어로 작성
- 변수/함수명: 영어 (camelCase)
- UI 텍스트: 한국어

## 프로젝트 개요

**Repository:** mmakid-codex
**Purpose:** 격투기 선수들의 타임라인, 경기 전적, 사건/이슈를 한눈에 볼 수 있는 인명사전
**Deployment:** Cloudflare Pages
**Status:** 초기 개발 단계

### 핵심 기능
1. **타임라인 뷰** - 선수의 커리어를 시간순으로 시각화
2. **타임라인 병합 비교** - 두 선수의 타임라인을 하나로 병합하여 비교/대조
3. **AI 맥락 연결** - 인물×인물, 인물×대회, 인물×사건 등 파편화된 정보를 AI가 연결
4. **반응형 디자인** - 모바일/웹 최적화

### 참고 데이터 소스
- **BJJ Heroes** (https://www.bjjheroes.com/) - BJJ 선수 정보
- **Sherdog** (https://www.sherdog.com/events) - MMA 경기 기록
- **Tapology** (https://www.tapology.com/) - MMA 선수 및 이벤트 정보

## 기술 스택

```
Frontend:     SvelteKit 2 + Svelte 5 + TypeScript
Styling:      Tailwind CSS 4
AI/Backend:   Cloudflare Workers + Workers AI
Database:     Cloudflare D1 (추후)
Deployment:   Cloudflare Pages
```

## 프로젝트 구조

```
mmakid-codex/
├── CLAUDE.md                  # AI 어시스턴트 가이드 (이 파일)
├── README.md                  # 프로젝트 설명
├── package.json               # 의존성 및 스크립트
├── svelte.config.js           # SvelteKit 설정 (Cloudflare 어댑터)
├── tailwind.config.js         # Tailwind CSS 설정
├── vite.config.ts             # Vite 설정
├── tsconfig.json              # TypeScript 설정
├── src/
│   ├── app.css                # 글로벌 스타일 (Tailwind)
│   ├── app.html               # HTML 템플릿
│   ├── app.d.ts               # 앱 타입 정의
│   ├── lib/
│   │   ├── types/index.ts     # TypeScript 타입 정의
│   │   ├── components/        # 재사용 컴포넌트
│   │   └── utils/             # 유틸리티 함수
│   └── routes/                # SvelteKit 라우트
│       ├── +layout.svelte     # 공통 레이아웃
│       ├── +page.svelte       # 홈페이지
│       ├── fighters/          # 선수 관련 페이지
│       └── compare/           # 비교 페이지
├── data/
│   ├── fighters/              # 선수 데이터 (JSON)
│   └── events/                # 이벤트 데이터 (JSON)
└── static/                    # 정적 파일 (이미지 등)
```

## 핵심 도메인 용어

### 격투기 용어
| 용어 | 설명 |
|-----|------|
| Record | 전적 (승-패-무-NC) |
| KO/TKO | 녹아웃/테크니컬 녹아웃 |
| Submission | 서브미션 (관절기/조르기) |
| Decision | 판정 (Unanimous/Split/Majority) |
| NC | No Contest (무효 경기) |
| Weight Class | 체급 |
| Title Fight | 타이틀전 |
| Main Event | 메인 이벤트 |

### 주요 타입 (src/lib/types/index.ts)
| 타입 | 용도 |
|-----|------|
| `Fighter` | 선수 프로필 정보 |
| `TimelineEvent` | 타임라인 이벤트 (경기, 부상, 뉴스 등) |
| `MMAEvent` | 대회/이벤트 정보 |
| `MergedTimelineItem` | 병합된 타임라인 (비교 뷰용) |
| `AIAnalysisRequest/Response` | AI 분석 요청/응답 |

## 개발 워크플로우

### 시작하기
```bash
# 의존성 설치
npm install

# 개발 서버 (http://localhost:5173)
npm run dev

# 타입 체크
npm run check

# 빌드
npm run build

# 프리뷰
npm run preview
```

### 브랜치 전략
- `main` - 프로덕션 (Cloudflare Pages 자동 배포)
- `feature/*` - 새 기능
- `fix/*` - 버그 수정
- `data/*` - 데이터 추가/수정
- `claude/*` - AI 어시스턴트 작업 브랜치

### 커밋 컨벤션 (한국어)
```
feat: 새 기능 추가
fix: 버그 수정
data: 선수/이벤트 데이터 추가
style: 스타일 변경
refactor: 리팩토링
docs: 문서 수정
chore: 기타 작업
```

## SvelteKit 컨벤션

### 파일 명명 규칙
- 라우트: `+page.svelte`, `+layout.svelte`, `+server.ts`
- 컴포넌트: `PascalCase.svelte` (예: `Timeline.svelte`)
- 유틸리티: `camelCase.ts` (예: `formatDate.ts`)

### Svelte 5 문법
```svelte
<script lang="ts">
  // props 선언
  let { fighter, onSelect } = $props<{
    fighter: Fighter;
    onSelect: (id: string) => void;
  }>();

  // 상태
  let count = $state(0);

  // 파생 상태
  let doubled = $derived(count * 2);

  // 이펙트
  $effect(() => {
    console.log('count changed:', count);
  });
</script>
```

### 데이터 로딩
```typescript
// +page.server.ts
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  const fighter = await getFighter(params.id);
  return { fighter };
};
```

## 데이터 스키마

### Fighter (선수) - data/fighters/*.json
```json
{
  "id": "fighter-slug",
  "name": { "ko": "한글명", "en": "English Name", "native": "원어이름" },
  "nickname": "별명",
  "nationality": "KR",
  "birthDate": "YYYY-MM-DD",
  "height": 180,
  "weight": 77,
  "weightClass": "welterweight",
  "team": "소속 팀",
  "style": ["wrestling", "bjj"],
  "record": { "wins": 20, "losses": 5, "draws": 0, "nc": 1 },
  "timeline": [ /* TimelineEvent[] */ ]
}
```

### TimelineEvent (타임라인)
```json
{
  "id": "unique-id",
  "date": "YYYY-MM-DD",
  "type": "fight|injury|news|title|transfer|debut|retirement",
  "title": "이벤트 제목",
  "description": "상세 설명",
  "result": "win|loss|draw|nc",
  "method": "KO|TKO|Submission|Decision",
  "opponentName": "상대 선수",
  "eventName": "UFC 300",
  "sources": ["URL"]
}
```

### 체급 (Weight Classes)
```
strawweight, flyweight, bantamweight, featherweight,
lightweight, welterweight, middleweight,
light-heavyweight, heavyweight
```

## AI 어시스턴트 가이드라인

### 작업 시 주의사항

1. **데이터 정확성 최우선**
   - 경기 전적, 날짜, 결과는 정확해야 함
   - 불확실한 정보는 `sources` 필드에 출처 명시
   - 추측으로 데이터 생성 금지

2. **타임라인 일관성**
   - 날짜 형식: `YYYY-MM-DD`
   - 시간대: UTC 기준
   - 이벤트는 시간순 정렬

3. **Svelte 5 문법 사용**
   - `$props()`, `$state()`, `$derived()`, `$effect()` 사용
   - 레거시 문법 (`export let`, `$:`) 사용 금지

4. **Tailwind CSS 사용**
   - 인라인 스타일 대신 Tailwind 클래스 사용
   - 반응형: `sm:`, `md:`, `lg:` 접두사 활용
   - 다크모드: `dark:` 접두사 활용

### 코드 작성 규칙

1. **컴포넌트 구조**
   - 재사용 가능한 컴포넌트는 `src/lib/components/`에 배치
   - Props 타입 명시 필수
   - 반응형 디자인 적용

2. **타입 안전성**
   - 모든 함수에 타입 명시
   - `any` 타입 사용 금지
   - 타입은 `src/lib/types/index.ts`에 정의

3. **성능 최적화**
   - 이미지 lazy loading
   - 대용량 데이터 페이지네이션
   - 불필요한 리렌더링 방지

### 피해야 할 것

- 저작권 있는 이미지 무단 사용
- 검증되지 않은 루머/논란 추가
- 개인정보 노출 (연락처, 주소 등)
- 과도한 외부 의존성 추가
- 하드코딩된 데이터 (별도 파일로 분리)
- Svelte 4 레거시 문법 사용

## Cloudflare Pages 배포

### 자동 배포
- `main` 브랜치 push 시 자동 배포
- PR 생성 시 Preview 배포

### 빌드 설정
```
Build command: npm run build
Build output directory: .svelte-kit/cloudflare
Node.js version: 18+
```

### 환경 변수
```
NODE_VERSION=18
```

## 자주 하는 작업

### 새 선수 추가
1. `data/fighters/{fighter-id}.json` 생성
2. 기본 프로필 정보 입력
3. `timeline` 배열에 이벤트 추가
4. 이미지 추가 (선택): `static/images/fighters/{fighter-id}.jpg`

### 새 페이지 추가
1. `src/routes/페이지명/+page.svelte` 생성
2. 필요시 `+page.server.ts`로 데이터 로딩
3. `+layout.svelte` 내비게이션에 링크 추가

### 새 컴포넌트 추가
1. `src/lib/components/ComponentName.svelte` 생성
2. Props 타입 정의
3. 필요시 `src/lib/index.ts`에 export 추가

## 문제 해결

### 빌드 실패
- `npm run check`로 타입 에러 확인
- Node.js 버전 확인 (18+)
- `rm -rf node_modules && npm install`로 재설치

### Tailwind 스타일 미적용
- `app.css`에 `@import 'tailwindcss';` 확인
- `tailwind.config.js`의 `content` 경로 확인

### 데이터 오류
- JSON 문법 검증
- 날짜 형식 확인 (YYYY-MM-DD)
- ID 중복 확인

---

**최종 업데이트:** 2026-02-01
**관리:** 프로젝트 기여자

*이 문서는 프로젝트 발전에 따라 지속적으로 업데이트됩니다.*
