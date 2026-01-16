import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import toast from "react-hot-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: '',
    detail: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const toastId = toast.loading("Sending message...");
    try {
      const res = await fetch("https://manor-llc-backend.vercel.app/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formData }),
      });

      const data = await res.json();
      if (!data.ok) {
        throw new Error("Failed");
      }

      toast.success("Message sent successfully!", { id: toastId });
    } catch (e) {
      toast.error("Failed to send message. Please try again.", {
        id: toastId,
      });
    }
    
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-amber-950">
            Contact <span className="text-amber-600">Us</span>
          </h2>
          <div className="h-1 w-24 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to plan your event? Get in touch with us today for a custom quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-amber-950">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-amber-700" size={24} />
                </div>
                <div>
                  <div className="font-semibold mb-1 text-amber-950">Phone</div>
                  <a href="tel:973-388-0650" className="text-amber-700 hover:text-amber-900">
                    (973) 388-0650
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-amber-700" size={24} />
                </div>
                <div>
                  <div className="font-semibold mb-1 text-amber-950">Text Message</div>
                  <a href="sms:973-381-6097" className="text-amber-700 hover:text-amber-900">
                    (973) 381-6097
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-amber-700" size={24} />
                </div>
                <div>
                  <div className="font-semibold mb-1 text-amber-950">Location</div>
                  <div className="text-gray-700">795 Sanford Avenue<br />Newark, New Jersey</div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-amber-50 rounded-2xl p-6 border border-amber-200">
              <h4 className="font-semibold mb-4 text-amber-950">Business Hours</h4>
              <div className="text-gray-700 space-y-2">
                <div>Monday - Thursday: 11:00 AM - 10:00 PM</div>
                <div>Friday - Saturday: 11:00 AM - 11:00 PM</div>
                <div>Sunday: 12:00 PM - 9:00 PM</div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-amber-950">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white border-2 border-amber-200 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-600 transition-colors text-gray-900"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-amber-950">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white border-2 border-amber-200 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-600 transition-colors text-gray-900"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="reason" className="block text-sm font-semibold mb-2 text-amber-950">
                  Contact Reason
                </label>
                <input
                  type="text"
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  className="w-full bg-white border-2 border-amber-200 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-600 transition-colors text-gray-900"
                  placeholder="Tell us why your reaching out ( example - birthday party, catering , etc)."
                />
              </div>
              <div>
                <label htmlFor="detail" className="block text-sm font-semibold mb-2 text-amber-950">
                  Contact Details
                </label>
                <textarea
                  id="detail"
                  name="detail"
                  value={formData.detail}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-white border-2 border-amber-200 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-600 transition-colors resize-none text-gray-900"
                  placeholder="Tell us about your event (date, number of guests, special requests, will you need catering, and go into details with what you’re looking for)."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 shadow-lg shadow-amber-900/20"
              >
                <span>Send Message</span>
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
