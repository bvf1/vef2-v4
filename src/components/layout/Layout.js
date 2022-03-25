import React from 'react';
import propTypes from 'prop-types';

const Layout = ({children}) => {
    return (
        <>
        <header>
            <h1>Viðburðarsíðan!</h1>
        </header>
        <main>
            {children[0]}
        </main>
        <footer>
            {children[1]}
        </footer>
        </>
    )
}

export default Layout


Layout.propTypes = {
    children: propTypes.oneOfType([propTypes.element, propTypes.string]).isRequired,
}