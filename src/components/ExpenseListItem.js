import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({id,description,amount,createdAt,dispatch})=>(
    <div className='expense-list-item'>
        
        <div>
            <Link className="expense-list-item__title" to={`/edit/${id}`}>{description}</Link>
            <h3 className="expense-list-item__date">{moment(createdAt).format('Do, MMM YYYY')}</h3>
        </div>

        <div >
            <h3 className="expense-list-item__amount">{numeral(amount/100).format('$0,0.00')}</h3>
        </div>
        
            
            
        
    </div>
)

export default ExpenseListItem;