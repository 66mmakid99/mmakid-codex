<script lang="ts">
	// 홈페이지 - 격투가 인명사전 메인
</script>

<div class="space-y-8">
	<!-- 히어로 섹션 -->
	<section class="text-center py-12">
		<h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
			격투가 인명사전
		</h1>
		<p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
			격투기 선수들의 커리어 타임라인, 경기 전적, 주요 사건을 한눈에
		</p>
	</section>

	<!-- 검색 섹션 -->
	<section class="max-w-xl mx-auto">
		<div class="relative">
			<input
				type="text"
				placeholder="선수 이름으로 검색..."
				class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600
					   bg-white dark:bg-gray-800 text-gray-900 dark:text-white
					   focus:ring-2 focus:ring-blue-500 focus:border-transparent"
			/>
			<button class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
				🔍
			</button>
		</div>
	</section>

	<!-- 주요 기능 소개 -->
	<section class="grid md:grid-cols-3 gap-6 mt-12">
		<div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
			<div class="text-3xl mb-4">📅</div>
			<h3 class="text-lg font-semibold mb-2">타임라인 뷰</h3>
			<p class="text-gray-600 dark:text-gray-400">
				선수의 커리어를 시간 흐름에 따라 한눈에 파악
			</p>
		</div>

		<div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
			<div class="text-3xl mb-4">⚔️</div>
			<h3 class="text-lg font-semibold mb-2">비교 분석</h3>
			<p class="text-gray-600 dark:text-gray-400">
				두 선수의 타임라인을 병합하여 비교·대조
			</p>
		</div>

		<div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
			<div class="text-3xl mb-4">🤖</div>
			<h3 class="text-lg font-semibold mb-2">AI 맥락 연결</h3>
			<p class="text-gray-600 dark:text-gray-400">
				파편화된 정보를 AI가 하나의 스토리로 연결
			</p>
		</div>
	</section>

	<!-- 개발 중 안내 -->
	<section class="text-center py-8 text-gray-500 dark:text-gray-400">
		<p>🚧 현재 개발 중입니다</p>
	</section>
</div>
