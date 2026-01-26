"use client";

import React, { useState } from "react";

interface JobApplicationFormProps {
  readonly jobTitle: string;
  readonly jobId: string;
  readonly onClose: () => void;
  readonly onOpenPrivacyPolicy?: () => void;
}

const JobApplicationForm = ({ jobTitle, jobId, onClose, onOpenPrivacyPolicy }: JobApplicationFormProps) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    linkedin: "",
    portfolio: "",
    coverLetter: "",
    resumeLink: "",
    makeResumePublic: false,
    yearsOfExperience: "",
    currentCompany: "",
    noticePeriod: "",
    expectedSalary: "",
    referralSource: "",
    referralEmail: "",
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error" | "duplicate">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    const urlRegex = /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;
    if (!formData.resumeLink.trim()) {
      newErrors.resumeLink = "Resume link is required";
    } else if (!urlRegex.test(formData.resumeLink)) {
      newErrors.resumeLink = "Please enter a valid URL";
    }

    if (!formData.coverLetter.trim()) {
      newErrors.coverLetter = "Cover letter is required";
    } else if (formData.coverLetter.trim().length < 100) {
      newErrors.coverLetter = "Cover letter must be at least 100 characters";
    }

    if (!formData.yearsOfExperience) {
      newErrors.yearsOfExperience = "Years of experience is required";
    }

    if (!formData.makeResumePublic) {
      newErrors.makeResumePublic = "You must confirm that your resume link is publicly accessible";
    }

    if (formData.referralSource === "referral") {
      if (!formData.referralEmail.trim()) {
        newErrors.referralEmail = "Referrer's email is required for employee referral";
      } else if (!emailRegex.test(formData.referralEmail)) {
        newErrors.referralEmail = "Please enter a valid email address";
      }
    }

    if (!formData.consent) {
      newErrors.consent = "You must agree to the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Prepare application data
      const applicationData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        linkedin: formData.linkedin,
        portfolio: formData.portfolio,
        yearsOfExperience: formData.yearsOfExperience,
        currentCompany: formData.currentCompany,
        noticePeriod: formData.noticePeriod,
        expectedSalary: formData.expectedSalary,
        resumeLink: formData.resumeLink,
        makeResumePublic: formData.makeResumePublic,
        coverLetter: formData.coverLetter,
        referralSource: formData.referralSource,
        referralEmail: formData.referralEmail,
        consent: formData.consent,
        jobTitle: jobTitle,
        jobId: jobId,
      };

      // Submit to API route (which calls Google Apps Script)
      const response = await fetch('/api/apply', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(applicationData),
      });

      const result = await response.json();

      if (result.success) {
        console.log("Application submitted successfully:", applicationData);
        setSubmitStatus("success");
        setSubmitMessage(result.message);

        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          linkedin: "",
          portfolio: "",
          coverLetter: "",
          resumeLink: "",
          makeResumePublic: false,
          yearsOfExperience: "",
          currentCompany: "",
          noticePeriod: "",
          expectedSalary: "",
          referralSource: "",
          referralEmail: "",
          consent: false,
        });
        
        // Close modal after 3 seconds
        setTimeout(() => {
          onClose();
        }, 3000);
      } else {
        // Check if it's a duplicate application
        if (result.message.includes("already applied")) {
          setSubmitStatus("duplicate");
          setSubmitMessage(result.message);
        } else {
          setSubmitStatus("error");
          setSubmitMessage(result.message);
        }
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      setSubmitStatus("error");
      setSubmitMessage("An unexpected error occurred. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl my-8 relative animate-fade-in">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white px-8 py-6 rounded-t-2xl flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold mb-1">Apply for Position</h2>
            <p className="text-white/90 text-sm">{jobTitle}</p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Success Message */}
        {submitStatus === "success" && (
          <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center z-10">
            <div className="text-center px-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h3>
              <p className="text-gray-600">
                {submitMessage || "Thank you for your application. We will review it and get back to you soon."}
              </p>
            </div>
          </div>
        )}

        {/* Duplicate Application Message */}
        {submitStatus === "duplicate" && (
          <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center z-10">
            <div className="text-center px-8">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Already Applied</h3>
              <p className="text-gray-600 mb-6">
                Thank you for your interest! We have already received your application for this position. Our team is currently reviewing it and will contact you if you are shortlisted.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-3 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Error Message */}
        {submitStatus === "error" && (
          <div className="mx-8 mt-6 bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
            <p className="font-medium">{submitMessage || "Something went wrong. Please try again later."}</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-8 py-6 max-h-[calc(100vh-200px)] overflow-y-auto">
          <div className="space-y-6">
            {/* Personal Information */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Personal Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2.5 border ${
                      errors.firstName ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all`}
                    placeholder="First Name"
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2.5 border ${
                      errors.lastName ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all`}
                    placeholder="Last Name"
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2.5 border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all`}
                    placeholder="Email Address"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2.5 border ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all`}
                    placeholder="Phone Number"
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-2">
                    LinkedIn Profile
                  </label>
                  <input
                    type="url"
                    id="linkedin"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all"
                    placeholder="https://linkedin.com/in/username"
                  />
                </div>

                <div>
                  <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700 mb-2">
                    Portfolio/Website
                  </label>
                  <input
                    type="url"
                    id="portfolio"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all"
                    placeholder="https://username.com"
                  />
                </div>
              </div>
            </div>

            {/* Professional Information */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Professional Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="yearsOfExperience" className="block text-sm font-medium text-gray-700 mb-2">
                    Years of Experience <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="yearsOfExperience"
                    name="yearsOfExperience"
                    value={formData.yearsOfExperience}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2.5 border ${
                      errors.yearsOfExperience ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all`}
                  >
                    <option value="">Select experience</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                  {errors.yearsOfExperience && (
                    <p className="mt-1 text-sm text-red-500">{errors.yearsOfExperience}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="currentCompany" className="block text-sm font-medium text-gray-700 mb-2">
                    Current/Last Company
                  </label>
                  <input
                    type="text"
                    id="currentCompany"
                    name="currentCompany"
                    value={formData.currentCompany}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="noticePeriod" className="block text-sm font-medium text-gray-700 mb-2">
                    Notice Period
                  </label>
                  <select
                    id="noticePeriod"
                    name="noticePeriod"
                    value={formData.noticePeriod}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select notice period</option>
                    <option value="immediate">Immediate</option>
                    <option value="15-days">15 days</option>
                    <option value="1-month">1 month</option>
                    <option value="2-months">2 months</option>
                    <option value="3-months">3 months</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="expectedSalary" className="block text-sm font-medium text-gray-700 mb-2">
                    Expected Salary
                  </label>
                  <input
                    type="text"
                    id="expectedSalary"
                    name="expectedSalary"
                    value={formData.expectedSalary}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all"
                    placeholder="Expected Salary"
                  />
                </div>
              </div>
            </div>

            {/* Resume Link */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Documents</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="resumeLink" className="block text-sm font-medium text-gray-700 mb-2">
                    Resume/CV Link <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="url"
                    id="resumeLink"
                    name="resumeLink"
                    value={formData.resumeLink}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2.5 border ${
                      errors.resumeLink ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all`}
                    placeholder="https://drive.google.com/file/d/... or https://dropbox.com/..."
                  />
                  {errors.resumeLink && <p className="mt-1 text-sm text-red-500">{errors.resumeLink}</p>}
                  <p className="mt-2 text-xs text-gray-500">
                    💡 Please share a link to your resume from Google Drive, Dropbox, OneDrive, or any accessible URL
                  </p>
                </div>

                {/* Make Resume Public Checkbox */}
                <div className={`border rounded-lg p-4 ${
                  errors.makeResumePublic ? "bg-red-50 border-red-300" : "bg-blue-50 border-blue-200"
                }`}>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="makeResumePublic"
                      checked={formData.makeResumePublic}
                      onChange={handleInputChange}
                      className="mt-1 w-5 h-5 text-[var(--primary)] border-gray-300 rounded focus:ring-2 focus:ring-[var(--primary)]"
                    />
                    <div>
                      <span className="text-sm font-medium text-gray-900 block mb-1">
                        Make my resume publicly accessible <span className="text-red-500">*</span>
                      </span>
                      <span className="text-xs text-gray-600">
                        By checking this, you confirm that your resume link has public viewing permissions and can be accessed by our hiring team without requiring additional access requests.
                      </span>
                    </div>
                  </label>
                  {errors.makeResumePublic && (
                    <p className="mt-2 text-sm text-red-500 ml-8">{errors.makeResumePublic}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Cover Letter */}
            <div>
              <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-2">
                Cover Letter <span className="text-red-500">*</span>
              </label>
              <textarea
                id="coverLetter"
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleInputChange}
                rows={6}
                className={`w-full px-4 py-2.5 border ${
                  errors.coverLetter ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all resize-none`}
                placeholder="Tell us why you're interested in this position and what makes you a great fit..."
              />
              <div className="flex justify-between items-center mt-1">
                {errors.coverLetter ? (
                  <p className="text-sm text-red-500">{errors.coverLetter}</p>
                ) : (
                  <p className="text-sm text-gray-500">Minimum 100 characters</p>
                )}
                <p className="text-sm text-gray-500">{formData.coverLetter.length} characters</p>
              </div>
            </div>

            {/* Additional Information */}
            <div className="border-t pt-6">
              <label htmlFor="referralSource" className="block text-sm font-medium text-gray-700 mb-2">
                How did you hear about us?
              </label>
              <select
                id="referralSource"
                name="referralSource"
                value={formData.referralSource}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all"
              >
                <option value="">Select an option</option>
                <option value="linkedin">LinkedIn</option>
                <option value="job-board">Job Board</option>
                <option value="company-website">Company Website</option>
                <option value="referral">Employee Referral</option>
                <option value="social-media">Social Media</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Referral Email - Conditional */}
            {formData.referralSource === "referral" && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <label htmlFor="referralEmail" className="block text-sm font-medium text-gray-700 mb-2">
                  Referrer's Official Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="referralEmail"
                  name="referralEmail"
                  value={formData.referralEmail}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2.5 border ${
                    errors.referralEmail ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all bg-white`}
                  placeholder="referrer@company.com"
                />
                {errors.referralEmail && (
                  <p className="mt-1 text-sm text-red-500">{errors.referralEmail}</p>
                )}
                <p className="mt-2 text-xs text-gray-600">
                  Please provide the official company email address of the employee who referred you
                </p>
              </div>
            )}

            {/* Consent */}
            <div className="border-t pt-6">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleInputChange}
                  className="mt-1 w-5 h-5 text-[var(--primary)] border-gray-300 rounded focus:ring-2 focus:ring-[var(--primary)]"
                />
                <span className="text-sm text-gray-700">
                  I agree to the processing of my personal data in accordance with the{" "}
                  <button 
                    type="button"
                    onClick={onOpenPrivacyPolicy}
                    className="text-[var(--primary)] hover:underline"
                  >
                    Privacy Policy
                  </button>{" "}
                  and consent to being contacted regarding this application.{" "}
                  <span className="text-red-500">*</span>
                </span>
              </label>
              {errors.consent && <p className="mt-1 text-sm text-red-500 ml-8">{errors.consent}</p>}
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8 flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Submitting...
                </>
              ) : (
                <>
                  Submit Application
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApplicationForm;
