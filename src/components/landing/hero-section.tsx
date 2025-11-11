import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HeroHeader } from './header'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'

export default function HeroSection() {
    return (
      <>
        <HeroHeader />
        <main className="overflow-x-hidden">
          <section>
            <div className="py-24 md:pb-32 lg:pb-36 lg:pt-72">
              <div className="relative mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
                <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
                  <h1 className="mt-8 max-w-2xl text-balance text-5xl md:text-6xl lg:mt-16 xl:text-7xl">
                    Communicate better with FleetJam
                  </h1>
                  <p className="mt-8 max-w-2xl text-balance text-lg">
                    Your own AI-ready powerhouse for team communication.
                  </p>

                  <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                    <Button
                      asChild
                      size="lg"
                      className="h-12 rounded-full pl-5 pr-3 text-base"
                    >
                      <Link href="#link">
                        <span className="text-nowrap">Start Your Journey</span>
                        <ChevronRight className="ml-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="hidden md:block absolute inset-1 -z-10 overflow-hidden rounded-3xl border lg:aspect-video lg:rounded-[3rem] border-white/5">
                <video
                  autoPlay
                  loop
                  muted
                  className="size-full object-contain opacity-100"
                  src="/hero-vid.mp4"
                ></video>
              </div>
            </div>
          </section>
          <section className="bg-background pb-2">
            <div className="group relative m-auto max-w-7xl px-6">
              <div className="flex flex-col items-center md:flex-row">
                <div className="md:max-w-44 md:border-r md:pr-6">
                  <p className="text-end text-sm">Built using the best</p>
                </div>
                <div className="relative py-6 md:w-[calc(100%-11rem)]">
                  <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
                    <div className="flex">
                      <Image
                        className="mx-auto h-5 w-fit dark:invert"
                        src="/arcjet.png"
                        alt="Arcjet Logo"
                        height="20"
                        width={20}
                      />
                    </div>

                    <div className="flex">
                      <Image
                        className="mx-auto h-4 w-fit dark:invert"
                        src="/kinde.png"
                        alt="Kinde Logo"
                        height="16"
                        width={16}
                      />
                    </div>
                    <div className="flex">
                      <Image
                        className="mx-auto h-5 w-fit dark:invert"
                        src="/vercel.png"
                        alt="Vercel Logo"
                        height="20"
                        width={20}
                      />
                    </div>
                    <div className="flex">
                      <Image
                        className="mx-auto h-5 w-fit"
                        src="/orpc.png"
                        alt="Orpc Logo"
                        height="20"
                        width={20}
                      />
                    </div>
                    <div className="flex">
                      <Image
                        className="mx-auto h-4 w-fit dark:invert"
                        src="/prisma.png"
                        alt="Prisma Logo"
                        height="28"
                        width={28}
                      />
                    </div>
                    <div className="flex">
                      <Image
                        className="mx-auto h-7 w-fit"
                        src="/motion.png"
                        alt="Motion Logo"
                        height="28"
                        width={28}
                      />
                    </div>

                    <div className="flex">
                      <Image
                        className="mx-auto h-6 w-fit"
                        src="/neon.png"
                        alt="Neon Logo"
                        height="24"
                        width={24}
                      />
                    </div>
                  </InfiniteSlider>

                  <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                  <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                  <ProgressiveBlur
                    className="pointer-events-none absolute left-0 top-0 h-full w-20"
                    direction="left"
                    blurIntensity={1}
                  />
                  <ProgressiveBlur
                    className="pointer-events-none absolute right-0 top-0 h-full w-20"
                    direction="right"
                    blurIntensity={1}
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
    );
}
