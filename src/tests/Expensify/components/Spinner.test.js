import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Spinner from './../../../Expensify/Spinner';

test('should render Spinner correctly', () => {
    const wrapper = shallow(<Spinner />);
    expect(toJson(wrapper)).toMatchSnapshot();
});