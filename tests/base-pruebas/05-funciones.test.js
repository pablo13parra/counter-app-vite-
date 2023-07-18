import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Prueba en 05-funciones', () => {
    test('should return an object ', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'El_Pa1502'
        };

        const user = getUser();

        expect(testUser).toEqual(user);
    })

    test('should getUsuario return an object', () => {

        const name = 'fercho';

        const usuario = getUsuarioActivo(name);

        expect(usuario.username).toEqual(name);
    })
})