import { styled } from "styled-components";
import pic1 from "../../assets/1.png"
import pic2 from "../../assets/10.jpg"
import pic3 from "../../assets/2.jpg"
import pic4 from "../../assets/8.png"
import pic5 from "../../assets/22.png"
import pic6 from "../../assets/4.png"
import pic7 from "../../assets/3.png"
import pic8 from "../../assets/5.jpg"
import pic9 from "../../assets/6.png"
import pic10 from "../../assets/7.jpg"
import pic11 from "../../assets/24.jpg"
import pic12 from "../../assets/20.png"
import pic13 from "../../assets/22.png"
import pic14 from "../../assets/13.jpg"
import pic15 from "../../assets/21.png"
import InnerCards from "../../Component/common/InnerCards";
const Cards = () => {
  return (
    <div>
      <Container>
        <Row>
          <InnerCards
            DP="N"
            hoverText="Think and Grow Rich"
            DPName="Napolean Hill"
            View={12}
            buttonText="Motivational"
            Img={pic1}
            bcc="orange"
          />
          <InnerCards
            DP="J"
            hoverText="Think and Grow Rich"
            DPName="James Clear"
            View={5}
            buttonText="Motivational"
            Img={pic3}
            bcc="blue"
          />
          <InnerCards
            DP="N"
            hoverText="I Can't Make This Up"
            DPName="Kevin Hart"
            View={2}
            buttonText="Comedy"
            Img={pic2}
            bcc="blue"
          />

          <InnerCards
            DP="N"
            hoverText="Think and Grow Rich"
            DPName="Napolean Hill"
            View={12}
            buttonText="Motivational"
            Img={pic4}
            bcc="orange"
          />
          <InnerCards
            DP="J"
            hoverText="Think and Grow Rich"
            DPName="James Clear"
            View={5}
            buttonText="Motivational"
            Img={pic5}
            bcc="blue"
          />
          <InnerCards
            DP="N"
            hoverText="I Can't Make This Up"
            DPName="Kevin Hart"
            View={2}
            buttonText="Comedy"
            Img={pic6}
            bcc="blue"
          />
          <InnerCards
            DP="N"
            hoverText="Think and Grow Rich"
            DPName="Napolean Hill"
            View={12}
            buttonText="Motivational"
            Img={pic7}
            bcc="orange"
          />
          <InnerCards
            DP="J"
            hoverText="Think and Grow Rich"
            DPName="James Clear"
            View={5}
            buttonText="Motivational"
            Img={pic8}
            bcc="blue"
          />
          <InnerCards
            DP="N"
            hoverText="I Can't Make This Up"
            DPName="Kevin Hart"
            View={2}
            buttonText="Comedy"
            Img={pic9}
            bcc="blue"
          />
          <InnerCards
            DP="N"
            hoverText="Think and Grow Rich"
            DPName="Napolean Hill"
            View={12}
            buttonText="Motivational"
            Img={pic10}
            bcc="orange"
          />
          <InnerCards
            DP="J"
            hoverText="Think and Grow Rich"
            DPName="James Clear"
            View={5}
            buttonText="Motivational"
            Img={pic11}
            bcc="blue"
          />
          <InnerCards
            DP="N"
            hoverText="I Can't Make This Up"
            DPName="Kevin Hart"
            View={2}
            buttonText="Comedy"
            Img={pic12}
            bcc="blue"
          />
          <InnerCards
            DP="N"
            hoverText="Think and Grow Rich"
            DPName="Napolean Hill"
            View={12}
            buttonText="Motivational"
            Img={pic13}
            bcc="orange"
          />
          <InnerCards
            DP="J"
            hoverText="Think and Grow Rich"
            DPName="James Clear"
            View={5}
            buttonText="Motivational"
            Img={pic14}
            bcc="blue"
          />
          <InnerCards
            DP="N"
            hoverText="I Can't Make This Up"
            DPName="Kevin Hart"
            View={2}
            buttonText="Comedy"
            Img={pic15}
            bcc="blue"
          />
        </Row>
      </Container>
    </div>
  );
};

export default Cards;

const Row = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: end;
  justify-content: center;
  gap: 50px;
  flex-wrap:wrap;
  margin-top:50px;
`;

const Container = styled.div`
  min-height: 170vh;
  /* background-color: plum; */
  width: 100%;
`;
