import React from 'react';
import { shallow } from 'enzyme';
import Feedback from './Feedback';

describe('Feedback component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Feedback />);
  });

  it('renders the component', () => {
    expect(wrapper.length).toBe(1);
  });

  it('opens the dialog when the button is clicked', () => {
    wrapper.find('Button').simulate('click');
    expect(wrapper.state('open')).toBe(true);
  });

  it('closes the dialog when the cancel button is clicked', () => {
    wrapper.setState({ open: true });
    wrapper.find('Button[color="primary"]').at(0).simulate('click');
    expect(wrapper.state('open')).toBe(false);
  });

  });
