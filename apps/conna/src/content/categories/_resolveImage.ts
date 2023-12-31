import type { ImageMetadata } from "@astrojs/image/dist/vite-plugin-astro-image.js"
import { CollectionEntry } from "astro:content"

const allImages = import.meta.glob<{ default: ImageMetadata }>(
	"/src/content/categories/_images/*.{png,jpg,jpeg,webp}",
)

export async function resolveImage(entry: CollectionEntry<"categories">) {
	if (!entry.data.image) {
		return undefined
	}

	if (!(entry.data.image in allImages)) {
		throw new Error(
			`[categories] Image for "${entry.data.title}" not found! Provided: "${entry.data.image}", is there a typo?`,
		)
	}

	const { default: image } = await allImages[entry.data.image]()

	return image
}
