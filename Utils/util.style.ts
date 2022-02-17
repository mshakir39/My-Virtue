import styled from 'styled-components';

interface SpacerProps {
  display?: string;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  fullWidth?: boolean;
}

export const StyledSpacer = styled.div<SpacerProps>`
  display: ${(props) => props.display};
  margin-top: ${(props: SpacerProps) =>
    props.top && `calc(${props.top} * 1rem)`};
  margin-bottom: ${(props: SpacerProps) =>
    props.bottom && `calc(${props.bottom} * 1rem)`};
  margin-left: ${(props: SpacerProps) =>
    props.left && `calc(${props.left} * 1rem)`};
  margin-right: ${(props: SpacerProps) =>
    props.right && `calc(${props.right} * 1rem)`};
  width: ${(props: SpacerProps) => props.fullWidth && `100%`};
`;

export const StyledFlex = styled.div<{
  direction?: string;
  align?: string;
  justify?: string;
  gap?: string;
  fulfill?: boolean;
}>`
  display: flex;
  ${({ direction }) => direction && `flex-direction: ${direction}`};
  ${({ align }) => align && `align-items: ${align}`};
  ${({ justify }) => justify && `justify-content: ${justify}`};
  ${({ gap }) => gap && `gap: ${gap}`};
  ${({ fulfill }) =>
    fulfill &&
    `  > * {
    flex: 1 1 0;
  }`};
`;

export const StyledCard = styled.div`
  position: relative;
  overflow: hidden;
  background-color: #fff;
  border: 1px solid var(--color-neutral-super-lightest);
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

  @media (min-width: 640px) {
    border-radius: 0rem;
  }

  @media print {
    box-shadow: none;
  }
`;
