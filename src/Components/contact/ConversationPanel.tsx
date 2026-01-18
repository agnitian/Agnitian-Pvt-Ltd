import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ArrowLeft, Check, Loader2 } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { projectTypes } from "@/lib/description";
import emailjs from "@emailjs/browser";

// =======================
// EmailJS Configuration
// =======================
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL;

// Initialize EmailJS ONCE
emailjs.init(EMAILJS_PUBLIC_KEY);

export default function ConversationPanel({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    projectType: "",
    name: "",
    email: "",
    company: "",
    message: "",
  });

  // =======================
  // Submit Handler
  // =======================
  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    const projectTypeLabel =
      projectTypes.find((t) => t.id === formData.projectType)?.label ||
      formData.projectType;

    const templateParams = {
      to_email: CONTACT_EMAIL,
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company || "Not specified",
      project_type: projectTypeLabel,
      message: formData.message,
      reply_to: formData.email,
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      setIsSuccess(true);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setErrorMessage(
        "Failed to send message. Please try again or email us directly at " +
          CONTACT_EMAIL
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // =======================
  // Reset Form
  // =======================
  const resetForm = () => {
    setStep(1);
    setIsSuccess(false);
    setErrorMessage("");
    setFormData({
      projectType: "",
      name: "",
      email: "",
      company: "",
      message: "",
    });
  };


    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50"
                        onClick={onClose}
                    />

                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 bottom-0 w-full max-w-lg bg-white z-50 flex flex-col shadow-2xl"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-slate-100">
                            <div>
                                <h2 className="text-xl font-semibold text-slate-900">Start a Conversation</h2>
                                <p className="text-sm text-slate-500 mt-1">Let's build something meaningful together</p>
                            </div>
                            <button
                                onClick={() => {
                                    onClose();
                                    setTimeout(resetForm, 300);
                                }}
                                className="p-2 rounded-full hover:bg-slate-100 transition-colors"
                            >
                                <X className="w-5 h-5 text-slate-500" />
                            </button>
                        </div>

                        {/* Progress */}
                        {!isSuccess && (
                            <div className="px-6 pt-6">
                                <div className="flex items-center gap-2">
                                    {[1, 2, 3].map((s) => (
                                        <React.Fragment key={s}>
                                            <div
                                                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all ${s < step
                                                        ? 'bg-blue-600 text-white'
                                                        : s === step
                                                            ? 'bg-blue-100 text-blue-600 ring-2 ring-blue-600'
                                                            : 'bg-slate-100 text-slate-400'
                                                    }`}
                                            >
                                                {s < step ? <Check className="w-4 h-4" /> : s}
                                            </div>
                                            {s < 3 && (
                                                <div className={`flex-1 h-1 rounded ${s < step ? 'bg-blue-600' : 'bg-slate-100'}`} />
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto p-6">
                            {errorMessage && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mb-4 p-4 rounded-lg bg-red-50 border border-red-200"
                                >
                                    <p className="text-sm text-red-700">{errorMessage}</p>
                                </motion.div>
                            )}
                            <AnimatePresence mode="wait">
                                {isSuccess ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className="h-full flex flex-col items-center justify-center text-center"
                                    >
                                        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                                            <Check className="w-10 h-10 text-green-600" />
                                        </div>
                                        <h3 className="text-2xl font-semibold text-slate-900 mb-2">Message Sent!</h3>
                                        <p className="text-slate-600 mb-8 max-w-xs">
                                            Thank you for reaching out. We'll be in touch within 24 hours.
                                        </p>
                                        <Button onClick={() => { onClose(); setTimeout(resetForm, 300); }} variant="outline">
                                            Close
                                        </Button>
                                    </motion.div>
                                ) : step === 1 ? (
                                    <motion.div
                                        key="step1"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-6"
                                    >
                                        <div>
                                            <h3 className="text-lg font-medium text-slate-900 mb-1">What are you building?</h3>
                                            <p className="text-sm text-slate-500">Select the option that best describes your project</p>
                                        </div>

                                        <div className="grid gap-3">
                                            {projectTypes.map((type) => (
                                                <button
                                                    key={type.id}
                                                    onClick={() => setFormData({ ...formData, projectType: type.id })}
                                                    className={`p-4 rounded-xl border-2 text-left transition-all ${formData.projectType === type.id
                                                            ? 'border-blue-600 bg-blue-50'
                                                            : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                                                        }`}
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <div className={`p-2 rounded-lg ${formData.projectType === type.id ? 'bg-blue-100' : 'bg-slate-100'
                                                            }`}>
                                                            <type.icon className={`w-5 h-5 ${formData.projectType === type.id ? 'text-blue-600' : 'text-slate-500'
                                                                }`} />
                                                        </div>
                                                        <span className={`font-medium ${formData.projectType === type.id ? 'text-blue-600' : 'text-slate-700'
                                                            }`}>
                                                            {type.label}
                                                        </span>
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    </motion.div>
                                ) : step === 2 ? (
                                    <motion.div
                                        key="step2"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-6"
                                    >
                                        <div>
                                            <h3 className="text-lg font-medium text-slate-900 mb-1">Tell us about yourself</h3>
                                            <p className="text-sm text-slate-500">So we can personalize our response</p>
                                        </div>

                                        <div className="space-y-4">
                                            <div>
                                                <label htmlFor="name" className="text-slate-700 text-sm font-medium block mb-1.5">Full Name</label>
                                                <input
                                                    id="name"
                                                    type="text"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="text-slate-700 text-sm font-medium block mb-1.5">Email Address</label>
                                                <input
                                                    id="email"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    placeholder="john@company.com"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="company" className="text-slate-700 text-sm font-medium block mb-1.5">Company / Organization</label>
                                                <input
                                                    id="company"
                                                    type="text"
                                                    value={formData.company}
                                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    placeholder="Acme Inc."
                                                />
                                            </div>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="step3"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-6"
                                    >
                                        <div>
                                            <h3 className="text-lg font-medium text-slate-900 mb-1">Your Message</h3>
                                            <p className="text-sm text-slate-500">Share your vision or challenges</p>
                                        </div>

                                        <textarea
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                                            className="w-full min-h-[200px] px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Footer */}
                        {!isSuccess && (
                            <div className="p-6 border-t border-slate-100 flex items-center justify-between gap-4">
                                {step > 1 ? (
                                    <Button variant="ghost" onClick={() => setStep(step - 1)}>
                                        <ArrowLeft className="w-4 h-4 mr-2" />
                                        Back
                                    </Button>
                                ) : (
                                    <div />
                                )}

                                {step < 3 ? (
                                    <Button
                                        onClick={() => setStep(step + 1)}
                                        disabled={step === 1 && !formData.projectType}
                                        className="bg-blue-600 hover:bg-blue-700"
                                    >
                                        Continue
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                ) : (
                                    <Button
                                        onClick={handleSubmit}
                                        disabled={isSubmitting || !formData.message}
                                        className="bg-blue-600 hover:bg-blue-700"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <ArrowRight className="w-4 h-4 ml-2" />
                                            </>
                                        )}
                                    </Button>
                                )}
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

