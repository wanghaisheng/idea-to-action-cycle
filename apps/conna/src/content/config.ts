import { defineCollection, z } from "astro:content"
export const shopconnatoolkits = new Map<string, string>([
	["social media account creation", "social media account creation"],
	["keyword research tool", "keyword research tool"],
	["post auto publish and schedule", "post auto publish and schedule"],
	["gpt writer", "gpt writer"],
	["thumbnail generation", "thumbnail generation"],
	["social media monitoring", "social media monitoring"],
	["submit url to search engine", "submit url to search engine"],
	["grab brand store urls", "grab brand store urls"],
])
export const IntegrationCategories = new Map<string, string>([
	["featured", "Featured"],
	["recent", "Recently Added"],
	["official", "Official"],
	["frameworks", "Frameworks"],
	["adapters", "Adapters"],
	["css+ui", "CSS + UI"],
	["performance+seo", "Performance + SEO"],
	["analytics", "Analytics"],
	["accessibility", "Accessibility"],
])
export const EcommerceBrandCategories = new Map<string, string>([
	["clothing", "Clothing"],
	["shoes", "Shoes"],
	["womens-fashion", "Women's Fashion"],
	["baby", "Baby"],
	["health", "Health"],
	["jewelry", "Jewelry"],
	["kid", "Kid"],
	["lingerie", "Lingerie"],
	["mens-fashion", "Men's Fashion"],
	["beauty", "Beauty"],
	["hardware", "Hardware"],
	["home", "Home"],
	["household-appliance", "Household Appliance"],
	["kitchen", "Kitchen"],
	["outdoor", "Outdoor"],
	["book", "Book"],
	["boutique", "Boutique"],
	["electronic", "Electronic"],
	["eyewear", "Eyewear"],
	["flower", "Flower"],
	["food", "Food"],
	["game", "Game"],
	["garden", "Garden"],
	["gift", "Gift"],
	["grocery", "Grocery"],
	["money", "Money"],
	["movie", "Movie"],
	["office", "Office"],
	["sport", "Sport"],
	["tools", "Tools"],
	["travel", "Travel"],
	["wedding", "Wedding"],
	["automotive", "Automotive"],
	["hobby", "Hobby"],
	["music", "Music"],
	["charity", "Charity"],
	["coupon", "Coupon"],
	["drink", "Drink"],
	["home-decor", "Home Decor"],
	["rental", "Rental"],
	["telephone", "Telephone"],
	["accessory", "Accessory"],
	["adult", "Adult"],
	["animal", "Animal"],
	["computer", "Computer"],
	["firearm", "Firearm"],
	["print", "Print"],
	["religion", "Religion"],
])
export const ThemeCategories = new Map<string, string>([
	["featured", "Featured"],
	["recent", "Recently Added"],
	["official", "Official"],
	["blog", "Blog"],
	["landing-page", "Landing Page"],
	["portfolio", "Portfolio"],
	["ecommerce", "Ecommerce"],
	["e-commerce", "E-commerce"],
	["docs", "Docs"],
	["saas", "SaaS"],
	["shopify", "Shopify"],
	["wordpress", "Wordpress"],
	["magento", "Magento"],
	["bigcommerce", "Bigcommerce"],
	["prestashop", "PrestaShop"],
	["social media", "Social Media"],
	["gpt", "chatGPT"],
	["minimal", "Minimal"],
	["website", "Website"],
	["twitter", "Twitter"],
	["SEO", "SEO"],
	["seo", "seo"],
	["search engine", "search engine"],

	["other", "Other"],
])
export const ToolkitIntegrationCategories = new Map<string, string>([
	["shopify", "Shopify"],
	["wordpress", "Wordpress"],
	["magento", "Magento"],
	["bigcommerce", "Bigcommerce"],
	["prestashop", "PrestaShop"],
	["social media", "Social Media"],
	["gpt", "chatGPT"],
	["twitter", "Twitter"],
	["other", "Other"],
])
export const SassBrandCategories = new Map<string, string>([
	["brand-monitor", "Shopify"],
	["other", "Other"],
])
export const ToolkitTags = new Map<string, string>([
	["social-media", "Social media"],
	["other", "Other"],
	["AI", "AI"],
	["content-management", "Content management"],
	["handsfree", "Hands free"],
	["saas", "Saas"],
	["twitter", "Twitter"],
	["tiktok", "Tiktok"],
	["website", "Website"],

])

export const BlogTags = new Map<string, string>([
	["social-media", "Social media"],
	["other", "Other"],
	["AI", "AI"],
	["content-management", "Content management"],
	["handsfree", "Hands free"],
	["saas", "Saas"],
	["twitter", "Twitter"],
	["tiktok", "Tiktok"],
	["website", "Website"],

])
export const BlogCategories = new Map<string, string>([
	["featured", "Featured"],
	["recent", "Recently Added"],
	["official", "Official"],
	["landing-page", "Landing Page"],
	["portfolio", "Portfolio"],
	["ecommerce", "Ecommerce"],
	["e-commerce", "E-commerce"],
	["docs", "Docs"],
	["shopify", "Shopify"],
	["wordpress", "Wordpress"],
	["magento", "Magento"],
	["bigcommerce", "Bigcommerce"],
	["prestashop", "PrestaShop"],
	["social media", "Social Media"],
	["gpt", "chatGPT"],
	["minimal", "Minimal"],
	["website", "Website"],
	["twitter", "Twitter"],
	["SEO", "SEO"],
	["search-engine", "search engine"],
	["other", "Other"],
])

export const ToolkitCategories = new Map<string, string>([
	["deskstop-app", "Desktop APP"],
	["ecommerce", "E-commerce"],
	["saas", "SaaS"],
	["other", "Other"],
])

export const ThemeTools = new Map<string, string>([
	["python", "Python"],
	["go", "Go"],
	["rust", "Rust"],
	["javascript", "Javascript"],
	["alpinejs", "Alpine.js"],
	["lit", "Lit"],
	["mdx", "MDX"],
	["postcss", "PostCSS"],
	["preact", "Preact"],
	["react", "React"],
	["sass", "SASS"],
	["solidjs", "SolidJS"],
	["svelte", "Svelte"],
	["tailwind", "Tailwind"],
	["typescript", "TypeScript"],
	["vue", "Vue"],

])
export const ProgamingLang = new Map<string, string>([
	["python", "Python"],
	["go", "Go"],
	["rust", "Rust"],
	["javascript", "Javascript"],
	["alpinejs", "Alpine.js"],
	["lit", "Lit"],
	["mdx", "MDX"],
	["postcss", "PostCSS"],
	["preact", "Preact"],
	["react", "React"],
	["sass", "SASS"],
	["solidjs", "SolidJS"],
	["svelte", "Svelte"],
	["tailwind", "Tailwind"],
	["typescript", "TypeScript"],
	["vue", "Vue"],

])
export const DeployPlatforms = new Map<string, string>([
	["github-action", "Github Action"],
	["vercel", "Vercel"],
	["netifly", "Netifly"],
	["cloudflare", "Cloudflare"],
	["windows", "Windows"],
	["macOS", "MacOS"],
	["linux", "Linux"],

])
export const themeSchema = z
	.object({
		title: z.string().min(1),
		description: z.string().min(1),
		fullDescription: z.string().optional(),
		image: z.string(),
		images: z.array(z.string()).default([]),
		author: z.object({
			url: z.string(),
			name: z.string(),
			avatar: z.string(),
		}),
		categories: z.array(z.enum(Array.from(ThemeCategories.keys()) as [string, ...string[]])),
		repoUrl: z.string().url().optional(),
		demoUrl: z.string().url().optional(),
		buyUrl: z.string().url().optional(),
		videoUrl: z.string().url().optional(),
		links: z
			.array(
				z.object({
					href: z.string().url(),
					text: z.string(),
				}),
			)
			.default([]),
		stars: z.number().min(0).default(0),
		featured: z.number().min(1).optional(),
		tags: z.array(z.enum(Array.from(ToolkitTags.keys()) as [string, ...string[]])).optional(),

		deployPlatforms: z.array(z.enum(Array.from(DeployPlatforms.keys()) as [string, ...string[]])).default([]).optional(),
		tools: z.array(z.enum(Array.from(ProgamingLang.keys()) as [string, ...string[]])).default([]),
		related: z.array(z.string()).max(3).default([]),
		publishDate: z.date({ coerce: true }).optional(),
		badge: z.string().optional(),
	})
	.transform((theme) => {
		// computed properties
		return {
			...theme,
			official: theme.categories.includes("official"),
			paid: !!theme.buyUrl,
		}
	})
export const showcaseSchema = z
	.object({
		title: z.string().min(1),
		description: z.string().min(1),
		fullDescription: z.string().optional(),
		image: z.string(),
		images: z.array(z.string()).default([]),
		author: z.object({
			url: z.string(),
			name: z.string(),
			avatar: z.string(),
		}),
		categories: z.array(z.enum(Array.from(ThemeCategories.keys()) as [string, ...string[]])),
		repoUrl: z.string().url().optional(),
		demoUrl: z.string().url().optional(),
		buyUrl: z.string().url().optional(),
		videoUrl: z.string().url().optional(),
		links: z
			.array(
				z.object({
					href: z.string().url(),
					text: z.string(),
				}),
			)
			.default([]),
		stars: z.number().min(0).default(0),
		featured: z.number().min(1).optional(),
		tools: z.array(z.enum(Array.from(ProgamingLang.keys()) as [string, ...string[]])).default([]),
		related: z.array(z.string()).max(3).default([]),
		publishDate: z.date({ coerce: true }).optional(),
		badge: z.string().optional(),
	})
	.transform((theme) => {
		// computed properties
		return {
			...theme,
			official: theme.categories.includes("official"),
			paid: !!theme.buyUrl,
		}
	})

export const toolkitSchema = z
	.object({
		title: z.string().min(1),
		description: z.string().min(1),
		fullDescription: z.string().optional(),
		image: z.string(),
		images: z.array(z.string()).default([]),
		author: z.object({
			url: z.string(),
			name: z.string(),
			avatar: z.string(),
		}),
		categories: z.array(z.enum(Array.from(ToolkitCategories.keys()) as [string, ...string[]])).default([]),
		ecommerceBrandCategories: z.array(z.enum(Array.from(EcommerceBrandCategories.keys()) as [string, ...string[]])).default([]),
		repoUrl: z.string().url().optional(),
		demoUrl: z.string().url().optional(),
		buyUrl: z.string().url().optional(),
		videoUrl: z.string().url().optional(),
		webUrl: z.string().url().optional(),
		links: z
			.array(
				z.object({
					href: z.string().url(),
					text: z.string(),
				}),
			)
			.default([]),
		stars: z.number().min(0).default(0),
		featured: z.number().min(1).optional(),
		tools: z.array(z.enum(Array.from(ProgamingLang.keys()) as [string, ...string[]])).default([]),
		deployPlatforms: z.array(z.enum(Array.from(DeployPlatforms.keys()) as [string, ...string[]])).default([]),
		tags: z.array(z.enum(Array.from(ToolkitTags.keys()) as [string, ...string[]])).default([]),
		related: z.array(z.string()).max(3).default([]),
		publishDate: z.date({ coerce: true }).optional(),
		badge: z.string().optional(),
	})
	.transform((theme) => {
		// computed properties
		return {
			...theme,
			official: theme.categories.includes("official"),
			paid: !!theme.buyUrl,
		}
	})

export const collections = {
	authors: defineCollection({
		schema: z.object({
			image: z.string().optional(),
			name: z.string(),
			title: z.string().optional(),
			twitter: z.string().optional(),
			mastodon: z.string().optional(),
		}),
	}),
	categories: defineCollection({
		schema: z.object({
			icon: z.string().optional(),
			name: z.enum(Array.from(ToolkitCategories.keys()) as [string, ...string[]]),
		}),
	}),

	blog: defineCollection({
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val)),
			authors: z.array(z.string()),
			categories: z.array(z.enum(Array.from(BlogCategories.keys()) as [string, ...string[]])),
			tags: z.array(z.enum(Array.from(BlogTags.keys()) as [string, ...string[]])).default([]),
			socialImage: z.string().optional(),
			coverImage: z.string().optional(),
			lang: z.enum(["en"]).default("en"),
		}),
	}),
	careers: defineCollection({
		schema: z.object({
			title: z.string().min(1).describe("Title of the job position"),
			published: z.date().describe("Date the job listing was posted"),
			location: z
				.string()
				.min(1)
				.describe("Location of the job position (eg: 'Remote' or 'San Fransisco, CA'"),
			team: z.enum(["Engineering", "UI", "DX"]),
			type: z.enum(["Full Time", "Part Time", "Contract", "Internship"]),
			image: z
				.object({
					src: z.string().default("/og/social.jpg"),
					alt: z.string().default("Astro | Build the web you want"),
				})
				.default({}),
		}),
	}),
	integrations: {
		schema: z.object({
			name: z.string().describe("Name of the package as it is published to NPM"),
			title: z
				.string()
				.describe("Title of the integration as it should be shown in the Integrations catalog"),
			description: z.string().optional(),
			image: z.string().optional(),
			categories: z.array(
				z.enum(Array.from(IntegrationCategories.keys()) as [string, ...string[]]),
			),
			repoUrl: z.string().url().optional(),
			npmUrl: z.string().url(),
			homepageUrl: z.string().url().optional(),
			official: z.boolean().default(false),
			featured: z.number().min(1).optional(),
			downloads: z.number().min(0).default(0),
			badge: z.string().optional(),
		}),
	},
	pages: {
		schema: z.object({
			seo: z.object({
				title: z.string().min(5).max(60),
				description: z.string().min(15).max(160),
				image: z
					.object({
						src: z.string().default("/og/social.jpg"),
						alt: z.string().default("Build the web you want"),
					})
					.default({}),
				pageType: z.enum(["website", "article"]).default("website"),
				robots: z
					.object({
						index: z.boolean().default(true),
						follow: z.boolean().default(true),
					})
					.default({}),
			}),
			updated_date: z.date().describe("The date this content was last updated."),
			locale: z.enum(["en"]).default("en"),
		}),
	},
	partials: {
		schema: z.object({}),
	},
	quotes: {
		schema: z.object({
			author: z.object({
				handle: z.string(),
				avatar: z.object({
					src: z.string(),
					alt: z.string().optional(),
				}),
			}),
			url: z.string().url(),
			published: z.date(),
		}),
	},
	showcase: {
		schema: z.object({
			title: z.string().min(1),
			image: z.string(),
			url: z.string().url(),
			featured: z.number().min(1).optional(),
			highlight: z.boolean().default(false),
		}),
	},
	themes: {
		schema: themeSchema,
	},
	toolkits: {
		schema: toolkitSchema,
	},
}
