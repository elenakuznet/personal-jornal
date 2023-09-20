import './JornalList.css';
import CardButton from '../CardButton/CardButton';
import JornalItem from '../JornalItem/JornalItem';
import { useContext, useMemo } from 'react';
import { UserContext } from '../../context/user.context';


function JornalList({ items, setItem }) {
    const {userId} = useContext(UserContext);

    const sortItems = (a, b) =>  {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    };
    const filteredItems = useMemo(() => items
        .filter(el => el.userId === userId)
        .sort(sortItems), [items, userId]);

    if (items.length === 0) {
        <p>Записей пока нет, добавьте первую</p>;
    }


    return <>
        { filteredItems.map(el => (
        <CardButton key={el.id} onClick={() =>{setItem(el);}}>
            <JornalItem 
                title={el.title}
                post={el.post}
                date={el.date}
            />
        </CardButton> 
        ))}</>;
}

export default JornalList;