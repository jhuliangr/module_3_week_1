import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Title } from './Title';

describe('App component', () => {
  it("doesn't explodes", () => {
    render(<Title />);
  });
  it('has the title text', () => {
    render(<Title />);
    expect(screen.getByText(/Meme Generator/)).toBeDefined();
  });
});
