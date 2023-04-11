import React from 'react';
import { shallow } from 'enzyme';
import { LinearProgress, Typography } from '@material-ui/core';
import withSplashScreen from './withSplashScreen';

describe('withSplashScreen', () => {
  it('renders splash screen with the correct elements', () => {
    const WrappedComponent = () => <div>Please wait a moment while we load your app.</div>;
    const component = shallow(withSplashScreen(WrappedComponent));
    expect(component.find('.splash-screen')).toHaveLength(1);
    expect(component.find(Typography)).toHaveLength(1);
    expect(component.find(LinearProgress)).toHaveLength(1);
    expect(component.find(WrappedComponent)).toHaveLength(1);
  });
});
