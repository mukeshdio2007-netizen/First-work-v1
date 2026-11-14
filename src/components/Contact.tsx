import React, { useState } from 'react';
import { Mail, MapPin, Clock, Send, CheckCircle2, Github, Linkedin, Twitter } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please enter your full name (at least 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      newErrors.subject = 'Please enter a subject (at least 3 characters).';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedTicket('STZ-' + Math.floor(100000 + Math.random() * 900000));
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <p className="text-xs font-mono font-semibold tracking-widest text-[#008CFF] uppercase">Get in Touch</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Connect With STUZEN
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00D4F5] to-[#008CFF] mx-auto rounded-full" />
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed pt-2">
            Have a project in mind, want to explore a technical collaboration, or discuss engineering solutions? Send us a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Info Card */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#F5F9FF] border border-blue-100 rounded-2xl p-8 space-y-6">
              <div>
                <h3 className="text-xl font-bold font-heading text-slate-900 mb-2">Direct Communication</h3>
                <p className="text-sm text-slate-600">
                  Our engineering desk reviews every inquiry carefully. We target an initial technical response within 24 business hours.
                </p>
              </div>

              <div className="space-y-4 pt-2 border-t border-blue-100">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center text-[#008CFF] flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-slate-400 uppercase">Primary Email</p>
                    <a href="mailto:contact@stuzen.tech" className="text-sm font-semibold text-slate-800 hover:text-[#008CFF] transition-colors">
                      contact@stuzen.tech
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center text-[#008CFF] flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-slate-400 uppercase">Headquarters / Location</p>
                    <p className="text-sm font-medium text-slate-700">
                      [Bangalore Technology Corridor &bull; India / Distributed]
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center text-[#008CFF] flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-slate-400 uppercase">Working Hours</p>
                    <p className="text-sm font-medium text-slate-700">Mon &ndash; Fri &bull; 09:30 &ndash; 18:30 IST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="p-6 bg-white border border-slate-200 rounded-2xl flex items-center justify-between">
              <span className="text-sm font-medium text-slate-700 font-heading">Follow Stuzen:</span>
              <div className="flex items-center gap-3">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-slate-100 text-slate-600 hover:bg-[#008CFF] hover:text-white transition-colors flex items-center justify-center" aria-label="GitHub">
                  <Github className="w-4 h-4" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-slate-100 text-slate-600 hover:bg-[#008CFF] hover:text-white transition-colors flex items-center justify-center" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-slate-100 text-slate-600 hover:bg-[#008CFF] hover:text-white transition-colors flex items-center justify-center" aria-label="Twitter">
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-sm relative">
              
              {submittedTicket && (
                <div className="mb-6 p-5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-sm font-bold font-heading">Message Successfully Dispatched!</h5>
                      <p className="text-xs text-emerald-700 mt-1">
                        Thank you for contacting STUZEN TECHNOLOGIES. Reference Ticket: <strong className="font-mono">{submittedTicket}</strong>. We will get back to you shortly.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Rivera"
                      className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-[#008CFF] ${
                        errors.name ? 'border-red-500 bg-red-50' : 'border-slate-300'
                      }`}
                    />
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@example.com"
                      className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-[#008CFF] ${
                        errors.email ? 'border-red-500 bg-red-50' : 'border-slate-300'
                      }`}
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Subject / Topic <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Enterprise Solution Inquiry"
                    className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-[#008CFF] ${
                      errors.subject ? 'border-red-500 bg-red-50' : 'border-slate-300'
                    }`}
                  />
                  {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your requirements or technical questions..."
                    className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-[#008CFF] ${
                      errors.message ? 'border-red-500 bg-red-50' : 'border-slate-300'
                    }`}
                  />
                  {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-[#00D4F5] to-[#008CFF] text-white text-sm font-semibold uppercase tracking-wider py-3.5 px-8 rounded-lg flex items-center gap-2 shadow-md hover:shadow-cyan-500/25 transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
