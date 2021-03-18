import React, {useContext} from 'react';
import IconButton from '@material-ui/core/IconButton';
import {FcEmptyFilter} from 'react-icons/fc';
import ThemeContext from './ThemeContext';

export default function Filter(props) {

    const context = useContext(ThemeContext);
    const filterIconStyle = context.resultFilterIconStyle;
    const filterTextStyle = context.resultFilterTextStyle;
    let setFilterSelected = props.setFilterSelected;
    let filterSelected = props.filterSelected;

    let handleFilter = e => {
        e.preventDefault();
        setFilterSelected(!filterSelected);
    };

    return (
        <div>
            <hr style={hrStyle}/>
            <p style={filterTextStyle}>Filter Price</p>
            <div style={filterIconStyle}>
                <IconButton
                    onClick={handleFilter}
                    style={buttonStyle}
                >
                    <FcEmptyFilter
                        size={25}/>
                </IconButton>
            </div>
        </div>
    );
}

const hrStyle = {
  width: '150px',
    marginTop: '2rem',
};

const buttonStyle = {
    borderStyle: 'solid',
    borderColor: '#333029',
    borderWidth: 'thin',
};

