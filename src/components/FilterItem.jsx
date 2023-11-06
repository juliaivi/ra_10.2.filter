import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterItems } from '../redux/actions/actionCreators';

export default function Filter() {
    const dispatch = useDispatch();
    const {itemList, filterItem} = useSelector (state => state);
    const [text, setText] = useState('');

    const handleChange = (e) => {
        const {value} = e.target;
        dispatch(filterItems(itemList, value)); 
        setText(value);
        return filterItem;
    }

    return (     
        <div>
            <input type='text' className='filter__input' value={text} placeholder="Поиск" onChange={handleChange}/>
        </div>
    )


}
