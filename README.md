# 격투가 인명사전 (Fighter Encyclopedia)

격투기 선수들의 커리어 타임라인, 경기 전적, 주요 사건을 한눈에 볼 수 있는 인명사전 웹 애플리케이션입니다.

## 프로젝트 개요

### 목표
- 격투기 선수들의 생애와 커리어를 **타임라인 형식**으로 시각화
- 경기 전적(승/패/무/NC)을 직관적으로 표시
- 주요 사건, 이슈, 뉴스를 시간순으로 정리
- 선수 간 대전 기록 및 관계 파악

### 핵심 기능
1. **타임라인 뷰** - 선수의 커리어를 시간순으로 시각화
2. **타임라인 병합 비교** - 두 선수의 타임라인을 하나로 병합하여 비교/대조
3. **AI 맥락 연결** - 인물×인물, 인물×대회, 인물×사건 등 파편화된 정보를 AI가 연결
4. **반응형 디자인** - 모바일/웹 최적화

### 참고 데이터 소스
| 사이트 | URL | 주요 데이터 |
|--------|-----|------------|
| BJJ Heroes | https://www.bjjheroes.com/ | BJJ 선수 프로필, 리니지, 대회 기록 |
| Sherdog | https://www.sherdog.com/events | MMA 경기 기록, 이벤트 정보, 선수 통계 |
| Tapology | https://www.tapology.com/ | MMA 선수 정보, 체급 랭킹, 팀 정보 |

## 기술 스택

### Frontend
- **Framework:** SvelteKit 2 + Svelte 5
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript

### Backend / AI
- **Serverless:** Cloudflare Workers
- **AI:** Cloudflare Workers AI / Anthropic API
- **Database:** Cloudflare D1 (추후 확장용)

### 배포
- **플랫폼:** Cloudflare Pages
- **어댑터:** @sveltejs/adapter-cloudflare

## 프로젝트 구조

```
mmakid-codex/
├── README.md                  # 프로젝트 설명
├── CLAUDE.md                  # AI 어시스턴트 가이드
├── package.json               # 의존성 및 스크립트
├── svelte.config.js           # SvelteKit 설정
├── tailwind.config.js         # Tailwind CSS 설정
├── vite.config.ts             # Vite 설정
├── tsconfig.json              # TypeScript 설정
├── src/
│   ├── app.css                # 글로벌 스타일
│   ├── app.html               # HTML 템플릿
│   ├── app.d.ts               # 앱 타입 정의
│   ├── lib/
│   │   ├── types/             # TypeScript 타입 정의
│   │   ├── components/        # 재사용 컴포넌트
│   │   └── utils/             # 유틸리티 함수
│   └── routes/                # SvelteKit 라우트
│       ├── +layout.svelte     # 공통 레이아웃
│       └── +page.svelte       # 홈페이지
├── data/
│   ├── fighters/              # 선수 데이터 (JSON)
│   └── events/                # 이벤트 데이터 (JSON)
└── static/                    # 정적 파일 (이미지 등)
```

## 개발 시작하기

```bash
# 저장소 클론
git clone https://github.com/66mmakid99/mmakid-codex.git
cd mmakid-codex

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 타입 체크
npm run check

# 빌드
npm run build

# 프리뷰
npm run preview
```

## 데이터 스키마

### 선수 (Fighter)
```typescript
interface Fighter {
  id: string;
  name: { ko: string; en: string; native?: string };
  nickname?: string;
  nationality: string;
  birthDate?: string;
  height?: number;      // cm
  weight?: number;      // kg
  weightClass: WeightClass;
  team?: string;
  style?: string[];
  record: { wins: number; losses: number; draws: number; nc: number };
}
```

### 타임라인 이벤트 (TimelineEvent)
```typescript
interface TimelineEvent {
  id: string;
  fighterId: string;
  date: string;         // YYYY-MM-DD
  type: 'fight' | 'injury' | 'news' | 'title' | 'transfer' | 'debut' | 'retirement';
  title: string;
  description?: string;
  result?: 'win' | 'loss' | 'draw' | 'nc';
  method?: string;
  opponentId?: string;
  eventName?: string;
  sources?: string[];
}
```

## Cloudflare Pages 배포

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

## 로드맵

- [x] 프로젝트 초기 설정 및 기술 스택 확정
- [ ] 기본 UI 컴포넌트 개발
- [ ] 타임라인 컴포넌트 구현
- [ ] 샘플 선수 데이터 추가
- [ ] 검색 기능 구현
- [ ] 타임라인 병합 비교 기능
- [ ] AI 맥락 연결 기능
- [ ] 다국어 지원 (한/영/일)
- [ ] 모바일 반응형 최적화
- [ ] PWA 지원

## 기여하기

1. 이슈 생성 또는 기존 이슈 확인
2. 기능 브랜치 생성 (`feature/기능명`)
3. 변경사항 커밋 (한국어로 작성)
4. Pull Request 생성

## 라이선스

MIT

---

**프로젝트 시작일:** 2026-02-01
