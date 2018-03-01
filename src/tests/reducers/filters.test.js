import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values',()=>{
    const state = filtersReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual({
        text:'',
        sortBy:'amount',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    });
});

test('should set sortBy to date',()=>{
    const state = filtersReducer(undefined,{type:'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date');
});

test('should set sortBy to amount',()=>{
    const currentState = {
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    }
    const state = filtersReducer(currentState,{type:'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should set startDate Filter',()=>{
    const state = filtersReducer(undefined,{type:'SET_START_DATE',date:moment(0)});
    expect(state.startDate).toEqual(moment(0));
});

test('should set endDate Filter',()=>{
    const state = filtersReducer(undefined,{type:'SET_END_DATE',date:moment(0)});
    expect(state.endDate).toEqual(moment(0));
});

test('should set text Filter',()=>{
    const state = filtersReducer(undefined,{type:'SET_FILTER',filterText:'test'});
    expect(state.text).toEqual('test');
});
