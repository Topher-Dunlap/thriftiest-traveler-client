import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import {FcEmptyFilter} from 'react-icons/fc';
import '../css/filter.css';
import '../css/theme.css';

export default function Filter(props) {

    let setFilterSelected = props.setFilterSelected;
    let filterSelected = props.filterSelected;

    let handleFilter = e => {
        e.preventDefault();
        setFilterSelected(!filterSelected);
    };

    return (
        <div>
            <hr className='hrStyle'/>
            <p className="resultFilterTextStyle">Filter Price</p>
            <div>
                <IconButton onClick={handleFilter} style={buttonStyle}>
                    <FcEmptyFilter size={25}/>
                </IconButton>
            </div>
        </div>
    );
}

const buttonStyle = {
    borderStyle: 'solid',
    borderColor: '#333029',
    borderWidth: 'thin',
    marginBottom: '2rem',
};


