import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import LoginPage from './../../../Expensify/LoginPage';

test('should render login page correctly!', () => {
    const wrapper = shallow(<LoginPage />);
    expect(toJson(wrapper)).toMatchSnapshot();
});