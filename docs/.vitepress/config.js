import { defineConfig } from 'vitepress';

export default defineConfig({
	title: '高性能表格',
	description: '58大数据——高性能表格',
	head: [['meta', { name: 'keywords', content: 'table' }]],
	lastUpdated: true,

	themeConfig: {
		search: {
			provider: 'local'
		},
		logo: 'https://wos2.58cdn.com.cn/MnOjIhGfMnSn/xinghuo/assets_8e5e49d64e126b9d3ab086b25ca8d4c7879aca6e.svg',
		nav: [
			{
				text: '指南',
				link: '/guide/getting-started',
				activeMatch: '/guide/getting-started'
			},
			{
				text: '配置',
				link: '/guide/config',
				activeMatch: '/guide/config'
			},
			{
				text: '相关链接',
				items: [{ text: '星火', link: 'https://wuba.xinghuo.58.com' }]
			}
		],
		socialLinks: [{ icon: 'github', link: 'https://github.com' }],
		sidebar: [
			{
				text: '介绍',
				collapsed: true,
				items: [
					{
						text: '什么是高性能表格？',
						link: '/'
					},
					{ text: '快速上手', link: '/guide/getting-started' },
					{
						text: '配置',
						link: '/guide/config',
						items: [
							{ text: '数据', link: '/guide/config/data' },
							{ text: '功能', link: '/guide/config/options' },
							{ text: '交互', link: '/guide/config/interaction' },
							{ text: '样式', link: '/guide/config/style' }
						]
					}
				]
			}
		],

		docFooter: { prev: '上一篇', next: '下一篇' },
		lastUpdatedText: '最近更新时间'
	},
	outDir: '../dist'
});
