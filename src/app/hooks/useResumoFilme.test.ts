import { renderHook } from "@testing-library/react";
import { useResumoFilme } from "./useResumoFilme";

test("Retorna o overview inteiro se menor que o limite", () => {
  const texto = "Resumo curto";
  const { result } = renderHook(() => useResumoFilme(texto, 256));
  expect(result.current).toBe(texto);
});
//arrange
test("Retorna o overview cortado e retiências se maior que o limite", () => {
  //act
  const texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
  const { result } = renderHook(() => useResumoFilme(texto, 10));
  //assert
  expect(result.current).toBe("Lorem ipsu...");
});
