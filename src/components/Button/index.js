import styled from "styled-components";

const Btn = styled.button`
  background: #ffffff;
  padding: 0.5rem 2rem;
  border: 1px solid #1b89e0;
  color: #1b89e0;
  cursor: pointer;
  border-radius: 0.5rem;
  font-family: inherit;
  font-size: 1rem;
  font-weight: ${({ fontWeight }) => fontWeight || 500};
  &:hover {
    border: 1px solid #24b97c;
  }
`;

function Button(props) {
  const { children, ...otherProps } = props;
  return <Btn {...otherProps}>{children}</Btn>;
}

export default Button;
