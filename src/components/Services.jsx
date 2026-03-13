import { Home, PanelTop, Fan, Lightbulb, Battery, Zap, Building, CircuitBoard } from 'lucide-react';

const services = [
  {
    icon: <Home size={32} />,
    title: 'House Wiring',
    desc: 'Safe and efficient wiring for homes, new and old.'
  },
  {
    icon: <PanelTop size={32} />,
    title: 'Switchboard Repair',
    desc: 'Quick fix and replacement for faulty switchboards.'
  },
  {
    icon: <Fan size={32} />,
    title: 'Fan & Light Installation',
    desc: 'Professional installation of fans and lighting fixtures.'
  },
  {
    icon: <Battery size={32} />,
    title: 'Inverter Installation',
    desc: 'Reliable inverter setup for uninterrupted power.'
  },
  {
    icon: <CircuitBoard size={32} />,
    title: 'MCB & Fuse Repair',
    desc: 'Expert repair and replacement of MCBs and fuses.'
  },
  {
    icon: <Zap size={32} />,
    title: 'Electrical Maintenance',
    desc: 'Routine checks and maintenance for safety and efficiency.'
  },
  {
    icon: <Lightbulb size={32} />,
    title: 'Short Circuit Repair',
    desc: 'Prompt resolution of short circuit issues.'
  },
  {
    icon: <Building size={32} />,
    title: 'New Building Wiring',
    desc: 'Complete wiring solutions for new constructions.'
  },
];

export default function Services() {
  return (
    <section id="services" className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-electricBlue text-center">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="glass shadow-subtle flex flex-col items-center p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-white/80"
          >
            <div className="mb-4 text-electricBlue">{service.icon}</div>
            <h3 className="text-lg font-semibold mb-2 text-darkNavy">{service.title}</h3>
            <p className="text-sm text-darkNavy/80 text-center">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}