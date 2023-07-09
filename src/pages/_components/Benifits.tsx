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
	liveUrl: string
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
		liveUrl: "/toolkits?search=&tags%5B%5D=social-media",
		image: blogsImage,
		cta: {
			text: "Try Rss for social profile",
			href: "https://github.com/wanghaisheng/gen-brand-social-account-RSS",
		},
	},
	{
		title: "Harness the Magic of ChatGPT and AI",
		description: "With ChatGPT and AI at your disposal, ShopConna takes your brand's communication and engagement to new heights. Automate customer interactions, provide personalized experiences, and deliver real-time support with intelligent chatbots powered by cutting-edge AI technology. Watch your brand connect with customers on a deeper level.",
		liveUrl:"/toolkits?search=&tags%5B%5D=AI",
		image: marketingImage,
		cta: {
			text: "email collect",
			href: "https://github.com/wanghaisheng/brand-contact-Email-collector",
		},
	},
	{
		title: "RPA and Automation for Efficiency",
		description:
			"Save valuable time and resources with the power of RPA and automation. ShopConna automates repetitive and time-consuming tasks, allowing you to focus on strategic initiatives. From content creation to data analysis, our toolkit streamlines your workflow, enhances efficiency, and enables you to achieve more in less time.",
		liveUrl:"/toolkits?search=&tags%5B%5D=content-management",
		image: agenciesImage,
		cta: {
			text: "video schedule and publish",
			href:  "https://github.com/wanghaisheng/tiktoka-studio-uploader",
		},
	},
	{
		title: "Hands-Free Brand Building",
		description:
			"ShopConna liberates you from the shackles of manual processes. Say goodbye to mundane tasks and hello to hands-free brand building. Our toolkit handles the heavy lifting, enabling you to concentrate on creativity, strategy, and nurturing your brand's essence. Unleash your potential without being bogged down by tedious operations.",
		liveUrl: "/toolkits?search=&tags%5B%5D=handsfree",
		image: eCommerceImage,
		cta: {
			text: "AutoGPT-Social",
			href: "https://github.com/wanghaisheng/AutoGPT-Social",
		},
	},
	{
		title: "Take Control of Your Budget",
		description:
			"Budget control is key to successful brand building, and ShopConna puts you in charge. Our toolkit offers cost-effective solutions that maximize the value of your resources. By leveraging existing best developer tools and automation technology, ShopConna ensures your budget is utilized optimally, without compromising quality.",
		liveUrl: "/toolkits?search=&tags%5B%5D=workflow",
		image: portfolioImage,
		cta: {
			text: "autoshop pipeline",
			href: "https://github.com/wanghaisheng/auto-shop-pipeline",
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
										<a href={item.liveUrl} class="link-underline">
											Finding more
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
								alt={`shopconna image for ${item.title}`}
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
