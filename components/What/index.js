import React from 'react'
import styled from 'styled-components'
import { compose, lifecycle, withState } from 'recompose'
import Navbar from '../Core/Navbar'
import Cloud from './cloud'
import H1 from '../Core/FontH1'
import H2 from '../Core/FontH2'
import Color from '../Core/Color'


const Info = styled.div`
  margin-top: 2%;
`
const Test = styled.div`
  padding: 1px;

`

const Icon = styled.img`
  width:7em;
  @media (min-width:320px) {
    width:4em;
  }
  @media (min-width:420px) {
    margin-top: 2%;
    width:5em;
  }
  @media (min-width:576px) {
    margin-top: 2%;
    width:5em;
  }
  @media (min-width:768px) {
    margin-top: 5%;
    width:7em;
  }
  @media (min-width:1024px) {
    margin-top: 5%;
    padding: .2em;
    width:7em;
  }
  cursor:pointer;
  &:hover{
    background: transparent;
    -moz-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
    border-radius: 0.5em;
    border: 4px solid transparent;
    
  }
  &:active{
  background: transparent;
  -moz-transform: scale(1.3);
  -webkit-transform: scale(1.3);
  transform: scale(1.3);
  border-radius: 1em;
  border-radius: 0.5em;
  border: 4px solid transparent;
  }  
`
const P = styled.p`
font-size:1.2em;
@media (min-width:320px) {
  font-size:0.7em;
}
@media (min-width:420px) {
  font-size:1em;
}
@media (min-width:576px) {
  font-size:1em;
}
@media (min-width:768px) {
  font-size:1em;
}
@media (min-width:1024px) {
  font-size:1.2em;
}
`
const Mobile = styled.div`
  @media (max-width:720px) {
    text-align:center;
  }
`

const IconInfo = [
  { icon: "/static/image/icon-what/java (2).png", text: "Java Programming", t: "Java Programming" },
  { icon: "/static/image/icon-what/IT fun (1).png", text: "IT Fundamentals", t: "IT Fundamentals" },
  { icon: "/static/image/icon-what/network (2).png", text: "Network", t: "Network" },
  { icon: "/static/image/icon-what/web (2).png", text: "HTML5&CSS3", t: "HTML5&CSS3" }
]


const Space = styled.div`
  margin-top: 4.5%;
  margin-bottom: 10%;
  border: .2em solid transparent;
  border-radius: 2em;
  padding:2em;
`
const Relative = styled.div`
  position: relative;
  min-height:100vh;
`
const Moutain = styled.img`
  position: absolute;
  z-index: 0;
  bottom: 0vh;
`

const Bggueng = styled.div`
  background: ${props => props.themeColor || ''};
`

const Hidden = styled.div`
  @media(max-width:720px) {
    display: none;
  }
`
const Font = styled.p`
@media (min-width:320px) {
  font-size: 0.9em;
}
@media (min-width:412px) {
  font-size: 1em;
}
@media (min-width:576px) {
  font-size: 1.1em;
}
@media (min-width:768px) {
  font-size: 1.2em;
}
@media (min-width:1024px) {
  font-size: 1.3em;
}
`
const index = props => (

  <Bggueng themeColor={props.color.what}>
    <Relative>
      <Moutain src='/static/image/MoutainWho.svg' />
      <div className="container px-3">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12">
            {/* <Cloud /> */}
          </div>
          <Hidden className="col-lg-4"></Hidden>

          <Space className="col-12 col-sm-12 col-md-12 col-lg-8">
            <div className="row">
              <Mobile className="text-center col-12">
                <H1>WHAT</H1>
                <H2>ค่ายนี้คืออะไร ?</H2>
              </Mobile>
              <br />
              <div className="col-12">
                <Font>
                  &nbsp;&nbsp;&nbsp;&nbsp;ค่ายเส้นทางสู่ฝันนักไอที (WIP Camp) คือ ค่ายสำหรับน้อง ๆ ผู้มีความสนใจด้านไอที หรือผู้ต้องการค้นหาตนเอง โดยน้อง ๆ จะได้มีโอกาสสัมผัสชีวิตของการเป็นนักไอทีอย่างแท้จริง
                  ณ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี เป็นระยะเวลา 5 วัน 4 คืน
                </Font>
                <Font>
                  &nbsp;&nbsp;&nbsp;&nbsp;WIP Camp ประกอบด้วยการเรียน และลงมือปฏิบัติจริงด้านวิชาการ ความสนุกสนานจากกิจกรรม รวมถึงมิตรภาพจากพี่ ๆ เพื่อน ๆ ในค่ายทุกคน
                </Font>
                <Font>
                  &nbsp;&nbsp;&nbsp;&nbsp;กว่าทศวรรษที่ WIP Camp ขอเป็นก้าวเล็ก ๆ ในการช่วยเหลือน้อง ๆ ให้ค้นพบกล่องดวงใจที่ทุกคนตามหา และเดินตามเส้นทางความฝันที่น้อง ๆ หวังไว้ !!
                </Font>
              </div>
            </div>
            <Info className="row text-center">
              {
                IconInfo.map((info, i) => (
                  <Test key={i} className="col-6 col-md-3 ">
                    <Icon src={info.icon} alt={info.t} />
                    <P>{info.text}</P>
                  </Test>
                ))
              }
            </Info>
          </Space>

        </div>
      </div>
    </Relative>
  </Bggueng>
  
)
export default compose(
  withState('bgColor', 'setBgColor', ''),
  lifecycle({
    componentDidMount() {
      let theme = window.localStorage.getItem("color")
      const themeColor = JSON.parse(theme)
      this.props.setBgColor(themeColor)
    }
  })
)(index)
