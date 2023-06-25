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

const siteInfo: SiteInfo = {
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
			href: "https://twitter.com/astrodotbuild",
			me: "https://twitter.com/astrodotbuild",
			text: "Follow Astro on Twitter",
			icon: "social/twitter",
		},
		{
			platform: "mastodon",
			href: "https://m.webtoo.ls/@astro",
			me: "https://m.webtoo.ls/@astro",
			text: "Follow Astro on Mastodon",
			footerOnly: true,
			icon: "social/mastodon",
		},
	],
}

export default siteInfo
