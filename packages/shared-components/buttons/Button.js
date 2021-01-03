import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  padding: .5rem 1rem;
  color: #111111;
  border: 1px solid #111111;
  border-radius: 15px;
  outline: none;
  &:hover {
    color: #aaa;
    border-color: #aaa;
  }
`;

export default Button;
