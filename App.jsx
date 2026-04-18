import React, { useMemo, useState } from "react";

const services = [
  { name: "Classic Gel Mani", price: "$20", time: "60 min" },
  { name: "Express Gel Mani", price: "$18", time: "45 min" },
  { name: "Classic Gel Pedi", price: "$20", time: "60 min" },
  { name: "Express Gel Pedi", price: "$20", time: "45 min" },
  { name: "Gel Mani + Design", price: "$40", time: "90 min" },
  { name: "Gel Mani + Extension + Design", price: "$50", time: "120 min" },
  { name: "Eyelash Extensions", price: "From $XX", time: "By consult" }
];

export default function App() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "Classic Gel Mani",
    date: "",
    time: "",
    notes: ""
  });

  const whatsappNumber = "6588292998";

  const message = useMemo(() => {
    return encodeURIComponent(
      `Hi SGTHEBEAUTY! I want to book:\n\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `Service: ${form.service}\n` +
      `Date: ${form.date}\n` +
      `Time: ${form.time}\n` +
      `Notes: ${form.notes}`
    );
  }, [form]);

  return (
    <div style={{ fontFamily: "Arial", padding: 20 }}>
      <h1>SGTHEBEAUTY</h1>
      <p>Manicure & Eyelash Services</p>
      <p>📍 Link (THM) Building, 8 Chang Charn Road</p>
      <p>🕒 Open daily from 10AM</p>

      <h2>Services</h2>
      <ul>
        {services.map((s) => (
          <li key={s.name}>
            {s.name} - {s.price}
          </li>
        ))}
      </ul>

      <h2>Book Appointment</h2>

      <input placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} /><br /><br />
      <input placeholder="Phone" onChange={(e) => setForm({ ...form, phone: e.target.value })} /><br /><br />

      <select onChange={(e) => setForm({ ...form, service: e.target.value })}>
        {services.map((s) => (
          <option key={s.name}>{s.name}</option>
        ))}
      </select><br /><br />

      <input type="date" onChange={(e) => setForm({ ...form, date: e.target.value })} /><br /><br />
      <input type="time" onChange={(e) => setForm({ ...form, time: e.target.value })} /><br /><br />

      <textarea placeholder="Notes" onChange={(e) => setForm({ ...form, notes: e.target.value })}></textarea><br /><br />

      <a href={`https://wa.me/${whatsappNumber}?text=${message}`} target="_blank">
        <button>Book via WhatsApp</button>
      </a>
    </div>
  );
}