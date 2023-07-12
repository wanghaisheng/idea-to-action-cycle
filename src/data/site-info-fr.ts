export type SocialLink = {
	platform: string
	href: string
	me?: string
	text: string
	icon: string
	footerOnly?: boolean
}

export type SiteInfo = {
	name: string
	title: string
	description: string
	image: {
		src: string
		alt: string
	}
	socialLinks: SocialLink[]
}

const siteInfoFR: SiteInfo = {
	name: "shopconna",
	title: "May curiosity be with you",
	description:
		"AI empower brand building, your trustful brand copilot.",
	image: {
		src: "/og/social.jpg",
		alt: "Build the brand  you want",
	},
	socialLinks: [
		{
			platform: "github",
			href: "https://github.com/wanghaisheng/idea-to-action-cycle/",
			me: "https://github.com/wanghaisheng/",
			text: "Go to wanghaisheng's GitHub repo",
			icon: "social/github",
		},
		{
			platform: "discord",
			href: "/chat",
			text: "Join the Astro community on Discord",
			icon: "social/discord",
		},
		{
			platform: "twitter",
			href: "https://twitter.com/shopconna",
			me: "https://twitter.com/shopconna",
			text: "Follow Astro on Twitter",
			icon: "social/twitter",
		},
		{
			platform: "tiktok",
			href: "https://tiktok.com/shopconna",
			me: "https://tiktok.com/shopconna",
			text: "Follow Astro on tiktok",
			icon: "social/tiktok",
		},
		{
			platform: "youtube",
			href: "https://youtube.com/shopconna",
			me: "https://youtube.com/shopconna",
			text: "Follow Astro on youtube",
			icon: "social/youtube",
		},
		{
			platform: "mastodon",
			href: "https://m.webtoo.ls/@shopconna",
			me: "https://m.webtoo.ls/@shopconna",
			text: "Follow Astro on Mastodon",
			footerOnly: true,
			icon: "social/mastodon",
		},
	],
}

export default siteInfoFR