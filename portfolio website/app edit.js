
const popup =document.querySelector('.popupdd');
// var closeMnheaderddd  =document.getElementById('close-manheader');
// const closeDive= document.getElementById('closeDiv');

const productIframe = document.querySelector('.product-iframe');
// header bg height 

// var closeH = document.getElementById("close-manheader");
// const closeHide = document.getElementById("closeDiv");
// closeH.addEventListener('click',closeHeaderTop);

// function closeHeaderTop() {
// if( closeHide.classList.contains('closeD')){
// closeHide.classList.add('active');
// }
// console.log('hh');
// }

const closeH = document.getElementById("close-manheader");
var closeDiv = document.querySelector('#closeDiv');

closeH.addEventListener('click', () => {
  if (closeDiv.classList.contains('closeD')){
    closeDiv.classList.add('active');
  }
});
// closeH.addEventListener('click', closeHeader);


// function closeHeader() {

//   const closeDiv = document.getElementById("closeDiv");

//   if (closeDiv.classList.contains('closeD')) {

//     closeDiv.classList.add('active');

//   }
//   console.log('close');

// }

// add click event 
/********************ALL EVENTLITENER *********************/
// porteCh.addEventListener('click', portechd);
// remove close-manheader
// closeMnheaderddd.addEventListener('click', function  (){
//     console.log('hh');
// });
 
 
window.addEventListener('scroll', resize);
window.addEventListener('load', resize);

/******************** ALL EVENTLISTENER END *********************/

function portechd(){
    // popup.classList.toggle('active');
    // if (popup.style.display =='none'){
    //     popup.style.display='block';
    //     console.log('add');
       
    // } else{
    //     popup.style.display ='none';
    //     console.log('remove');
    // }
 
    // const popupDivheight = document.querySelector('.')
    // popup.style.height="200px";
}


// closeMainHeader
// function closeMainHeader (){
//  
// //    if( closeDive.classList.contains('closeD')){
// //        closeDive.classList.add('active');
// //    }
// }

// scrooling function 
function resize () {
    let heights =window.innerHeight;
    // console.log(height);

    let headerBgHeight = document.getElementById('headerBgHeight');
    // headerBgHeight.style.height = heights -50 + 'px';
 console.log(heights);
 console.log(heights +'oo');
    // headerBgHeight.style.height= windowHeigHT +'px';
}

/********************ALL FUNCTION *********************/


/********************ALL FUNCTION END*********************/