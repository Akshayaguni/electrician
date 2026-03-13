import { PhoneCall, MessageCircle, ShieldCheck, Clock, BadgeCheck } from 'lucide-react';

const trustBadges = [
  { icon: <BadgeCheck className="text-electricBlue" />, text: '5+ Years Experience' },
  { icon: <Clock className="text-electricBlue" />, text: '24/7 Emergency' },
  { icon: <ShieldCheck className="text-electricBlue" />, text: '100% Safety Guaranteed' },
];

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex flex-col justify-center items-center bg-gradient-to-br from-electricBlue via-white to-darkNavy text-white px-4 py-16">
      <div className="max-w-xl w-full text-center glass shadow-subtle p-8">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-darkNavy">Trusted &amp; Certified Electrician in Gujarat</h1>
        <p className="text-lg md:text-xl mb-6 text-darkNavy">Safe. Reliable. Affordable Electrical Solutions.</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-6">
          <a href="tel:+919712094451" className="bg-electricBlue text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-darkNavy transition-all duration-300 flex items-center gap-2 justify-center" aria-label="Call Now">
            <PhoneCall size={20} /> Call Now
          </a>
          <a href="#contact" className="bg-white text-electricBlue font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-electricBlue hover:text-white transition-all duration-300 flex items-center gap-2 justify-center" aria-label="Get Free Quote">
            <MessageCircle size={20} /> Get Free Quote
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {trustBadges.map((badge, idx) => (
            <div key={idx} className="flex items-center gap-2 bg-white/70 rounded-full px-4 py-2 text-electricBlue font-medium shadow-lg text-sm">
              {badge.icon}
              <span>{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
      <a href="https://wa.me/919712094451" target="_blank" rel="noopener noreferrer" className="floating-whatsapp" aria-label="WhatsApp">
        <MessageCircle size={28} />
      </a>
    </section>
  );
}