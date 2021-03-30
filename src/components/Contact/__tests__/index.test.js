import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ContactForm from '..';

afterEach(cleanup);

describe('ContactForm component', () => {
  it('renders', () => {
    render(<ContactForm />);
  });

  it('renders ContactForm snapshot', () => {
    const { asFragment } = render(<ContactForm />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders h1 text', () => {
    const { getByTestId } = render(<ContactForm />);
    expect(getByTestId('h1tag')).toHaveTextContent('Contact me');
  });

  it('renders submit button text', () => {
    const { getByTestId } = render(<ContactForm />);
    expect(getByTestId('button')).toHaveTextContent('Submit');
  });
});
