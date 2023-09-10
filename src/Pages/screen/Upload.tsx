import { styled } from "styled-components";

const Upload = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <ImageHold>
            <Image />
          </ImageHold>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Upload;

const Image = styled.img``;

const ImageHold = styled.div`
  background-color: brown;
  width: 200px;
  height: 200px;
`;

const Wrapper = styled.div`
  width: 50%;
  padding: 20px;
  background-color: cyan;
`;

const Container = styled.div`
  background-color: grey;
  height: 600px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
