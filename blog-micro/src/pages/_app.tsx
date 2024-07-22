import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "../styles/blog.css";
import "../styles/theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { ThemeProvider } from "@/common/theme/ThemeContext";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	);
}

export default MyApp;
