/* eslint-disable react/jsx-props-no-spreading */
import { forwardRef } from "react";
import { cx,css } from "@emotion/css";
import { PropTypes } from "prop-types";

const ContainerFlexStyles = ( width, heigth, bgColor, flexDirection, alignContent, justifyContent, alignItems, gap) => css `
 width: ${width || '100%'};
 heigth: ${heigth || '100%'};
 display: flex;
 background-color: ${bgColor || 'white'};
 flex-direction: ${flexDirection || 'row'};
 align-content: ${alignContent || 'center'};
 justify-content: ${justifyContent || 'center'};
 align-items: ${alignItems || 'center'};
 gap: ${gap || '2'}
`

const ContainerFlex = forwardRef ( (props, ref) => {
    const {
        className,
        width,
        heigth,
        bgColor,
        flexDirection,
        alignContent,
        justifyContent,
        alignItems,
        gap,
        ...otherProps
    } =props;


    return(
       
        <section
         ref={ref}
         {...otherProps}
         className={cx(ContainerFlexStyles( width, heigth, bgColor, flexDirection,alignContent, justifyContent, alignItems,gap),className)}
        />
    );
}) ;
ContainerFlex.propTypes = {
    width: PropTypes.string,
    heigth: PropTypes.string,
    bgColor: PropTypes.string,
    className: PropTypes.string,
    gap: PropTypes.string,
    flexDirection: PropTypes.oneOf(['column','column-reverse','row','row-reverse']),
    alignContent: PropTypes.oneOf(['center','flex-start','flex-end','space-around','space-between','stretch']),
    alignItems: PropTypes.oneOf(['center','flex-start','flex-end','stretch']),
    justifyContent: PropTypes.oneOf(['center','flex-start','flex-end','space-around','space-between','space-evenly']),
}
export default ContainerFlex