import './CardButton.css';

function CartButton({ children, className }) {
    const cl = 'card-button' + (className ? ' ' + className : '');

    
    return (
        <button className={cl}>
            {children}
        </button>
    );
}

export default CartButton;