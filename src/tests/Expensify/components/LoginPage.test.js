import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { LoginPage } from './../../../Expensify/LoginPage';
import { startLogin } from './../../../redux/actions/auth';

test('should render login page correctly!', () => {
    const wrapper = shallow(<LoginPage startLogin={() => { }} />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

test('should call startLogin on button click', () => {
    const startLogin = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={startLogin} />);
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
});