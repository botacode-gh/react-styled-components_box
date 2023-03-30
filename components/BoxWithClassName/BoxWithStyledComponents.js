import styled from "styled-components";

// why don't these work?
// export default BoxWithStyledComponents = styled.div`
// export default const BoxWithStyledComponents = styled.div`
const BoxWithStyledComponents = styled.div`
  width: 100px;
  height: 100px;
  margin: 2rem;

  background-color: ${({ isBlack }) => (isBlack ? "black" : "green")};

  &:hover {
    background-color: red;
  }
`;

// but this does?
export default BoxWithStyledComponents;
