import React from "react";
import styled from "styled-components";

const FooterTop = styled.div`
  background-color: #101113;
  color: white;
  line-height: 62px;
  text-align: center;
  width: 100%;
  height: 62px;
  color: #d1d1d2;
  font-size: 19px;
  font-weight: 500;
  letter-spacing: -0.3px;
`;
const Red = styled.span`
  color: #ff0558;
`;
const FooterBottom = styled.section`
  background-color: #1c1d1f;
  padding: 20px 0 38px;
`;

const BottomContent = styled.div`
  margin: 0 3.5%;
`;

const FooterLeft = styled.div``;

const LeftLine = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  color: #a5a5a7;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.3px;
  line-height: 22px;
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
`;

const LeftLineA = styled.ul`
  list-style: none;
  margin: 0;
  color: #a5a5a7;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.3px;
  line-height: 22px;
  margin-top: 12px;
`;

const LeftLineB = styled.ul`
  list-style: none;
  margin: 0;
  color: #a5a5a7;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.3px;
  line-height: 22px;
`;

const LeftLineC = styled.ul`
  list-style: none;
  margin: 0;
  color: #848485 !important;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.3px;
  line-height: 22px;
  margin-top: 13px;
`;

const LeftLineC1 = styled.ul`
  list-style: none;
  margin: 0;
  color: #848485 !important;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.3px;
  line-height: 22px;
`;

const LeftItem = styled.li`
  display: inline-block;
  color: #a5a5a7;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.3px;
  line-height: 22px;
  vertical-align: top;
  cursor: pointer;
`;

const LeftItemC = styled.li`
  display: inline-block;
  color: #848485;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.3px;
  line-height: 22px;
  vertical-align: top;
  cursor: pointer;
`;

const Link = styled.a`
  text-decoration: none;
  color: #a5a5a7;
`;

const FooterLogo = styled.img`
  width: 80px;
  height: 25px;
`;

/*const FooterRight = styled.div`
  display: block;
  text-align: right;
`;

const LanguageBox = styled.div`
  text-align: right;
`;

const Language = styled.select`
  background: none;
  border: none;
  margin: 0;
  cursor: pointer;
  position: relative;
  color: #a5a5a7;
  font-size: 15px;
  font-weight: 500;
  -webkit-letter-spacing: -0.3px;
  -moz-letter-spacing: -0.3px;
  -ms-letter-spacing: -0.3px;
  letter-spacing: -0.3px;
  line-height: 23px;
  text-align: left;
  box-sizing: border-box;
  width: 117px;
  height: 30px;
  padding: 2.5px 10px 4.5px;
  border: solid 1px #848485;
  border-radius: 2px;
`;

const SNS = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 99px 0 -4px;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
`;

const SNSItem = styled.li``;

const SNSLink = styled.a``;

const SNSImage = styled.img``;
*/

const Footer = () => (
  <footer>
    <FooterTop>
      <span>
        지금까지 <Red>★ 638,374,484 개의 평가가 </Red> 쌓였어요.
      </span>
    </FooterTop>
    <FooterBottom>
      <BottomContent>
        <FooterLeft>
          <LeftLine>
            <LeftItem>서비스 이용약관 ｜</LeftItem>
            <LeftItem>개인정보 처리방침 ｜</LeftItem>
            <Link href="#">기면성 안내</Link>
          </LeftLine>
          <LeftLineA>
            <LeftItem>고객센터 ｜</LeftItem>
            <LeftItem>
              <Link href="mailto:20180975@sungshin.ac.kr">
                20180975@sungshin.ac.kr
              </Link>
            </LeftItem>
          </LeftLineA>
          <LeftLineB>
            <LeftItem>광고 문의 ｜</LeftItem>
            <LeftItem>
              <Link href="mailto:20180975@sungshin.ac.kr">
                20180975@sungshin.ac.kr
              </Link>
            </LeftItem>
          </LeftLineB>
          <LeftLineB>
            <LeftItem>제휴 및 대외 협력 ｜</LeftItem>
            <LeftItem>은 더 커서 오겠습니다</LeftItem>
          </LeftLineB>
          <LeftLineC>
            <LeftItemC>프로젝트 앗챠 ｜</LeftItemC>
            <LeftItemC>개발 김현성 ｜</LeftItemC>
            <LeftItemC>경기도 (더보기.. </LeftItemC>
          </LeftLineC>
          <LeftLineC1>
            <LeftItemC>사업자 등록 ｜할 수 있으면 좋겠어요</LeftItemC>
          </LeftLineC1>
          <LeftLineC1>
            <LeftItemC>
              <FooterLogo
                src={require("../img/footer_logo.PNG").default}
                alt="footer_logo"
              />
            </LeftItemC>
            <LeftItemC>© 2021 by ATCHA, Inc. All rights reserved.</LeftItemC>
          </LeftLineC1>
        </FooterLeft>

        {/*<FooterRight>
          <LanguageBox>
            <Language value={"1"}>
              <option value="1">한국어</option>
            </Language>
          </LanguageBox>
          <SNS>
            <SNSItem>
              <SNSLink
                href="https://www.instagram.com/yyyvvi_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SNSImage
                  src={require("../img/instagram.png").default}
                  alt="instagram"
                />
              </SNSLink>
            </SNSItem>
            <SNSItem></SNSItem>
            <SNSItem></SNSItem>
          </SNS>
        </FooterRight>*/}
      </BottomContent>
    </FooterBottom>
  </footer>
);

export default Footer;
