import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../store/modules/clipboard/actions';
import store from '../../store';
import './style.scss';

interface Item {
  id: number;
  title: string,
  content: string;
}

const ClipTable: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  const dispatch = useDispatch();

  function copyToClipboard(content: string) {
    const element = document.createElement('textarea');
    element.value = content;
    document.body.appendChild(element);
    element.select();
    document.execCommand('copy');
    document.body.removeChild(element);
  }

  useEffect(() => {
    setItems(store.getState());
  }, []);

  return (
    <div className='content'>

      <div className='separator'/>

      <ul>
        {items?.map(item => (
          <li key={item.id}>
            <div>
              <button onClick={() => dispatch(removeItem(item))} className='delete-button'>X</button>
              <p>{item.title}</p>
              <button onClick={() => copyToClipboard(item.content)}>Copy</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClipTable;
