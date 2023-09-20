import './CardButton.css';

function CartButton({ children, className, ...props}) {
    const cl = 'card-button' + (className ? ' ' + className : '');

    return (
        <button {...props} className={cl}>
            {children}
        </button>
    );
}

export default CartButton;