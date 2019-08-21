import React from 'react';
import {StyledCell} from './styles/StyledCell';
import {TETROMINOS} from '../Tetrominos';

const Cell = ({type}) => {
   return(
    <StyledCell type={type} color={TETROMINOS[type].color}/>
    );

}

export default Cell;