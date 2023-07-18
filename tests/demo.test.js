describe('pruebas en demo.component', () => {

    test('this test dont would to fail', () => {
        //inicialización
        const message1 = 'hola mundo';

        //estímulo
        const message2 = message1.trim();

        //observamos el comportamiento
        expect(message1).toBe(message2)
    })
    //
})
