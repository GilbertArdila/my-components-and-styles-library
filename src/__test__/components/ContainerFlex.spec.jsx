/* eslint-disable react/react-in-jsx-scope */
import {render,screen} from '@testing-library/react';
import ContainerFlex from '../../containerFlex/ContainerFlex';

describe('<ContainerFlex/>', () => {
   let ContainerFlexTest;
  beforeEach(() => {
    render(<ContainerFlex role='banner'  width='250px' justifyContent='center'/>);
     ContainerFlexTest = screen.getByRole('banner')
  });

    test('Sholud render a container', () => {
      expect(ContainerFlexTest).toBeDefined();
    });

   

   test('Should have width',() => {

        ContainerFlexTest = screen.getByRole('banner')
        
        expect(ContainerFlexTest).toBeInTheDocument()
        expect(ContainerFlexTest).toHaveStyle({
               width:'250px'
              });
    });

    test('Should havejustify-content',() => {
       
      ContainerFlexTest = screen.getByRole('banner')
      
      expect(ContainerFlexTest).toHaveStyle({
        justifyContent:'center'
      });
  })
});