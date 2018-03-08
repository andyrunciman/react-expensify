//react-test-renderer --booooooommmmmmmmmmm!.

//import ReactShallowRenderer from 'react-test-renderer/shallow';

import {shallow} from 'enzyme';
import React from 'react';
import {Header} from '../../components/Header';

//import toJSON from 'enzyme-to-json';

test('should render Header correctly',()=>{
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header/>);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    const wrapper = shallow(<Header logout={()=>{}}/>);
    //expect(wrapper.find('h1').text).toBe(1);
    expect(wrapper).toMatchSnapshot();
})

test('should call startLogout on button click',()=>{
    const logout = jest.fn();
    const wrapper = shallow(<Header logout={logout}/>);
    wrapper.find('button').simulate('click');
    expect(logout).toHaveBeenCalled();
});
