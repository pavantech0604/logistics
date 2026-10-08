import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, within, cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';
import { MotionProvider } from '../ui/Motion';
import { FreightCalculator } from './FreightCalculator';
import { ProductCatalog } from './ProductCatalog';
import { ExportProcessTimeline } from './ExportProcessTimeline';
import { TrackingPreview } from './TrackingPreview';
import { RouteNetwork } from './RouteNetwork';
afterEach(cleanup);
describe('Preserved trade workflows', () => {
  it('recalculates reefer equipment, transit, and inquiry parameters', () => {
    const inquire = vi.fn();
    render(<FreightCalculator onOpenRFQWithParams={inquire} />);
    fireEvent.change(screen.getByLabelText('Select agricultural commodity'), { target: { value: 'banana-products' } });
    fireEvent.change(screen.getByLabelText('Target shipping corridor'), { target: { value: '1' } });
    fireEvent.change(screen.getByRole('slider'), { target: { value: '100' } });
    expect(screen.getByText('40ft High Cube Reefer (Controlled Atmosphere)')).toBeInTheDocument();
    expect(screen.getByText('22 - 28 Days')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Inquire for 100 MT Banana Products' }));
    expect(inquire).toHaveBeenCalledWith('Banana Products', 100, 'Rotterdam / Hamburg / Antwerp');
  });
  it('filters products and passes the original product to details', () => {
    const details = vi.fn();
    render(<MotionProvider><ProductCatalog onOpenRFQ={vi.fn()} onViewDetails={details} /></MotionProvider>);
    fireEvent.change(screen.getByLabelText('Search commodities'), { target: { value: 'ginger' } });
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(1);
    fireEvent.click(screen.getByRole('button', { name: 'Specifications' }));
    expect(details.mock.calls[0][0].id).toBe('fresh-dry-ginger');
    fireEvent.change(screen.getByLabelText('Search commodities'), { target: { value: 'no-matching-commodity' } });
    expect(screen.getByText(/No commodities matching/)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Reset Filters' }));
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(9);
  });
  it('updates the export protocol and keeps the RFQ action', () => {
    const rfq = vi.fn();
    render(<MotionProvider><ExportProcessTimeline onOpenRFQ={rfq} /></MotionProvider>);
    fireEvent.click(screen.getByRole('button', { name: /STEP 04/ }));
    expect(screen.getByRole('heading', { level: 3, name: 'QC, Processing & Loading Supervision' })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Initiate Step 1 (Send RFQ)' }));
    expect(rfq).toHaveBeenCalledOnce();
  });
  it('shows selected shipment milestones as an illustrative preview', async () => {
    render(<MotionProvider><TrackingPreview /></MotionProvider>);
    fireEvent.click(screen.getByRole('button', { name: '04 Ocean transit' }));
    expect(screen.getByRole('button', { name: '04 Ocean transit' })).toHaveAttribute('aria-pressed', 'true');
    expect(await screen.findByText('Container departs the origin gateway for the destination port.')).toBeInTheDocument();
    expect(screen.getByText(/no live shipment feed/)).toBeInTheDocument();
  });
  it('updates the route summary from the existing corridor data', () => {
    render(<MotionProvider><RouteNetwork /></MotionProvider>);
    fireEvent.click(within(screen.getByRole('table')).getByRole('button', { name: /Southeast Asia/ }));
    expect(screen.getByRole('img')).toHaveAccessibleName(/Southeast Asia/);
    expect(screen.getByText('Estimated sea transit · 5 - 8 Days')).toBeInTheDocument();
  });
});
