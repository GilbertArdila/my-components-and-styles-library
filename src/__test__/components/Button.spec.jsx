import {render,screen} from '@testing-library/react';

import Button from '../../button/Button'

describe('<Button/>', () => {
    test('Should render a button', () => {
       // eslint-disable-next-line react/react-in-jsx-scope
       render(<Button/>);
       const buttonTest = screen.getByRole('button');
       expect(buttonTest).toBeDefined();
    });

    test('Should have blue bgColor', () => {
        // eslint-disable-next-line react/react-in-jsx-scope
        render(<Button bgColor='blue'  />);
        const buttonTest = screen.getByRole('button');
        expect(buttonTest).toHaveStyle({
            backgroundColor: 'blue'
        });
    });

    test('Should have submit type', () => {
        // eslint-disable-next-line react/react-in-jsx-scope
        render(<Button type='submit'  />);
        const buttonTest = screen.getByRole('button');
        expect(buttonTest).toBeDefined();
    })
   
});