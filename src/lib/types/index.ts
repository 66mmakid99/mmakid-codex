/**
 * 격투가 인명사전 - 타입 정의
 */

// 체급
export type WeightClass =
	| 'strawweight'
	| 'flyweight'
	| 'bantamweight'
	| 'featherweight'
	| 'lightweight'
	| 'welterweight'
	| 'middleweight'
	| 'light-heavyweight'
	| 'heavyweight';

// 경기 결과
export type FightResult = 'win' | 'loss' | 'draw' | 'nc';

// 승리 방법
export type FightMethod =
	| 'KO'
	| 'TKO'
	| 'Submission'
	| 'Decision - Unanimous'
	| 'Decision - Split'
	| 'Decision - Majority'
	| 'DQ'
	| 'No Contest';

// 타임라인 이벤트 타입
export type TimelineEventType =
	| 'fight'
	| 'injury'
	| 'news'
	| 'title'
	| 'transfer'
	| 'debut'
	| 'retirement'
	| 'suspension'
	| 'award';

// 다국어 이름
export interface MultilingualName {
	ko: string;
	en: string;
	native?: string;
}

// 전적
export interface FightRecord {
	wins: number;
	losses: number;
	draws: number;
	nc: number;
}

// 선수
export interface Fighter {
	id: string;
	name: MultilingualName;
	nickname?: string;
	nationality: string;
	birthDate?: string;
	height?: number; // cm
	weight?: number; // kg
	reach?: number; // cm
	weightClass: WeightClass;
	team?: string;
	style?: string[];
	record: FightRecord;
	profileImage?: string;
	socialLinks?: {
		instagram?: string;
		twitter?: string;
		youtube?: string;
	};
}

// 타임라인 이벤트
export interface TimelineEvent {
	id: string;
	fighterId: string;
	date: string; // YYYY-MM-DD
	type: TimelineEventType;
	title: string;
	description?: string;
	// 경기 관련 (type === 'fight')
	result?: FightResult;
	method?: FightMethod;
	round?: number;
	time?: string;
	opponentId?: string;
	opponentName?: string;
	eventName?: string;
	// 출처
	sources?: string[];
	// 관련 엔티티
	relatedFighters?: string[];
	relatedEvents?: string[];
}

// 대회/이벤트
export interface MMAEvent {
	id: string;
	name: string;
	date: string;
	location: string;
	organization: string; // UFC, ONE, Bellator 등
	fights?: {
		fighterId1: string;
		fighterId2: string;
		result?: FightResult;
		method?: FightMethod;
		round?: number;
		time?: string;
		weightClass: WeightClass;
		isMainEvent?: boolean;
		isTitleFight?: boolean;
	}[];
}

// 비교 뷰용 병합된 타임라인
export interface MergedTimelineItem {
	date: string;
	events: {
		fighter: Fighter;
		event: TimelineEvent;
	}[];
}

// AI 분석 요청
export interface AIAnalysisRequest {
	type: 'fighter-vs-fighter' | 'fighter-vs-org' | 'fighter-vs-event' | 'fighter-timeline';
	entities: string[]; // fighter IDs or entity names
	query?: string;
}

// AI 분석 응답
export interface AIAnalysisResponse {
	summary: string;
	insights: string[];
	connections: {
		from: string;
		to: string;
		description: string;
	}[];
}
