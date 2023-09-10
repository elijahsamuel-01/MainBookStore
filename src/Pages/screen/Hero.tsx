import { styled } from "styled-components";
import vic1 from "../../assets/vic1.mp4";
import Button from "../../Component/static/Button";
import { BsSearch } from "react-icons/bs";

const Hero = () => {
  return (
    <div>
      <Container>
        <Vid src={vic1} autoPlay loop playsInline />
        <Wrapper>
          <ButtonHolder>
            <Button text="Comedy" />
            <Button text="Romance" />
            <Button text="Comedy" />
            <Button text="Romance" />
            <Button text="Comedy" />
            <Button text="Romance" />
            <Button text="Comedy" />
            <Button text="Romance" />
            <Button text="Comedy" />
            <Button text="Romance" />
            <Button text="Comedy" />
            <Button text="Romance" />
          </ButtonHolder>
          <Text>
            Explore the world’s leading Books <br /> and Authors
          </Text>
          <LittleText>
            Millions of designers and agencies around the world showcase their
            portfolio work <br /> on Dribbble - the home to the world’s best
            design and creative professionals.
          </LittleText>
          <Input>
            <Icon>
              <BsSearch />
            </Icon>
            <input
              type="search"
              name=""
              id=""
              placeholder="Search By Author's Name"
            />
          </Input>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Hero;

const Icon = styled.div`
  font-size: 24px;
  color: #4c4c4cff;
  margin-left: 20px;
  margin-right: 20px;
`;

const Input = styled.div`
  width: 400px;
  color: grey;

  height: 70px;
  border-radius: 40px;
  background-color: white;
  display: flex;
  align-items: center;

  input {
    border-radius: 40px;
    outline: 0;
    border: none;
    width: 370px;
    height: 50px;
    font-size: 24px;
  }
`;

const LittleText = styled.div`
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: center;
  color: white;
  align-items: start;
  text-align: center;
  font-weight: 500;
  font-size: 17px;
`;

const Text = styled.div`
  width: 100%;
  height: 21vh;
  display: flex;
  justify-content: center;
  font-size: 35px;
  font-weight: 600;
  color: white;
  align-items: center;
  text-align: center;
`;

const ButtonHolder = styled.div`
width: 80%;
height: 230px;
overflow: hidden;
align-items: end;
display: flex;
gap: 40px;
overflow-y: auto;
scroll-behavior: smooth;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 86.5vh;
  background-color: rgba(30, 30, 30, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Vid = styled.video`
  position: absolute;
  top: 0;
  width: 100%;
  object-fit: contain;
`;

const Container = styled.div`
  height: 86.5vh;
  width: 100%;
  background-color: white;
  position: relative;
  object-fit: cover;
  overflow: hidden;
`;
