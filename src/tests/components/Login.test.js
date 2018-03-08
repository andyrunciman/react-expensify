import React from 'react';
import {shallow} from 'enzyme';
import {Login} from '../../components/Login';

test('should render login',()=>{
    const wrapper = shallow(<Login/>);
    expect(wrapper).toMatchSnapshot();
})

test('should call startLogout on button click',()=>{
    const login= jest.fn();
    const wrapper = shallow(<Login login={login}/>);
    wrapper.find('button').simulate('click');
    expect(login).toHaveBeenCalled();
});