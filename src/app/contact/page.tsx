"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  ChevronDown,
  Search,
  Mail,
  Phone,
  Building2,
  User,
  Sparkles,
  ArrowRight,
  Loader2,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import FadeUp from "@/components/ui/FadeUp";

interface Country {
  name: string;
  code: string;
  dialCode: string;
  flag: string;
}

const COUNTRIES: Country[] = [
  { name: "United States", code: "US", dialCode: "+1", flag: "🇺🇸" },
  { name: "United Kingdom", code: "GB", dialCode: "+44", flag: "🇬🇧" },
  { name: "Canada", code: "CA", dialCode: "+1", flag: "🇨🇦" },
  { name: "India", code: "IN", dialCode: "+91", flag: "🇮🇳" },
  { name: "Australia", code: "AU", dialCode: "+61", flag: "🇦🇺" },
  { name: "Germany", code: "DE", dialCode: "+49", flag: "🇩🇪" },
  { name: "France", code: "FR", dialCode: "+33", flag: "🇫🇷" },
  { name: "Japan", code: "JP", dialCode: "+81", flag: "🇯🇵" },
  { name: "Singapore", code: "SG", dialCode: "+65", flag: "🇸🇬" },
  { name: "United Arab Emirates", code: "AE", dialCode: "+971", flag: "🇦🇪" },
  { name: "Brazil", code: "BR", dialCode: "+55", flag: "🇧🇷" },
  { name: "South Africa", code: "ZA", dialCode: "+27", flag: "🇿🇦" },
  { name: "Netherlands", code: "NL", dialCode: "+31", flag: "🇳🇱" },
  { name: "Switzerland", code: "CH", dialCode: "+41", flag: "🇨🇭" },
  { name: "Spain", code: "ES", dialCode: "+34", flag: "🇪🇸" },
  { name: "Italy", code: "IT", dialCode: "+39", flag: "🇮🇹" },
  { name: "Mexico", code: "MX", dialCode: "+52", flag: "🇲🇽" },
  { name: "New Zealand", code: "NZ", dialCode: "+64", flag: "🇳🇿" },
  { name: "Hong Kong", code: "HK", dialCode: "+852", flag: "🇭🇰" },
  { name: "Sweden", code: "SE", dialCode: "+46", flag: "🇸🇪" },
  { name: "Norway", code: "NO", dialCode: "+47", flag: "🇳🇴" },
  { name: "Denmark", code: "DK", dialCode: "+45", flag: "🇩🇰" },
  { name: "Ireland", code: "IE", dialCode: "+353", flag: "🇮🇪" },
  { name: "Saudi Arabia", code: "SA", dialCode: "+966", flag: "🇸🇦" },
  { name: "South Korea", code: "KR", dialCode: "+82", flag: "🇰🇷" },
];

const INDUSTRIES = [
  "Artificial Intelligence & ML",
  "Software-as-a-Service (SaaS)",
  "E-Commerce & Retail",
  "FinTech & Blockchain",
  "Healthcare & BioTech",
  "Education & EdTech",
  "Media & Entertainment",
  "Creative Agency & Design",
  "Cybersecurity",
  "Other (Type custom...)",
];

export default function ContactPage() {
  const [formType, setFormType] = useState<"individual" | "corporation">("individual");
  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState("");
  const [idea, setIdea] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Country picker states
  const [selectedCountry, setSelectedCountry] = useState<Country>(COUNTRIES[0]);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");

  // Industry dropdown states
  const [isIndustryOpen, setIsIndustryOpen] = useState(false);

  // Submission/Validation states
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Click outside references
  const countryDropdownRef = useRef<HTMLDivElement>(null);
  const industryDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        countryDropdownRef.current &&
        !countryDropdownRef.current.contains(event.target as Node)
      ) {
        setIsCountryOpen(false);
      }
      if (
        industryDropdownRef.current &&
        !industryDropdownRef.current.contains(event.target as Node)
      ) {
        setIsIndustryOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter countries based on search term
  const filteredCountries = COUNTRIES.filter(
    (c) =>
      c.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
      c.dialCode.includes(countrySearch)
  );

  // Filter industries based on current input text
  const filteredIndustries =
    industry.trim() === ""
      ? INDUSTRIES
      : INDUSTRIES.filter((ind) =>
        ind.toLowerCase().includes(industry.toLowerCase())
      );

  // Form validation handler
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (formType === "corporation" && !companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }

    if (!industry.trim()) {
      newErrors.industry = "Industry selection or description is required";
    }

    if (!idea.trim()) {
      newErrors.idea = "Please describe your idea or project";
    } else if (idea.trim().length < 10) {
      newErrors.idea = "Please provide a bit more detail (minimum 10 characters)";
    }

    if (!email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!phone.trim()) {
      newErrors.phone = "Mobile number is required";
    } else {
      const cleanPhone = phone.replace(/[^0-9]/g, "");
      if (cleanPhone.length < 6) {
        newErrors.phone = "Please enter a valid mobile number";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  // Reset form
  const handleReset = () => {
    setCompanyName("");
    setIndustry("");
    setIdea("");
    setEmail("");
    setPhone("");
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen pt-16 md:pt-28 pb-16 px-6 md:px-12 lg:px-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

        {/* Left Column - Hero Content & Direct Connect */}
        <div className="lg:col-span-5 space-y-10">
          <FadeUp>
            <h1 className="font-mono font-bold text-4xl md:text-5xl lg:text-6xl text-[var(--text-primary)] leading-tight">
              Lets Connect
            </h1>
            <p className="font-serif text-[var(--text-secondary)] text-xl mt-4 leading-relaxed max-w-lg">
              Have an idea, project, or venture in mind? Defy linear thinking and let's construct a state-of-the-art solution together.
            </p>
          </FadeUp>

          {/* Direct contact card */}
          <FadeUp delay={0.2}>
            <div className="bg-[var(--surface)]/30 backdrop-blur-xl border border-[var(--border)] rounded-2xl p-8 relative overflow-hidden group">
              {/* Subtle background glow */}
              <div className="absolute -right-16 -top-16 w-36 h-36 rounded-full bg-[var(--accent)]/5 blur-3xl group-hover:bg-[var(--accent)]/10 transition-colors duration-500" />

              <h3 className="font-mono text-s font-bold uppercase tracking-widest text-[var(--text-muted)] mb-3 flex items-center gap-2">
                Quick Access
              </h3>
              <p className="font-body text-[var(--text-secondary)] text-sm mb-4 leading-relaxed">
                Prefer bypassing forms? Drop us a line directly to get in touch with our lead engineers.
              </p>
              <a
                href="mailto:support@antilineartech.com"
                className="text-xl font-bold text-[var(--accent)] hover:underline block break-words"
              >
                support@antilineartech.com
              </a>
            </div>
          </FadeUp>

        </div>

        {/* Right Column - Form Container */}
        <div className="lg:col-span-7 w-full">
          <FadeUp delay={0.1}>
            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 md:p-10 shadow-2xl relative">

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form-fields"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Segmented Control / Tab Switcher */}
                      <div className="space-y-2">
                        <label className="block text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)]">
                          I am connecting as an:
                        </label>
                        <div className="grid grid-cols-2 bg-[var(--surface-2)] p-1 rounded-xl border border-[var(--border)] relative">
                          <button
                            type="button"
                            onClick={() => {
                              setFormType("individual");
                              // Clean company errors if swapping
                              const newErr = { ...errors };
                              delete newErr.companyName;
                              setErrors(newErr);
                            }}
                            className={cn(
                              "relative z-10 py-3 rounded-lg text-sm font-mono tracking-wider transition-all duration-300 uppercase flex items-center justify-center gap-2",
                              formType === "individual"
                                ? "text-[var(--bg)] font-bold"
                                : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                            )}
                          >
                            <User className="w-4 h-4" /> Individual
                          </button>
                          <button
                            type="button"
                            onClick={() => setFormType("corporation")}
                            className={cn(
                              "relative z-10 py-3 rounded-lg text-sm font-mono tracking-wider transition-all duration-300 uppercase flex items-center justify-center gap-2",
                              formType === "corporation"
                                ? "text-[var(--bg)] font-bold"
                                : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                            )}
                          >
                            <Building2 className="w-4 h-4" /> Corporation
                          </button>

                          {/* Sliding Background */}
                          <motion.div
                            layoutId="activeTabGlow"
                            className="absolute top-1 bottom-1 rounded-lg bg-[var(--accent)]"
                            style={{
                              left: formType === "individual" ? "4px" : "50%",
                              width: "calc(50% - 6px)",
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        </div>
                      </div>

                      {/* Animated Fields Container */}
                      <div className="space-y-6">

                        {/* Company Name (Corporation Only) */}
                        <AnimatePresence initial={false}>
                          {formType === "corporation" && (
                            <motion.div
                              initial={{ opacity: 0, height: 0, marginTop: 0 }}
                              animate={{ opacity: 1, height: "auto", marginTop: 24 }}
                              exit={{ opacity: 0, height: 0, marginTop: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="space-y-2">
                                <label className="block text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)]">
                                  Company Name
                                </label>
                                <input
                                  type="text"
                                  placeholder="e.g. Acme Corp"
                                  value={companyName}
                                  onChange={(e) => {
                                    setCompanyName(e.target.value);
                                    if (errors.companyName) {
                                      const newErr = { ...errors };
                                      delete newErr.companyName;
                                      setErrors(newErr);
                                    }
                                  }}
                                  className={cn(
                                    "w-full bg-[var(--surface-2)] border rounded-xl px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300",
                                    errors.companyName ? "border-red-500" : "border-[var(--border)]"
                                  )}
                                />
                                {errors.companyName && (
                                  <p className="text-red-500 text-xs font-mono mt-1">{errors.companyName}</p>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Industry Dropdown or Custom Enterable Combobox */}
                        <div className="space-y-2" ref={industryDropdownRef}>
                          <label className="block text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)]">
                            Industry
                          </label>
                          <div className="relative flex items-center">
                            <input
                              type="text"
                              placeholder="Select an industry or type custom..."
                              value={industry}
                              onChange={(e) => {
                                setIndustry(e.target.value);
                                setIsIndustryOpen(true);
                                if (errors.industry) {
                                  const newErr = { ...errors };
                                  delete newErr.industry;
                                  setErrors(newErr);
                                }
                              }}
                              onFocus={() => setIsIndustryOpen(true)}
                              className={cn(
                                "w-full bg-[var(--surface-2)] border rounded-xl pl-4 pr-10 py-3 text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300",
                                errors.industry ? "border-red-500" : "border-[var(--border)]"
                              )}
                            />
                            <button
                              type="button"
                              onClick={() => setIsIndustryOpen(!isIndustryOpen)}
                              className="absolute right-3 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors p-1"
                            >
                              <ChevronDown className={cn("w-5 h-5 transition-transform duration-300", isIndustryOpen && "rotate-180")} />
                            </button>
                          </div>

                          {/* Dropdown Box */}
                          <AnimatePresence>
                            {isIndustryOpen && (
                              <motion.div
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 5 }}
                                transition={{ duration: 0.15 }}
                                className="absolute z-30 w-[calc(100%-2px)] left-[1px] mt-1 bg-[var(--surface-2)] border border-[var(--border)] rounded-xl shadow-xl max-h-56 overflow-y-auto no-scrollbar"
                              >
                                {filteredIndustries.map((ind) => (
                                  <button
                                    key={ind}
                                    type="button"
                                    onClick={() => {
                                      if (ind === "Other (Type custom...)") {
                                        setIndustry("");
                                      } else {
                                        setIndustry(ind);
                                      }
                                      setIsIndustryOpen(false);
                                      if (errors.industry) {
                                        const newErr = { ...errors };
                                        delete newErr.industry;
                                        setErrors(newErr);
                                      }
                                    }}
                                    className="w-full text-left px-4 py-3 text-sm text-[var(--text-primary)] hover:bg-[var(--surface-3)] transition-colors border-b border-[var(--border)] last:border-0 flex items-center justify-between"
                                  >
                                    <span>{ind}</span>
                                    {industry === ind && <Check className="w-4 h-4 text-[var(--accent)]" />}
                                  </button>
                                ))}
                                {filteredIndustries.length === 0 && (
                                  <div className="px-4 py-3 text-xs text-[var(--text-muted)] italic">
                                    Press Enter or type custom industry above...
                                  </div>
                                )}
                              </motion.div>
                            )}
                          </AnimatePresence>
                          {errors.industry && (
                            <p className="text-red-500 text-xs font-mono mt-1">{errors.industry}</p>
                          )}
                        </div>

                        {/* Idea Description Box */}
                        <div className="space-y-2">
                          <div className="flex justify-between items-baseline">
                            <label className="block text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)]">
                              Describe your Idea
                            </label>
                            <span className={cn(
                              "text-[10px] font-mono",
                              idea.length < 10 ? "text-[var(--text-muted)]" : "text-emerald-500"
                            )}>
                              {idea.length} characters
                            </span>
                          </div>
                          <textarea
                            placeholder="Tell us about the project goal, scope, and target timelines..."
                            value={idea}
                            onChange={(e) => {
                              setIdea(e.target.value);
                              if (errors.idea) {
                                const newErr = { ...errors };
                                delete newErr.idea;
                                setErrors(newErr);
                              }
                            }}
                            rows={4}
                            className={cn(
                              "w-full bg-[var(--surface-2)] border rounded-xl px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300 resize-none",
                              errors.idea ? "border-red-500" : "border-[var(--border)]"
                            )}
                          />
                          {errors.idea && (
                            <p className="text-red-500 text-xs font-mono mt-1">{errors.idea}</p>
                          )}
                        </div>

                        {/* Email Input */}
                        <div className="space-y-2">
                          <label className="block text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)]">
                            Email Address
                          </label>
                          <input
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                              if (errors.email) {
                                const newErr = { ...errors };
                                delete newErr.email;
                                setErrors(newErr);
                              }
                            }}
                            className={cn(
                              "w-full bg-[var(--surface-2)] border rounded-xl px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300",
                              errors.email ? "border-red-500" : "border-[var(--border)]"
                            )}
                          />
                          {errors.email && (
                            <p className="text-red-500 text-xs font-mono mt-1">{errors.email}</p>
                          )}
                        </div>

                        {/* Contact Information - Mobile Number with Flag/Country Code Picker */}
                        <div className="space-y-2" ref={countryDropdownRef}>
                          <label className="block text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)]">
                            Mobile Number
                          </label>
                          <div className="flex gap-2">
                            {/* Dial Code Button Trigger */}
                            <div className="relative">
                              <button
                                type="button"
                                onClick={() => setIsCountryOpen(!isCountryOpen)}
                                className="flex items-center gap-1.5 bg-[var(--surface-2)] border border-[var(--border)] rounded-xl px-3 py-3 text-[var(--text-primary)] hover:bg-[var(--surface-3)] transition-colors h-[48px] focus:outline-none focus:border-accent"
                              >
                                <span className="text-lg leading-none">{selectedCountry.flag}</span>
                                <span className="font-mono text-sm font-semibold">{selectedCountry.dialCode}</span>
                                <ChevronDown className={cn("w-4 h-4 text-[var(--text-muted)] transition-transform", isCountryOpen && "rotate-180")} />
                              </button>

                              {/* Country Picker Dropdown */}
                              <AnimatePresence>
                                {isCountryOpen && (
                                  <motion.div
                                    initial={{ opacity: 0, y: -5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -5 }}
                                    transition={{ duration: 0.15 }}
                                    className="absolute z-40 left-0 bottom-full mb-2 w-64 md:w-72 bg-[var(--surface-2)] border border-[var(--border)] rounded-xl shadow-xl p-3 flex flex-col gap-2"
                                  >
                                    <div className="relative flex items-center">
                                      <Search className="absolute left-2.5 w-4 h-4 text-[var(--text-muted)]" />
                                      <input
                                        type="text"
                                        placeholder="Search country or code..."
                                        value={countrySearch}
                                        onChange={(e) => setCountrySearch(e.target.value)}
                                        className="w-full bg-[var(--surface-3)] border border-[var(--border)] rounded-lg pl-9 pr-8 py-1.5 text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-accent"
                                        autoFocus
                                      />
                                      {countrySearch && (
                                        <button
                                          type="button"
                                          onClick={() => setCountrySearch("")}
                                          className="absolute right-2 text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                                        >
                                          <X className="w-3.5 h-3.5" />
                                        </button>
                                      )}
                                    </div>
                                    <div className="max-h-48 overflow-y-auto no-scrollbar flex flex-col">
                                      {filteredCountries.map((c) => (
                                        <button
                                          key={c.code}
                                          type="button"
                                          onClick={() => {
                                            setSelectedCountry(c);
                                            setIsCountryOpen(false);
                                            setCountrySearch("");
                                            if (errors.phone) {
                                              const newErr = { ...errors };
                                              delete newErr.phone;
                                              setErrors(newErr);
                                            }
                                          }}
                                          className="flex items-center justify-between px-2.5 py-2 rounded-lg hover:bg-[var(--surface-3)] transition-colors text-left text-xs"
                                        >
                                          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
                                            <span className="text-base flex-shrink-0">{c.flag}</span>
                                            <span className="text-[var(--text-primary)] font-medium truncate">{c.name}</span>
                                          </div>
                                          <span className="font-mono text-[var(--text-muted)] text-[10px] ml-2 flex-shrink-0">
                                            {c.dialCode}
                                          </span>
                                        </button>
                                      ))}
                                      {filteredCountries.length === 0 && (
                                        <div className="text-center py-4 text-xs text-[var(--text-muted)]">
                                          No match found
                                        </div>
                                      )}
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>

                            {/* Mobile Number Entry */}
                            <input
                              type="tel"
                              placeholder="123 456 7890"
                              value={phone}
                              onChange={(e) => {
                                const val = e.target.value.replace(/[^0-9\s-]/g, "");
                                setPhone(val);
                                if (errors.phone) {
                                  const newErr = { ...errors };
                                  delete newErr.phone;
                                  setErrors(newErr);
                                }
                              }}
                              className={cn(
                                "flex-grow bg-[var(--surface-2)] border rounded-xl px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300 h-[48px]",
                                errors.phone ? "border-red-500" : "border-[var(--border)]"
                              )}
                            />
                          </div>
                          {errors.phone && (
                            <p className="text-red-500 text-xs font-mono mt-1">{errors.phone}</p>
                          )}
                        </div>

                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[var(--accent)] text-[var(--bg)] font-mono uppercase tracking-widest font-semibold text-sm py-4 rounded-full transition-all duration-300 hover:opacity-90 active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[var(--accent)]/10"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Constructing...
                          </>
                        ) : (
                          <>
                            Send
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  // Success/Thank-You Card State
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-8 space-y-6"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/25 mb-2 animate-bounce">
                      <Sparkles className="w-8 h-8" />
                    </div>

                    <div className="space-y-2">
                      <h2 className="font-display font-bold text-3xl text-[var(--text-primary)]">
                        Connection Formulated
                      </h2>
                      <p className="font-serif text-[var(--text-secondary)] text-sm max-w-md mx-auto">
                        Your specifications have been cataloged. Our engineers will audit details and reach out within 24 hours.
                      </p>
                    </div>

                    {/* Receipt Details Box */}
                    <div className="bg-[var(--surface-2)] border border-[var(--border)] rounded-2xl p-6 text-left max-w-md mx-auto space-y-3 font-mono text-xs">
                      <div className="flex justify-between border-b border-[var(--border)] pb-2">
                        <span className="text-[var(--text-muted)]">CHANNEL</span>
                        <span className="text-[var(--text-primary)] uppercase">{formType}</span>
                      </div>
                      {formType === "corporation" && companyName && (
                        <div className="flex justify-between border-b border-[var(--border)] pb-2">
                          <span className="text-[var(--text-muted)]">CORP</span>
                          <span className="text-[var(--text-primary)] truncate max-w-[200px]">{companyName}</span>
                        </div>
                      )}
                      <div className="flex justify-between border-b border-[var(--border)] pb-2">
                        <span className="text-[var(--text-muted)]">INDUSTRY</span>
                        <span className="text-[var(--text-primary)] truncate max-w-[200px]">{industry}</span>
                      </div>
                      <div className="flex justify-between border-b border-[var(--border)] pb-2">
                        <span className="text-[var(--text-muted)]">EMAIL</span>
                        <span className="text-[var(--text-primary)] truncate max-w-[200px]">{email}</span>
                      </div>
                      <div className="flex justify-between pb-1">
                        <span className="text-[var(--text-muted)]">CONTACT</span>
                        <span className="text-[var(--text-primary)] font-semibold">{selectedCountry.dialCode} {phone}</span>
                      </div>
                    </div>

                    <button
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 border border-[var(--text-primary)] text-[var(--text-primary)] font-mono uppercase tracking-wider text-xs px-6 py-3 rounded-full hover:bg-[var(--text-primary)] hover:text-[var(--bg)] transition-all duration-300"
                    >
                      Establish New Connection
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </FadeUp>
        </div>

      </div>
    </div>
  );
}

