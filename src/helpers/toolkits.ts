import xss from "xss"

export const sanitizeToolkitDescription = (text: string) =>
	xss(text, {
		whiteList: {
			p: [],
			strong: [],
			br: [],
			em: [],
			u: [],
			ol: [],
			ul: [],
			li: [],
			blockquote: [],
			pre: [],
			h2: [],
			h3: [],
			a: ["href"],
		},
	})
