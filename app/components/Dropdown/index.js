import React from 'react';
import DropdownStyle from './DropdownStyle';

const Dropdown = (props) => {
    return (
        <DropdownStyle className="dropdown">
            <i className={props.isOpen ? `fa ${props.icon} active` : `fa ${props.icon}`} onClick={props.onToggle} />
            <ul className={props.isOpen ? 'active' : null}>
                {
                    props.data.map((item, i) => {
                        return (
                            <li key={i} className={i === props.optionSelected ? 'selected' : null}
                                onClick={() => props.onSelect(i,item.title)}>
                                <div className="ink-flex">
                                    <i className={`fa ${item.icon}`} style={{ fontSize: '1rem', marginRight: '0.6em' }}/>
                                    <div style={{ fontSize: '0.8rem' }}>{item.title}</div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </DropdownStyle>
    )
};

export default Dropdown;