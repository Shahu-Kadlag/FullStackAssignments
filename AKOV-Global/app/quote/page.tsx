import { Suspense } from 'react';
import QuoteForm from '@/components/forms/QuoteForm';

export const metadata = {
  title: 'Request a Quote | AKOV Global',
  description: 'Submit your B2B inquiry for premium agricultural exports from India.',
};

export default function QuotePage() {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-10">
            <h1 className="text-3xl font-serif text-navy mb-4">Request a B2B Quote</h1>
            <p className="text-gray-600">Provide your requirements below and our export team will contact you with pricing and specifications within 24 hours.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-8 md:p-10">
          <Suspense fallback={<div className="p-12 text-center text-gray-500">Loading form...</div>}>
            <QuoteForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
