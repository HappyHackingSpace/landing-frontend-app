"use client"

import Floating, { FloatingElement } from "../../components/fancy/parallax-floating"
import LandingLayoutView from "@hhs/layouts/landing-layout"
import { motion, stagger, useAnimate } from "motion/react"
import * as React from "react"
import Image from "next/image"

interface StickerData {
	src: string
	alt: string
	// Class name for positioning: top-1/2 left-[15%]
	// +--------------------------------------------------+
	// |                                                  |
	// |                                                  |
	// |                                                  |
	// |        [Element]                                 |  <-- Positioned at 1/2 down (540px)
	// |                                                  |
	// |                                                  |
	// +--------------------------------------------------+
	//         ^
	//         |
	//   15% from the left (288px)
	className: string
	depth: number
	scale: number
}

const STICKERS: StickerData[] = [
	{
		src: "/stickers/pixelated.avif",
		alt: "Pixelated HHS Sticker",
		className: "top-1/3 left-[40%] rounded-xl cursor-pointer",
		depth: Math.random() * 2 + 0.5,
		scale: 2.5
	},
	{
		src: "/stickers/Minecraft.avif",
		alt: "Minecraft HHS Sticker",
		className: "top-1/2 left-[15%] rounded-xl cursor-pointer",
		depth: Math.random() * 2 + 0.5,
		scale: 1.3
	},
	{
		src: "/stickers/FRENZHHS.avif",
		alt: "Frenz HHS Sticker",
		className: "top-1/4 right-[20%] rounded-xl cursor-pointer",
		depth: Math.random() * 2 + 0.5,
		scale: 4
	},
	{
		src: "/stickers/FANTAHHS.avif",
		alt: "Fanta HHS Sticker",
		className: "top-2/3 left-[60%] rounded-xl cursor-pointer",
		depth: Math.random() * 2 + 0.5,
		scale: 2.5
	},
	{
		src: "/stickers/BELIEVEIT-01.avif",
		alt: "Believe It HHS Sticker",
		className: "top-1/4 left-[10%] rounded-xl cursor-pointer",
		depth: Math.random() * 2 + 0.5,
		scale: 6
	}
]

const StickersPage: React.FC = () => {
	const [scope, animate] = useAnimate()

	React.useEffect(() => {
		animate("div", { opacity: [0, 1] }, { duration: 0.2, delay: stagger(0.08) })
	}, [animate])

	const renderStickers = React.useMemo(() =>
		STICKERS.map((sticker, index) => (
			<FloatingElement
				key={index}
				className={sticker.className}
				depth={sticker.depth}
			>
				<motion.div
					className="w-16 h-16 sm:w-32 sm:h-32 duration-200 cursor-pointer transition-transform relative"
					initial={{ scale: sticker.scale }}
					animate={{ scale: sticker.scale }}
					whileHover={{
						scale: sticker.scale * 1.1,
						transition: { duration: 0.2 }
					}}
				>
					<Image
						src={sticker.src}
						alt={sticker.alt}
						fill
						className="object-contain"
					/>
				</motion.div>
			</FloatingElement>
		)), [])

	return (
		<LandingLayoutView>
			<div className="absolute inset-0 overflow-hidden">
				<div className="w-full" ref={scope}>
					<Floating className="" sensitivity={2}>
						{renderStickers}
					</Floating>
					<div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-50">
						<motion.div
							className="text-center space-y-4 items-center flex flex-col"
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.88, delay: 0.5 }}
						>
						</motion.div>
					</div>
				</div>
			</div>
		</LandingLayoutView>
	)
}

export default StickersPage;
