import clsx from "clsx"
import { createEffect, createSignal, For } from "solid-js"
import Collapse from "~/components/Collapse.jsx"
import { positiveMod } from "~/helpers/math.js"
import agenciesImage from "../_assets/example-agencies.png"
import blogsImage from "../_assets/example-blogs.png"
import eCommerceImage from "../_assets/example-e-commerce.webp"
import marketingImage from "../_assets/example-marketing.webp"
import portfolioImage from "../_assets/example-portfolio.webp"

type Item = {
	title: string
	description: string
	liveUrl: URL
	image: ImageMetadata
	cta: {
		text: string
		href: string
	}
}

const items: Item[] = [
	{
		title: "Unleash the Power of Open-Source",
		description:
			"ShopConna is built on the foundation of open-source technology. This means you have full control over customizing and tailoring the toolkit to perfectly align with your brand's unique requirements. Embrace the freedom to enhance, modify, and contribute to the community, ensuring that your brand stands out from the crowd.",
		liveUrl: new URL("https://github.com/wanghaisheng/gen-brand-social-account-RSS"),
		image: blogsImage,
		cta: {
			text: "Rss for social profile",
			href: "/toolkits?search=&tags%5B%5D=social-media",
		},
	},
	{
		title: "Email Marketing Automation",
		description: "Streamline your email marketing campaigns with our tools that automate tasks such as segmenting your audience, creating personalized email templates, scheduling campaigns, and tracking performance metrics. This ensures efficient and targeted communication with your customers.",
		liveUrl: new URL("https://github.com/wanghaisheng/brand-contact-Email-collector"),
		image: marketingImage,
		cta: {
			text: "email collect",
			href: "/toolkits?search=&tags%5B%5D=email",
		},
	},
	{
		title: "Content Creation and Management",
		description:
			"Save time and effort by automating content creation tasks. Our tools can generate product descriptions, blog articles, and social media captions based on predefined templates or AI-generated content. They also manage content distribution and publishing across different channels.",
		liveUrl: new URL("https://github.com/wanghaisheng/tiktoka-studio-uploader"),
		image: agenciesImage,
		cta: {
			text: "video schedule and publish",
			href: "/toolkits?search=&tags%5B%5D=content-management",
		},
	},
	{
		title: "Customer Relationship Management",
		description:
			"Automate customer data management, lead generation, and customer support processes. Our CRM tools help you track customer interactions, segment your audience, automate personalized responses, and nurture leads throughout their buyer's journey.",
		liveUrl: new URL("https://github.com/wanghaisheng/AutoGPT-Social"),
		image: eCommerceImage,
		cta: {
			text: "AutoGPT-Social",
			href: "/toolkits?search=&tags%5B%5D=crm",
		},
	},
	{
		title: "Workflow Automation",
		description:
			"Streamline your internal processes by automating workflows and task assignments. Our tools facilitate collaboration, improve efficiency, and ensure that tasks are completed on time.",
		liveUrl: new URL("https://github.com/wanghaisheng/auto-shop-pipeline"),
		image: portfolioImage,
		cta: {
			text: "autoshop pipeline",
			href: "/toolkits?search=&tags%5B%5D=workflow",
		},
	},
]

const titleHeight = 32

const [current, setCurrent] = createSignal<number | undefined>(0)

export default function ExampleShowcase() {
	return (
		<div class="mx-auto flex w-full max-w-screen-2xl flex-col gap-4 px-4 md:flex-row md:items-center md:px-0">
			<section aria-label="Examples" class="mb-4 grid gap-4 md:mx-auto md:w-[380px]">
				<For each={items}>
					{(item, index) => {
						const [open, setOpen] = createSignal(current() == index())

						const details = (
							<details
								class="group noise-panel p-4 text-left"
								open={index() === 0}
								onClick={(event) => {
									if (event.target.localName === "a") return
									event.preventDefault()
									setCurrent(index())
								}}
							>
								<summary class="accordion heading-4 flex w-full cursor-pointer select-none items-center justify-between">
									<span>{item.title}</span>
									<div
										aria-hidden="true"
										class="leading-none after:content-['+'] group-open:after:content-['-']"
									></div>
								</summary>

								<Collapse
									isOpen={open()}
									onTransitionEnd={() => {
										if (details.open && !open()) {
											details.open = false
										}
									}}
								>
									<p class="body my-4 text-gray-200">{item.description}</p>
									<p class="flex justify-between">
										<a href={item.cta.href} class="link-underline">
											{item.cta.text}
										</a>
										<a href={item.liveUrl.href} class="link-underline">
											See it in the wild
										</a>
									</p>
								</Collapse>
							</details>
						) as HTMLDetailsElement

						createEffect(() => {
							if (current() === index()) {
								setOpen(true)
								details.open = true
							} else {
								setOpen(false)
							}
						})

						return details
					}}
				</For>
			</section>

			<section
				aria-label="Example Previews"
				style={{ "padding-bottom": `calc(${titleHeight}px * ${items.length - 1})` }}
				class="relative isolate md:w-1/2"
			>
				<For each={items}>
					{(item, index) => (
						<a
							tabIndex={-1} // there are already links to the examples on the collapses
							href={item.liveUrl.href}
							target="_blank"
							style={{
								"--position": positiveMod(index() - (current() ?? 0), items.length),
								"--translate": `calc(var(--position) * ${titleHeight}px)`,
								"z-index": `calc(${items.length} - var(--position))`,
							}}
							class={clsx(
								"noise-panel left-0 top-0 block w-full",
								"translate-y-[var(--translate)] transition-transform md:translate-x-[var(--translate)]",
								index() === current() ? "relative" : "absolute",
							)}
							data-card
						>
							<p class="code flex items-center justify-center py-1 text-sm" aria-hidden="true">
								{item.liveUrl.hostname}
							</p>
							<img
								src={item.image.src}
								width={item.image.width}
								height={item.image.height}
								alt={`Example image for ${item.title}`}
								class="w-full object-cover object-left-top"
								loading="lazy"
								decoding="async"
							/>
						</a>
					)}
				</For>
			</section>
		</div>
	)
}
