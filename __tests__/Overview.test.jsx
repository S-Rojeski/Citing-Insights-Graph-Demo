import React from 'react';
import { shallow } from 'enzyme';
import Overview from './Overview';

describe('Overview component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Overview user={{email: 'user@testing.com', id: 1}} />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('initializes state correctly', () => {
    expect(wrapper.state()).toEqual({
      className: '',
      selectedId: null,
      classList: [],
      assignmentList: [],
      sharedAssignments: [],
      AvailableAssignments: [],
      sharedCourses: [],
      selectedPaperId: '',
      AvailableGroups: [],
      rubrics: [], 
      citations: [],
      tab: 0,
      group_id: '',
      open: null,
    });
  });

  it('updates state when input is changed', () => {
    const input = wrapper.find('input[name="className"]');
    input.simulate('change', { target: { name: 'className', value: 'Testing Class' } });
    expect(wrapper.state('className')).toEqual('Test Class');
  });

  it('updates state when group is selected', () => {
    const select = wrapper.find('select[name="group_id"]');
    select.simulate('change', { target: { name: 'group_id', value: '1' } });
    expect(wrapper.state('group_id')).toEqual('123');
  });

  it('updates state when assignment or class is selected', () => {
    const select = wrapper.find('select[name="selectedId"]');
    select.simulate('change', { target: { name: 'selectedId', value: '2' } });
    expect(wrapper.state('selectedId')).toEqual('456');
  });

  it('updates state when paper is selected', () => {
    const select = wrapper.find('select[name="selectedPaperId"]');
    select.simulate('change', { target: { name: 'selectedPaperId', value: '3' } });
    expect(wrapper.state('selectedPaperId')).toEqual('789');
  });


});
