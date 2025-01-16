import GameOfLife from "@hhs/components/custom/game-of-life";
import { AsciiLogo } from "@hhs/components/custom/Logo";

function Background() {
	return (
		<>
			<AsciiLogo
				className="absolute right-[calc((100%-56rem)/2)] bottom-10 -z-10 p-2 opacity-10 hidden md:block"
			/>
			<GameOfLife />
		</>
	);
}

export default Background;
