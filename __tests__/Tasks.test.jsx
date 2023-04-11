import React from 'react';

test('updates state with message and severity', () => {
    const setStateMock = jest.fn();
    const that = { setState: setStateMock };
    const message = 'This is a message';
    const severity = 'error';
    that.RubricAlert(message, severity);
  
    expect(setStateMock).toHaveBeenCalledWith({ message, severity });
  });

