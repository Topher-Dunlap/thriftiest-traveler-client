import React, {useContext} from 'react';
import IconButton from '@material-ui/core/IconButton';
import {FcEmptyFilter} from 'react-icons/fc';
import ThemeContext from './ThemeContext';

export default function Filter() {

    const context = useContext(ThemeContext);
    const filterIconStyle = context.resultFilterIconStyle;
    const filterTextStyle = context.resultFilterTextStyle;

    return (
        <div>
            <hr style={hrStyle}/>
            <p style={filterTextStyle}>Filter Price</p>
            <div style={filterIconStyle}>
                <IconButton style={buttonStyle}>
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

