import React from 'react';
// import renderer from 'react-test-renderer';
// import ReactShallowRenderer from 'react-test-renderer/shallow';
import { Navbar } from './../../../routers/AppRouter';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

test('should render Header correctly', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find('h1').text()).toBe('Expensify');
    expect(wrapper.find('h1').length).toBe(1);
    expect(wrapper).toMatchSnapshot();
});

// test('should render Header correctly', () => {
//     const renderer = new ReactShallowRenderer();
//     renderer.render(<Navbar />);
//     const result = renderer.getRenderOutput();
//     console.log(result.props.children);

//     expect(result).toMatchSnapshot();
//     expect(result.type).toBe('header');
// });