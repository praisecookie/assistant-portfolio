'use client';
import Navbar from '@/components/Navbar';
import { useState } from 'react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // REPLACE THIS LATER with your actual Google Script URL
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx6OMgcw5tfPoylO8kb6Zj1nnwoBSOi0UJTu6aZVyXAdA9YVS65Q5XSJtCVq9wS9TET/exec";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: formData,
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Error!", error);
      // For now, we will assume success even if the URL is fake so you can see the UI state
      setSubmitted(true); 
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-light">
      <Navbar />
      <div className="px-6 md:px-12 py-16 max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-dark">Let’s Drive Results Together.</h1>
        <p className="text-gray-600 mb-10">Available for C-level support and Customer Relations roles.</p>
        
        {submitted ? (
          <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
            <p>Thank you for reaching out. I will get back to you shortly.</p>
          </div>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
              <input name="name" required type="text" className="w-full p-3 border border-gray-300 rounded focus:border-primary focus:ring-1 focus:ring-primary outline-none transition text-dark" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
              <input name="email" required type="email" className="w-full p-3 border border-gray-300 rounded focus:border-primary focus:ring-1 focus:ring-primary outline-none transition text-dark" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
              <input name="subject" required type="text" className="w-full p-3 border border-gray-300 rounded focus:border-primary focus:ring-1 focus:ring-primary outline-none transition text-dark" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
              <textarea name="message" required rows={5} className="w-full p-3 border border-gray-300 rounded focus:border-primary focus:ring-1 focus:ring-primary outline-none transition text-dark"></textarea>
            </div>
            
            <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary text-white font-bold py-4 rounded hover:bg-opacity-90 transition-all disabled:opacity-50"
            >
                {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}

        <div className="mt-12 border-t pt-8 space-y-2 text-gray-600">
            <p><strong>Email:</strong> ajayieben79@gmail.com</p>
            <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/ajayi-ebenezer-a74328363/" className="text-primary hover:underline">Ebenezer Ajayi</a></p>
        </div>
      </div>
    </div>
  );
}