# CLAUDE.md - AI Assistant Guide for mmakid-codex

격투가 인명사전(Fighter Encyclopedia) 프로젝트를 위한 AI 어시스턴트 가이드입니다.

## 프로젝트 개요

**Repository:** mmakid-codex
**Purpose:** 격투기 선수들의 타임라인, 경기 전적, 사건/이슈를 한눈에 볼 수 있는 인명사전
**Deployment:** Cloudflare Pages
**Status:** 초기 개발 단계

### 참고 데이터 소스
- **BJJ Heroes** (https://www.bjjheroes.com/) - BJJ 선수 정보
- **Sherdog** (https://www.sherdog.com/events) - MMA 경기 기록
- **Tapology** (https://www.tapology.com/) - MMA 선수 및 이벤트 정보

## 프로젝트 구조

```
mmakid-codex/
├── CLAUDE.md              # AI 어시스턴트 가이드 (이 파일)
├── README.md              # 프로젝트 설명
├── src/                   # 소스 코드
│   ├── components/        # UI 컴포넌트
│   │   ├── Timeline/      # 타임라인 컴포넌트
│   │   ├── FighterCard/   # 선수 카드 컴포넌트
│   │   └── FightRecord/   # 경기 기록 컴포넌트
│   ├── pages/             # 페이지
│   ├── utils/             # 유틸리티 함수
│   └── data/              # 정적 데이터
├── data/                  # 선수/이벤트 데이터
│   ├── fighters/          # 선수별 JSON/MD 파일
│   └── events/            # 이벤트 데이터
├── public/                # 정적 파일 (이미지 등)
└── dist/                  # 빌드 결과물
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

### 데이터 타입
| 타입 | 용도 |
|-----|------|
| `Fighter` | 선수 프로필 정보 |
| `TimelineEvent` | 타임라인 이벤트 (경기, 부상, 뉴스 등) |
| `Fight` | 개별 경기 정보 |
| `Event` | 대회/이벤트 정보 |

## 개발 워크플로우

### 시작하기
```bash
# 의존성 설치
npm install

# 개발 서버
npm run dev

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

### 커밋 컨벤션
```
feat: 새 기능 추가
fix: 버그 수정
data: 선수/이벤트 데이터 추가
style: 스타일 변경
refactor: 리팩토링
docs: 문서 수정
chore: 기타 작업
```

## 데이터 스키마

### Fighter (선수)
```json
{
  "id": "fighter-slug",
  "name": {
    "ko": "한글명",
    "en": "English Name",
    "native": "원어 이름"
  },
  "nickname": "별명",
  "nationality": "KR",
  "birthDate": "YYYY-MM-DD",
  "height": 180,
  "weight": 77,
  "weightClass": "welterweight",
  "team": "소속 팀",
  "style": ["wrestling", "bjj", "muay-thai"],
  "record": {
    "wins": 20,
    "losses": 5,
    "draws": 0,
    "nc": 1
  }
}
```

### TimelineEvent (타임라인)
```json
{
  "date": "YYYY-MM-DD",
  "type": "fight|injury|news|title|transfer|debut|retirement",
  "title": "이벤트 제목",
  "description": "상세 설명",
  "result": "win|loss|draw|nc",
  "method": "KO/TKO|Submission|Decision|DQ",
  "round": 2,
  "time": "3:45",
  "opponent": "opponent-fighter-id",
  "event": "UFC 300",
  "sources": ["URL1", "URL2"]
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

3. **다국어 처리**
   - 선수 이름은 `ko`, `en`, `native` 모두 제공
   - UI 텍스트는 한국어 우선

4. **이미지 처리**
   - 경로: `/public/images/fighters/{fighter-id}.jpg`
   - 크기: 최대 500x500px 권장
   - 저작권 주의

### 코드 작성 규칙

1. **컴포넌트 구조**
   - 재사용 가능한 컴포넌트로 분리
   - Props 타입 명시
   - 반응형 디자인 적용

2. **데이터 처리**
   - 데이터 fetch 시 에러 핸들링
   - 로딩 상태 표시
   - 캐싱 고려

3. **성능 최적화**
   - 이미지 lazy loading
   - 컴포넌트 lazy loading
   - 불필요한 리렌더링 방지

### 피해야 할 것

- 저작권 있는 이미지 무단 사용
- 검증되지 않은 루머/논란 추가
- 개인정보 노출 (연락처, 주소 등)
- 과도한 외부 의존성 추가
- 하드코딩된 데이터 (별도 파일로 분리)

## Cloudflare Pages 배포

### 자동 배포
- `main` 브랜치 push 시 자동 배포
- PR 생성 시 Preview 배포

### 빌드 설정
```
Build command: npm run build
Build output: dist
Node.js: 18+
```

### 환경 변수
```
NODE_VERSION=18
```

## 테스트

```bash
# 단위 테스트
npm run test

# E2E 테스트
npm run test:e2e

# 타입 체크
npm run typecheck
```

## 자주 하는 작업

### 새 선수 추가
1. `data/fighters/{fighter-id}.json` 생성
2. 기본 프로필 정보 입력
3. 타임라인 이벤트 추가
4. 이미지 추가 (선택)

### 경기 결과 업데이트
1. 해당 선수의 JSON 파일 수정
2. `record` 필드 업데이트
3. `timeline`에 경기 이벤트 추가

### 새 이벤트 추가
1. `data/events/{event-slug}.json` 생성
2. 경기 목록 및 결과 입력
3. 관련 선수 타임라인 업데이트

## 문제 해결

### 빌드 실패
- Node.js 버전 확인 (18+)
- `npm ci`로 clean install
- TypeScript 에러 확인

### 데이터 오류
- JSON 문법 검증 (`npm run validate-data`)
- 날짜 형식 확인
- ID 중복 확인

---

**최종 업데이트:** 2026-02-01
**관리:** 프로젝트 기여자

*이 문서는 프로젝트 발전에 따라 지속적으로 업데이트됩니다.*
