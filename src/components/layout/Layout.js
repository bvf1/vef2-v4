import React from 'react';

const Layout = ({children}) => {
    console.log("children",children)
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