import './App.css';
import JornalItem from './components/JornalItem/JornalItem';
import CardButton from './components/CardButton/CardButton';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Body from './layouts/Body/Body';
import Header from './components/Header/Header';
import JornalList from './components/JornalList/JornalList';
import JornalAddButton from './components/JornalAddButton/JornalAddButton';
import { useState } from 'react';


function App() {
  const data = [
    {
      title: 'Подготовка к обновлению курсов',
      text: 'Горные походы открывают удивительные природные ландшафты',
      date: new Date()
    },
    {
      title: 'Поход в годы',
      text: 'Думал, что очень много време...',
      date: new Date()
    }
  ];

  const [inputData, setInputData] = useState('');

  const inputChange = (event) => {
    setInputData(event.target.value);

  };

  return (
    <div className='app'>
    <LeftPanel>
      <Header />
      <JornalAddButton />
      <JornalList>
        <CardButton>
          <JornalItem 
            title={data[0].title}
            text={data[0].text}
            date={data[0].date}
          />
        </CardButton> 
        <CardButton>
        <JornalItem 
          title={data[1].title}
          text={data[1].text}
          date={data[1].date}
        />
      </CardButton>
      </JornalList>

    </LeftPanel>
    <Body>
      <input type='text' value={inputData} onChange={inputChange}/>
    </Body>
    </div>
    
  );
}

export default App;
