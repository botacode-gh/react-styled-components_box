import styled from "styled-components";
import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "../components/BoxWithClassName/BoxWithStyledComponents.js";

export default function HomePage() {
  return (
    <div>
      <Container>
        <BoxWithClassName />
        <BoxWithClassName isBlack />
        <BoxWithStyledComponents />
        <BoxWithStyledComponents isBlack />
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
