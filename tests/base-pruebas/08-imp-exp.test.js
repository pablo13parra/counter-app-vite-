import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';

describe('Name of the group', () => {
    test('should return hero by id', () => {
        const id = 1;
        const hero = getHeroeById(id);

        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
    });
    test('should return DC heroes and array lenght === 3', () => {
        const owner = 'DC';
        const hero = getHeroesByOwner(owner);

        expect(hero.length).toEqual(3);
        expect(hero).toEqual(hero.filter( (heroe) => heroe.owner === owner ));
    });
    test('should return Marvel heroes and array lenght === 2', () => {
        const owner = 'Marvel';
        const hero = getHeroesByOwner(owner);
        expect(hero.length).toEqual(2);
    });
});