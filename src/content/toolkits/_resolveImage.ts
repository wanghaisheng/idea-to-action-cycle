import type { ImageMetadata } from "@astrojs/image/dist/vite-plugin-astro-image.js"
import { CollectionEntry } from "astro:content"
import { srcToDensity } from "~/helpers/images.js"

const allImages = import.meta.glob<{ default: ImageMetadata }>(
	"/src/content/toolkits/_images/*.{png,jpg,jpeg,webp}",
)

export async function resolveImage(entry: CollectionEntry<"toolkits">) {
	if (!(entry.data.image in allImages)) {
		throw new Error(
			`[toolkits] Image for "${entry.data.title}" not found! Provided: "${entry.data.image}", is there a typo?`,
		)
	}

	const { default: image } = await allImages[entry.data.image]()

	return image
}

export async function resolveAllImages(entry: CollectionEntry<"toolkits">) {
	const result = [entry.data.image, ...entry.data.images].map(async (src) => {
		if (!(src in allImages)) {
			throw new Error(
				`[toolkits] Image for "${entry.data.title}" not found! Provided: "${entry.data.image}", is there a typo?`,
			)
		}

		const fullImage = await allImages[srcToDensity(src, 2)]().then(
			({ default: image }: { default: ImageMetadata }) => image,
		)
		const thumbnail = await allImages[src]().then(
			({ default: image }: { default: ImageMetadata }) => image,
		)

		return {
			fullImage,
			thumbnail,
		}
	})

	return await Promise.all(result)
}
