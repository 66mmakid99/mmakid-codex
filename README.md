# 격투가 인명사전 (Fighter Encyclopedia)

격투기 선수들의 커리어 타임라인, 경기 전적, 주요 사건을 한눈에 볼 수 있는 인명사전 웹 애플리케이션입니다.

## 프로젝트 개요

### 목표
- 격투기 선수들의 생애와 커리어를 **타임라인 형식**으로 시각화
- 경기 전적(승/패/무/NC)을 직관적으로 표시
- 주요 사건, 이슈, 뉴스를 시간순으로 정리
- 선수 간 대전 기록 및 관계 파악

### 참고 데이터 소스
| 사이트 | URL | 주요 데이터 |
|--------|-----|------------|
| BJJ Heroes | https://www.bjjheroes.com/ | BJJ 선수 프로필, 리니지, 대회 기록 |
| Sherdog | https://www.sherdog.com/events | MMA 경기 기록, 이벤트 정보, 선수 통계 |
| Tapology | https://www.tapology.com/ | MMA 선수 정보, 체급 랭킹, 팀 정보 |

## 주요 기능

### 1. 선수 프로필
- 기본 정보 (이름, 국적, 생년월일, 신장, 체중, 체급)
- 소속 팀/체육관
- 격투 스타일 (스트라이커, 그래플러, 올라운더 등)
- 사진 및 별명

### 2. 타임라인 뷰
```
2024 ──●── UFC 300 출전, TKO 승리
       │
2023 ──●── 체급 변경 (라이트급 → 웰터급)
       ●── UFC 285 출전, 판정 패배
       │
2022 ──●── 부상으로 6개월 공백
       ●── 도핑 적발 논란
       │
2021 ──●── UFC 타이틀 획득
```

### 3. 경기 전적
- 전체 전적 (승-패-무-NC)
- 승리 방식 분석 (KO/TKO, 서브미션, 판정)
- 상대 선수 정보 및 링크
- 대회/이벤트 정보

### 4. 사건/이슈 트래킹
- 부상 기록
- 이적/팀 변경
- 논란 및 뉴스
- 타이틀 획득/방어/상실
- 은퇴/복귀

## 기술 스택

### Frontend
- **Framework:** [TBD - React/Vue/Svelte 등]
- **Styling:** [TBD - Tailwind CSS 권장]
- **타임라인:** 커스텀 컴포넌트 또는 라이브러리

### Backend / Data
- **데이터 저장:** JSON/Markdown 기반 정적 데이터 또는 CMS
- **API:** 필요시 Cloudflare Workers 활용

### 배포
- **플랫폼:** Cloudflare Pages
- **도메인:** [TBD]

## 프로젝트 구조

```
mmakid-codex/
├── README.md              # 프로젝트 설명
├── CLAUDE.md              # AI 어시스턴트 가이드
├── src/                   # 소스 코드
│   ├── components/        # UI 컴포넌트
│   │   ├── Timeline/      # 타임라인 컴포넌트
│   │   ├── FighterCard/   # 선수 카드
│   │   └── FightRecord/   # 경기 기록
│   ├── pages/             # 페이지
│   └── data/              # 정적 데이터
├── data/                  # 선수 데이터 (JSON/MD)
│   ├── fighters/          # 선수별 데이터
│   └── events/            # 이벤트 데이터
├── public/                # 정적 파일
└── dist/                  # 빌드 결과물
```

## 데이터 스키마

### 선수 (Fighter)
```json
{
  "id": "fighter-slug",
  "name": {
    "ko": "한글 이름",
    "en": "English Name",
    "native": "Native Name"
  },
  "nickname": "별명",
  "nationality": "KR",
  "birthDate": "1990-01-01",
  "height": 180,
  "weight": 77,
  "weightClass": "welterweight",
  "team": "Team Name",
  "style": ["wrestling", "bjj"],
  "record": {
    "wins": 20,
    "losses": 5,
    "draws": 0,
    "nc": 1
  },
  "profileImage": "/images/fighters/fighter-slug.jpg"
}
```

### 타임라인 이벤트 (Timeline Event)
```json
{
  "date": "2024-03-15",
  "type": "fight|injury|news|title|transfer",
  "title": "이벤트 제목",
  "description": "상세 설명",
  "result": "win|loss|draw|nc",
  "method": "KO/TKO|Submission|Decision",
  "opponent": "opponent-slug",
  "event": "UFC 300",
  "sources": ["https://..."]
}
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

# 빌드
npm run build

# Cloudflare Pages 배포
npm run deploy
```

## Cloudflare Pages 배포

### 설정
1. Cloudflare 대시보드에서 Pages 프로젝트 생성
2. GitHub 저장소 연결
3. 빌드 설정:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node.js version: 18+

### 환경 변수
```
NODE_VERSION=18
```

## 로드맵

- [ ] 프로젝트 초기 설정 및 기술 스택 확정
- [ ] 기본 UI 컴포넌트 개발
- [ ] 타임라인 컴포넌트 구현
- [ ] 샘플 선수 데이터 추가
- [ ] 검색 기능 구현
- [ ] 선수 비교 기능
- [ ] 다국어 지원 (한/영/일)
- [ ] 모바일 반응형 디자인
- [ ] PWA 지원

## 기여하기

1. 이슈 생성 또는 기존 이슈 확인
2. 기능 브랜치 생성 (`feature/기능명`)
3. 변경사항 커밋
4. Pull Request 생성

## 라이선스

[TBD]

---

**프로젝트 시작일:** 2026-02-01
