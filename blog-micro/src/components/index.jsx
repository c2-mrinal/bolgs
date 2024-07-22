import React, { useState } from "react";
import { BentoCard, BentoGrid } from "../animation/Bento";
const blogData = [
	{
		name: "Understanding React Hooks",
		description:
			"An in-depth look at how React hooks work and how to use them effectively.An in-depth look at how React hooks work and how to use them effectively.An in-depth look at how React hooks work and how to use them effectively.",
		href: "/blogs/hooks-cheat-sheet",
		cta: "Go to Blog",
		background: "",
		className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
	},
	{
		name: "State Management with Redux",
		description: "Search through all your files in one place.",
		href: "/",
		cta: "Go to Blog",
		background: "",
		className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
	},
	{
		name: "Lifecycle of React",
		description: "Supports 100+ languages and counting.",
		href: "/",
		cta: "Go to Blog",
		background: <img className="absolute -right-20 -top-20 opacity-60" />,
		className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
	},
];
const carouselItems = [
	{
		src: "https://www.blogtyrant.com/wp-content/uploads/2019/08/blog-post-ideas.png",
		label: "First slide label",
		text: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
	},
	{
		src: "https://www.travelpayouts.com/blog/wp-content/uploads/2019/12/content-ideas.jpg",
		label: "Second slide label",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
	{
		src: "https://via.placeholder.com/800x400",
		label: "Third slide label",
		text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
	},
];

const Blog = () => (
	<>
		<div className="CardContainer">
			<BentoGrid className="lg:grid-rows-3">
				{blogData.map((feature) => (
					<BentoCard key={feature.name} {...feature} />
				))}
			</BentoGrid>
		</div>
	</>
);

export default Blog;
