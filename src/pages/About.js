import React from 'react';
import MultiplePizzas from '../assets/multiplePizzas.jpeg';
import '../styles/About.css';

function About() {
  return (
    <div className="about">
      <div className="aboutTop" style={{ backgroundImage: `url(${MultiplePizzas})` }}></div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>
        피자(pizza)는 밀가루로 된 얇고 납작한 반죽에 토마토 소스와 치즈 등(토핑)을 얹어서 구워내는 이탈리아 요리의 하나다.<br/>한국인들이 가장 많이 즐기는 양식 중 하나이자, 이탈리아 기원 요리의 하나이며, <br/>세계적으로도 이탈리아를 대표하는 요리로 꼽힌다.<br/>이탈리아 피자는 크기가 미국 피자에 비해 좀 작고 토핑이 간소한 경향이 있다.<br/>미국에서 피자는 많은 재료를 올려 여럿이 나누어 먹는 음식이란 인식이 강하기 때문에 크기가 상당히 크고 토핑도 비교적 다양한 반면,<br/>이탈리아에서는 간편하게 한 끼를 때우는 음식이라 한두 사람이 먹을 만큼만 만든다.<br/>물론 이탈리아에도 미국과 같은 크게 만드는 피자가 있는데, 둥글넓적하게 만드는 미국식이 아니라<br/> 사각형으로 넓적하게 한 판씩 만들어 케이크 조각처럼 잘라 판다.<br/> 이 방식의 피자는 로마에서 흔히 볼 수 있다.

        </p>
      </div>
    </div>
  )
}

export default About
