import {render,screen} from '@testing-library/react';
import MediaImg from "../../mediaImg";

describe('<MediaImg/>', () => {
    

    test("Should render a component", () => {
        render(
            <MediaImg alt="imageName" src="someImageUrl" borderRadius='25px' />
            
            
          );
           const MediaImgTest =screen.getByRole('img')
      expect(MediaImgTest).toBeInTheDocument();
     
    });
    test('Should have styles', () => {
        render(
            <MediaImg alt="imageName" src="someImageUrl" borderRadius='25px' />
            
          );
           const MediaImgTest =screen.getByRole('img')
          expect(MediaImgTest).toHaveAttribute("src", "someImageUrl")
          expect(MediaImgTest).toHaveAttribute("alt", "imageName" )
          expect(MediaImgTest).toHaveStyle("width:200px;height:200px;border-radius:25px;margin:0 auto");
    })
  });