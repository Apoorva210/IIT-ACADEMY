import { useState } from 'react'
import { MapPin, Phone, Mail, MessageSquare, ThumbsUp, HelpCircle, Send, ChevronLeft, ChevronRight, Navigation } from 'lucide-react'

export default function ContactUs() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [openAccordionItem, setOpenAccordionItem] = useState(null)

  const slides = [
    { url: "/placeholder.svg?height=400&width=800", alt: "Slide 1" },
    { url: "/placeholder.svg?height=400&width=800", alt: "Slide 2" },
    { url: "/placeholder.svg?height=400&width=800", alt: "Slide 3" },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const toggleAccordionItem = (itemId) => {
    setOpenAccordionItem((prev) => (prev === itemId ? null : itemId))
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">Contact Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Contact Information */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Contact Us</h2>
              <p className="mb-4 text-gray-600">We&apos;re here to help and answer any question you might have. Feel free to reach out to us using the information below:</p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-orange-500" />
                  <span className="text-lg">+91 1234567890</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-orange-500" />
                  <span className="text-lg">example@email.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-orange-500" />
                  <span className="text-lg">123 Street, City, Country</span>
                </div>
              </div>
            </div>
            <div className="px-6 pb-6">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                Schedule a Call
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-orange-50 shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-orange-600 mb-4">Get in Touch</h2>
              <form className="space-y-4">
                <div>
                  <input type="text" placeholder="Name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
                </div>
                <div>
                  <input type="email" placeholder="Email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
                </div>
                <div>
                  <input type="tel" placeholder="Phone" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
                </div>
                <div>
                  <textarea placeholder="Message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"></textarea>
                </div>
                <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition duration-300 flex items-center justify-center">
                  <Send className="w-4 h-4 mr-2" /> Submit
                </button>
              </form>
            </div>
          </div>
        </div>

       
        {/* Our Location */}
        <div className="bg-white shadow-lg rounded-lg mt-6 overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-6">Our Location</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="aspect-[16/9] bg-gray-200 flex items-center justify-center text-4xl font-bold text-gray-400 rounded-lg">
                Interactive Map
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Visit Our Office</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 mr-3 text-orange-500 mt-1" />
                    <div>
                      <p className="font-medium">123 Business Avenue</p>
                      <p className="text-gray-600">Suite 100</p>
                      <p className="text-gray-600">New York, NY 10001</p>
                      <p className="text-gray-600">United States</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-orange-500" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-3 text-orange-500" />
                    <span>info@example.com</span>
                  </div>
                </div>
                <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 flex items-center justify-center">
                  <Navigation className="w-4 h-4 mr-2" /> Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white shadow-lg rounded-lg mt-6 overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { id: 'item-1', question: 'How can I track my order?', answer: 'You can track your order by logging into your account and visiting the "Order History" section. There, you\'ll find a tracking number for each shipped order.' },
                { id: 'item-2', question: 'What is your return policy?', answer: 'We offer a 30-day return policy for most items. Products must be in their original condition and packaging. Please contact our customer support team to initiate a return.' },
                { id: 'item-3', question: 'Do you offer international shipping?', answer: 'Yes, we offer international shipping to many countries. Shipping costs and delivery times vary depending on the destination. You can check available shipping options during checkout.' },
              ].map((item) => (
                <div key={item.id} className="border-b border-gray-200 pb-4">
                  <button
                    className="flex justify-between items-center w-full text-left font-medium text-gray-900 focus:outline-none"
                    onClick={() => toggleAccordionItem(item.id)}
                    aria-expanded={openAccordionItem === item.id}
                    aria-controls={`accordion-content-${item.id}`}
                  >
                    <span>{item.question}</span>
                    <svg
                      className={`w-6 h-6 transform ${openAccordionItem === item.id ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openAccordionItem === item.id && (
                    <div id={`accordion-content-${item.id}`} className="mt-2 text-gray-600">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image Slider */}
        <div className="bg-white shadow-lg rounded-lg mt-6 overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-6">Featured Images</h2>
            <div className="relative h-[400px]">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img src={slide.url} alt={slide.alt} className="w-full h-full object-cover" />
                </div>
              ))}
              <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow"
                onClick={nextSlide}
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

      

      {/* Footer */}
      <footer className="bg-blue-600 text-white mt-6 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">CORPORATE  OFFICE</h3>
              <p>123 Business Avenue, Suite 100, New York, NY 10001, United States</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">RESOURCES</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-orange-300 transition duration-300">FAQs</a></li>
                <li><a href="#" className="hover:text-orange-300 transition duration-300">Support Center</a></li>
                <li><a href="#" className="hover:text-orange-300 transition duration-300">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">QUICK LINKS</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-orange-300 transition duration-300">About Us</a></li>
                <li><a href="#" className="hover:text-orange-300 transition duration-300">Careers</a></li>
                <li><a href="#" className="hover:text-orange-300 transition duration-300">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-400 my-6"></div>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-white hover:text-orange-300 transition duration-300">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-orange-300 transition duration-300">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-orange-300 transition duration-300">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
    </div>
  )
}
