import './App.css';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Body from './layouts/Body/Body';
import Header from './components/Header/Header';
import JornalList from './components/JornalList/JornalList';
import JornalAddButton from './components/JornalAddButton/JornalAddButton';
import JornalForm from './components/JornalForm/JornalForm';
import { useEffect, useState } from 'react';


// const INITIAL_DATA = [
//     {
//       id: 1,
//       title: 'Подготовка к обновлению курсов',
//       text: 'Горные походы открывают удивительные природные ландшафты',
//       date: new Date()
//     },
//     {
//       id: 2,
//       title: 'Поход в годы',
//       text: 'Думал, что очень много време...',
//       date: new Date()
//     }
//   ];



function App() {

  const [items, setItems] = useState([]);
  useEffect(() => {
		const data = JSON.parse(localStorage.getItem('data'));
		if (data) {
			setItems(data.map(item => ({
				...item,
				date: new Date(item.date)
			})));
		}
	}, []);

	useEffect(() => {
		if (items.length) {
			console.log('Запись!');
			localStorage.setItem('data', JSON.stringify(items));
		}
	}, [items]);


  const addItems = (item) => {
    setItems(oldItems => [...oldItems, {
      post: item.post,
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