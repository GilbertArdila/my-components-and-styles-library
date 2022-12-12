/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/require-default-props */
import { forwardRef } from "react";
import {cx, css} from '@emotion/css';
import {PropTypes} from 'prop-types';

const MediaImgStyles = (width, height, borderRadius, margin) => css`
  width: ${width || "200px"};
  height: ${height || "200px"};
  border-radius: ${borderRadius || "16px"};
  margin: ${margin || '0 auto'}
`

const MediaImg = forwardRef((props, ref) => {
  const {
    className,
    src,
    alt,
    borderRadius,
    width,
    height,
    margin,
  ...otherProps} = props;
  return(
    <img 
      src={src}
      alt={alt}
      ref={ref}
      {...otherProps}
      className={cx(MediaImgStyles(width, height, borderRadius, margin), className)}
    />
  );
});

MediaImg.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  margin: PropTypes.string,
  borderRadius: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default MediaImg;