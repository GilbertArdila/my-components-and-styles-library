import React, { forwardRef } from 'react';
import { cx, css } from '@emotion/css';
import {PropTypes} from 'prop-types'

const buttonStyles = (bgColor,color,width,height,bgColorHover,colorHover,borderRadius) => css `
 background-color: ${bgColor || 'blue'};
 color: ${color || 'white'};
 width: ${width || "150px"};
 height: ${height || "40px"};
 border-radius: ${borderRadius || "8px"};
 text-align: center;
 &:hover{
    background-color: ${bgColorHover || 'yellow' };
    color: ${colorHover || 'black'}
 }
`
const Button = forwardRef ((props, ref) => {
    const {
        bgColor,
        color,
        width,
        height,
        bgColorHover,
        colorHover,
        borderRadius,
        className,
        type,
        ...otherProps
       } = props;
  return (
    <button
     ref={ref}
     type={type}
     {...otherProps}
     className={cx(buttonStyles(bgColor,color,width,height,bgColorHover,colorHover,borderRadius,type),className)}
    />
  )
})
Button.propTypes = { 
    className: PropTypes.string,
    bgColor: PropTypes.string,
    color: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    bgColorHover: PropTypes.string,
    colorHover: PropTypes.string,
    borderRadius: PropTypes.string,
    type: PropTypes.string
}
export default Button