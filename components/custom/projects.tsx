import * as React from "react"
import { cn } from "@hhs/utils/cn"
import { ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
	<div ref={ref} className={cn("rounded-lg border border-border bg-background text-foreground shadow transition-colors hover:bg-muted/50", className)} {...props} />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
	<div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => (
	<h3 ref={ref} className={cn("text-2xl font-semibold tracking-tight text-foreground", className)} {...props} />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(({ className, ...props }, ref) => (
	<p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
))
CardDescription.displayName = "CardDescription"

interface ProjectCardProps {
	title: string
	description: string
	url: string
	isShaking?: boolean
}

const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(({
	title,
	description,
	url,
	isShaking = false
}, ref) => {
	return (
		<>
			<style jsx global>{`
				@keyframes shake {
					0%, 100% { transform: rotate(0deg); }
					25% { transform: rotate(-1deg); }
					75% { transform: rotate(1deg); }
				}
				.shake-animation {
					animation: shake 0.5s ease-in-out;
				}
			`}</style>
			<a href={url} target="_blank" rel="noopener noreferrer"
				className={cn(
					"block transform no-underline transition-all duration-200 hover:-translate-y-1 hover:translate-x-1",
					isShaking && "shake-animation"
				)}
			>
				<Card ref={ref}>
					<CardHeader>
						<CardTitle className="text-xl">{title}</CardTitle>
						<CardDescription>{description}</CardDescription>
					</CardHeader>
				</Card>
			</a>
		</>
	)
})

ProjectCard.displayName = "ProjectCard"

interface ProjectGridProps {
	children: React.ReactNode
}

const ProjectGrid = React.forwardRef<HTMLDivElement, ProjectGridProps>(({ children }, ref) => {
	const [shakingIndex, setShakingIndex] = React.useState<number>(0);
	const childrenArray = React.Children.toArray(children);

	React.useEffect(() => {
		const interval = setInterval(() => {
			const nextIndex = Math.floor(Math.random() * childrenArray.length);
			setShakingIndex(nextIndex === shakingIndex ? (nextIndex + 1) % childrenArray.length : nextIndex);
		}, 3000);

		return () => clearInterval(interval);
	}, [childrenArray.length, shakingIndex]);

	return (
		<div ref={ref} className="flex flex-col space-y-4">
			{React.Children.map(children, (child, index) => {
				if (React.isValidElement<ProjectCardProps>(child)) {
					return React.cloneElement(child, {
						...child.props,
						isShaking: index === shakingIndex
					});
				}
				return child;
			})}
		</div>
	)
})

ProjectGrid.displayName = "ProjectGrid"

interface CollapseProps {
	title: string
	children: React.ReactNode
	defaultOpen?: boolean
}

const Collapse = React.forwardRef<HTMLDivElement, CollapseProps>(({
	title,
	children,
	defaultOpen = false
}, ref) => {
	const [isOpen, setIsOpen] = React.useState(defaultOpen)

	return (
		<div ref={ref} className="w-full">
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="flex w-full items-center justify-between rounded-lg border border-border bg-background p-4 text-left text-lg font-semibold transition-colors hover:bg-muted/50"
			>
				{title}
				<motion.div
					animate={{ rotate: isOpen ? 90 : 0, x: isOpen ? [0, -10, 10, -10, 10, 0] : 0 }}
					transition={{ duration: 0.3 }}
				>
					<ChevronRight className="h-5 w-5 transition-transform" />
				</motion.div>
			</button>
			<div className={cn(
				"grid transition-all",
				isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
			)}>
				<div className="overflow-hidden">
					<div className="pt-4">
						{children}
					</div>
				</div>
			</div>
		</div>
	)
})

Collapse.displayName = "Collapse"

export { ProjectCard, ProjectGrid, Collapse } 