import React from 'react';
import { shallow } from 'enzyme';
import BottomNavBar from './BottomNavBar';

describe('BottomNavBar component', () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      configurations: {
        primaryColor: '#00FF00',
        secondaryColor: '#FFFF00'
      }
    };
    wrapper = shallow(<BottomNavBar {...props} />);
  });

  it('Render two buttons', () => {
    expect(wrapper.find('Button')).toHaveLength(2);
  });

  it('Render about modal when About Us button is clicked', () => {
    wrapper.find('Button').at(0).simulate('click');
    expect(wrapper.find('Modal').at(0).prop('open')).toBe(true);
  });

  it('Render contact modal when Contact Us button is clicked', () => {
    wrapper.find('Button').at(1).simulate('click');
    expect(wrapper.find('Modal').at(1).prop('open')).toBe(true);
  });
});



