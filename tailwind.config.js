/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				// 격투기 테마 컬러
				fight: {
					red: '#DC2626',
					blue: '#2563EB',
					gold: '#F59E0B',
					dark: '#1F2937'
				}
			},
			fontFamily: {
				sans: ['Pretendard', 'system-ui', 'sans-serif']
			}
		}
	},
	plugins: []
};
