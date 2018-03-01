import React from 'react';
import {shallow} from 'enzyme';
import {EditExpense} from '../../components/EditExpense';
import expenses from '../../tests/fixtures/expenses';

let wrapper,history,removeExpense,editExpense;

beforeEach(()=>{
    history = {push:jest.fn()};
    editExpense = jest.fn();
    removeExpense = jest.fn();
    wrapper = shallow(<EditExpense  removeExpense={removeExpense} 
                                    editExpense={editExpense} 
                                    history={history} 
                                    expense={expenses[1]}/>);
});
test('should render EditExpensePage',()=>{
    expect(wrapper).toMatchSnapshot();
});
test('should handle edit expense',()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id,expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
});
test('should handle removeExpense',()=>{
    wrapper.find('button').simulate('click');
    //note - the tutor says that button elements dont have props so you should call the simulate. My code worked OK without them so I am not sure. It does make sense that the simulate actutally simulates a click which then calls the function, rather than just calling the click function.
    expect(removeExpense).toHaveBeenLastCalledWith(expenses[1].id);
    expect(history.push).toHaveBeenLastCalledWith('/');

});