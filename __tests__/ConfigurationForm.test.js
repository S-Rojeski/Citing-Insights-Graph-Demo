import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ConfigurationForm from './ConfigurationForm';

describe('ConfigurationForm component', () => {
  it('submits form with correct data', async () => {
    // Render the component
    render(<ConfigurationForm />);

    // Fill in form fields
    const primaryColorInput = screen.getByLabelText('Primary Color');
    const secondaryColorInput = screen.getByLabelText('Secondary Color');
    const institutionNameInput = screen.getByLabelText('Institution Name');
    const oneSearchUrlInput = screen.getByLabelText('OneSearch Information');
    const oneSearchViewIdInput = screen.getByLabelText('OneSearch Information');
    const imageUploaderInput = screen.getByLabelText('Choose images');

    fireEvent.change(primaryColorInput, { target: { value: '#000000' } });
    fireEvent.change(secondaryColorInput, { target: { value: '#ffffff' } });
    fireEvent.change(institutionNameInput, { target: { value: 'Humboldt State University' } });
    fireEvent.change(oneSearchUrlInput, { target: { value: 'humboldt-primo.hosted.exlibrisgroup.com/primo-explore' } });
    fireEvent.change(oneSearchViewIdInput, { target: { value: '01CALS_HUL' } });
    fireEvent.change(imageUploaderInput, {
      target: {
        files: [
          new File(['test'], 'test-image.jpg', { type: 'image/jpeg' }),
        ],
      },
    });

    // Submit the form
    fireEvent.click(screen.getByText('Submit'));

    // Wait for the success alert
    const alert = await screen.findByText('Configuration Submitted!');

    // Check that the form submitted successfully
    expect(alert).toBeInTheDocument();
  });
});
