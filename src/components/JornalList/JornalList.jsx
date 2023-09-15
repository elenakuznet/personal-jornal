import './JornalList.css';

function JornalList({ children }) {
    
    return (
        <div className='jornal-list'>
            { children }
        </div>
    );
}

export default JornalList;