import React from 'react';
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';

function Header(){
    return (<>
        <div style={{backgroundColor:"yellow",height:"fitContent",color:"black",fontSize:"25px",width:"100%",display:"flex",marginTop:"0px"}}>
            <div style={{marginLeft:"20px",marginTop:"5px"}}><FeaturedPlayListIcon style={{height:"45px",verticalAlign:"middle"}}/>&nbsp;&nbsp;TODO List</div>
        </div>
    </>);
}

export default Header;