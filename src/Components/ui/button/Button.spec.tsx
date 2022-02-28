import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button, { ButtonProps } from './Button';

describe('Button component', () => {
  test('should render properly with the default props', async () => {
    const props: ButtonProps = {
      label: 'Click me'
    };

    render(<Button {...props} />);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toHaveTextContent(props.label);
    expect(button).toHaveProperty('type', 'button');
  });

  test('should render properly with custom props', async () => {
    const props: ButtonProps = {
      label: 'Click me',
      disabled: true,
      type: 'submit',
      fullWidth: true
    };
    render(<Button {...props} />);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toHaveTextContent(props.label);
    expect(button).toHaveProperty('type', 'submit');
    expect(button).toBeDisabled();
  });

  test('should render the loader when loading is set to true', () => {
    const props: ButtonProps = {
      label: 'Click me',
      loading: true
    };

    render(<Button {...props} />);
    const button = screen.getByRole('button', { name: /click me/i });
    const spinner = screen.getByTestId('spinner');

    expect(button).toContainElement(spinner);
  });

  test('should call the right function with clicked', () => {
    const props: ButtonProps = {
      label: 'Click me',
      onClick: jest.fn()
    };

    render(<Button {...props} />);
    const button = screen.getByRole('button', { name: /click me/i });

    userEvent.click(button);
    expect(props.onClick).toHaveBeenCalled();
  });
});
