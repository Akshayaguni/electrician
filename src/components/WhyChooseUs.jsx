import { Clock, BadgeCheck, ShieldCheck, ThumbsUp, DollarSign, CheckCircle, Sparkle } from 'lucide-react';

const points = [
  { icon: <Clock size={24} />, text: 'On-Time Service' },
  { icon: <DollarSign size={24} />, text: 'Transparent Pricing' },
  { icon: <BadgeCheck size={24} />, text: 'Quality Materials' },
  { icon: <ShieldCheck size={24} />, text: 'Emergency Support' },
  { icon: <Sparkle size={24} />, text: 'Clean Work' },
  { icon: <ThumbsUp size={24} />, text: 'Customer Satisfaction' },
];

export default function WhyChooseUs() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-electricBlue text-center">Why Choose Us</h2>
      <div className="glass shadow-subtle p-8">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {points.map((point, idx) => (
            <li key={idx} className="flex items-center gap-4 text-darkNavy text-lg font-medium">
              <span className="bg-electricBlue bg-opacity-20 rounded-full p-2 text-electricBlue shadow-subtle">
                {point.icon}
              </span>
              {point.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}