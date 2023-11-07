import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";

const StyledHeader = styled.header`
  background-color: #181823;
  width: 100%;
  display: flex;
  align-items: center;
  font-family: sans-serif;
  justify-content: space-between;
  .nav_logo {
    padding: 0 12px;
    .nav-logo-link {
      text-decoration: none;
      font-size: 24px;
      color: #fab005;
      font-weight: bold;
    }
  }
  .menuToggleBtn {
    display: none;
    color: white;
    font-size: 24px;
    font-weight: 600;
    position: absolute;
    right: 20px;
    top: 35px;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    .menuToggleBtn {
      display: block;
    }
  }
`;
const NavManu = styled.ul`
  list-style: none;
  display: flex;

  li {
    &:hover {
      cursor: pointer;
      background: #FF8B13;
      border-radius: 4px;
    }
  }
  .nav-menu-list {
    text-decoration: none;
    color: white;
    display: block;
    padding: 10px 10px;
  }
  @media screen and (max-width: 768px) {
    display: ${(props) => (props.isToggleOpen ? "block" : "none")};
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin-top: 5px;
  }
  @media screen and (max-width: 378px) {
    width: 70%;
  }
  
`;

const Header = () => {
    const [isToggleOpen, setIsToggleOpen] = useState(false);

    const handleToggleOpen = () => {
        setIsToggleOpen(!isToggleOpen);
    };
    return (
        <>
            <StyledHeader>
                <div className="nav_logo">
                    <Link to={"#"} className="nav-logo-link">
                        <img src="https://mritunjaykumar.netlify.app/static/media/logo.2566e6d9e620a91d2af2.png" alt="Logo" width={150} height={52} />
                    </Link>
                </div>

                <NavManu isToggleOpen={isToggleOpen} style={{ marginLeft: '1rem', marginRight: '1rem' }}>
                    <li style={{ margin:'0 5px',}}>
                        <Link to={"#"} className="nav-menu-list">
                            About
                        </Link>
                    </li>
                    <li style={{ margin:'0 5px',}}>
                        <Link to={"#"} className="nav-menu-list">
                            Projects
                        </Link>
                    </li>
                    <li style={{ margin:'0 5px',}}>
                        <Link to={"#"} className="nav-menu-list">
                            TIL
                        </Link>
                    </li>
                    <li style={{ margin:'0 5px',}}>
                        <Link to={"#"} className="nav-menu-list" style={{ background: '#FF577F', borderRadius: '4px', }}>
                            Diary
                        </Link>
                    </li>
                </NavManu>
                <FaBars className="menuToggleBtn" onClick={handleToggleOpen} />
            </StyledHeader>
        </>
    );
};

export default Header;
