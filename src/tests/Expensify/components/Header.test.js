import React from 'react';
import { Header } from '../../../Expensify/Header';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { startLogout } from './../../../redux/actions/auth';

test('should render Header correctly', () => {
    const wrapper = shallow(<Header startLogout={() => { }} />);
    expect(wrapper.find('h1').text()).toBe('Expensify');
    expect(wrapper.find('h1').length).toBe(1);
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout} />);
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});