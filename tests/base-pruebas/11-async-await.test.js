import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('pruebas en 11 async', () => {
    test('should to return url of img', async () => { 
        
        const url = await getImagen();

        //expect(typeof url).toBe('string');
        expect(url).toBe('No se encontró');

     })
});