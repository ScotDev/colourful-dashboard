import styled from 'styled-components';

const StyledBtn = styled.a`
  border: 2px solid #c73664;
  outline: 0;
  font-family: inherit;
  font-weight:500;
  background-color: ${props => (props.dark ? "#171923" : "#c73664")};
  color:${props => (props.dark ? "#c73664" : "#edfdfd")};
  padding: 0.5rem 1.5rem;
  border-radius: 7px;
  text-align: center;
  vertical-align: middle;
  transition: transform .1s ease-in;

  &:hover {
    cursor: pointer;
    transform: translateY(-4px) scale(1.1);
  }

`

export { StyledBtn };

// initial={{ y: 0 }} whileHover={{ y: -2, origin: 0, boxShadow: "0 8px 16px 0 rgba(0,0,0,0.6)", cursor: "pointer" }} transition={{
//   duration: 0.1,
//   type: "Inertia",
//   stiffness: 500
// }}