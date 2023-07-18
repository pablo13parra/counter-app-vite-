import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';

describe('promises test', () => {
    test('should return a hero', (done) => {

        const id = 1;
        getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                })
                done()
            }).catch(error => {
                expect(error).toBe('No se pudo encontrar el héroe');
            })

    })
});