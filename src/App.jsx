import './App.css';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Body from './layouts/Body/Body';
import Header from './components/Header/Header';
import JornalList from './components/JornalList/JornalList';
import JornalAddButton from './components/JornalAddButton/JornalAddButton';
import JornalForm from './components/JornalForm/JornalForm';
import { useState } from 'react';


const INITIAL_DATA = [
    // {
    //   id: 1,
    //   title: 'Подготовка к обновлению курсов',
    //   text: 'Горные походы открывают удивительные природные ландшафты',
    //   date: new Date()
    // }
    // {
    //   id: 2,
    //   title: 'Поход в годы',
    //   text: 'Думал, что очень много време...',
    //   date: new Date()
    // }
  ];



function App() {

  const [items, setItems] = useState(INITIAL_DATA);

  const addItems = (item) => {
    setItems(oldItems => [...oldItems, {
      text: item.text,
      title: item.title,
      date: new Date(item.date),
      id: oldItems.length > 0 ? Math.max(...oldItems.map(i => i.id)) + 1 : 1
    }]);
  };

  return (
    <div className='app'>
    <LeftPanel>
      <Header />
      <JornalAddButton />
      <JornalList items={items} />
    </LeftPanel>
    <Body>
      <JornalForm onSubmit={addItems}/>
    </Body>
    </div>
  );
}

export default App;