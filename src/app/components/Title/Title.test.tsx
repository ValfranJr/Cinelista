import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Title from "./index";

test("Renderiza o título com o texto correto", async () => {
  const titulo = "Cinelista";
  render(<Title title={titulo} />);

  const elemento = await screen.findByText(titulo);
  expect(elemento).toBeInTheDocument();
});
