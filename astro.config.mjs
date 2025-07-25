// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import {
	transformerNotationDiff,
	transformerNotationFocus,
	transformerMetaHighlight,
} from '@shikijs/transformers';
// @ts-ignore
import remarkCodeTitles from 'remark-code-titles';
import remarkMath from 'remark-math';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',

	integrations: [mdx(), sitemap()],

	markdown: {
		syntaxHighlight: 'shiki',
		remarkPlugins: [remarkCodeTitles, remarkMath],
		// rehypePlugins: [rehypeKatex],
		shikiConfig: {
			themes: {
				light: 'github-light',
				dark: 'github-dark',
			},
			transformers: [
				transformerNotationDiff(),
				transformerNotationFocus(),
				transformerMetaHighlight(),
			],
		},
	},
});
