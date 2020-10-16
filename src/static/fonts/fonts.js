import { createGlobalStyle } from 'styled-components';

import Rubik_VariableFont_wght from './Rubik_VariableFont_wght.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Rubik';
        src: local('Rubik'),
        url(${Rubik_VariableFont_wght}), format('ttf');
    }
`;