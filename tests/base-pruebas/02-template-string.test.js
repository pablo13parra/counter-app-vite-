import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('pruebas en el archivo 02-template-string', () => { 
    test('getSaludo have to return "hola Pablito" ', () => { 
        const name = 'Fernando';
        const message = getSaludo( name );

        expect(message).toBe(`Hola ${ name }`)
     })
 })