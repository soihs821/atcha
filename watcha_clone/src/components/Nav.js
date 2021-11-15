import React, { Component } from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";

const Nav = styled.nav`
  width: 100%;
  height: 62px;
  position: fixed;
  background-color: #ffffff;
  display: flex;
  /*justify-content: space-between;*/
  align-items: center;
  box-shadow: rgb(0 0 0 / 8%) 0px 1px 0px 0px;
  margin: 0px;
  top: 0;
  left: 0;
  right: 0;
  list-style: none;
  padding: 0px;
  display: flex;
  overflow: hidden;
`;

// 얘 어떻게 하지 .. ?
const Button = styled.button`
  writing-mode: horizontal-tb !important;
  text-rendering: auto;
  word-spacing: normal;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: center;
  align-items: flex-start;
  box-sizing: border-box;
`;

const Movie = styled.button`
  background: none;
  padding: 0px;
  border: none;
  margin: 0px 0px 0px 14px;
  cursor: pointer;
  color: rgb(53, 53, 53);
  font-size: 15px;
  letter-spacing: -0.3px;
`;

const TvBook = styled.button`
  background: none;
  padding: 0px;
  border: none;
  margin: 0px;
  cursor: pointer;
  color: rgb(126, 126, 126);
  font-size: 15px;
  letter-spacing: -0.3px;
`;

const Login = styled.button`
  cursor: pointer;
  background: transparent;
  color: rgb(116, 116, 123);
  font-size: 14px;
  letter-spacing: -0.3px;
  padding: 0px;
  border: 0px;
  margin: 15px 0px;
`;

const Join = styled.button`
  cursor: pointer;
  text-align: center;
  border-radius: 6px;
  font-weight: 500; /* 얘 적용 안되고 있음 */
  line-height: 20px;
  box-sizing: border-box;
  width: auto;
  min-width: 72px;
  height: 32px;
  background: transparent;
  color: rgb(53, 53, 53);
  font-size: 14px;
  letter-spacing: -0.3px;
  padding: 5px 14px 6px;
  border: 1px solid rgba(116, 116, 123, 0.5);
  margin: 15px 120px 15px 0px;
`;
const NavBody = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 62px;
  display: flex;
  overflow: hidden;
  align-items: center;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
`;

const NavTitle = styled.li`
  display: list-item;
  text-align: -webkit-match-parent;
  margin-left: 60px;
`;

const LeftMenu = styled.li`
  display: list-item;
  text-align: -webkit-match-parent;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin: 0px 0px 0px 25px;
  flex-shrink: 0;
`;

const RightMenu = styled.li`
  display: list-item;
  text-align: -webkit-match-parent;
  text-decoration: none;
  margin: 0px 0px 0px 25px;
  flex-shrink: 0;
`;

const Input = styled.li`
  display: list-item;
  text-align: -webkit-match-parent;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 62px;
  flex-shrink: 1;
  margin: 0px 0px 0px auto;
  transition: all 0.5s ease 0s;
`;

const SearchBar = styled.input`
  display: flex;
  /*-webkit-box-align: center;*/
  line-height: 23px;
  font-size: 14px;
  background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICAgIDxwYXRoIGZpbGw9IiNCQUJBQzMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTkuODE0IDE1LjczNWMtMy4yMDcgMC01LjgxNy0yLjYzLTUuODE3LTUuODYxIDAtMy4yMzMgMi42MS01Ljg2MiA1LjgxNy01Ljg2MiAzLjIwNyAwIDUuODE4IDIuNjMgNS44MTggNS44NjJzLTIuNjEgNS44Ni01LjgxOCA1Ljg2bTkuODQxIDIuNTRsLTMuNjYtMy43MDRjLjk4LTEuMzEgMS41NzEtMi45MzIgMS41NzEtNC42OTYgMC00LjMwOC0zLjQ3OC03LjgxMi03Ljc1Mi03LjgxMi00LjI3NCAwLTcuNzUyIDMuNTA0LTcuNzUyIDcuODEyIDAgNC4zMDcgMy40NzggNy44MSA3Ljc1MiA3LjgxIDEuODI5IDAgMy41MDctLjY0NCA0LjgzNC0xLjcxNGwzLjYzNyAzLjY4Yy4xODIuMTg2LjQyNi4yODguNjg1LjI4OC4yNTcgMCAuNS0uMS42ODMtLjI4NC4xODItLjE4NC4yODQtLjQzLjI4NS0uNjkgMC0uMjYtLjEtLjUwNS0uMjgzLS42OSIvPgo8L3N2Zz4K)
    9px 8px no-repeat rgb(245, 245, 247);
  box-sizing: border-box;
  width: 300px;
  height: 38px;
  padding: 7px 10px 8px 36px;
  border-radius: 2px;
  border: none;
`;
const StyledP = styled.p`
  color: #292a32;
  font-size: 22px;
  font-weight: 700;
  -webkit-letter-spacing: -0.4px;
  -moz-letter-spacing: -0.4px;
  -ms-letter-spacing: -0.4px;
  letter-spacing: -0.4px;
  line-height: 30px;
`;

const Content = styled.div`
  margin-top: 100px;
`;
// list 버전
class Navbar extends Component {
  render() {
    return (
      <div id="container">
        <GlobalStyle />
        <header>
          <Nav>
            <NavBody>
              <NavTitle>
                <img
                  src={require("../img/watcha_logo.PNG").default}
                  alt="logo"
                />
              </NavTitle>
              <LeftMenu>
                <Movie>영화</Movie>
              </LeftMenu>
              <LeftMenu>
                <TvBook>TV 프로그램</TvBook>
              </LeftMenu>
              <LeftMenu>
                <TvBook>책</TvBook>
              </LeftMenu>
              <Input>
                <SearchBar
                  type="text"
                  placeholder="콘텐츠, 인물, 컬렉션, 유저를 검색해보세요."
                />
              </Input>
              <RightMenu>
                <Login>로그인</Login>
              </RightMenu>
              <RightMenu>
                <Join>회원가입</Join>
              </RightMenu>
            </NavBody>
          </Nav>
        </header>

        <Content>
          <div className="firstbox">
            <div className="firstbox title">
              <StyledP className="boxoffice">박스오피스 순위</StyledP>
            </div>
            <div className="firstbox scroll">
              <div className="firstbox movies">
                <ul className="firstbox list">
                  <li className="">
                    <a title="이터널스" href="링크">
                      <div>포스터 부분</div>
                      <div>포스터 밑 글자부분</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="secondbox">
            <div className="secondbox title">
              <StyledP>왓챠 영화 순위</StyledP>
            </div>
            <div className="firstbox movies"></div>
          </div>
          <div className="thridbox">
            <div className="thridbox title">
              <StyledP>어쩌구 머시기 순위</StyledP>
            </div>
            <div className="firstbox movies"></div>
          </div>
        </Content>
      </div>
    );
  }
}

export default Navbar;
