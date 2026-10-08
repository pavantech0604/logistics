import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MotionProvider, Reveal } from './Motion';
import { TrackingPreview } from '../domain/TrackingPreview';
import LogisticsScene from '../domain/LogisticsScene';
import { SectionObject, TiltSurface } from './Depth';
import { CargoDepth } from '../domain/CargoDepth';
vi.mock('framer-motion', async (original) => ({ ...await original<typeof import('framer-motion')>(), useReducedMotion: () => true }));
describe('Reduced motion experience', () => {
  it('disables decorative loops and keeps depth-card actions keyboard accessible', () => {
    const action = vi.fn();
    const { container } = render(<MotionProvider><SectionObject kind="cargo" /><TiltSurface><button onClick={action}>Inspect cargo</button></TiltSurface><CargoDepth count={12} /></MotionProvider>);
    expect(container.querySelector('.section-object')).not.toHaveClass('is-running');
    const button = screen.getByRole('button', { name: 'Inspect cargo' });
    button.focus();
    expect(button).toHaveFocus();
    fireEvent.click(button);
    expect(action).toHaveBeenCalledOnce();
    expect(container.querySelectorAll('.cargo-depth-unit')).toHaveLength(8);
    expect(screen.getByText('+4')).toBeInTheDocument();
  });
  it('keeps visuals and shipment controls usable without entry motion', async () => {
    const { container } = render(<MotionProvider><Reveal><LogisticsScene /><TrackingPreview /></Reveal></MotionProvider>);
    expect(container.firstElementChild).not.toHaveStyle({ opacity: '0' });
    expect(screen.getByRole('img',{name:/Isometric export warehouse/})).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button',{name:'05 Destination handover'}));
    expect(await screen.findByText('Arrival documents and import clearance support the final handover.')).toBeInTheDocument();
  });
});
