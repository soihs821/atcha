import React, { Component } from "react";
// import "./Navbar.css";
import styled, { css } from "styled-components";


// list 버전
class Navbar extends Component {
  render() {
    return (
      <div id="container">
        <header>
          <nav className="Nav">
            <ul className="Nav_body">
              <li className="Nav_title">
                <img
                  src={require("../img/watcha_logo.PNG").default}
                  alt="logo"
                />
              </li>
              <li className="Nav_left">
                <button className="movie">영화</button>
              </li>
              <li className="Nav_left">
                <button className="tvprogram">TV 프로그램</button>
              </li>
              <li className="Nav_left">
                <button className="book">책</button>
              </li>
              <li className="Nav_right search">
                <input
                  className="search_bar"
                  type="text"
                  placeholder="콘텐츠, 인물, 컬렉션, 유저를 검색해보세요."
                />
              </li>
              <li className="Nav_right">
                <button className="login">로그인</button>
              </li>
              <li className="Nav_right">
                <button className="join">회원가입</butt>
              </li>
            </ul>
          </Nav>
        </header>

        <div className="content">
          <div className="firstbox">
            <div className="firstbox title">
              <p className="boxoffice">박스오피스 순위</p>
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
              <p>왓챠 영화 순위</p>
            </div>
            <div className="firstbox movies"></div>
          </div>
          <div className="thridbox">
            <div className="thridbox title">
              <p>어쩌구 머시기 순위</p>
            </div>
            <div className="firstbox movies"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
