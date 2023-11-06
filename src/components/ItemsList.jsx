
import { useSelector, useDispatch } from'react-redux'
import { removeItem, editItem, changeEditedId } from '../redux/actions/actionCreators';
import React from 'react';

export default function ItemsList() {
  const {itemList, filterItem} = useSelector(state => state);
  const dispatch = useDispatch();

  const handleEdit = (name, price, id) => {
    dispatch(editItem(name, price));
    dispatch(changeEditedId(id));
  }

  const handleRemove = id => {
    dispatch(removeItem(id));
  }
  let list = itemList;

  list = (filterItem.text !== "" ) ? filterItem.filteredItems : itemList;

  return(
    <ul className="list">
      {list.map(item => 
        <li className="item" key={item.id}>
          {item.name} {item.price}<span>₽</span>
          <button onClick={() => handleEdit(item.name, item.price, item.id)}>✎</button>
          <button onClick={() => handleRemove(item.id)}>✕</button>
        </li>)}
    </ul>
  )
}