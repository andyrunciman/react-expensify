import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';

test('should render ExpensesSummary correctly',()=>{
    const wrapper = shallow(<ExpensesSummary/>)
    expect(wrapper).toMatchSnapshot();
});

test('should render 2 expenses totalling 94.34',()=>{
    const wrapper = shallow(<ExpensesSummary numberOfExpenses={2} expensesTotal={9434}/>)
    expect(wrapper.find('p').text()).toBe('Viewing 2 expenses totalling $94.34');
});
