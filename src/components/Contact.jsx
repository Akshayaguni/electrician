import { useState } from 'react';
import { MapPin, PhoneCall, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [success, setSuccess] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
    setForm({ name: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-electricBlue text-center">Contact</h2>
      <div className="glass shadow-subtle p-8 flex flex-col md:flex-row gap-8">
        <form className="flex-1 flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="p-3 rounded-lg border border-electricBlue focus:outline-none focus:ring-2 focus:ring-electricBlue"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            className="p-3 rounded-lg border border-electricBlue focus:outline-none focus:ring-2 focus:ring-electricBlue"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            className="p-3 rounded-lg border border-electricBlue focus:outline-none focus:ring-2 focus:ring-electricBlue"
            rows={4}
          />
          <button type="submit" className="bg-electricBlue text-white font-semibold py-3 px-6 rounded-full shadow-subtle hover:bg-darkNavy transition-all duration-300">
            Submit
          </button>
          {success && (
            <div className="bg-green-100 text-green-700 rounded-lg p-3 mt-2 text-center animate-fadeIn">Thank you! Your message was sent.</div>
          )}
        </form>
        <div className="flex-1 flex flex-col gap-4 items-center justify-center">
          <div className="w-full h-48 bg-darkNavy bg-opacity-20 rounded-lg flex items-center justify-center text-electricBlue text-lg mb-4">
            {/* Google Map Placeholder */}
            <MapPin size={32} /> Gujarat, India
          </div>
          <div className="flex flex-col gap-2 text-darkNavy">
            <div className="flex items-center gap-2"><PhoneCall /> +91-9712094451</div>
            <div className="flex items-center gap-2"><MessageCircle /> WhatsApp: +91-9712094451</div>
            <div className="flex items-center gap-2"><MapPin /> Gujarat, India</div>
          </div>
        </div>
      </div>
    </section>
  );
}