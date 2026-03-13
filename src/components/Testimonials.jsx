import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ravi Patel',
    review: 'Excellent service! Abhishek fixed our wiring quickly and safely. Highly recommended.',
    stars: 5,
  },
  {
    name: 'Priya Shah',
    review: 'Professional and reliable. Transparent pricing and clean work. Will call again!',
    stars: 5,
  },
  {
    name: 'Manish Desai',
    review: 'Emergency support was prompt and efficient. Very satisfied with the quality.',
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-electricBlue text-center">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <div key={idx} className="glass shadow-subtle p-6 flex flex-col items-center">
            <div className="flex gap-1 mb-2">
              {[...Array(t.stars)].map((_, i) => (
                <Star key={i} size={20} className="text-electricBlue" fill="#0EA5E9" />
              ))}
            </div>
            <p className="text-darkNavy text-base mb-4 text-center">&quot;{t.review}&quot;</p>
            <span className="font-semibold text-electricBlue">- {t.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}