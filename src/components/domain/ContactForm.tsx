import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '../ui/Button';
import { useToast } from '../ui/Toast';
import { Send, CheckCircle2 } from 'lucide-react';
import { PRODUCTS_DATA } from '../../data/productsData';

const contactSchema = z.object({
  senderName: z.string().min(2, 'Company or representative name is required'),
  senderEmail: z.string().email('Please provide a valid corporate email'),
  senderPhone: z.string().min(6, 'Please provide your international phone or WhatsApp number'),
  productInterest: z.string().min(1, 'Please select a commodity'),
  estimatedQuantity: z.string().min(1, 'Please specify your target quantity'),
  destinationPort: z.string().min(2, 'Please indicate your destination port & country'),
  inquiryDetails: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      productInterest: 'Indian Rice',
      estimatedQuantity: '2 x 40ft FCL / 50 MT',
      destinationPort: 'Jebel Ali, Dubai / Rotterdam',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Simulate API submission
    await new Promise((res) => setTimeout(res, 800));
    setSubmitted(true);
    toast({
      type: 'success',
      title: 'Export Inquiry Submitted',
      message: `Thank you, ${data.senderName}. Our trade desk will review your specifications for ${data.productInterest} and reply within 24 hours.`,
    });
  };

  return (
    <div className="bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800 p-8 rounded-2xl shadow-sm">
      <div className="mb-6">
        <h3 className="font-heading font-extrabold text-2xl text-navy-900 dark:text-white">
          Request an Export Quote
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
          Fill in your procurement requirements below and our international sales desk will deliver a detailed specification sheet and competitive pricing.
        </p>
      </div>

      {submitted ? (
        <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
          <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center border border-emerald-300">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="font-heading font-bold text-xl text-navy-900 dark:text-white">
            Inquiry Successfully Transmitted!
          </h4>
          <p className="text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
            Our trade team in India (+91 8331851746) is currently reviewing active mandi arrivals and port container freight slots. You will receive a formal quotation within 24 hours.
          </p>
          <div className="pt-2">
            <button
              onClick={() => {
                setSubmitted(false);
                reset();
              }}
              className="text-xs font-semibold text-forest-600 dark:text-emerald-400 hover:underline"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="c-name">
                Buyer / Company Name *
              </label>
              <input
                id="c-name"
                type="text"
                placeholder="e.g. Global Foods Trading Ltd."
                className="w-full text-sm px-4 py-2.5 rounded-lg border border-slate-300 dark:border-navy-800 bg-white dark:bg-navy-900 dark:text-white focus:ring-2 focus:ring-forest-500 outline-none transition"
                aria-invalid={Boolean(errors.senderName)}
                aria-describedby={errors.senderName ? 'contact-senderName-error' : undefined}
                {...register('senderName')}
              />
              {errors.senderName && (
                <p id="contact-senderName-error" role="alert" className="text-[11px] text-rose-500 mt-1">{errors.senderName.message}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="c-email">
                Corporate Email Address *
              </label>
              <input
                id="c-email"
                type="email"
                placeholder="buyer@company.com"
                className="w-full text-sm px-4 py-2.5 rounded-lg border border-slate-300 dark:border-navy-800 bg-white dark:bg-navy-900 dark:text-white focus:ring-2 focus:ring-forest-500 outline-none transition"
                aria-invalid={Boolean(errors.senderEmail)}
                aria-describedby={errors.senderEmail ? 'contact-senderEmail-error' : undefined}
                {...register('senderEmail')}
              />
              {errors.senderEmail && (
                <p id="contact-senderEmail-error" role="alert" className="text-[11px] text-rose-500 mt-1">{errors.senderEmail.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="c-phone">
                Phone / WhatsApp Number *
              </label>
              <input
                id="c-phone"
                type="tel"
                placeholder="+Country Code & Number"
                className="w-full text-sm px-4 py-2.5 rounded-lg border border-slate-300 dark:border-navy-800 bg-white dark:bg-navy-900 dark:text-white focus:ring-2 focus:ring-forest-500 outline-none transition"
                aria-invalid={Boolean(errors.senderPhone)}
                aria-describedby={errors.senderPhone ? 'contact-senderPhone-error' : undefined}
                {...register('senderPhone')}
              />
              {errors.senderPhone && (
                <p id="contact-senderPhone-error" role="alert" className="text-[11px] text-rose-500 mt-1">{errors.senderPhone.message}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="c-product">
                Product of Interest *
              </label>
              <select
                id="c-product"
                className="w-full text-sm px-4 py-2.5 rounded-lg border border-slate-300 dark:border-navy-800 bg-white dark:bg-navy-900 dark:text-white focus:ring-2 focus:ring-forest-500 outline-none transition"
                {...register('productInterest')}
              >
                {PRODUCTS_DATA.map((p) => (
                  <option key={p.id} value={p.title}>
                    {p.title}
                  </option>
                ))}
                <option value="Custom Sourcing Requirement">Custom Sourcing Requirement</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="c-qty">
                Estimated Volume (Tons / Containers) *
              </label>
              <input
                id="c-qty"
                type="text"
                placeholder="e.g., 2 x 40ft FCL / 50 MT"
                className="w-full text-sm px-4 py-2.5 rounded-lg border border-slate-300 dark:border-navy-800 bg-white dark:bg-navy-900 dark:text-white focus:ring-2 focus:ring-forest-500 outline-none transition"
                aria-invalid={Boolean(errors.estimatedQuantity)}
                aria-describedby={errors.estimatedQuantity ? 'contact-estimatedQuantity-error' : undefined}
                {...register('estimatedQuantity')}
              />
              {errors.estimatedQuantity && (
                <p id="contact-estimatedQuantity-error" role="alert" className="text-[11px] text-rose-500 mt-1">{errors.estimatedQuantity.message}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="c-port">
                Destination Port &amp; Country *
              </label>
              <input
                id="c-port"
                type="text"
                placeholder="e.g., Jebel Ali, Dubai / Rotterdam"
                className="w-full text-sm px-4 py-2.5 rounded-lg border border-slate-300 dark:border-navy-800 bg-white dark:bg-navy-900 dark:text-white focus:ring-2 focus:ring-forest-500 outline-none transition"
                aria-invalid={Boolean(errors.destinationPort)}
                aria-describedby={errors.destinationPort ? 'contact-destinationPort-error' : undefined}
                {...register('destinationPort')}
              />
              {errors.destinationPort && (
                <p id="contact-destinationPort-error" role="alert" className="text-[11px] text-rose-500 mt-1">{errors.destinationPort.message}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="c-details">
              Detailed Specifications / Custom Packing (Optional)
            </label>
            <textarea
              id="c-details"
              rows={3}
              placeholder="Specify preferred packing bags/cartons, target FOB/CIF terms, private labeling requirements, or delivery schedule..."
              className="w-full text-sm px-4 py-2.5 rounded-lg border border-slate-300 dark:border-navy-800 bg-white dark:bg-navy-900 dark:text-white focus:ring-2 focus:ring-forest-500 outline-none transition"
              {...register('inquiryDetails')}
            ></textarea>
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              isLoading={isSubmitting}
              className="w-full py-3.5"
              icon={<Send className="w-4 h-4" />}
            >
              SUBMIT EXPORT INQUIRY
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};
