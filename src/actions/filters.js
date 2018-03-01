export const setTextFilter = (filterText = '')=>{
    return {
        type:'SET_FILTER',
        filterText
    }
}

export const sortByDate = () => {
    return {
        type:'SORT_BY_DATE'
    }
}

export const sortByAmount = () => {
    return {
        type:'SORT_BY_AMOUNT'
    }
}

export const setStartDate = (date) => {
    return {
        type:'SET_START_DATE',
        date
    }
}

export const setEndDate = (date) => {
    return {
        type:'SET_END_DATE',
        date
    }
}