import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return visible ? (
    <button
      onClick={scrollTop}
      className="fixed bottom-6 left-6 z-40 bg-electricBlue text-white rounded-full p-3 shadow-lg hover:bg-darkNavy transition-all duration-300"
      aria-label="Scroll to top"
    >
      <ArrowUp size={24} />
    </button>
  ) : null;
}