import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('pruebas en 11 async', () => {
    test('should to return url of img', async () => { 
        
        const url = await getImagen();
        console.log(url);
        //expect(typeof url).toBe('string');

     })
});