
import styled from 'styled-components';


const Card = styled.div`
opacity:1;
background:#272b3b;
border-radius: 10px;
padding: 0.6rem 3rem 1rem 3rem;
height: 400px;
width: ${props => (props.large ? "600px" : "375px")};
overflow:hidden;
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.3);
transition: opacity 0.1s;

border-top: 4px #4AABC7 solid;

:hover{
    cursor: pointer;
    opacity: 0.8;
    /* transform: scale(1.005); */
}
`

export { Card };
