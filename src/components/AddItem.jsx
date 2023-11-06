import { useSelector, useDispatch } from 'react-redux';
import { addItem, changeItemFiled, saveEditedItem, changeEditedId} from '../redux/actions/actionCreators';

export default function AddItem () {
  let {itemAdd} = useSelector(state => state); // для подключения и взять у глобального стейта данные
  const dispatch = useDispatch();

  const clearInputs = () => {
    dispatch(changeItemFiled('name', ''));
    dispatch(changeItemFiled('price', ''));
    dispatch(changeItemFiled('editedId ', 'null'));
  }

  const handleChange = event => {
    const { name, value } = event.target;
    dispatch(changeItemFiled(name, value));
  }

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addItem(itemAdd.name, itemAdd.price));
    clearInputs();
  }

  const handleUpdate = event => {
    event.preventDefault()
    dispatch(saveEditedItem(itemAdd.name, itemAdd.price, itemAdd.editedId));
    dispatch(changeEditedId(null));
    clearInputs();
  }

  const handleCancel = () => {
    dispatch(changeEditedId(null));
    clearInputs();
  }

  return(
    <>
      <form className="form" onSubmit={itemAdd.editedId !== null ? handleUpdate : handleSubmit}>
        <input className="form__name" type="text" name='name' onChange={handleChange} value={itemAdd.name}/>
        <input className="form__price"  type="number" name='price' onChange={handleChange} value={itemAdd.price}/>
        <button className="form__button" type='submit'>Save</button>
        {itemAdd.name !== "" || itemAdd.price !== "" ? 
          <button className="form__cancel" onClick={handleCancel} type='button'>Cancel</button> : null}
      </form>
    </>
  )
}