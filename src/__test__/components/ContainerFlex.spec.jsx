import {render,screen} from '@testing-library/react';
import ContainerFlex from '../../containerFlex/ContainerFlex';

describe('<ContainerFlex/>', () => {
    test('Sholud render a container', () => {
      // eslint-disable-next-line react/react-in-jsx-scope
      render(<ContainerFlex role='banner'/>);
      const ContainerFlexTest = screen.getByRole('banner')
      expect(ContainerFlexTest).toBeDefined();
    });

   

   test('Should have width',() => {
       
        render(
            // eslint-disable-next-line react/react-in-jsx-scope
            <ContainerFlex  role='banner' width='250px'
            />
        );
        

        const ContainerFlexTest = screen.getByRole('banner')
        
        expect(ContainerFlexTest).toBeInTheDocument()
        expect(ContainerFlexTest).toHaveStyle({
               width:'250px'
              });
    });

    test('Should havejustify-content',() => {
       
      render(
          // eslint-disable-next-line react/react-in-jsx-scope
          <ContainerFlex  role='banner' justifyContent='center'
          />
      );
      

      const ContainerFlexTest = screen.getByRole('banner')
      
      expect(ContainerFlexTest).toHaveStyle({
        justifyContent:'center'
      });
  })
});