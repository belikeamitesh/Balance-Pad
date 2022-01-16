import React from 'react'
import "./info.css"
function Info() {
    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "5px",
        fontFamily: "Arial"
      };
    return (
        <div className='App1'>
        <div className="container" id="brand">
            <h1 style={{backgroundColor: "lightblue",boxShadow:"5px 5px 15px",borderRadius:"7px"}}>Mental Health Info Pad</h1>
            <h2 style={{color:"black",marginTop:"20px"}}> Knowledge is Power!</h2> <hr /><br />
            <img src="https://www.memotext.com/wp-content/uploads/2020/07/mental-health-wellness-during-covid-19.jpg" alt ="Heart Brain" width="154" height = "142"></img>
            <h3>What is Mental Health?</h3>
            <img src="https://pbs.twimg.com/media/DQUjZN2VQAAxx6V.jpg" alt = "Mental Health Definition" width="400" height="275"></img>
            
            <p style={mystyle}>Links to Helpful Resources</p>
            <a href = "https://www.camh.ca/en/driving-change/the-crisis-is-real/mental-health-statistics">Mental Illness and Addition: Facts and Stats</a>
            <br></br>
            <a href = "https://www.cdc.gov/mentalhealth/quiz/index.htm">Mental Health Quiz</a>
            <br></br>
            <a href = "https://positivepsychology.com/grounding-tools-techniques/">Grounding Tools and Techniques</a>
        </div>
</div>
    )
}

export default Info;
