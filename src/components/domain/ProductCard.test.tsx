import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ProductCard } from './ProductCard';
import { PRODUCTS_DATA } from '../../data/productsData';

describe('ProductCard Component', () => {
  const mockProduct = PRODUCTS_DATA[0]; // Indian Rice

  it('renders product information, origin, and badges', () => {
    const handleOpenRFQ = vi.fn();
    const handleViewDetails = vi.fn();

    render(
      <ProductCard
        product={mockProduct}
        onOpenRFQ={handleOpenRFQ}
        onViewDetails={handleViewDetails}
      />
    );

    expect(screen.getByText('Indian Rice')).toBeInTheDocument();
    expect(screen.getByText('Agricultural Staple')).toBeInTheDocument();
    expect(screen.getByText(/1121 Steam & Sella Basmati/i)).toBeInTheDocument();
  });

  it('triggers RFQ callback when Send Inquiry is clicked', () => {
    const handleOpenRFQ = vi.fn();
    const handleViewDetails = vi.fn();

    render(
      <ProductCard
        product={mockProduct}
        onOpenRFQ={handleOpenRFQ}
        onViewDetails={handleViewDetails}
      />
    );

    const rfqButton = screen.getByRole('button', { name: /send inquiry/i });
    fireEvent.click(rfqButton);

    expect(handleOpenRFQ).toHaveBeenCalledWith('Indian Rice');
  });

  it('triggers view details callback when Specifications button is clicked', () => {
    const handleOpenRFQ = vi.fn();
    const handleViewDetails = vi.fn();

    render(
      <ProductCard
        product={mockProduct}
        onOpenRFQ={handleOpenRFQ}
        onViewDetails={handleViewDetails}
      />
    );

    const specButton = screen.getByRole('button', { name: /specifications/i });
    fireEvent.click(specButton);

    expect(handleViewDetails).toHaveBeenCalledWith(mockProduct);
  });
});
