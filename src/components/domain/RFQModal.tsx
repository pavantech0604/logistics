import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { useToast } from '../ui/Toast';
import { Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { PRODUCTS_DATA } from '../../data/productsData';
import { QuoteDefaults } from '../../types';

const rfqSchema = z.object({
  buyerName: z.string().min(2, 'Name or company name must be at least 2 characters'),
  email: z.string().email('Please enter a valid business email address'),
  phone: z.string().min(6, 'Please enter a valid phone or WhatsApp number with country code'),
  product: z.string().min(1, 'Please select a product of interest'),
  quantity: z.string().min(1, 'Please specify an estimated quantity'),
  unit: z.enum(['MT', 'Containers', 'Cartons', 'Kilograms']),
  incoterm: z.enum(['FOB', 'CIF', 'CFR', 'EXW']),
  destinationPort: z.string().min(2, 'Please enter target discharge port & country'),
  notes: z.string().optional(),
});

type RFQFormValues = z.infer<typeof rfqSchema>;

interface RFQModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
  quoteDefaults?: QuoteDefaults;
}

export const RFQModal: React.FC<RFQModalProps> = ({
  isOpen,
  onClose,
  defaultProduct,
  quoteDefaults,
}) => {
  const { toast } = useToast();
  const [reference, setReference] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<RFQFormValues | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RFQFormValues>({
    resolver: zodResolver(rfqSchema),
    defaultValues: {
      product: defaultProduct || 'Indian Rice',
      unit: 'MT',
      incoterm: 'CIF',
      quantity: quoteDefaults?.quantity || '25',
      destinationPort: quoteDefaults?.destinationPort || 'Jebel Ali, Dubai (UAE)',
    },
  });

  // Reset when dialog opens with specific product
  React.useEffect(() => {
    if (defaultProduct) {
      reset({
        product: defaultProduct,
        unit: 'MT',
        incoterm: 'CIF',
        quantity: quoteDefaults?.quantity || '25',
        destinationPort: quoteDefaults?.destinationPort || 'Jebel Ali, Dubai (UAE)',
      });
    }
  }, [defaultProduct, quoteDefaults, reset]);

  const onSubmit = async (data: RFQFormValues) => {
    // Simulate API submission
    await new Promise((res) => setTimeout(res, 800));

    setReference(`HLL-${100000 + crypto.getRandomValues(new Uint32Array(1))[0] % 900000}`);
    setSubmittedData(data);
    setIsSubmitted(true);

    toast({
      type: 'success',
      title: 'RFQ Registered Successfully',
      message: `Your inquiry for ${data.quantity} ${data.unit} of ${data.product} has been logged with our trade desk.`,
    });
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
    reset();
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={isSubmitted ? 'Quotation Request Confirmed' : 'Request an Export Quotation'}
      subtitle={
        isSubmitted
          ? 'Reference Number: ' + reference
          : 'Submit your purchase specifications for official FOB or CIF quotation with complete packing parameters.'
      }
      badge="Global B2B Desk"
      maxWidth="xl"
    >
      {isSubmitted && submittedData ? (
        <div className="py-6 text-center space-y-5 animate-in fade-in duration-300">
          <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center border border-emerald-300 dark:border-emerald-700 shadow-md">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <div>
            <h4 className="text-xl font-heading font-extrabold text-navy-900 dark:text-white">
              Thank You, {submittedData.buyerName}!
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-md mx-auto leading-relaxed">
              We have dispatched your quotation file request for{' '}
              <strong className="text-navy-900 dark:text-white">
                {submittedData.quantity} {submittedData.unit} of {submittedData.product}
              </strong>{' '}
              to <strong className="text-navy-900 dark:text-white">{submittedData.destinationPort}</strong> ({submittedData.incoterm}).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800 text-xs text-left space-y-2 max-w-md mx-auto">
            <div className="flex justify-between py-1 border-b border-slate-200 dark:border-navy-800">
              <span className="text-slate-500">Contact Email:</span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">{submittedData.email}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-200 dark:border-navy-800">
              <span className="text-slate-500">Target Incoterm:</span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">{submittedData.incoterm}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-slate-500">Turnaround Time:</span>
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">Within 24 Hours</span>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`https://wa.me/918331851746?text=Hello%20Hind%20Legacy%20Logistics,%20I%20just%20submitted%20an%20RFQ%20for%20${encodeURIComponent(
                submittedData.quantity + ' ' + submittedData.unit + ' of ' + submittedData.product
              )}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-5 py-3 rounded-lg transition"
            >
              <span>Instant Confirmation via WhatsApp</span>
            </a>
            <Button variant="outline" size="md" onClick={handleClose}>
              Done
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1" htmlFor="buyerName">
                Company / Buyer Name *
              </label>
              <input
                id="buyerName"
                type="text"
                placeholder="e.g. Al-Bustan Trading LLC"
                className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-navy-800 bg-white dark:bg-navy-950 dark:text-white focus:ring-2 focus:ring-forest-500 outline-none transition"
                aria-invalid={Boolean(errors.buyerName)}
                aria-describedby={errors.buyerName ? 'rfq-buyerName-error' : undefined}
                {...register('buyerName')}
              />
              {errors.buyerName && (
                <p id="rfq-buyerName-error" role="alert" className="text-[11px] text-rose-500 mt-1">{errors.buyerName.message}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1" htmlFor="email">
                Corporate Email Address *
              </label>
              <input
                id="email"
                type="email"
                placeholder="procurement@company.com"
                className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-navy-800 bg-white dark:bg-navy-950 dark:text-white focus:ring-2 focus:ring-forest-500 outline-none transition"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'rfq-email-error' : undefined}
                {...register('email')}
              />
              {errors.email && (
                <p id="rfq-email-error" role="alert" className="text-[11px] text-rose-500 mt-1">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1" htmlFor="phone">
                Phone / WhatsApp Number (with country code) *
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="+971 50 123 4567"
                className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-navy-800 bg-white dark:bg-navy-950 dark:text-white focus:ring-2 focus:ring-forest-500 outline-none transition"
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? 'rfq-phone-error' : undefined}
                {...register('phone')}
              />
              {errors.phone && (
                <p id="rfq-phone-error" role="alert" className="text-[11px] text-rose-500 mt-1">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1" htmlFor="product">
                Commodity of Interest *
              </label>
              <select
                id="product"
                className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-navy-800 bg-white dark:bg-navy-950 dark:text-white focus:ring-2 focus:ring-forest-500 outline-none transition"
                {...register('product')}
              >
                {PRODUCTS_DATA.map((p) => (
                  <option key={p.id} value={p.title}>
                    {p.title}
                  </option>
                ))}
                {defaultProduct && !PRODUCTS_DATA.some(p => p.title === defaultProduct) && defaultProduct !== 'Custom Agricultural Requirement' && <option value={defaultProduct}>{defaultProduct}</option>}
                <option value="Custom Agricultural Requirement">Custom Agricultural Requirement</option>
              </select>
            </div>
          </div>

          {/* Quantity, Unit & Incoterms */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1" htmlFor="quantity">
                Estimated Volume *
              </label>
              <input
                id="quantity"
                type="text"
                placeholder="e.g. 50"
                className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-navy-800 bg-white dark:bg-navy-950 dark:text-white focus:ring-2 focus:ring-forest-500 outline-none transition"
                aria-invalid={Boolean(errors.quantity)}
                aria-describedby={errors.quantity ? 'rfq-quantity-error' : undefined}
                {...register('quantity')}
              />
              {errors.quantity && (
                <p id="rfq-quantity-error" role="alert" className="text-[11px] text-rose-500 mt-1">{errors.quantity.message}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1" htmlFor="unit">
                Unit of Measure *
              </label>
              <select
                id="unit"
                className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-navy-800 bg-white dark:bg-navy-950 dark:text-white focus:ring-2 focus:ring-forest-500 outline-none transition"
                {...register('unit')}
              >
                <option value="MT">Metric Tons (MT)</option>
                <option value="Containers">FCL Containers (20ft / 40ft)</option>
                <option value="Cartons">Export Cartons</option>
                <option value="Kilograms">Kilograms (kg)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1" htmlFor="incoterm">
                Incoterms *
              </label>
              <select
                id="incoterm"
                className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-navy-800 bg-white dark:bg-navy-950 dark:text-white focus:ring-2 focus:ring-forest-500 outline-none transition"
                {...register('incoterm')}
              >
                <option value="CIF">CIF (Cost, Insurance &amp; Freight)</option>
                <option value="FOB">FOB (Free On Board Indian Port)</option>
                <option value="CFR">CFR (Cost and Freight)</option>
                <option value="EXW">EXW (Ex-Works Mill)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1" htmlFor="destinationPort">
              Destination Discharge Port &amp; Country *
            </label>
            <input
              id="destinationPort"
              type="text"
              placeholder="e.g. Jebel Ali (UAE), Port of Rotterdam (NL), Port of Singapore"
              className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-navy-800 bg-white dark:bg-navy-950 dark:text-white focus:ring-2 focus:ring-forest-500 outline-none transition"
              aria-invalid={Boolean(errors.destinationPort)}
                aria-describedby={errors.destinationPort ? 'rfq-destinationPort-error' : undefined}
                {...register('destinationPort')}
            />
            {errors.destinationPort && (
              <p id="rfq-destinationPort-error" role="alert" className="text-[11px] text-rose-500 mt-1">{errors.destinationPort.message}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1" htmlFor="notes">
              Custom Packing / Technical Specifications (Optional)
            </label>
            <textarea
              id="notes"
              rows={2}
              placeholder="E.g., 25kg PP bags, private label printing, SGS witness required, target delivery window..."
              className="w-full text-sm px-3.5 py-2 rounded-lg border border-slate-300 dark:border-navy-800 bg-white dark:bg-navy-950 dark:text-white focus:ring-2 focus:ring-forest-500 outline-none transition"
              {...register('notes')}
            ></textarea>
          </div>

          <div className="p-3 rounded-lg bg-emerald-50 dark:bg-navy-950 border border-emerald-200 dark:border-emerald-800/60 flex items-center gap-2.5 text-xs text-emerald-900 dark:text-emerald-300">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>
              All inquiries received are backed by formal laboratory test certificates, Phytosanitary documentation, and verifiable SGS inspection.
            </span>
          </div>

          <div className="pt-2 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={handleClose}
              className="px-4 py-2.5 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-navy-800 rounded-lg transition"
            >
              Cancel
            </button>
            <Button
              type="submit"
              variant="primary"
              size="md"
              isLoading={isSubmitting}
              icon={<Send className="w-4 h-4" />}
            >
              Submit Formal RFQ
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
};
