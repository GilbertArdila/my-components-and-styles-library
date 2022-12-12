/* eslint-disable react/react-in-jsx-scope */
import {render,screen} from '@testing-library/react';

import Button from '../../button/Button'

describe('<Button/>', () => {
    let buttonTest
    beforeEach(() => { 
        // eslint-disable-next-line react/react-in-jsx-scope
        render(<Button bgColor='blue'/>);
        buttonTest = screen.getByRole('button');
    });

    test('Should render a button', () => {
      
       expect(buttonTest).toBeDefined();
    });

    test('Should have blue bgColor', () => {
       
        expect(buttonTest).toHaveStyle({
            backgroundColor: 'blue'
        });
    });

    test('Should have submit type', () => {
      
        render(<Button type='submit' title='submit button'  />);
        const buttonTest2 = screen.getByTitle(/submit button/);
        expect(buttonTest2).toBeDefined();
    })
   
});