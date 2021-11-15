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
  top: 0;
  list-style: none;
  display: flex;
  overflow: hidden;
`;

// 얘 어떻게 하지 .. ?
const Button = styled.button`
  writing-mode: horizontal-tb !important;
  text-rendering: auto;
  word-spacing: normal;
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
  border: none;
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
  border: none;
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
  width: 100%;
  height: 62px;
  display: flex;
  overflow: hidden;
  align-items: center;
  margin-block-start: 1em;
  margin-block-end: 1em;
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

/* 얘 SearchBar 안으로 넣어야 하는데 그럼 안먹음 ㅡㅡ
@media (min-width: 860px) {
    SearchBar {
        background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+SWNvbiAvIEljVGFiQmFyIC8gSWNTZWFyY2hBbmQ8L3RpdGxlPgogICAgPGcgaWQ9IlVJLS0t7ZmILS8t6rKA7IOJIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsLW9wYWNpdHk9IjAuNzYiPgogICAgICAgIDxnIGlkPSJfR2xvYmFsLS8tTmF2aWdhdGlvbkJhci0vLUl0ZW1zLS8tU2VhcmNoLS8tRW1wdHkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMS4wMDAwMDAsIC0xMS4wMDAwMDApIiBmaWxsPSIjN0U3RTdFIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTEzIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJJY29uLS8tSWNUYWJCYXItLy1JY1NlYXJjaEFuZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAuMDAwMDAwLCAxMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOC4wMjk5ODQxNSwxMi44NzM5OTc5IEM1LjQwNjA4MTEyLDEyLjg3Mzk5NzkgMy4yNzA1NDg1OCwxMC43MjI4NDAzIDMuMjcwNTQ4NTgsOC4wNzg3NTkgQzMuMjcwNTQ4NTgsNS40MzM4ODAwNyA1LjQwNjA4MTEyLDMuMjgyNzIyNTEgOC4wMjk5ODQxNSwzLjI4MjcyMjUxIEMxMC42NTM4ODcyLDMuMjgyNzIyNTEgMTIuNzg5NDE5Nyw1LjQzMzg4MDA3IDEyLjc4OTQxOTcsOC4wNzg3NTkgQzEyLjc4OTQxOTcsMTAuNzIyODQwMyAxMC42NTM4ODcyLDEyLjg3Mzk5NzkgOC4wMjk5ODQxNSwxMi44NzM5OTc5IE0xNi4wODEzNjkzLDE0Ljk1MTc3NTIgTDEzLjA4NjI0MTMsMTEuOTIwODUyNCBDMTMuODg4ODQ3LDEwLjg0OTY2MDUgMTQuMzcyNDY4Myw5LjUyMTYzNzc2IDE0LjM3MjQ2ODMsOC4wNzg3NTkgQzE0LjM3MjQ2ODMsNC41NTQxMTQ4NiAxMS41MjY5Mzg1LDEuNjg3NSA4LjAyOTk4NDE1LDEuNjg3NSBDNC41MzMwMjk4MywxLjY4NzUgMS42ODc1LDQuNTU0MTE0ODYgMS42ODc1LDguMDc4NzU5IEMxLjY4NzUsMTEuNjAyNjA1NSA0LjUzMzAyOTgzLDE0LjQ2OTIyMDQgOC4wMjk5ODQxNSwxNC40NjkyMjA0IEM5LjUyNTk2NTA2LDE0LjQ2OTIyMDQgMTAuODk5MjU5NywxMy45NDE5OTkzIDExLjk4NDQzOTUsMTMuMDY2MjIyMiBMMTQuOTYwNTcwOSwxNi4wNzgwMDIzIEMxNS4xMDkzNzc0LDE2LjIyOTU0ODQgMTUuMzA4ODQxNSwxNi4zMTI1IDE1LjUyMDk3MDEsMTYuMzEyNSBDMTUuNzMxNTE1NSwxNi4zMTI1IDE1LjkyOTM5NjYsMTYuMjMwMzQ2IDE2LjA3OTc4NjIsMTYuMDgwMzk1MSBDMTYuMjI4NTkyOCwxNS45Mjk2NDY2IDE2LjMxMTcwMjgsMTUuNzI5NDQ2MiAxNi4zMTI1LDE1LjUxNjQ4NCBDMTYuMzEzMjg1OSwxNS4zMDM1MjE4IDE2LjIzMDk2NzMsMTUuMTAyNTIzNyAxNi4wODEzNjkzLDE0Ljk1MTc3NTIiIGlkPSJGaWxsLTEiIGZpbGw9IiNCQUJBQzMiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc) 10px 10px no-repeat rgb(245, 245, 247);
    }
}*/

const StyledP = styled.p`
  color: #292a32;
  font-size: 22px;
  font-weight: 700;
  margin-left: 60px;
  letter-spacing: -0.4px;
  line-height: 30px;
`;

const Content = styled.div`
  margin-top: 100px;
`;

const Box = styled.div`
  width: 250px;
  height: auto;
  // 안에 내용이랑 padding 좌, 우 7px 씩
`;
const Poster = styled.div`
  // 이미지 크기 490 × 700 px
`;

const detail = styled.div``;

// list 버전
const Navbar = () => (
  <div id="container">
    <GlobalStyle />
    <header>
      <Nav>
        <NavBody>
          <NavTitle>
            <img src={require("../img/watcha_logo.PNG").default} alt="logo" />
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
              <Box>
                <a title="이터널스" href="링크">
                  <Poster>
                    <img
                      src={require("../img/dune_poster.jpg").default}
                      alt="dune_poster"
                    />
                  </Poster>
                  <detail>포스터 밑 글자부분</detail>
                </a>
              </Box>
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

export default Navbar;
