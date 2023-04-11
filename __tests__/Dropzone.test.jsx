import React from 'react';
import { shallow, mount } from 'enzyme';
import Dropzone from './Dropzone';

describe('Dropzone', () => {
  const onFilesAdded = jest.fn();

  it('should render without throwing an error', () => {
    expect(shallow(<Dropzone onFilesAdded={onFilesAdded} />).find('Input').exists()).toBe(true);
  });

  it('should call onFilesAdded when files are added', () => {
    const wrapper = mount(<Dropzone onFilesAdded={onFilesAdded} />);
    const file = new File(['test'], 'test.txt', { type: 'text/plain' });

    wrapper.find('input').simulate('change', {
      target: {
        files: [file]
      }
    });

    expect(onFilesAdded).toHaveBeenCalledWith([file]);
  });
});