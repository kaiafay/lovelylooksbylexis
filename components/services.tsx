const BOOKING_URL = "https://lovelylooksbylexis.glossgenius.com/services";

const LASH_SERVICES = [
  {
    name: "Classic Lash Extensions",
    description:
      "A natural, lengthened look — one extension per natural lash for an elegant, everyday finish.",
    price: "From $120",
  },
  {
    name: "Classic Plus",
    description:
      "YY, W, Clover, and Fairy styles for added texture while keeping a natural, refined look.",
    price: "From $120",
  },
  {
    name: "Hybrid Lash Extensions",
    description:
      "The perfect blend of Classic and Volume for a soft, dimensional finish.",
    price: "From $120",
  },
  {
    name: "Volume Lash Extensions",
    description:
      "Handcrafted fans for a fuller, glamorous look with featherweight feel.",
    price: "From $130",
  },
  {
    name: "Mega Volume",
    description:
      "Maximum drama and density — bold, striking, and unforgettable.",
    price: "From $140",
  },
  {
    name: "Wet Set",
    description:
      "A sleek, spiky look that simulates fresh-from-the-shower lashes.",
    price: "From $120",
  },
  {
    name: "Lash Fills",
    description:
      "Maintenance appointments to keep your set looking full and fresh.",
    price: "From $30",
  },
];

const WAXING_SERVICES = [
  {
    name: "Facial Waxing",
    description:
      "Brows, lip, chin, and more — precise, clean, and smooth results.",
    price: "From $10",
  },
  {
    name: "Body Waxing",
    description: "Arms, armpits, legs — professional, thorough, and efficient.",
    price: "From $35",
  },
];

type Service = {
  name: string;
  description: string;
  price: string;
};

function ServiceMenu({
  title,
  services,
}: {
  title: string;
  services: Service[];
}) {
  return (
    <div>
      <h3 className="text-serif-label mb-6">{title}</h3>
      <ul className="divide-y divide-border">
        {services.map((service) => (
          <li key={service.name} className="py-6 first:pt-0 last:pb-0">
            <div className="flex items-baseline justify-between gap-6 mb-2">
              <h4 className="font-serif text-base font-normal tracking-wide text-foreground">
                {service.name}
              </h4>
              <p className="text-serif-data shrink-0">{service.price}</p>
            </div>
            <p className="font-sans text-xs text-muted-foreground leading-relaxed max-w-xl">
              {service.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <div className="scroll-reveal scroll-reveal--lift text-center mb-16">
          <p className="font-script text-5xl md:text-6xl text-foreground/80 mb-3">
            Services
          </p>
          <div
            className="w-10 h-px bg-foreground/25 mx-auto mb-5"
            aria-hidden="true"
          />
          <p className="font-sans text-sm text-muted-foreground tracking-wide">
            A full list of add-ons and fills is available at booking
          </p>
        </div>

        {/* Full menu — one reveal for all service content */}
        <div className="scroll-reveal scroll-reveal--fade flex flex-col gap-14">
          <ServiceMenu title="Lash Extensions & Fills" services={LASH_SERVICES} />
          <ServiceMenu title="Waxing" services={WAXING_SERVICES} />

          <div className="text-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-serif-cta px-10 py-4 bg-foreground text-background hover:opacity-85 transition-opacity"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
