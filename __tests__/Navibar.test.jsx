import React from 'react';

describe('Navibar component', () => {
  let wrapper;

  it('should render without throwing an error', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('Render the institution name in the Typography component', () => {
    const typography = wrapper.find('WithStyles(Typography)');
    expect(typography).toHaveLength(1);
    expect(typography.text()).toEqual('Test');
  });

  it('Render the logo image', () => {
    const img = wrapper.find('img');
    expect(img).toHaveLength(1);
    expect(img.prop('src')).toEqual('logoCiting.svg');
  });

  it('Render the GoogleLogout button if isAuthenticated is true', () => {
    wrapper.setProps({ isAuthenticated: true });
    const button = wrapper.find('GoogleLogout');
    expect(button).toHaveLength(1);
    expect(button.prop('clientId')).toEqual('your-client-id');
  });


});