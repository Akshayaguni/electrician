export default function About() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-4">
      <div className="glass shadow-subtle flex flex-col md:flex-row items-center gap-8 p-8">
        <div className="w-32 h-32 rounded-full bg-electricBlue bg-opacity-80 flex items-center justify-center text-white text-2xl font-bold mb-4 md:mb-0">
          {/* Photo Placeholder */}
          AP
        </div>
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Abhishek Pokar</h2>
          <p className="text-lg mb-2">Certified Electrician | Owner</p>
          <p className="mb-4">Based in Gujarat, India. Providing safe, reliable, and affordable electrical services for homes and businesses. 5+ years of hands-on experience, certified by local authorities.</p>
          <ul className="mb-4 list-disc pl-5 text-electricBlue">
            <li>Certified Electrician (Govt. of Gujarat)</li>
            <li>5+ Years Experience</li>
            <li>24/7 Emergency Service</li>
          </ul>
          <p className="italic text-darkNavy">"My mission is to deliver quality electrical solutions with safety, transparency, and customer satisfaction as top priorities."</p>
        </div>
      </div>
    </section>
  );
}