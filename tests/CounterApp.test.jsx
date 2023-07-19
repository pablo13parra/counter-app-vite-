import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from "../src/CounterApp";

describe('CounterApp', () => {
    const initialValue = 10;

    test('should match with snapshot', () => {
        const { container } = render(<CounterApp value={initialValue} />);
        expect(container).toMatchSnapshot();
    });

    test('should show the initial value = 100 ', () => {
        render(<CounterApp value={100} />);
        expect(screen.getByText('100')).toBeTruthy();
        expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain('100');
    });

    test('should increase with +1 button', () => {
        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('11')).toBeTruthy();
    });
    test('should decrease with -1 button', () => {
        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText('9')).toBeTruthy();
    });
    test('should reset button return to initial value', () => {
        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }))
        // fireEvent.click(screen.getByText('Reset'));
        expect(screen.getByText(initialValue)).toBeTruthy();
    });
});