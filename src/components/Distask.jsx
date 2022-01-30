import React from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
function Distask(props){
    const sty={ maxWidth:"350px",
                backgroundColor:"#F9F9F9",
                borderRadius:"10px",
                display:"block",
                float:"left",
                width:"300px",
                padding:"20px",
                height:"wrap-content",
                margin:"15px",
                borderTop:"20px solid yellow",
                position:"relative"
            };
    return <div style={sty}>
                    <h2>Title: {props.cval.title}</h2><br/>
                    <p>Discription: {props.cval.discription}</p>
                    <DeleteForeverIcon style={{bottom:"23px",right:"20px",position:"absolute"}} onClick={()=>props.sselect(props.ind)}/>
            </div>
}
export default Distask;