import {render} from '@testing-library/react';
import Button from '../../button/Button'

describe('<Button/>', () => {
    test('Should render a button', () => {
       // eslint-disable-next-line react/react-in-jsx-scope
       const {getByRole} = render(<Button type='button'/>);
       const buttonTest = getByRole('button');
       expect(buttonTest).toBeDefined();
    });

    test('Should have bgColor', () => {
        // eslint-disable-next-line react/react-in-jsx-scope
        const {getByRole} = render(<Button color='blue'  type='button'/>);
        const buttonTest = getByRole('button');
        expect(buttonTest.style.color).toBe('blue');
    })
});