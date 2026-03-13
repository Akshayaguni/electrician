import { PhoneCall, Zap, Home } from 'lucide-react';

const pricing = [
  {
    icon: <PhoneCall size={28} />,
    title: 'Basic Visit Charge',
    price: '₹200',
    desc: 'Includes inspection and minor repairs.'
  },
  {
    icon: <Home size={28} />,
    title: 'Wiring Per Room Estimate',
    price: '₹800 - ₹1500',
    desc: 'Depends on room size and requirements.'
  },
  {
    icon: <Zap size={28} />,
    title: 'Emergency Service Charges',
    price: '₹500+',
    desc: '24/7 emergency support, price varies by issue.'
  },
];

export default function Pricing() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-electricBlue text-center">Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricing.map((item, idx) => (
          <div key={idx} className="glass shadow-subtle p-6 flex flex-col items-center">
            <div className="mb-2 text-electricBlue">{item.icon}</div>
            <h3 className="text-lg font-semibold mb-1 text-darkNavy">{item.title}</h3>
            <span className="text-xl font-bold text-electricBlue mb-2">{item.price}</span>
            <p className="text-sm text-darkNavy/80 text-center mb-2">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <span className="text-darkNavy font-medium">Contact for Exact Quote</span>
      </div>
    </section>
  );
}