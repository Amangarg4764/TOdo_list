import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Distask from './Distask';
function InputDis(){
    var [texte,settexte]=useState({
            title:"",discription:""
    });
    var [Items,setItems]=useState([]);
    const textchange=(event)=>{
        let nam=event.target.name;
        let val=event.target.value;
        settexte((prevalue)=>{
            return {...prevalue,[nam]:val};
        });
    }
    const Addlist=()=>{
        setItems((oldvalue)=>{
            return [...oldvalue,{title:texte.title,discription:texte.discription}];
        });
        settexte({title:"",discription:""});
    }
    const deleitem=(ied)=>{
        setItems((preValue)=>{
                return preValue.filter((arrval,indr)=>{
                    return indr!==ied;
                })
        });
    }
    const onmo=(event)=>{
        event.target.style.backgroundColor="lightGreen";
    }
    const onml=(event)=>{
        event.target.style.backgroundColor="white";
    }
    return (<>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <div style={{position:"absolute",top:"70px",backgroundColor:"#F9F9F9",padding:"20px",width:"70%",maxWidth:"400px",height:"250px",borderRadius:"10px"}}> 
                <input type="type" placeholder="Title" name="title" style={{height:"30px"}} onChange={textchange} value={texte.title} /><br/><br/>
                <textarea type="text" rows="9" cols="31" name="discription" placeholder="Description" onChange={textchange} value={texte.discription} ></textarea><br></br>
                <AddIcon style={{color:"yellow",fontSize:"50px",backgroundColor:"white",borderRadius:"50%",
                bottom:"15px",right:"20px",position:"absolute"
                }} onClick={Addlist} onMouseEnter={onmo} onMouseLeave={onml}/>

            </div>
        </div>
        <div style={{float:"left",position:"absolute",top:"380px"}}>
            {Items.map((values,index)=>{
                return <Distask cval={values} ind={index} sselect={deleitem}/>;
            })}
        </div>
        
    </>);
}

export default InputDis;
