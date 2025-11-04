import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Form } from './Form';

describe('App component', () => {
  it("doesn't explodes", () => {
    render(
      <Form
        bottomText=""
        handleGenerate={() => {}}
        setBottomText={() => {}}
        setTopText={() => {}}
        topText=""
      />
    );
  });
  it("Shows it's submit button", () => {
    render(
      <Form
        bottomText=""
        handleGenerate={() => {}}
        setBottomText={() => {}}
        setTopText={() => {}}
        topText=""
      />
    );
    expect(screen.getByText(/Generate/)).toBeDefined();
  });
});
