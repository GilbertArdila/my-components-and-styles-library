/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import {render, screen} from '@testing-library/react';
import Text from '../../text/Text';

describe('<Text/>', () => {
    let TextTesting
    beforeEach(() => {
        render(<Text component='h1' fontWeight={700}>mi texto</Text>);
        TextTesting = screen.getByRole('heading', {name: /mi texto/});
    });
    test('Sholud render a component', () => {
        
        expect(TextTesting).toBeDefined();
    });
    test('Sholud have initial styles', () => {
        expect(TextTesting).toHaveStyle('font-size:16px;font-family:monoto;text-align:center;line-height:25px')
    });
    test('Sholud have setting styles', () => {
       
        expect(TextTesting).toHaveStyle('font-weight:700')
    });

    test('Sholud render span component', () => {
        render(<Text component='span' fontWeight={700} title='mi span'>mi span</Text>);
         TextTesting = screen.getByText(/mi span/)
       
        expect(TextTesting).toBeDefined();
    });
});