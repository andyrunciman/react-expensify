import Moment from 'moment';
const getVisibleExpenses = (expenses,{text,sortBy,startDate,endDate}) => {
    return expenses.filter((expense)=>{
        const createdAtMoment = Moment(expense.createdAt);
        const filterText = expense.description.toLowerCase().includes(text.toLowerCase());
        //const filterStart = typeof startDate !== 'number' || expense.createdAt >=startDate;
        //const filterEnd   = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const filterStart = startDate ? startDate.isSameOrBefore(createdAtMoment,'day'): true
        const filterEnd = endDate ? endDate.isSameOrAfter(createdAtMoment,'day'): true
        return filterText && filterStart && filterEnd;
    }).sort((expense1,expense2)=>{
        switch(sortBy){
            case 'description':
                return expense1.description > expense2.description?-1:1;
            case 'date':
                return expense1.createdAt > expense2.createdAt?-1:1;
            case 'amount':
                return expense1.amount > expense2.amount?-1:1;
            default:
                return 1;
        }
    });
}

export default getVisibleExpenses;