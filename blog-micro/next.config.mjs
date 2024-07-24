// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack(config, options) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});

		return config;
	},
	output: "export", // This replaces the need for next export
};

export default nextConfig;
