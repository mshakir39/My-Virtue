import { CSSProperties, MouseEventHandler } from 'react';
// import BeatLoader from 'react-spinners/BeatLoader';
// import { getStylePropertyValue } from '../../styles/getStylePropertyValue';

import { StyledButton, LoadingSpinnerContainer } from './Button.styles';

export type ButtonVariants = 'primary' | 'secondary' | 'detail' | 'info' | 'error' | 'neutral';

export interface IButtonProps {
  outline?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  label: string;
  variant?: ButtonVariants;
  style?: CSSProperties;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  id?: string;
}

export function Button({
  label,
  onClick,
  outline = false,
  variant = 'primary',
  disabled = false,
  loading = false,
  fullWidth = false,
  style,
  type = 'button',
  ...props
}: IButtonProps) {
  // const loaderColor = (): string =>
  //   outline ? getStylePropertyValue(`--color-${variant}-default`) : variant === 'neutral' ? '#000' : '#fff';

  return (
    <StyledButton
      {...props}
      variant={variant}
      onClick={onClick}
      disabled={disabled || loading}
      fullWidth={fullWidth}
      type={type}
      style={style}
      outline={outline}
    >
      <div style={{ opacity: loading ? 0 : 1, ...(loading && { height: 0 }) }}>{label}</div>
      {/* {loading && (
        <LoadingSpinnerContainer data-testid="spinner">
          <BeatLoader size={10} color={loaderColor()} />
        </LoadingSpinnerContainer>
      )} */}
    </StyledButton>
  );
}

export default Button;
