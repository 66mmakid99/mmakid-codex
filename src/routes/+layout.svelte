<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>격투가 인명사전</title>
	<meta name="description" content="격투기 선수들의 타임라인, 경기 전적, 사건/이슈를 한눈에" />
</svelte:head>

<div class="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
	<!-- 헤더 -->
	<header class="bg-white dark:bg-gray-800 shadow-sm">
		<nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between h-16 items-center">
				<a href="/" class="text-xl font-bold text-blue-600 dark:text-blue-400">
					격투가 인명사전
				</a>
				<div class="flex space-x-4">
					<a href="/fighters" class="text-gray-600 dark:text-gray-300 hover:text-blue-600">
						선수 목록
					</a>
					<a href="/compare" class="text-gray-600 dark:text-gray-300 hover:text-blue-600">
						비교하기
					</a>
				</div>
			</div>
		</nav>
	</header>

	<!-- 메인 컨텐츠 -->
	<main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
		{@render children()}
	</main>

	<!-- 푸터 -->
	<footer class="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-auto">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
			<p class="text-center text-gray-500 dark:text-gray-400 text-sm">
				© 2026 격투가 인명사전. 데이터 출처: BJJ Heroes, Sherdog, Tapology
			</p>
		</div>
	</footer>
</div>
