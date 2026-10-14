"use client"

import { useActionState } from 'react';
import { submitSupplierEnquiry, type SupplierFormState } from '@/app/actions/public';

const initialState: SupplierFormState = { success: false, error: '', message: '' };

export default function SupplierForm() {
  const [state, formAction, pending] = useActionState(submitSupplierEnquiry, initialState);

  if (state.success) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center h-full flex flex-col justify-center items-center">
        <div className="w-16 h-16 bg-green-100 text-agrigreen rounded-full flex items-center justify-center mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <h3 className="text-2xl font-serif text-navy mb-4">Application Received</h3>
        <p className="text-gray-600 mb-2">{state.message}</p>
        <p className="text-sm text-gray-500">Our procurement team will review your application and contact you shortly.</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6">
      {state.error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-xl border border-red-200 text-sm">
          {state.error}
        </div>
      )}
      <div className="grid grid-cols-2 gap-4">
          <div>
              <label className="block text-sm font-semibold text-navy mb-2">Company/Farm Name *</label>
              <input type="text" name="companyName" className="w-full border border-gray-200 rounded-xl p-4 focus:ring-1 focus:ring-teal focus:border-teal outline-none transition-shadow" required />
          </div>
          <div>
              <label className="block text-sm font-semibold text-navy mb-2">Contact Name *</label>
              <input type="text" name="contactName" className="w-full border border-gray-200 rounded-xl p-4 focus:ring-1 focus:ring-teal focus:border-teal outline-none transition-shadow" required />
          </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
          <div>
              <label className="block text-sm font-semibold text-navy mb-2">Email *</label>
              <input type="email" name="email" className="w-full border border-gray-200 rounded-xl p-4 focus:ring-1 focus:ring-teal focus:border-teal outline-none transition-shadow" required />
          </div>
          <div>
              <label className="block text-sm font-semibold text-navy mb-2">WhatsApp / Phone *</label>
              <input type="tel" name="whatsapp" className="w-full border border-gray-200 rounded-xl p-4 focus:ring-1 focus:ring-teal focus:border-teal outline-none transition-shadow" required />
          </div>
      </div>
      <div>
          <label className="block text-sm font-semibold text-navy mb-2">Primary Product(s) Offered *</label>
          <input type="text" name="productOffered" className="w-full border border-gray-200 rounded-xl p-4 focus:ring-1 focus:ring-teal focus:border-teal outline-none transition-shadow" placeholder="e.g., Turmeric, Basmati Rice" required />
      </div>
      <div className="grid grid-cols-2 gap-4">
          <div>
              <label className="block text-sm font-semibold text-navy mb-2">Monthly Capacity (MT) *</label>
              <input type="text" name="monthlyCapacity" className="w-full border border-gray-200 rounded-xl p-4 focus:ring-1 focus:ring-teal focus:border-teal outline-none transition-shadow" required />
          </div>
          <div>
              <label className="block text-sm font-semibold text-navy mb-2">Farm/Facility Location *</label>
              <input type="text" name="location" className="w-full border border-gray-200 rounded-xl p-4 focus:ring-1 focus:ring-teal focus:border-teal outline-none transition-shadow" required />
          </div>
      </div>
      <div className="pt-2">
          <button type="submit" disabled={pending} className="w-full bg-agrigreen text-white px-8 py-4 rounded-xl font-bold hover:bg-deepgreen transition-colors shadow-lg shadow-agrigreen/20 disabled:opacity-70">
              {pending ? 'Submitting...' : 'Submit Application'}
          </button>
      </div>
    </form>
  );
}
