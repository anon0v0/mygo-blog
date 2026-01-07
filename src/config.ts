import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
	GitHubEditConfig,
	CommentConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "MyGo!!!!!",
	subtitle: "迷い猫、ここにいます",
	lang: "zh_CN",
	themeColor: {
		hue: 200,
		fixed: false,
	},
	banner: {
		enable: false,
		src: "assets/images/demo-banner.png",
		position: "center",
		credit: {
			enable: false,
			text: "",
			url: "",
		},
	},
	background: {
		enable: false,
		src: "",
		position: "center",
		size: "cover",
		repeat: "no-repeat",
		attachment: "fixed",
		opacity: 0.25,
	},
	toc: {
		enable: true,
		depth: 2,
	},
	favicon: [
		{ src: '/favicon.png' }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: '聊天室',
			url: '/chat',
		},
		{
			name: "其他",
			url: "#",
			children: [
				{ name: "探针", url: "https://jk.511359400.xyz", external: true },
				{ name: "Umami统计", url: "https://umami.2407365.xyz/share/nAJfnhzmq9N3yjBe", external: true },
				{ name: "抖音解析", url: "https://dy.511359400.xyz", external: true },
				{ name: "图床", url: "https://img.2407365.xyz", external: true },
				{ name: "酒馆", url: "https://ai.511359400.xyz", external: true },
				{ name: "LobeChat", url: "https://511359400.xyz", external: true },
				{ name: "网易云音乐解析", url: "https://music.ai00.xyz:4443", external: true },
			],
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.jpg",
	name: "AnonTokyo",
	bio: "迷い猫、ここにいます",
	links: [
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/anon0v0",
		},
		{
			name: "Telegram",
			icon: "fa6-brands:telegram",
			url: "https://t.me/xiaochen0v0",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const gitHubEditConfig: GitHubEditConfig = {
	enable: false,
	baseUrl: "",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	theme: "github-dark",
};

export const commentConfig: CommentConfig = {
	enable: true,
	type: 'artalk',
	artalk: {
		serverUrl: 'https://comment.saki.li',
		siteName: 'MyGo!!!!!',
	},
	giscus: {
		repo: 'zyxisme/giscus',
		repoId: 'R_kgDOP-gmBg',
		category: 'Announcements',
		categoryId: 'DIC_kwDOP-gmBs4CwZHF',
		mapping: 'pathname',
		reactionsEnabled: true,
		emitMetadata: false,
		inputPosition: 'bottom',
		lang: 'zh-CN',
	},
};
