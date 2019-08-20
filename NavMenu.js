import React from 'react';

const NavMenu = (props) => {
    return (
        <ul className="nav">
            {props.tab.map(el => <li className="nav-li"> {el.name}
                {!el.submenu ?
                    null :

                    <ul className="dropdown-list">
                        {el.submenu.map(el => <li className="dropdown-items nav-li"> {el}</li>)}
                    </ul>}

            </li>)}
        </ul>
    )
}
export default NavMenu 