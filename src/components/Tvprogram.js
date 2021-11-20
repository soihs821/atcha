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
  margin-left: -5px;
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
  margin-left: 40px;
  margin-bottom: -2px;
  letter-spacing: -0.4px;
  line-height: 30px;
`;

const Content = styled.div`
  margin-top: 100px;
`;

const MultiBox = styled.ul`
  list-style: none;
  white-space: nowrap;
  margin-right: 0px !important;
  margin-left: 0px !important;
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  padding-inline-start: 40px;
`;

const Box = styled.li`
  width: 250px;
  height: auto;
  text-align: -webkit-match-parent;
  display: inline-block;
  vertical-align: top;
  box-sizing: border-box;
  margin-right: 18px;
  // 안에 내용이랑 padding 좌, 우 7px 씩
`;

const Container = styled.div`
  width: 25%;
  height: 500px;
  margin-left: 60px;
  margin-bottom: 50px;
`;

const SingleBox = styled.a`
  text-decoration-line: none;
`;

const Poster = styled.div`
  // 이미지 크기 490 × 700 px
`;

const PosterBox = styled.div`
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  border: 1 px solid #eae9e8;
  border-radius: 5 px;
  background: #f8f8f8;
`;

const RankBox = styled.div`
  position: absolute;
  bottom: 3px;
  left: 3px;
  background-color: rgba(0, 0, 0, 0.77);
  color: rgb(255, 255, 255);
  font-weight: 700;
  letter-spacing: normal;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  opacity: 1;
  transition: opacity 300ms ease 0s;
  top: 6px;
  left: 6px;
  width: 28px;
  height: 28px;
  line-height: 27px;
`;

// 화면 크기 작아지면 RANKBOX가 포스터 왼쪽 하단으로 이동
/*const RankBox = styled.div`
  position: absolute;
  bottom: 3px;
  left: 3px;
  background-color: rgba(0, 0, 0, 0.77);
  color: rgb(255, 255, 255);
  font-weight: 700;
  letter-spacing: normal;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  opacity: 1;
  transition: opacity 300ms ease 0s;
`;*/

const Image = styled.img`
  vertical-align: top;
  width: 100%;
  height: 100%;
  opacity: 1;
  object-fit: cover;
  transition: opacity 420ms ease 0s;
  border-radius: 5px;
`;

const Detail = styled.div`
  text-align: left;
  width: calc(100% - 10px);
  margin: 5px 10px 0 0;
`;
const Name = styled.div`
  color: #292a32;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.3px;
  line-height: 22px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 5px;
  margin-bottom: 3 px;
`;
const Country = styled.div`
  color: #292a32;
  font-size: 14px;
  padding-bottom: 1px;
  font-size: 14px;
  font-weight: 400;
  -webkit-letter-spacing: normal;
  -moz-letter-spacing: normal;
  -ms-letter-spacing: normal;
  letter-spacing: normal;
  line-height: 21px;
`;
const Star = styled.div`
  color: #555765;
  font-size: 14px;
`;
const Ratio = styled.div`
  color: #74747b;
  font-size: 13px;
  margin-top: 3px;
`;
// list 버전
const Navbar = () => (
  <div id="container">
    <GlobalStyle />
    <header>
      <Nav>
        <NavBody>
          <NavTitle>
            <img src={require("../img/atcha_logo.png").default} alt="logo" />
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
      <Container>
        <StyledP>한국 TV 프로그램 인기 순위</StyledP>
        <MultiBox>
          <Box>
            <SingleBox title="듄" href="링크">
              <PosterBox>
                <Poster>
                  <Image
                    src={require("../img/dune_poster.jpg").default}
                    alt="dune_poster"
                  />
                </Poster>
                <RankBox>1</RankBox>
              </PosterBox>
              <Detail>
                <Name>듄</Name>
                <Country>2021 ・ 미국</Country>
                <Star>평균★3.9</Star>
                <Ratio>예매율 8.8% ・ 누적 관객 127만명</Ratio>
              </Detail>
            </SingleBox>
          </Box>
          <Box>
            <SingleBox title="디어에반핸슨" href="링크">
              <PosterBox>
                <Poster>
                  <Image
                    src={require("../img/디어에반핸슨_poster.jpg").default}
                    alt="dearevanhansen_poster"
                  />
                </Poster>
                <RankBox>2</RankBox>
              </PosterBox>

              <Detail>
                <Name>디어 에반 핸슨</Name>
                <Country>2021 ・ 미국</Country>
                <Star>평균★3.0</Star>
                <Ratio>예매율 4% ・ 누적 관객 4만명</Ratio>
              </Detail>
            </SingleBox>
          </Box>
          <Box>
            <SingleBox title="이터널스" href="링크">
              <PosterBox>
                <Poster>
                  <Image
                    src={require("../img/eternals_poster.jpg").default}
                    alt="eternals_poster"
                  />
                </Poster>
                <RankBox>3</RankBox>
              </PosterBox>

              <Detail>
                <Name>이터널스</Name>
                <Country>2021 ・ 미국</Country>
                <Star>평균★3.1</Star>
                <Ratio>예매율 13% ・ 누적 관객 268만명</Ratio>
              </Detail>
            </SingleBox>
          </Box>
          <Box>
            <SingleBox title="유체이탈자" href="링크">
              <PosterBox>
                <Poster>
                  <Image
                    src={require("../img/유체이탈자_poster.jpg").default}
                    alt="유체이탈자_poster"
                  />
                </Poster>
                <RankBox>4</RankBox>
              </PosterBox>

              <Detail>
                <Name>유체이탈자</Name>
                <Country>2019 ・ 한국</Country>
                <Ratio>예매율 11% ・ 누적 관객 4,441명</Ratio>
              </Detail>
            </SingleBox>
          </Box>
          <Box>
            <SingleBox title="장르만로맨스" href="링크">
              <PosterBox>
                <Poster>
                  <Image
                    src={require("../img/장르만로맨스_poster.jpg").default}
                    alt="장르만로맨스_poster"
                  />
                </Poster>
                <RankBox>5</RankBox>
              </PosterBox>

              <Detail>
                <Name>장르만 로맨스</Name>
                <Country>2021 ・ 한국</Country>
                <Star>평균★3.0</Star>
                <Ratio>예매율 15% ・ 누적 관객 15만명</Ratio>
              </Detail>
            </SingleBox>
          </Box>
        </MultiBox>
      </Container>

      <Container>
        <StyledP>왓챠 TV 프로그램 순위</StyledP>
        <MultiBox>
          <Box>
            <SingleBox title="듄" href="링크">
              <PosterBox>
                <Poster>
                  <Image
                    src={require("../img/dune_poster.jpg").default}
                    alt="dune_poster"
                  />
                </Poster>
                <RankBox>1</RankBox>
              </PosterBox>

              <Detail>
                <Name>듄</Name>
                <Country>2021 ・ 한국</Country>
                <Star>평균★3.0</Star>
                <Ratio>예매율 18% ・ 누적 관객 1만명</Ratio>
              </Detail>
            </SingleBox>
          </Box>
          <Box>
            <SingleBox title="듄" href="링크">
              <PosterBox>
                <Poster>
                  <Image
                    src={require("../img/dune_poster.jpg").default}
                    alt="dune_poster"
                  />
                </Poster>
                <RankBox>2</RankBox>
              </PosterBox>

              <Detail>
                <Name>듄</Name>
                <Country>2021 ・ 한국</Country>
                <Star>평균★3.0</Star>
                <Ratio>예매율 18% ・ 누적 관객 1만명</Ratio>
              </Detail>
            </SingleBox>
          </Box>
          <Box>
            <SingleBox title="듄" href="링크">
              <PosterBox>
                <Poster>
                  <Image
                    src={require("../img/dune_poster.jpg").default}
                    alt="dune_poster"
                  />
                </Poster>
                <RankBox>3</RankBox>
              </PosterBox>

              <Detail>
                <Name>듄</Name>
                <Country>2021 ・ 한국</Country>
                <Star>평균★3.0</Star>
                <Ratio>예매율 18% ・ 누적 관객 1만명</Ratio>
              </Detail>
            </SingleBox>
          </Box>
          <Box>
            <SingleBox title="듄" href="링크">
              <PosterBox>
                <Poster>
                  <Image
                    src={require("../img/dune_poster.jpg").default}
                    alt="dune_poster"
                  />
                </Poster>
                <RankBox>4</RankBox>
              </PosterBox>

              <Detail>
                <Name>듄</Name>
                <Country>2021 ・ 한국</Country>
                <Star>평균★3.0</Star>
                <Ratio>예매율 18% ・ 누적 관객 1만명</Ratio>
              </Detail>
            </SingleBox>
          </Box>
          <Box>
            <SingleBox title="듄" href="링크">
              <PosterBox>
                <Poster>
                  <Image
                    src={require("../img/dune_poster.jpg").default}
                    alt="dune_poster"
                  />
                </Poster>
                <RankBox>5</RankBox>
              </PosterBox>

              <Detail>
                <Name>듄</Name>
                <Country>2021 ・ 한국</Country>
                <Star>평균★3.0</Star>
                <Ratio>예매율 18% ・ 누적 관객 1만명</Ratio>
              </Detail>
            </SingleBox>
          </Box>
        </MultiBox>
      </Container>

      <Container>
        <div className="thridbox title">
          <StyledP>어쩌구 머시기 순위</StyledP>
        </div>
        <div className="firstbox movies"></div>
      </Container>
    </Content>
  </div>
);

export default Navbar;
