import React, { Component }         from 'react';
import HeaderTop                    from './headerTop/headerTop.js';
import HeaderNavigation             from './headerNavigation/headerNavigation.js';

class Header extends Component {
    render() {
        return (
            <header className="themeix-header">
                <HeaderTop/>
                <HeaderNavigation/>
            </header>
        );
    }
}

export default Header;
