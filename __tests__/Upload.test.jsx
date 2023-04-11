import React from 'react';
import { shallow } from 'enzyme';
import Upload from './Upload';

describe('Upload component', () => {
  it('render without throwing an error', () => {
    expect(shallow(<Upload />).exists()).toBe(true);
  });

  it('display the "Upload Files" header', () => {
    const wrapper = shallow(<Upload />);
    const header = <h3>Upload Files</h3>;

    expect(wrapper.contains(header)).toEqual(true);
  });

  it('render the "Select a Class" input field', () => {
    const wrapper = shallow(<Upload />);
    const inputField = wrapper.find('#selectClasslabel');

    expect(inputField.exists()).toBe(true);
  });

  it('render the "Select an Assignment" input field', () => {
    const wrapper = shallow(<Upload />);
    const inputField = wrapper.find('#selectAssignmentLabel');

    expect(inputField.exists()).toBe(true);
  });

  it('render the Dropzone component', () => {
    const wrapper = shallow(<Upload />);
    const dropzone = wrapper.find('Dropzone');

    expect(dropzone.exists()).toBe(true);
  });
});