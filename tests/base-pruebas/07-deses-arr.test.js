import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('07-deses-arr test', () => {
    test('should first', () => {
        const [letras, numeros] = retornaArreglo();

        expect(letras).toEqual(expect.any(String));
        expect(numeros).toEqual(expect.any(Number))
    })
});