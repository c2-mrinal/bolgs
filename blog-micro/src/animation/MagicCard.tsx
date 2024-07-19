"use client";

import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

import { cn } from "@/lib/utils";

export interface MagicCardProps {
	children: React.ReactNode;
	className?: string;
	gradientSize?: number;
	gradientColor?: string;
	gradientOpacity?: number;
}

export function MagicCard({ children, className = "", gradientSize = 100, gradientColor = "#262626" }: MagicCardProps) {
	const cardRef = useRef<HTMLDivElement>(null);
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	const background = useMotionTemplate`
    radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 10%)
  `;

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (cardRef.current) {
			const { left, top } = cardRef.current.getBoundingClientRect();
			mouseX.set(e.clientX - left);
			mouseY.set(e.clientY - top);
			// console.log(e.clientX, e.clientY, left, top);
		}
	};

	return (
		<div
			ref={cardRef}
			onMouseMove={handleMouseMove}
			className={cn(
				"group relative flex size-full overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-900 border text-black dark:text-white",
				className
			)}
		>
			<div className="relative z-10">{children}</div>
			<motion.div
				className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
				style={{ background }}
			/>
		</div>
	);
}
