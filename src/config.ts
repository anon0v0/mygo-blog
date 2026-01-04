import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
	GitHubEditConfig,
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
