import styled from 'styled-components';

export const StyledButton = styled.button<{
  variant?: string;
  fullWidth?: boolean;
  outline?: boolean;
}>`
  display: block;
  padding: 0.75rem 1rem;
  font-weight: 400;
  color: var(--color-white);
  border-color: transparent;
  border-style: solid;
  border-width: 2px;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  transition: all 250ms ease-in-out 0s, transform 150ms ease 0s, opacity 250ms ease 0s;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }
  ${({ variant, outline }) => {
    switch (variant) {
      case 'secondary':
        return outline
          ? `
        background-color: transparent;
        color : var(--color-secondary-default);
        border-color:  var(--color-secondary-default);
        &:hover:enabled {
          background-color: var(--color-secondary-default);
          color: white;
        }
        `
          : `
        background-color: var(--color-secondary-default);
        &:hover:enabled {
          background-color: var(--color-secondary-darker);
        }`;
      case 'detail':
        return outline
          ? `
        background-color: transparent;
        color : var(--color-detail-default);
        border-color:  var(--color-detail-default);
        &:hover:enabled {
          background-color: var(--color-detail-default);
          color: white;
        }
        `
          : `
        background-color: var(--color-detail-default);
        &:hover:enabled {
          background-color: var(--color-detail-darker);
        }`;
      case 'info':
        return outline
          ? `
        background-color: transparent;
        color : var(--color-info-default);
        border-color:  var(--color-info-default);
        &:hover:enabled {
          background-color: var(--color-info-default);
          color: white;
        }
        `
          : `
        background-color: var(--color-info-default);
        &:hover:enabled {
          background-color: var(--color-info-darker);
        }`;
      case 'error':
        return outline
          ? `
        background-color: transparent;
        color : var(--color-error-default);
        border-color:  var(--color-error-default);
        &:hover:enabled {
          background-color: var(--color-error-default);
          color: white;
        }
        `
          : `
        background-color: var(--color-error-default);
        &:hover:enabled {
          background-color: var(--color-error-darker);
        }`;
      case 'neutral':
        return outline
          ? `
        background-color: transparent;
        color : var(--color-neutral-default);
        border-color:  var(--color-neutral-default);
        &:hover:enabled {
          background-color: var(--color-neutral-default);
          color: white;
        }
        `
          : `
        background-color: var(--color-neutral-default);
        &:hover:enabled {
          background-color: var(--color-neutral-darker);
        }`;
      default:
        return outline
          ? `
        background-color: transparent;
        color : var(--color-primary-default);
        border-color:  var(--color-primary-default);
        &:hover:enabled {
          background-color: var(--color-primary-default);
          color: white;
        }
        `
          : `
        background-color: var(--color-wooden-light);
        &:hover:enabled {
          background-color: var( --color-wooden-lighter);
        }`;
    }
  }}
  width: ${({ fullWidth }) => fullWidth && '100%'};
`;

export const LoadingSpinnerContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 2px;
`;
