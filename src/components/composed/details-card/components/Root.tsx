import type { ReactNode } from "react";

type Props = {
	children: ReactNode;
};

export function Root({ children }: Props) {
	return <div className="flex-1 flex flex-col gap-1">{children}</div>;
}
