import { styled } from "styled-components";
import { BsSearch } from "react-icons/bs";
import logo from "../../assets/logo-removebg-preview.png";
import { NavLink } from "react-router-dom";
import Upload from "../../Pages/screen/Upload";

const Header = () => {
  return (
    <div>
      <Container>
        <Image>
          <Logo src={logo} />
          <Text>Bookstore</Text>
        </Image>

        <End>
          <Search>
            <BsSearch />
          </Search>
          <NavLink
            to="/uploads"
            style={{ textDecoration: "none", cursor: "pointer" }}
          >
            <Button>Upload Books</Button>
          </NavLink>
        </End>
      </Container>
    </div>
  );
};

export default Header;

const Button = styled.button`
  padding: 9px 14px;
  font-size: 22px;
  color: white;
  margin-left: 7px;
  font-weight: 500;
  border: none;
  border-radius: 6px;
  background-color: #ea4c89ff;
  cursor: pointer;
`;

const Search = styled.div`
  font-size: 25px;
  margin-top: 10px;
  color: grey;
`;

const End = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin-right: 50px;
`;

const Text = styled.div`
  font-size: 30px;
  margin-left: 10px;
  font-weight: 600;
`;

const Logo = styled.img`
  width: 50%;
  height: 100%;
  object-fit: contain;
  cursor: pointer;
`;

const Image = styled.div`
  margin-left: 50px;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 8vh;
  background-color: white;
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding: 20px 0px 20px 0px;
`;
