import Image from 'next/image'

const HOURS = [
  { day: 'Monday', hours: '6 AM – 4 PM' },
  { day: 'Tuesday', hours: '6 AM – 4 PM' },
  { day: 'Wednesday', hours: '6 AM – 4 PM' },
  { day: 'Thursday', hours: 'Closed' },
  { day: 'Friday', hours: 'Closed' },
  { day: 'Saturday', hours: '6 AM – 4 PM' },
  { day: 'Sunday', hours: '6 AM – 4 PM' },
]

const POLICIES = [
  {
    title: 'No Deposit, No Appointment',
    body: [
      '$25 non-refundable deposit for full sets.',
      'Ensures your spot — fee goes towards your service cost.',
    ],
  },
  {
    title: 'Payment',
    body: [
      'I accept Venmo, Cash App, Apple Pay, cash, and card.',
      'A card must be on file — no exceptions.',
      'Venmo, Cash App, or Apple Pay processing fees are paid by the client.',
    ],
  },
  {
    title: '40% of Lashes at Time of Fill',
    body: [
      'Anything less than 40% of lashes remaining at the time of your fill will be charged accordingly, up to a full set price.',
    ],
  },
  {
    title: '10-Minute Late Policy',
    body: [
      'Please let me know if you\'re going to be late so I can plan my day accordingly.',
      'Arriving more than 10 minutes late may result in a $1-per-minute late fee, a shortened appointment, rescheduling, or cancellation if there isn\'t enough time to complete your service.',
    ],
  },
  {
    title: '24-Hour Cancellation & Reschedule',
    body: [
      'Life happens, and I completely understand! If you need to cancel or reschedule, please provide at least 24 hours\' notice.',
      'Appointments canceled or rescheduled with less than 24 hours\' notice will incur a $25 fee, as that time was reserved specifically for you and is often too short notice to fill.',
    ],
  },
  {
    title: 'No Call, No Shows',
    body: [
      'No-shows will be charged 100% of the service.',
      'You cannot book again until the balance is paid in full.',
    ],
  },
]

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-background">
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <div className="scroll-reveal scroll-reveal--lift text-center mb-16">
          <p className="font-script text-5xl md:text-6xl text-foreground/80 mb-3">Meet Lexis</p>
          <div className="w-10 h-px bg-foreground/25 mx-auto" aria-hidden="true" />
        </div>

        {/* Portrait + bio */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start mb-20">

          {/* Portrait — placeholder, swap for real Lexis photo */}
          {/* TODO: Replace with actual portrait photo of Lexis */}
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80"
              alt="Portrait of Lexis Matsen, cosmetologist and lash technician — placeholder"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Subtle border overlay */}
            <div className="absolute inset-4 border border-white/40 pointer-events-none" aria-hidden="true" />
          </div>

          {/* Bio + info */}
          <div className="flex flex-col gap-10">

            {/* Bio */}
            <div>
              <h2 className="sr-only">About Lexis</h2>
              <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                Hey there! My name&apos;s Lexis, I&apos;m so excited to get to meet all your beautiful faces
                and help you achieve your beauty goals! I&apos;m a cosmetologist who&apos;s been lashing for
                3 1/2 years, I also offer waxing of the face or body! Keep your eye out for new services
                to come!
              </p>
            </div>

            {/* Business hours */}
            <div>
              <h3 className="text-serif-label mb-5">
                Business Hours
              </h3>
              <dl className="divide-y divide-border">
                {HOURS.map(({ day, hours }) => (
                  <div key={day} className="flex justify-between py-2.5">
                    <dt className="font-sans text-xs text-foreground/80">{day}</dt>
                    <dd
                      className={`font-serif text-xs font-normal not-italic text-foreground/80 ${
                        hours === 'Closed' ? 'text-muted-foreground' : ''
                      }`}
                    >
                      {hours}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* Policies */}
        <div>
          <div className="scroll-reveal scroll-reveal--lift text-center mb-12">
            <h2 className="font-script text-5xl md:text-6xl text-foreground/80 mb-3">Policies</h2>
            <div className="w-10 h-px bg-foreground/25 mx-auto" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {POLICIES.map((policy) => (
              <article key={policy.title}>
                <h3 className="text-serif-label mb-4">
                  {policy.title}
                </h3>
                <div className="space-y-3">
                  {policy.body.map((paragraph) => (
                    <p key={paragraph} className="font-sans text-xs leading-relaxed text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
