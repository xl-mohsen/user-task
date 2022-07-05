import { useState } from "react";
import styled from "styled-components";

const Time = styled.div`
    width : 100vw;
    height: 95vh;
    overflow: hidden;
    text-align: center;

    h1{
        border : 2px solid #5643fa;
        width: 500px;
        margin : 40vh auto 0px auto;
        border-radius: 15px;
        padding: 10px 0;
        background-color:hsl(184, 82%, 80%);
        box-shadow: rgba(0 , 0 , 0 , .35) 0px 5px 15px;
        font-family: 'Courier New', Courier, monospace;
        color:#111;
    }
`;

export default function Clock() {

    let time = new Date().toLocaleTimeString();
    const [currentTime , setCurrentTime] = useState(time);

    const updateTime = () => {
        let time = new Date().toLocaleTimeString();
        setCurrentTime(time);
    }

    setInterval(updateTime , 1000);

  return (
    <Time className = 'clock'>
        <h1>{currentTime}</h1>
    </Time>
  )
}
