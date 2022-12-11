import { forwardRef } from "react";
import {cx, css} from '@emotion/css';
import {PropTypes} from 'prop-types';

const MediaImgStyles = (borderRadius,width,heigth,margin) => css `
 width: ${width || '200px'};
 heigth: ${heigth || '200px'};
 margin: ${margin || '0 auto'};
 border-radius: ${borderRadius || '16px'};
`
const MediaImg = forwardRef ((props,ref) => {
    const {
      className,
      src,
      alt,
      borderRadius,
      width,
      heigth,
      margin,
      ...otherProps
    } = props
    return(
        <img
         ref={ref}
         alt={alt}
         src={src}
         {...otherProps}
         className={cx(MediaImgStyles(width,heigth,borderRadius,margin),className)}
        />
    );
});
MediaImg.propTypes = {
    width: PropTypes.string,
    heigth: PropTypes.string,
    borderRadius: PropTypes.string,
    margin: PropTypes.string,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
}
export default MediaImg