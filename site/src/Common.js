import {createGlobalStyle} from 'styled-components';

const Common = createGlobalStyle
`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

@font-face {
    font-family: Poppin-1;
    src: url(./fonts/Poppins-Regular.otf);
}

@font-face {
    font-family: Poppin-2 ;
    src: url(./fonts/Poppins-Medium.otf);
}
`;

export default Common;