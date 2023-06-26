import { CollectionEntry, getCollection } from "astro:content"

export async function getRelatedToolkits(toolkit: CollectionEntry<"toolkits">, count = 3) {
	// removing the current theme here makes sure a theme never recommends itself
	const otherToolkits = await getCollection("toolkits", (t) => t.slug !== toolkit.slug)

	const related: CollectionEntry<"toolkits">[] = []
	const relatedSlugs = new Set<string>()

	// check the markdown first, we can hard-code related themes
	for (const slug of toolkit.data.related) {
		const entry = otherToolkits.find((t) => t.slug === slug)

		if (entry) {
			related.push(entry)
			relatedSlugs.add(slug)
		}
	}

	// if necessary, grab more by the same author
	if (related.length < count) {
		for (const entry of otherToolkits) {
			// check for duplicates
			if (relatedSlugs.has(entry.slug)) {
				continue
			}

			if (entry.data.author.url === toolkit.data.author.url) {
				related.push(entry)
				relatedSlugs.add(entry.slug)
			}
		}
	}

	// finally, grab themes from the same category
	if (related.length < count) {
		for (const entry of otherToolkits) {
			// check for duplicates
			if (relatedSlugs.has(entry.slug)) {
				continue
			}

			if (entry.data.categories.some((c) => toolkit.data.categories.includes(c))) {
				related.push(entry)
				relatedSlugs.add(entry.slug)
			}
		}
	}

	return related.slice(0, count)
}
