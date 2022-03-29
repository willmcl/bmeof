import React, {useRef} from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";
import Image from "../atoms/Image";
import {useMouseHovered} from "react-use";

const ImageHolder = styled.div`
  margin: 0 1rem 1rem 0;
  position: relative;
  .mouse-text {
    display: none;
  }
  &:hover {
    .mouse-text {
      display: block;
    }
  }
`;

const MouseText = styled.div.attrs(props => ({
  style: {
    transform: `translate( ${props.x}px, ${props.y - 20}px)`,
  },
}))`
  position: absolute;
  top: 0;
  left: 0;
  color: yellow;
  pointer-events: none;
`;

function WorkInfoImage({image, handleClick, totalImages, i}) {
  const ref = useRef(null);
  const {elX, elY} = useMouseHovered(ref, {bound: false, whenHovered: true});
  return (
    <ImageHolder ref={ref}>
      <button onClick={() => handleClick()}>
        <Image imgName={image} height="20vh" />
      </button>
      <MouseText x={elX} y={elY} className="mouse-text">{i+1}/{totalImages}</MouseText>
    </ImageHolder>
  )
}

WorkInfoImage.propTypes = {
  i: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  totalImages: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default WorkInfoImage;