// src/tests/SideBar.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { SideBar } from '../components/SideBar';
import { MyProvider } from '../context/context.jsx'

describe('SideBar', () => {
  it('renderiza o botão de iniciar percurso', () => {
    const percursos = [{ idPercurso: 1 }];
    const dados = [];

    render(
        <MyProvider>
          <SideBar percursos={percursos} dados={dados} />
        </MyProvider>
    );

    const startButton = screen.getByRole('button', { name: /iniciar percurso/i });
    expect(startButton).toBeInTheDocument();
  });
});
