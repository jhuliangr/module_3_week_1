import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemeGenerator } from './MemeGenerator';

describe('App component', () => {
  it("doesn't explodes", () => {
    render(<MemeGenerator />);
  });
  it('have not mounted the ImageComponent yet', () => {
    expect(() => screen.getByAltText(/meme/)).toThrow();
  });
});
