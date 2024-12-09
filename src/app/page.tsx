/* eslint-disable @next/next/no-img-element */
import { DetailsCard } from "@/components/composed/details-card/Index";
import { ArchiveIcon } from "@/assets/icons/Archive";
import Image from "next/image";
import { ClockIcon } from "@/assets/icons/Clock";
import { LightningIcon } from "@/assets/icons/Lightning";
import { MixerHorizontalIcon } from "@/assets/icons/Mixer";

export default function Home() {
	return (
		<div className="w-screen flex flex-col items-center justify-center gap-20 mt-28 mb-14">
			<header>
				<div className="flex flex-col gap-4 items-center">
					<Image
						src="/logo.png"
						alt="logo"
						width={100}
						height={100}
						className="rounded-3xl"
					/>
					<h1 className="text-xl sm:text-2xl md:text-4xl font-semibold text-center text-text-primary">
						Schedy.io
					</h1>
					<h2 className="text-xl sm:text-xl md:text-2xl font-semibold text-text-shade text-center">
						You work.{" "}
						<span className="underline">We keep the eye in your schedule.</span>
					</h2>
				</div>
			</header>
			<section className="flex justify-center">
				<img
					src="/schedy.png"
					alt="Schedy at work"
					className="w-3/4 h-auto rounded-t-3xl block border-b border-b-text-primary"
				/>
			</section>
			<section className="grid grid-cols-2 grid-rows-2 w-3/4 gap-y-10 gap-x-40">
				<DetailsCard.Root>
					<DetailsCard.Icon>
						<ClockIcon />
					</DetailsCard.Icon>
					<DetailsCard.Title>Saving Your Time</DetailsCard.Title>
					<DetailsCard.Description>
						You don&apos;t need open your calendar to check your schedule, we
						will do it, without compromising your space.
					</DetailsCard.Description>
				</DetailsCard.Root>

				<DetailsCard.Root>
					<DetailsCard.Icon>
						<ArchiveIcon />
					</DetailsCard.Icon>
					<DetailsCard.Title>Batteries Included</DetailsCard.Title>
					<DetailsCard.Description>
						No need for 10-step configurations, just install it, log in, and you
						are good to go.
					</DetailsCard.Description>
				</DetailsCard.Root>

				<DetailsCard.Root>
					<DetailsCard.Icon>
						<LightningIcon />
					</DetailsCard.Icon>
					<DetailsCard.Title>Lightweight</DetailsCard.Title>
					<DetailsCard.Description>
						Built for the best performance, light and fast.
					</DetailsCard.Description>
				</DetailsCard.Root>

				<DetailsCard.Root>
					<DetailsCard.Icon>
						<MixerHorizontalIcon />
					</DetailsCard.Icon>
					<DetailsCard.Title>Customizable</DetailsCard.Title>
					<DetailsCard.Description>
						Customize and use it the way you want.
					</DetailsCard.Description>
				</DetailsCard.Root>
			</section>
			<section className="flex flex-col items-center justify-center gap-2">
				<div className="rounded-full flex gap-4 items-center pl-4 bg-text-shade shadow-bright">
					<span className="text-text-primary font-semibold">Sounds good?</span>
					<a
						href="*"
						className="px-6 py-2 bg-text-primary hover:bg-text-primary-shade text-primary rounded-full uppercase text-sm font-bold transition-colors"
					>
						Download now
					</a>
				</div>
				<p className="text-sm text-text-shade">Required MacOS 14+</p>
			</section>
			<aside>
				<p className="text-text-primary text-sm">
					&copy; Schedy Team - {new Date().getFullYear()}
				</p>
			</aside>
		</div>
	);
}
