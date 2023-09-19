import './App.css';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Body from './layouts/Body/Body';
import Header from './components/Header/Header';
import JornalList from './components/JornalList/JornalList';
import JornalAddButton from './components/JornalAddButton/JornalAddButton';
import JornalForm from './components/JornalForm/JornalForm';
import { useLocalStorage } from './hooks/use-localstorage.hook';
import {UserContextProvider} from './context/user.context';


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

function mapItems(items) {
  if (!items) {
    return [];
  }
  return items.map(i => ({
    ...i,
    date: new Date(i.date)
  }));
}

function App() {
  const [items, setItems] = useLocalStorage('data');

  const addItems = (item) => {
    setItems([...mapItems(items), {
      ...item,
      date: new Date(item.date),
      id: items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1
    }]);
  };

  return (
    <>
      <UserContextProvider>
        <div className='app'>
          <LeftPanel>
            <Header/>
            <JornalAddButton />
            <JornalList items={mapItems(items)} />
          </LeftPanel>
          <Body>
            <JornalForm onSubmit={addItems}/>
          </Body>
        </div>
      </UserContextProvider>
    </>
  );
}

export default App;