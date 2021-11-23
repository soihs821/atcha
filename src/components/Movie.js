import React from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Header from "./Header";
import Footer from "./Footer";

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
const Movie = () => (
  <div id="container">
    <GlobalStyle />
    <Header />

    <Content>
      <Container>
        <StyledP>박스오피스 순위</StyledP>
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
        <StyledP>왓챠 영화 순위</StyledP>
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
        <StyledP>어쩌구 머시기 순위</StyledP>
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
    </Content>
    <Footer />
  </div>
);

export default Movie;
