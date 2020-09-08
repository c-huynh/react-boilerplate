import App from './App';
import React from 'react';
import {shallow} from 'enzyme';

describe('App', () => {
    test('should match snapshot', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.find('div').text()).toBe('Hello World - React Boilerplate App');
        expect(wrapper).toMatchSnapshot();
    })
})