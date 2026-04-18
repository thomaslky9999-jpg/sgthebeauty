import React, { useMemo, useState } from "react";

const services = [
  { name: "Classic Gel Mani", price: "$20", time: "60 min", desc: "Clean, glossy and timeless." },
  { name: "Express Gel Mani", price: "$18", time: "45 min", desc: "Quick refresh for busy days." },
  { name: "Classic Gel Pedi", price: "$20", time: "60 min", desc: "Polished, neat and comfortable." },
  { name: "Express Gel Pedi", price: "$20", time: "45 min", desc: "Fast tidy-up with shine." },
  { name: "Gel Mani + Design", price: "$40", time: "90 min", desc: "Custom design for a standout look." },
  { name: "Gel Mani + Extension + Design", price: "$50", time: "120 min", desc: "Full transformation with art and shape." },
  { name: "Eyelash Extensions", price: "From $XX", time: "Consult", desc: "Soft, wispy or fuller lash looks." },
  { name: "Removal", price: "$15", time: "30 min", desc: "Gentle and professional removal." },
];

const promos = [
  "10% off for first-time customers",
  "15% off when you come with a friend",
  "15% off lash add-on with selected services",
  "Complimentary removal with a new set done here",
];

const gallery = [
  {
    title: "Logo",
    subtitle: "Lash.Nail Salon",
    image:
      "Logo.jpg",
  },
  {
    title: "Minimal Nude Elegance",
    subtitle: "Clean luxury everyday look",
    image:
      "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Soft Lash Finish",
    subtitle: "Lightweight flutter effect",
    image:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80",
  },
];

const testimonials = [
  {
    name: "Jasmine",
    text: "My nails were neat, glossy and lasted so well. Super happy with the finish.",
  },
  {
    name: "Alicia",
    text: "Very friendly service and transparent pricing. The design came out exactly how I wanted.",
  },
  {
    name: "Mei",
    text: "Love the convenience near Redhill and the lashes looked soft and natural.",
  },
];

export default function App() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "Classic Gel Mani",
    date: "",
    time: "",
    notes: "",
  });

  const whatsappNumber = "6588292998";
  const instagramUrl = "https://instagram.com/sgthebeauty";
  const mapsUrl =
    "https://maps.google.com/?q=Link%20(THM)%20Building%2C%208%20Chang%20Charn%20Road%2C%20Singapore%20159637";

  const message = useMemo(() => {
    return encodeURIComponent(
      `Hi SGTHEBEAUTY! I would like to book an appointment.\n\n` +
        `Name: ${form.name || "-"}\n` +
        `Phone: ${form.phone || "-"}\n` +
        `Service: ${form.service || "-"}\n` +
        `Date: ${form.date || "-"}\n` +
        `Time: ${form.time || "-"}\n` +
        `Notes: ${form.notes || "-"}`
    );
  }, [form]);

  const inputClass =
    "w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100";

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7fbf8] via-white to-[#f7f3ef] text-stone-800">
      <header className="sticky top-0 z-30 border-b border-white/50 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-xl font-semibold tracking-wide">SGTHEBEAUTY</div>
            <div className="text-xs text-stone-500">Manicure & eyelash beauty studio</div>
          </div>
          <div className="hidden gap-6 text-sm md:flex">
            <a href="#services" className="hover:text-emerald-700">Services</a>
            <a href="#gallery" className="hover:text-emerald-700">Gallery</a>
            <a href="#reviews" className="hover:text-emerald-700">Reviews</a>
            <a href="#booking" className="hover:text-emerald-700">Book</a>
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2 md:py-20">
        <div className="flex flex-col justify-center">
          <div className="mb-4 inline-flex w-fit rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm text-emerald-800">
            Glossy nails • Soft lashes • Transparent pricing
          </div>
          <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
            Beauty that feels polished, soft, and effortless.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-stone-600 md:text-lg">
            SGTHEBEAUTY offers manicure and eyelash services with a clean, elegant touch. Easy booking, clear pricing, and a comfortable experience near Redhill.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi SGTHEBEAUTY! I want to book an appointment.")}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-emerald-600 px-6 py-3 text-white shadow hover:bg-emerald-700"
            >
              Book via WhatsApp
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-stone-300 px-6 py-3 hover:bg-stone-50"
            >
              View Instagram
            </a>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-stone-200 bg-white p-5 shadow-sm">
              <div className="text-sm text-stone-500">Location</div>
              <div className="mt-2 font-medium">Link (THM) Building, 8 Chang Charn Road</div>
              <div className="mt-1 text-sm text-stone-500">About 6 mins walk from Redhill MRT</div>
            </div>
            <div className="rounded-3xl border border-stone-200 bg-white p-5 shadow-sm">
              <div className="text-sm text-stone-500">Opening hours</div>
              <div className="mt-2 font-medium">Open daily from 10:00 AM onward</div>
              <div className="mt-1 text-sm text-stone-500">Appointments by booking</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 top-10 h-40 w-40 rounded-full bg-emerald-100 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-lime-100 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=1200&q=80"
              alt="Elegant manicure"
              className="h-[420px] w-full object-cover"
            />
            <div className="grid gap-4 p-6 sm:grid-cols-2">
              <div className="rounded-2xl bg-stone-50 p-4">
                <div className="text-sm text-stone-500">Most booked</div>
                <div className="mt-2 text-lg font-semibold">Gel Mani + Design</div>
                <div className="mt-1 text-sm text-stone-600">Custom art with glossy finish</div>
                <div className="mt-3 font-semibold text-emerald-700">$40</div>
              </div>
              <div className="rounded-2xl bg-stone-50 p-4">
                <div className="text-sm text-stone-500">Promo</div>
                <div className="mt-2 text-lg font-semibold">First-time customers</div>
                <div className="mt-1 text-sm text-stone-600">Enjoy a welcome discount on your first visit</div>
                <div className="mt-3 font-semibold text-emerald-700">10% OFF</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="grid gap-4 md:grid-cols-4">
          {promos.map((promo) => (
            <div key={promo} className="rounded-3xl border border-stone-200 bg-white p-5 shadow-sm">
              <div className="text-sm font-medium text-emerald-700">Special offer</div>
              <div className="mt-2 text-sm leading-6 text-stone-700">{promo}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <div className="text-sm uppercase tracking-[0.2em] text-emerald-700">Services</div>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Menu & pricing</h2>
          </div>
          <a href="#booking" className="hidden rounded-2xl border border-stone-300 px-5 py-3 text-sm md:block">
            Book now
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div key={service.name} className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold leading-6">{service.name}</h3>
                  <p className="mt-2 text-sm text-stone-500">{service.time}</p>
                </div>
                <div className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">
                  {service.price}
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-stone-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="gallery" className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-8">
          <div className="text-sm uppercase tracking-[0.2em] text-emerald-700">Gallery</div>
          <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Looks your clients will love</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {gallery.map((item) => (
            <div key={item.title} className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm">
              <img src={item.image} alt={item.title} className="h-80 w-full object-cover" />
              <div className="p-5">
                <div className="text-lg font-semibold">{item.title}</div>
                <div className="mt-1 text-sm text-stone-500">{item.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="reviews" className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-8">
          <div className="text-sm uppercase tracking-[0.2em] text-emerald-700">Reviews</div>
          <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Why clients come back</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((review) => (
            <div key={review.name} className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-sm">
              <div className="text-lg font-semibold">{review.name}</div>
              <div className="mt-3 text-sm leading-7 text-stone-600">“{review.text}”</div>
            </div>
          ))}
        </div>
      </section>

      <section id="booking" className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className="text-sm uppercase tracking-[0.2em] text-emerald-700">Booking</div>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Request an appointment</h2>
            <p className="mt-4 max-w-lg text-stone-600">
              Fill in your details and send your request through WhatsApp. Quick, simple, and easy for both you and your clients.
            </p>

            <div className="mt-8 space-y-4 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
              <div>
                <div className="text-sm text-stone-500">Phone / WhatsApp</div>
                <div className="mt-1 font-medium">8829 2998</div>
              </div>
              <div>
                <div className="text-sm text-stone-500">Instagram</div>
                <a href={instagramUrl} target="_blank" rel="noreferrer" className="mt-1 block font-medium text-emerald-700 hover:underline">
                  @sgthebeauty
                </a>
              </div>
              <div>
                <div className="text-sm text-stone-500">Address</div>
                <a href={mapsUrl} target="_blank" rel="noreferrer" className="mt-1 block font-medium hover:text-emerald-700">
                  Link (THM) Building, 8 Chang Charn Road, Singapore 159637
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-xl md:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium">Name</label>
                <input className={inputClass} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">Phone</label>
                <input className={inputClass} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Your contact number" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">Service</label>
                <select className={inputClass} value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
                  {services.map((service) => (
                    <option key={service.name} value={service.name}>
                      {service.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">Preferred date</label>
                <input type="date" className={inputClass} value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
              </div>
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium">Preferred time</label>
                <input type="time" className={inputClass} value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} />
              </div>
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium">Notes</label>
                <textarea className={`${inputClass} min-h-[120px]`} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} placeholder="Design idea, lash style, or anything we should know" />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${message}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-emerald-600 px-6 py-3 text-white shadow hover:bg-emerald-700"
              >
                Send Booking via WhatsApp
              </a>
              <button
                onClick={() => setForm({ name: "", phone: "", service: "Classic Gel Mani", date: "", time: "", notes: "" })}
                className="rounded-2xl border border-stone-300 px-6 py-3 hover:bg-stone-50"
              >
                Clear Form
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="overflow-hidden rounded-[2rem] bg-stone-900 p-8 text-white shadow-2xl md:p-10">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <div className="text-sm uppercase tracking-[0.2em] text-emerald-300">Ready to book?</div>
              <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Bring your next nail or lash idea to life.</h2>
              <p className="mt-4 max-w-2xl text-stone-300">
                Send us your preferred date, service, and inspiration. We’ll make the booking process smooth and personal.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi SGTHEBEAUTY! I want to book an appointment.")}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-white px-6 py-3 text-stone-900 hover:bg-stone-100"
              >
                WhatsApp Us
              </a>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/20 px-6 py-3 text-white hover:bg-white/10"
              >
                Open Map
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}