import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Menu(){

  return(
    <BottomMenu>
      <Link to="/habitos">
        <span>Hábitos</span>
      </Link>
      <Link to="/hoje">
        <CircularProgressbar
          value={66}
          text={<tspan dominantBaseline="middle">Hoje</tspan>}
          background
          backgroundPadding={6}
          styles={buildStyles({
            backgroundColor: "#3e98c7",
            textColor: "#fff",
            pathColor: "#fff",
            trailColor: "transparent",
            strokeLinecap: 'round',
            textSize: "18px",
          })}
        />      
      </Link>
      <span>Histórico</span>
    </BottomMenu>
  )
}

const BottomMenu = styled.footer`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 33px;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
  left: 0;

  span{
    font-size: 18px;
    color: #52b6ff;
  }

  svg{
    width: 91px;
    height: 91px;
    margin-bottom: 40px;
    text-anchor: middle;
  }


`