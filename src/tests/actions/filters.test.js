import {setTextFilter,setStartDate,setEndDate,sortByAmount,sortByDate} from '../../actions/filters';
import moment from 'moment';

test('should generate set start date action object',()=>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type:'SET_START_DATE',
        date:moment(0)
    })
});

test('should generate set end date action object',()=>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type:'SET_END_DATE',
        date:moment(0)
    })
});

test('should generate sortByamount action object',()=>{
    const action = sortByAmount();
    expect(action).toEqual({
        type:'SORT_BY_AMOUNT'
    });
});

test('should generate sortByDate action object',()=>{
    const action = sortByDate();
    expect(action).toEqual({
        type:'SORT_BY_DATE'
    });
});

test('should generate setFilterText action object using default values',()=>{
    const action = setTextFilter();
    expect(action).toEqual({
        type:'SET_FILTER',
        filterText:''
    })
});

test('should generate setFilterText action object',()=>{
    const action = setTextFilter('test');
    expect(action).toEqual({
        type:'SET_FILTER',
        filterText:'test'
    })
});