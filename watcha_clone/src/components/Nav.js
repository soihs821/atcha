import React, { Component } from "react";
import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <div id="container">
        <header>
          <nav className="Nav">
            <span className="Nav_title">
              <img src={require("../img/watcha_logo.PNG").default} alt="logo" />
            </span>

            <div className="Nav_item">
              <button className="Nav_left" id="movie" href="#home">
                영화
              </button>
              <button className="Nav_left" id="tvprogram" href="#tvprogram">
                TV 프로그램
              </button>
              <button className="Nav_left" id="book" href="#book">
                책
              </button>
              <input
                className="Nav_right"
                type="text"
                placeholder="콘텐츠, 인물, 컬렉션, 유저를 검색해보세요."
              />
              <button className="Nav_right" id="login" href="#book">
                로그인
              </button>
              <button className="Nav_right" id="join" href="#book">
                회원가입
              </button>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Nav;
