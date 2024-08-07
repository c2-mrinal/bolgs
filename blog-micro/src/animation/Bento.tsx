import { ReactNode } from "react";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { RightArrowIcon } from "../../public/Icons/common";
import { Button } from "react-bootstrap";
import DotPattern from "./DotPattern";

const BentoGrid = ({ children, className }: { children: ReactNode; className?: string }) => {
	return <div className={cn("grid w-full auto-rows-[22rem] grid-cols-3 gap-4", className)}>{children}</div>;
};

const BentoCard = ({
	name,
	className,
	background,
	description,
	href,
	cta,
}: {
	name: string;
	className: string;
	background: ReactNode;
	description: string;
	href: string;
	cta: string;
}) => (
	<div
		key={name}
		className={cn(
			"group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
			// light styles
			// "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
			// dark styles
			"transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
			className
		)}
	>
		<div>
			{background ? (
				background
			) : (
				<DotPattern
					width={20}
					height={20}
					cx={1}
					cy={1}
					cr={1}
					className={cn("[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ")}
				/>
			)}
		</div>
		<div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
			{/* <Icon className="h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" /> */}
			<h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300 edu-capital-fonts">{name}</h3>
			<p className="max-w-lg text-neutral-400 noto-fonts ">{description}</p>
		</div>

		<div
			className={cn(
				"pointer-events-none absolute bottom-0 flex w-full translate-y-20 transform-gpu flex-row items-center p-4  transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
			)}
		>
			<Link className="" href={href} passHref>
				<Button variant="light" className="pointer-events-auto d-flex text-center">
					{cta}
					<RightArrowIcon fill="black" height={30} width={30} />
				</Button>
			</Link>
		</div>
		<div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
	</div>
);

export { BentoCard, BentoGrid };
