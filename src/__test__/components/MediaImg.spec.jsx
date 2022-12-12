/* eslint-disable react/react-in-jsx-scope */
import {render,screen} from '@testing-library/react';
import MediaImg from "../../mediaImg";

describe('<MediaImg/>', () => {
  let MediaImgTest;
    beforeEach(() => {
      render(
        <MediaImg alt="imageName" src="someImageUrl" borderRadius='25px' />
      );
      MediaImgTest =screen.getByRole('img')
    })

    test("Should render a component", () => {
      expect(MediaImgTest).toBeInTheDocument();
     
    });
    test('Should have styles', () => {
        
          expect(MediaImgTest).toHaveAttribute("src", "someImageUrl")
          expect(MediaImgTest).toHaveAttribute("alt", "imageName" )
          expect(MediaImgTest).toHaveStyle("width:200px;height:200px;border-radius:25px;margin:0 auto");
    })
  });