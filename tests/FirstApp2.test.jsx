import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp'
describe('pruebas FirstApp', () => {
    const title = 'hi im gokú'
    const subtitle = 'hi im subtitle'
    test('should match with snapshot', () => {
        const { container } = render(<FirstApp title={title} />);
        expect(container).toMatchSnapshot();
    });

    test('should show the message "hi im gokú"', () => {
        render(<FirstApp title={title} />);
        expect(screen.getByText(title)).toBeTruthy();
    });
    test('should show the title on h1 tag', () => {
        render(<FirstApp title={title} />);
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
    });

    test('should send the subtitle by props', () => {
         render(
            <FirstApp
                title={title}
                subtitle={subtitle}
            />
        );
        expect(screen.getAllByText(subtitle).length).toBe(2);
    });

});
