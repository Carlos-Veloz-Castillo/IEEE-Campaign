"use client"

import { useState } from "react"
import Link from "next/link"

interface GalleryItem {
  id: string
  src: string
  alt: string
  title: string
  description: string
}

const galleryItems: GalleryItem[] = [
  {
    id: "blueskies",
    src: "/IEEE-Campaign/images/repair-team.jpg",
    alt: "Gateway to Blue Skies RepAir team",
    title: "Gateway to Blue Skies: RepAir",
    description:
      "Managed a 6-person team building a technical proposal for NASA's Gateway to Blue Skies competition. Split the work across atmospheric research, sensor selection, and data analysis — ran weekly check-ins, caught scope issues early, and got it across the finish line.",
  },
  {
    id: "workshop",
    src: "/IEEE-Campaign/images/scout-workshop.jpg",
    alt: "Nuclear Science Merit Badge workshop",
    title: "Nuclear Science Merit Badge Workshop",
    description:
      "Currently coordinating a multi station workshop under IEEE-HKN Epsilon Mu for ~20 Boy Scouts at UTA. Stations include a cloud chamber, Geiger counter lab, half-life dice simulation, and an ESP32-based radiation detector scavenger hunt. Translating nuclear physics into something an 11-year-old can get excited about.",
  },
  {
    id: "risingstars",
    src: "/IEEE-Campaign/images/rising-stars.jpg",
    alt: "IEEE Rising Stars R6 Las Vegas",
    title: "IEEE Rising Stars — R6 Las Vegas",
    description:
      "Attended Rising Stars 2026 in Region 6, Las Vegas. This experience is a big part of why I'm running — every IEEE member deserves the chance to travel, network, and experience something like this. That's not a luxury; it should be the standard.",
  },
]

function ImageModal({
  item,
  onClose,
}: {
  item: GalleryItem
  onClose: () => void
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full bg-background rounded-lg overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-background/90 rounded-full hover:bg-muted transition-colors text-foreground text-xl leading-none"
          aria-label="Close modal"
        >
          &times;
        </button>
        <div className="relative aspect-video bg-muted">
          <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
        </div>
        <div className="p-6">
          <h2 className="text-xl font-semibold text-foreground mb-3">{item.title}</h2>
          <p className="text-muted-foreground leading-relaxed">{item.description}</p>
        </div>
      </div>
    </div>
  )
}

export default function CampaignPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)

  return (
    <main className="min-h-screen bg-background">
      {/* Video Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src="/IEEE-Campaign/images/IEEE_Candidate_Still_Background.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/0XS-XNJl0uU?autoplay=1&mute=1&loop=1&playlist=0XS-XNJl0uU&controls=0&showinfo=0&modestbranding=1&playsinline=1&rel=0&disablekb=1"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] min-w-[100vw] min-h-[100vh] pointer-events-none"
            allow="autoplay; encrypted-media"
            title="Background video"
          />
        </div>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6 py-20">
          <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white/30 mx-auto mb-6">
            <img src="/IEEE-Campaign/images/headshot.jpg" alt="Carlos Veloz" className="w-full h-full object-cover" />
          </div>
          <p className="text-lg font-semibold text-blue-300 mb-3 tracking-wide uppercase">IEEE Chair Candidate · 2026–2027</p>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">Carlos Veloz</h1>
          <p className="text-lg text-gray-200 max-w-xl mx-auto leading-relaxed">
            Larger events. More funding. Interesting collaborations. Let&apos;s make IEEE at UTA a standout chapter.
          </p>
          <div className="flex justify-center gap-6 mt-8">
            <Link href="#about" className="text-base font-bold text-white hover:text-blue-300 transition-colors">About</Link>
            <Link href="#gallery" className="text-base font-bold text-white hover:text-blue-300 transition-colors">Gallery</Link>
            <Link href="#vision" className="text-base font-bold text-white hover:text-blue-300 transition-colors">Vision</Link>
            <Link href="#contact" className="text-base font-bold text-white hover:text-blue-300 transition-colors">Contact</Link>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-2xl px-6 py-12">
        {/* About */}
        <section id="about" className="mb-12 scroll-mt-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4 pb-2 border-b border-border">About Me</h2>
          <div className="space-y-4 text-foreground leading-relaxed">
            <p>
              I&apos;m Carlos — senior Mechanical Engineering student at UTA with minors in Nuclear Engineering and Physics.
              I have been an IEEE member for about a year. In that time, I worked my way from member to a Project Manager in GRSS. 
              My interests live at the intersection of controls systems and nuclear power, a niche corner of
              engineering.
            </p>
            <p>
              Outside of school, I paint houses for Veloz Coatings, work on cars, and tinker with random household electronics.
            </p>
            <p>
              I am involved with ANS, Engineers Without Borders, and ASME. Having connections with multiple engineering
              communities gives me a wider view of what students at UTA actually need — and where the gaps are that IEEE
              can fill.
            </p>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="mb-12 scroll-mt-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4 pb-2 border-b border-border">Current IEEE Contributions</h2>
          <p className="text-muted-foreground mb-6">Click on any image to learn more.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {galleryItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group relative aspect-square overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 bg-muted"
              >
                <img src={item.src} alt={item.alt} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                  <span className="p-3 text-sm font-sans font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.title}</span>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4 pb-2 border-b border-border">Experience</h2>
          <ul className="space-y-4">
            <li className="flex gap-4">
              <span className="text-sm font-sans text-muted-foreground w-28 shrink-0">Nov 2025 – Mar 2026</span>
              <div>
                <p className="font-medium text-foreground">Project Manager — Gateway to Blue Skies: RepAir</p>
                <p className="text-muted-foreground text-sm">IEEE GRSS · NASA Competition</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-sm font-sans text-muted-foreground w-28 shrink-0">Spring 2026</span>
              <div>
                <p className="font-medium text-foreground">Workshop Lead — Nuclear Science Merit Badge</p>
                <p className="text-muted-foreground text-sm">IEEE-HKN Epsilon Mu · UTA</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-sm font-sans text-muted-foreground w-28 shrink-0">May 2024 – Now</span>
              <div>
                <p className="font-medium text-foreground">Residential Painter — Veloz Coatings</p>
                <p className="text-muted-foreground text-sm">Residential Painting · DFW Area</p>
              </div>
            </li>
          </ul>

          <div className="mt-6 pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground font-medium mb-2">Also involved in:</p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-3 py-1 rounded-full border border-border text-muted-foreground">ANS — Founding Member, UTA Chapter</span>
              <span className="text-xs px-3 py-1 rounded-full border border-border text-muted-foreground">Engineers Without Borders — Project &amp; Fundraising</span>
              <span className="text-xs px-3 py-1 rounded-full border border-border text-muted-foreground">ASME — Member</span>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section id="vision" className="mb-12 scroll-mt-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4 pb-2 border-b border-border">What I Want to Do</h2>
          <div className="space-y-6 text-foreground leading-relaxed">
            <p>
              My goal is simple: make IEEE the org people actually want to be part of. That means bigger events that put us
              on the map, real funding so members can travel to conferences, and collaborations that break us out of our bubble.
            </p>

            <div className="pl-4 border-l-2 border-primary">
              <h3 className="font-semibold text-foreground mb-2">Flagship Events</h3>
              <p className="text-muted-foreground">
                I want IEEE to host large-scale events — starting with a hackathon — that bring visibility to the chapter
                and give members something real to be part of. The technical societies under IEEE (like GRSS, PES, etc.)
                should be running their own smaller workshops and technical deep-dives. Big tent events bring people in;
                the societies keep them engaged.
              </p>
            </div>

            <div className="pl-4 border-l-2 border-primary">
              <h3 className="font-semibold text-foreground mb-2">Conference Funding</h3>
              <p className="text-muted-foreground">
                I went to Rising Stars 2026 in Region 6, Las Vegas. It was one of the best experiences I&apos;ve had in
                college — networking, learning, and having an amazing time traveling with my friends.
                Every IEEE member should have a shot at that. I want to build a real funding pipeline — money from IEEE,
                from UTA, and from industry sponsors — so more people can attend large-scale conferences and come back
                better for it.
              </p>
            </div>

            <div className="pl-4 border-l-2 border-primary">
              <h3 className="font-semibold text-foreground mb-2">Cross-Org Collaborations</h3>
              <p className="text-muted-foreground">
                Engineers need exposure beyond their own major. Students however want to maintain a sense of community. The way you
                get both is by hosting collaborative events with other orgs on campus. Our members get to interact with
                different majors and a wider range of students, while still coming home to IEEE. 
              </p>
            </div>
          </div>
        </section>

        {/* Why Me */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4 pb-2 border-b border-border">Why Vote for Me</h2>
          <div className="space-y-4 text-foreground leading-relaxed">
            <p>
              In one year, I went from member to managing a NASA competition team. I helped establish the GRSS election
              process alongside the officer board. Right now I&apos;m designing a workshop under IEEE-HKN where I&apos;ll
              be responsible for 20 scouts. I didn&apos;t wait for a title to start contributing to IEEE. I started 
              contributing before I had a title — that&apos;s not going to change with one.
            </p>
            <p>
              If elected, I plan to earn it every day. I&apos;m going to
              show up, put in the work, and make sure that by the end of my term, IEEE at UTA looks noticeably different
              than it does today. If that sounds like something you want to see, I&apos;d appreciate your vote.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mb-12 scroll-mt-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4 pb-2 border-b border-border">Get in Touch</h2>
          <p className="text-muted-foreground mb-6">Got questions, ideas, or just want to talk? Reach out.</p>
          <div className="flex flex-wrap gap-4">
            <a href="mailto:cv3108@mavs.uta.edu" className="inline-flex items-center gap-2 text-sm font-sans text-primary hover:underline">
              ✉ cv3108@mavs.uta.edu
            </a>
            <a href="https://www.linkedin.com/in/carlos-veloz-castillo-069693336/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-sans text-primary hover:underline">
              LinkedIn
            </a>
          </div>
        </section>
      </article>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-2xl px-6 py-6">
          <p className="text-sm font-sans text-muted-foreground text-center">Carlos Veloz for UTA IEEE Chair &middot; 2026</p>
        </div>
      </footer>

      {selectedImage && (
        <ImageModal item={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </main>
  )
}