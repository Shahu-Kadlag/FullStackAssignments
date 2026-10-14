"use client"

import { useActionState } from 'react';
import { useSearchParams } from 'next/navigation';
import { submitQuote, type QuoteFormState } from '@/app/actions/quote';

const initialState: QuoteFormState = { success: false, error: '', enquiryNumber: '', message: '' };

export default function QuoteForm() {
  const searchParams = useSearchParams();
  const preSelectedProduct = searchParams.get('product') || '';

  const [state, formAction, pending] = useActionState(submitQuote, initialState);

  if (state.success) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <div className="w-16 h-16 bg-green-100 text-agrigreen rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <h3 className="text-2xl font-serif text-navy mb-2">Quotation Request Received</h3>
        <p className="text-gray-600 mb-6">{state.message}</p>
        <div className="bg-white inline-block px-6 py-3 rounded-lg border border-gray-100 shadow-sm">
          <p className="text-sm text-gray-500 mb-1">Your Enquiry Number</p>
          <p className="text-xl font-bold text-navy">{state.enquiryNumber}</p>
        </div>
        <p className="text-sm text-gray-500 mt-6">Our export team will review your requirements and contact you shortly.</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-8">
      {state.error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-md border border-red-200 text-sm">
          {state.error}
        </div>
      )}

      {/* 1. Buyer Info */}
      <div>
        <h3 className="text-lg font-medium text-navy mb-4 border-b pb-2">1. Buyer Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="buyerName" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
            <input type="text" id="buyerName" name="buyerName" required className="w-full border border-gray-300 rounded p-2.5 focus:ring-1 focus:ring-navy focus:border-navy outline-none" placeholder="John Doe" />
          </div>
          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">Company Name *</label>
            <input type="text" id="companyName" name="companyName" required className="w-full border border-gray-300 rounded p-2.5 focus:ring-1 focus:ring-navy focus:border-navy outline-none" placeholder="Global Imports LLC" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
            <input type="email" id="email" name="email" required className="w-full border border-gray-300 rounded p-2.5 focus:ring-1 focus:ring-navy focus:border-navy outline-none" placeholder="john@example.com" />
          </div>
          <div>
            <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-1">WhatsApp / Phone *</label>
            <input type="tel" id="whatsapp" name="whatsapp" required className="w-full border border-gray-300 rounded p-2.5 focus:ring-1 focus:ring-navy focus:border-navy outline-none" placeholder="+1 234 567 8900" />
          </div>
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country *</label>
            <input type="text" id="country" name="country" required className="w-full border border-gray-300 rounded p-2.5 focus:ring-1 focus:ring-navy focus:border-navy outline-none" placeholder="e.g. USA, UK, India" />
          </div>
        </div>
      </div>

      {/* 2. Requirement */}
      <div>
        <h3 className="text-lg font-medium text-navy mb-4 border-b pb-2">2. Product Requirement</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-1">Product *</label>
            <input type="text" id="product" name="product" defaultValue={preSelectedProduct} required className="w-full border border-gray-300 rounded p-2.5 focus:ring-1 focus:ring-navy focus:border-navy outline-none" placeholder="e.g. Turmeric Finger, Basmati Rice" />
          </div>
          <div>
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">Quantity Required *</label>
            <input type="text" id="quantity" name="quantity" required className="w-full border border-gray-300 rounded p-2.5 focus:ring-1 focus:ring-navy focus:border-navy outline-none" placeholder="e.g. 20 MT or 1x20ft Container" />
          </div>
          <div>
            <label htmlFor="destinationPort" className="block text-sm font-medium text-gray-700 mb-1">Destination Country / Port *</label>
            <input type="text" id="destinationPort" name="destinationPort" required className="w-full border border-gray-300 rounded p-2.5 focus:ring-1 focus:ring-navy focus:border-navy outline-none" placeholder="e.g. Jebel Ali, UAE" />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Additional Specifications or Packing Requests</label>
            <textarea id="message" name="message" rows={4} className="w-full border border-gray-300 rounded p-2.5 focus:ring-1 focus:ring-navy focus:border-navy outline-none" placeholder="Specify grades, moisture levels, or preferred packaging..."></textarea>
          </div>
        </div>
      </div>

      <button disabled={pending} type="submit" className="w-full bg-agrigreen hover:bg-deepgreen text-white font-bold text-lg py-4 rounded transition-colors shadow-md disabled:opacity-70">
        {pending ? 'Submitting Request...' : 'Submit Request for Quotation'}
      </button>
      <p className="text-xs text-center text-gray-400 mt-4">Protected by reCAPTCHA and subject to AKOV Global Privacy Policy.</p>
    </form>
  );
}
