import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Input } from './Input';

describe('App component', () => {
  it("doesn't explodes", () => {
    render(<Input id="test" setValue={() => {}} value="test" />);
  });
  it('placeholder is in input', () => {
    const placeholderName = '123321';
    render(
      <Input
        id="test"
        setValue={() => {}}
        value="test"
        placeholder={placeholderName}
      />
    );
    expect(screen.getByPlaceholderText(placeholderName)).toBeDefined();
  });
});
