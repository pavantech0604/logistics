import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { RFQModal } from './RFQModal';
import { ToastProvider } from '../ui/Toast';
import { MotionProvider } from '../ui/Motion';
afterEach(cleanup);
describe('RFQ handoff', () => {
  it('retains calculator commodity, quantity and port as distinct fields', () => {
    render(<MotionProvider><ToastProvider><RFQModal isOpen onClose={vi.fn()} defaultProduct="Banana Products" quoteDefaults={{quantity:'100',destinationPort:'Rotterdam / Hamburg / Antwerp'}} /></ToastProvider></MotionProvider>);
    expect(screen.getByLabelText('Commodity of Interest *')).toHaveValue('Banana Products');
    expect(screen.getByLabelText('Estimated Volume *')).toHaveValue('100');
    expect(screen.getByLabelText('Destination Discharge Port & Country *')).toHaveValue('Rotterdam / Hamburg / Antwerp');
  });
  it('validates the required buyer fields before simulated submission', async () => {
    render(<MotionProvider><ToastProvider><RFQModal isOpen onClose={vi.fn()} /></ToastProvider></MotionProvider>);
    fireEvent.click(screen.getByRole('button',{name:'Submit Formal RFQ'}));
    expect(await screen.findByText('Name or company name must be at least 2 characters')).toBeInTheDocument();
    expect(screen.queryByText('Quotation Request Confirmed')).not.toBeInTheDocument();
  });
  it('restores focus to the invoking control after closing', () => {
    const trigger=document.createElement('button'); trigger.textContent='Open RFQ'; document.body.append(trigger); trigger.focus();
    const {unmount}=render(<MotionProvider><ToastProvider><RFQModal isOpen onClose={vi.fn()} /></ToastProvider></MotionProvider>);
    expect(screen.getByRole('button',{name:'Close dialog'})).toHaveFocus();
    unmount(); expect(trigger).toHaveFocus(); trigger.remove();
  });
});
