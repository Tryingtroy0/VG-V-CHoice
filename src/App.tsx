import { useState, useEffect, useCallback } from 'react';
import { Phone, MapPin, ChevronLeft, ChevronRight, Sparkles, Facebook } from 'lucide-react';

const carouselImages = [
  { id: 1, label: 'Table Set 1', url: '/table_set_1.png' },
  { id: 2, label: 'Chair Set 1', url: '/chair_set_1.jpg' },
  { id: 3, label: 'Table Set 2', url: '/table_set_2.jpg' },
  { id: 4, label: 'Chair Set 2', url: '/chair_set_2.png' },
  { id: 5, label: 'Event Setup 1', url: '/event_setup_1.jpg' },
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    eventDate: '',
    numTables: '',
    numChairs: '',
    eventLocation: '',
    additionalNotes: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, []);

  const prevSlide = useCallback(() => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, []);

  const goToSlide = (index: number) => {
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setFormData({
      fullName: '',
      contactNumber: '',
      eventDate: '',
      numTables: '',
      numChairs: '',
      eventLocation: '',
      additionalNotes: '',
    });
    setTimeout(() => setShowSuccess(false), 5000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-cream font-body">
      {/* Mobile Header */}
      <header className="lg:hidden bg-forest text-white py-8 px-4 text-center">
        <div className="flex flex-col items-center justify-center gap-3 mb-2">
          <div className="w-16 h-16 rounded-full bg-white border border-gold/30 overflow-hidden mb-1">
            <img
              src="/vg&v_choice.jpg"
              alt="VG&V CHOICE Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold tracking-wide">VG&V CHOICE</h1>
        </div>
        <p className="text-gold font-medium text-sm tracking-widest uppercase">Table and Chair Rental Services</p>
      </header>

      <div className="flex flex-col lg:flex-row">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:flex lg:w-80 xl:w-96 bg-forest flex-col justify-between sticky top-0 h-screen">
          <div className="p-8 flex-1 flex flex-col justify-center">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white mb-6 border-2 border-gold/30 overflow-hidden">
                <img
                  src="/vg&v_choice.jpg"
                  alt="VG&V CHOICE Logo"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden w-full h-full items-center justify-center bg-gold/20">
                  <Sparkles className="w-10 h-10 text-gold" />
                </div>
              </div>
              <h1 className="font-display text-4xl xl:text-5xl font-bold text-white tracking-wide mb-4">
                VG&V CHOICE
              </h1>
              <div className="w-24 h-0.5 bg-gold mx-auto mb-4"></div>
              <p className="text-gold font-medium tracking-widest uppercase text-sm">
                Table and Chair Rental Services
              </p>
            </div>
          </div>
          <div className="p-8 border-t border-forest-400/30">
            <p className="text-forest-100/60 text-xs text-center">
              Making your events memorable since 2026
            </p>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative bg-gradient-to-br from-forest via-forest-600 to-forest-700 py-16 lg:py-24 px-4 text-center text-white overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a84c' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <p className="text-gold font-medium mb-4 tracking-wider uppercase text-sm">
                Premium Event Rentals
              </p>
              <h2 className="font-display text-3xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                Elevate Your Events with Elegant Furniture
              </h2>
              <p className="text-lg lg:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                From intimate gatherings to grand celebrations, we provide premium tables and chairs that transform your vision into reality.
              </p>
              <a
                href="#booking"
                className="inline-block bg-gold hover:bg-gold-400 text-forest font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-gold/20"
              >
                Book Now
              </a>
            </div>
          </section>

          {/* Product Gallery / Carousel */}
          <section className="py-16 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10">
                <h3 className="font-display text-3xl lg:text-4xl font-bold text-forest mb-3">
                  Our Collection
                </h3>
                <p className="text-gray-600 max-w-xl mx-auto">
                  Explore our premium selection of tables and chairs, perfect for any occasion.
                </p>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative h-64 sm:h-80 md:h-96 lg:h-[480px]">
                  {carouselImages.map((image, index) => (
                    <div
                      key={image.id}
                      className={`absolute inset-0 transition-opacity duration-500 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                    >
                      <img
                        src={image.url}
                        alt={image.label}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                      <div className="absolute bottom-6 left-6 text-white">
                        <span className="bg-forest/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                          {image.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-gold text-forest hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 disabled:opacity-50"
                  disabled={isTransitioning}
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-gold text-forest hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 disabled:opacity-50"
                  disabled={isTransitioning}
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Dot Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentSlide
                        ? 'bg-gold w-8'
                        : 'bg-white/60 hover:bg-white'
                        }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Booking Section */}
          <section id="booking" className="py-16 lg:py-24 px-4 bg-gradient-to-b from-cream to-cream-200">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-10">
                <h3 className="font-display text-3xl lg:text-4xl font-bold text-forest mb-3">
                  Send an Inquiry
                </h3>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              {showSuccess ? (
                <div className="bg-white rounded-2xl shadow-xl p-8 text-center border border-gold/20">
                  <div className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="font-display text-2xl font-bold text-forest mb-2">Thank You!</h4>
                  <p className="text-gray-600">We will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-6 lg:p-10 border border-gold/10">
                  <div className="grid gap-5">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-forest mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-forest placeholder-gray-400"
                        placeholder="Your Full Name"
                      />
                    </div>

                    <div>
                      <label htmlFor="contactNumber" className="block text-sm font-medium text-forest mb-2">
                        Contact Number
                      </label>
                      <input
                        type="tel"
                        id="contactNumber"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-forest placeholder-gray-400"
                        placeholder="Your Phone Number"
                      />
                    </div>

                    <div>
                      <label htmlFor="eventDate" className="block text-sm font-medium text-forest mb-2">
                        Event Date
                      </label>
                      <input
                        type="date"
                        id="eventDate"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-forest"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="numTables" className="block text-sm font-medium text-forest mb-2">
                          Number of Tables
                        </label>
                        <input
                          type="number"
                          id="numTables"
                          name="numTables"
                          value={formData.numTables}
                          onChange={handleInputChange}
                          min="0"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-forest"
                          placeholder="0"
                        />
                      </div>
                      <div>
                        <label htmlFor="numChairs" className="block text-sm font-medium text-forest mb-2">
                          Number of Chairs
                        </label>
                        <input
                          type="number"
                          id="numChairs"
                          name="numChairs"
                          value={formData.numChairs}
                          onChange={handleInputChange}
                          min="0"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-forest"
                          placeholder="0"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="eventLocation" className="block text-sm font-medium text-forest mb-2">
                        Event Location / Address
                      </label>
                      <input
                        type="text"
                        id="eventLocation"
                        name="eventLocation"
                        value={formData.eventLocation}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-forest placeholder-gray-400"
                        placeholder="Your Event Address"
                      />
                    </div>

                    <div>
                      <label htmlFor="additionalNotes" className="block text-sm font-medium text-forest mb-2">
                        Additional Notes
                      </label>
                      <textarea
                        id="additionalNotes"
                        name="additionalNotes"
                        value={formData.additionalNotes}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-forest placeholder-gray-400 resize-none"
                        placeholder="Tell us more about your event..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-forest hover:bg-forest-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-forest/20 mt-2"
                    >
                      Send Inquiry
                    </button>
                  </div>
                </form>
              )}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-16 lg:py-24 px-4 bg-forest text-white">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="font-display text-3xl lg:text-4xl font-bold mb-3">
                  Get In Touch
                </h3>
                <p className="text-white/70">
                  Ready to plan your perfect event? Reach out to us today.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-gold/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Phone</h4>
                      <p className="text-white/80 text-base font-medium">09915667913</p>
                      <p className="text-sm text-gold mt-2">Call us anytime</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-gold/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Address</h4>
                      <p className="text-white/80 text-base font-medium">P-6, MANGGA, LAPINIGAN, SAN FRANCISCO, AGUSAN DEL SUR, 8501, PHILIPPINES</p>
                      <p className="text-sm text-gold mt-2">Visit our showroom</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Facebook Section */}
              <div className="mt-12 text-center">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-gold/30 transition-all duration-300 max-w-md mx-auto">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Facebook className="w-8 h-8 text-gold" />
                    <span className="font-display text-xl font-semibold">VG & V Choice</span>
                  </div>
                  <p className="text-gold font-medium">Reach us in our page for more details</p>
                  <a href="https://www.facebook.com/profile.php?id=61573247805724" target="_blank" rel="noopener noreferrer"
                    className="text-white hover:text-gold transition-colors break-all">
                    https://www.facebook.com/profile.php?id=61573247805724
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-forest-700 py-8 px-4 text-center border-t border-forest-400/20">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="font-display text-lg font-medium text-white">VG&V CHOICE</span>
              <Sparkles className="w-4 h-4 text-gold" />
            </div>
            <p className="text-white/50 text-sm">
              &copy; 2025 VG&V CHOICE. All rights reserved.
            </p>
          </footer>
        </main>
      </div>
    </div >
  );
}

export default App;
