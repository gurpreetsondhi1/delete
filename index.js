function updateClock(){
    var now= new Date();
    var hou=now.getHours();
    var min=now.getMinutes();
    var sec=now.getSeconds();
    var pe="AM";

    if(hou>12){
        hou -=12;
        pe="PM";
    }
    if(hou===0){
        hou=12;
    }
    Number.prototype.pad = function(digits){
        for(var n=this.toString();n.length<digits;n=0+n);
        return n;
    }

    var ids=["hour","minutes","seconds","period"];
    var values=[hou.pad(2),min.pad(2),sec.pad(2),pe];
    for(let i=0;i<ids.length;i++){
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
    }
    let t=setTimeout(function(){
        updateClock()},1000);
    // setTimeout(updateClock,1000);
}
updateClock();

setInterval(updateClock,1000);

function initClock(){
    updateClock();
    setInterval("updateClock()",1);
}

function setImage(){
    var i=document.getElementById('wakeUpTime').value;
    var j=document.getElementById('lunchTime').value;
    var k=document.getElementById('nightTime').value;
    var hourr=new Date().getHours();

    
    if(i== hourr){
        document.getElementById('changeImage').style.backgroundImage="url(./images/wakeup_image@2x.png)";
        document.getElementById('imageText').innerHTML="Let have some Breakfast";
    }
    else if(j== hourr){
        document.getElementById('changeImage').style.backgroundImage="url(./images/lunch_image@2x.png)";
        document.getElementById('imageText').innerHTML="Let's have some lunch !!";
    }
    else if(k== hourr){
        document.getElementById('changeImage').style.backgroundImage="url(./images/goodnight_image@2x.png)";
        document.getElementById('imageText').innerHTML="Good Night";}
    
    makeDiv();
}
function makeDiv(){
    var container=document.createElement('div');
    container.id="newDiv";
    document.getElementById('container').appendChild(container);

    var v1=document.getElementById('wakeUpTime');
    var va=v1.options[v1.selectedIndex].text;
    var v2=document.getElementById('lunchTime');
    var vb=v2.options[v2.selectedIndex].text;
    var v3=document.getElementById('nightTime');
    var vc=v3.options[v3.selectedIndex].text;
    // document.getElementById('newDiv').innerHTML="Wake up Time"+va;
    // document.getElementById('newDiv').innerHTML="Wake up Time : "+va+"\n Lunch Time : "+vb+ "Night Time : "+vc;
    // document.getElementById('newDiv').innerHTML="Wake up Time : "+va+"Lunch Time : "+vb+ "Night Time : "+vc;
    document.getElementById('newDiv').innerHTML="Wake up Time : "+va+"\t"+"\n Lunch Time : "+vb+"\n"+ " Night Time : "+vc;

}


// function updateClock(){
//     var now= new Date();
//     var hou=document.getElementById("hours");
//     var min=document.getElementById("minutes");
//     var sec=document.getElementById("seconds");
//     var pe=document.getElementById("period");

//     var a=now.getHours();
//     var b=now.getMinutes();
//     var c=now.getSeconds();

//     hou.innerHTML=a;
//     min.innerHTML=b;
//     sec.innerHTML=c;}

//     // if(hou>12){
//     //     hou -=12;
//     //     pe="PM";
//     // }
//     // if(hou===0){
//     //     hou=12;
//     // }
//     // Number.prototype.pad = function(digits){
//     //     for(var n=this.toString();n.length<digits;n=0+n);
//     //     return n;
//     // }

//     // var ids=["hour","minutes","seconds","periods"];
//     // var values=[hou.pad(2),min.pad(2),sec.pad(2),pe];
//     // for(let i=0;i<ids.length;i++){
//     //     document.getElementById(ids[i]).firstChild.nodeValue = values[i];
    
//     // let t=setTimeout(function(){
//     //     updateClock()},1000);
//     // // setTimeout(updateClock,1000);


// // updateClock();

// setInterval(updateClock,1000);

// // function initClock(){
// //     updateClock();
// //     setInterval("updateClock()",1);
// // }

// function setImage(){
//     var i=document.getElementById('wakeUpTime').value;
//     var j=document.getElementById('lunchTime').value;
//     var k=document.getElementById('nightTime').value;
//     var hourr=new Date().getHours();


//     if(i== hourr){
//         document.getElementById('changeImage').style.backgroundImage="url(./images/wakeup_image@2x.png)";
//     }
//     else if(j== hourr){
//         document.getElementById('changeImage').style.backgroundImage="url(./images/lunch_image@2x.png)";
//     }
//     else
//         document.getElementById('changeImage').style.backgroundImage="url(./images/goodnight_image@2x.png)";
    
// }

// function makeDiv(){
//     var container=document.createElement('div');
//     container.id="newDiv";
//     document.getElementById('container').appendChild(container);

//     var v1=document.getElementById('')
// }