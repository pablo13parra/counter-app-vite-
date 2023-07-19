import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp'
describe('pruebas FirstApp', () => {
    /* test('should match with snapshot', () => {
        const title = 'hi im gokú'
        const { container } = render(<FirstApp title={title} />);
        expect(container).toMatchSnapshot();
    }); */

    test('should show title on h1', () => {
        const title = 'hi im gokú'
        const { container, getByText, getByTestId } = render(<FirstApp title={title} />);

        //--validate the text on title
        expect(getByText(title)).toBeTruthy();

        //--validate if the text is inside of h1 slow
        //const h1 = container.querySelector('h1');
        //expect(h1.innerHTML).toBe(title);
        //expect(h1.innerHTML).toContain(title);


        //--validate if the text is inside of h1 fast
        expect(getByTestId('test-title').innerHTML).toContain(title);
    });

    test('should send the subtitle by props', () => {

        const title = 'hi im gokú'
        const subtitle = 'hi im subtitle'
        const { container, getByText, getAllByText, getByTestId } = render(
            <FirstApp
                title={title}
                subtitle={subtitle}
            />
        );
        expect(getAllByText(subtitle).length).toBe(2);
    });

});
