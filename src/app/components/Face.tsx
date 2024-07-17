import type { ComponentProps } from "react";

interface FaceProps extends ComponentProps<"svg"> {}
export function Face(props: FaceProps) {
	return (
		// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
		<svg
			{...props}
			viewBox="0 0 319 96"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M317.786 30.8513C317.786 30.8513 314.952 49.3276 302.989 53.0848C302.989 53.0848 297.395 54.7711 291.719 52.5477C291.719 52.5477 286.199 50.4008 282.596 45.4174C282.596 45.4174 279.144 40.5871 278.459 33.3044C278.459 33.3044 277.944 28.2438 278.687 20.0406C278.687 20.0406 279.836 14.3675 282.824 9.76758C282.824 9.76758 286.196 4.55387 290.951 2.40747C290.951 2.40747 294.86 0.87375 299.921 1.25775C299.921 1.25775 304.824 1.64063 308.508 3.55777C308.508 3.55777 319.78 12.6808 317.786 30.8513ZM185.917 89.9611C185.917 89.9611 176.794 96.0945 163.991 95.6342C163.991 95.6342 152.567 95.2513 141.911 90.0376C141.911 90.0376 136.391 87.2782 133.86 81.6812C133.86 81.6812 131.409 76.3144 132.249 69.6441C132.249 69.6441 132.94 64.5841 135.472 60.444C135.472 60.444 138.386 55.9206 142.832 53.6978C142.832 53.6978 151.419 48.0241 163.532 48.2544C163.532 48.2544 175.338 48.4887 184.462 53.9276C184.462 53.9276 188.753 55.9207 191.668 60.1376C191.668 60.1376 194.503 64.2781 195.12 69.1845C195.12 69.1845 195.885 75.5477 193.434 80.9912C193.434 80.9912 191.054 86.4342 185.917 89.9611ZM14.646 1.26056C14.646 1.26056 19.3203 -0.656011 24.766 0.723418C24.766 0.723418 29.366 1.87311 33.6597 5.17026C33.6597 5.17026 38.5683 10.384 39.8694 18.7403C39.8694 18.7403 40.8637 25.1801 39.8694 34.3036C39.8694 34.3036 38.8751 40.1307 36.2637 44.5007C36.2637 44.5007 33.0466 49.7139 28.0609 51.8608C28.0609 51.8608 22.234 53.854 16.3306 52.9334C16.3306 52.9334 9.96771 51.8608 6.134 47.7202C6.134 47.7202 0.922574 41.5101 0.154002 31.8499C0.154002 31.8499 -0.537425 23.4169 2.22258 14.4466C2.22258 14.4466 3.67972 10.1529 6.97686 6.54971C6.97686 6.54971 10.5054 2.56341 14.646 1.26056Z" />
		</svg>
	);
}
