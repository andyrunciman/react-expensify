import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import {filters,altFilters} from '../fixtures/filters';

let wrapper,setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate;

beforeEach(()=>{
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(<ExpenseListFilters 
        filters={filters}
        setTextFilter={setTextFilter}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        setStartDate={setStartDate}
        setEndDate={setEndDate}/>);
    
})

test('Esnure that the ExpenseListFilter renders correctly',()=>{
        expect(wrapper).toMatchSnapshot();
});

test('Esnure that the ExpenseListFilter with alt data',()=>{
    wrapper.setProps({
        filters:altFilters
    })
    expect(wrapper).toMatchSnapshot();
});

test('should handle text changes',()=>{
    const filter = "test";
    wrapper.find('input').simulate('change',{
        target:{
            value:filter
        }
    });
    expect(setTextFilter).toHaveBeenCalledWith(filter);
});

test('should handle sort by date',()=>{
    wrapper.find('select').simulate('change',{
        target:{
            value:'date'
        }
    });
    expect(sortByDate).toHaveBeenCalled();
});

test('should handle sort by amount',()=>{
    wrapper.find('select').simulate('change',{
        target:{
            value:'amount'
        }
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date change',()=>{
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({
        startDate:altFilters.startDate,
        endDate:altFilters.endDate
    });
    expect(setStartDate).toHaveBeenCalledWith(altFilters.startDate);
    expect(setEndDate).toHaveBeenCalledWith(altFilters.endDate);
});