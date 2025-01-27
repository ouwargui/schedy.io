import { ArchiveIcon } from '@/assets/icons/Archive'
import { ClockIcon } from '@/assets/icons/Clock'
import { LightningIcon } from '@/assets/icons/Lightning'
import { MixerHorizontalIcon } from '@/assets/icons/Mixer'
import { DetailsCard } from '@/components/composed/details-card/Index'

export function Details() {
  return (
    <section className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 w-3/4 gap-y-10 gap-x-40">
      <DetailsCard.Root>
        <DetailsCard.Icon>
          <ClockIcon />
        </DetailsCard.Icon>
        <DetailsCard.Title>Saving Your Time</DetailsCard.Title>
        <DetailsCard.Description>
          You don&apos;t need open your calendar to check your schedule,
          we&apos;ll do it without compromising your space.
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
  )
}
