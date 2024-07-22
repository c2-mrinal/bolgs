import ThemeToggleButton from "@/common/theme/ThemeToggleButton.";

const Layout = ({ children }: { children: React.ReactNode }) => (
	<>
		<main className="container mt-4">
			<ThemeToggleButton />
			{children}
		</main>
	</>
);

export default Layout;
