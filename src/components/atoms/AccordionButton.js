import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";
import classNames from "classnames";
import {useStore} from "../../utils/store";

const Button = styled.button`
  font-size: 33.5vw;
  line-height: 0.75;
  text-transform: uppercase;
  letter-spacing: -0.025em;
  display: block;
  overflow: hidden;
  width: 100%;
  text-align: left;
  padding-left: 12px;
  transition: color 0.25s linear;
  white-space: normal;

  .large-text-wrapper {
    display: inline-block;
    transition: transform 0.25s linear;
  }
  &:hover {
    @media( ${props => props.theme.breakpoints.md} ) {
      color: rgb(70,70,70);
    }
  }
  &.is-open {
    .large-text-wrapper {
      transform: translateY(-8px);
    }
    @media( ${props => props.theme.breakpoints.md} ) {
      .large-text-wrapper {
        transform: translateY(-0.04em);
      }
    }
  }
  @supports (-moz-appearance:none) {
    .large-text-wrapper {
      display: block;
      transform: translateY(0.1em);
    }
    &.is-open {
      @media( ${props => props.theme.breakpoints.md} ) {
        .large-text-wrapper {
          transform: translateY(0.06em);
        }
      }
    }
  }
`;

function AccordionButton({open, toggleOpen, text}) {
  const buttonClasses = classNames('accordion-title', { 'is-open': open });
  const setCustomCursorIsVisible = useStore(state => state.setCustomCursorIsVisible);

  return (
    <Button
      className={buttonClasses}
      onMouseEnter={() => setCustomCursorIsVisible(true)}
      onMouseLeave={() => setCustomCursorIsVisible(false)}
      onClick={() => toggleOpen()}>
      <span className="large-text-wrapper">{text}</span>
    </Button>
  )
}

AccordionButton.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default AccordionButton;