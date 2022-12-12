/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import { createElement, forwardRef } from 'react';
import { cx, css } from '@emotion/css';
import {PropTypes} from 'prop-types';

const TextStyles = (fontWeight,fontSize,fontFamily,textAlign, lineHeight) => css `
font-weight: ${fontWeight || 500};
font-size: ${fontSize || '16px'};
font-family: ${fontFamily || 'monoto'};
text-align: ${textAlign || 'center'};
line-height: ${lineHeight ||'25px'};
`

const Text = forwardRef ((props, ref) => {

    const {component, fontWeight,fontSize,fontFamily,className,textAlign,lineHeight,...otherProps} = props;

  const element = createElement(
    component, {
        ...otherProps,
        ref,
        className:cx(TextStyles(fontWeight,fontSize,fontFamily,textAlign,lineHeight),className)
    }
  );
  return element
});
Text.propTypes = {
    className: PropTypes.string,
    component: PropTypes.oneOf(['h1','h2','h3','h4','h5','h6','p','span', 'textarea']),
    fontWeight: PropTypes.number,
    fontSize: PropTypes.string,
    fontFamily: PropTypes.string,
    textAlign: PropTypes.string,
    lineHeight: PropTypes.string

};

Text.defaultProps = {
    component: 'p'
};

export default Text