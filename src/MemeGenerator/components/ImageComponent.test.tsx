import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ImageComponent } from './ImageComponent';

describe('App component', () => {
  it("doesn't explodes", () => {
    render(<ImageComponent bottomText="" topText="" randomMeme="" />);
  });
  it('has the image tag inside', () => {
    render(<ImageComponent bottomText="" topText="" randomMeme="" />);
    expect(screen.getByAltText(/meme/)).toBeDefined();
  });
});
