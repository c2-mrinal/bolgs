"use client"
import { ThemeProvider } from "@/common/theme/ThemeContext";
import  HooksCheatSheet  from "../components/HooksCheatSheet";
import Blog from "../components/index"
import ThemeToggleButton from "@/common/theme/ThemeToggleButton.";
export default function Home() {
  return (
    <ThemeProvider>
    <main className="">
      <ThemeToggleButton/>
      {/* <Blog/> */}
      <HooksCheatSheet/>
    </main>
    </ThemeProvider>
  );
}
