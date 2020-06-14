import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/modules/clipboard/actions';
import store from '../../store';

import './styles.scss';

const Form: React.FC = () => {
  const [itemTitle, setItemTitle] = useState<string>('');
  const [itemContent, setItemContent] = useState<string>('');

  const dispatch = useDispatch();

  function handleInput(event: ChangeEvent<HTMLInputElement>) {
    setItemTitle(event.target.value);
  }
  
  function handleTextarea(event: ChangeEvent<HTMLTextAreaElement>) {
    setItemContent(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    dispatch(addItem({
      id: store.getState().length + 1,
      title: itemTitle,
      content: itemContent,
    }));

    setItemTitle('');
    setItemContent('');
  }

  return (
    <form className='form ' onSubmit={handleSubmit}>
      <input
        placeholder='Title'
        value={itemTitle}
        onChange={handleInput}
        required
      />

      <textarea
        placeholder='Content'
        value={itemContent}
        onChange={handleTextarea}
        rows={8}
        required
      />

      <button type='submit'>Save</button>
    </form>
  );
}

export default Form;
