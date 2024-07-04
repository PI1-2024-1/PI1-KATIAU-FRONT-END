import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { Header } from '../components/Header.jsx';

describe('teste exemplo', () => {
  it('deve ser verdadeiro', () => {
    expect(true).toBe(true)
  });
});

describe('Header', () => {
  it('renderiza o titulo do header', () => {
    render(
          <Header />
    );
    const headingElement = screen.getByText(/⚡KATIAU⚡/i);
    expect(headingElement).toBeInTheDocument();
  });
});