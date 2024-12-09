import type { ReactNode } from "react";

type Props = {
	children: ReactNode;
};

export function Icon({ children }: Props) {
	return (
		<div className="bg-primary border border-text-primary rounded-lg w-10 h-10 flex justify-center items-center">
			{children}
		</div>
	);
}
