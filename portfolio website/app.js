//****************ALL SELECTOR */

const closeH  = document.getElementById('close-manheader');

const portechg = document.getElementById('portechg');
// select ifream





//****************ALL SELECTOR END */
portechg.addEventListener('click', popupPortech);
closeH.addEventListener('click', closeHeader);


// iframe height
window.addEventListener('load', iFrameHeight);
window.addEventListener('resize', iFrameHeightResize);
//***************ALL EVENT LISTNER****************** */



//***************ALL FUNCTION****************** */

// popupPortech
 function popupPortech () {
     const popup = document.getElementById('popup');
     popup.classList.toggle('active');
     
 }
function closeHeader () {
    
        var closeDiv = document.querySelector('#closeDiv');
    
      if (closeDiv.classList.contains('closeD')){
    
        closeDiv.classList.add('active');
    
      }
    
}

// iframeHeight

function iFrameHeight () {

    let iframeHeight = document.getElementById('headerBgHeight');

    let clienHeight = iframeHeight.clientHeight;
    console.log(clienHeight);

    let windowHeight = window.innerHeight;
    console.log(windowHeight);

    if (windowHeight > clienHeight) {

        iframeHeight.style.height =`${windowHeight}px`;

    }
 
}

// iFrameHeightResize

function iFrameHeightResize () {
    let resizeIFrame = document.getElementById('headerBgHeight');

    let ClientHEight = window.clientHeight;

    let windowHeight = window.innerHeight;

    if (windowHeight < ClientHEight) {

        resizeIFrame.style.height =`${windowHeight}px`;
    }

    // set the widht when the window resize
    

}

// rightMoveChevon
//  function RingtMovechevron () {
//      console.log('hhh');
//      if (chevronRingtMove.classList.contains('btn-custom')){
//          chevronRingtMove.classList.add('active');
//      }
//  }

//  mouseoutRightMove
//  function mouseoutRightMove () {
//     if (chevronRingtMove.classList.contains('btn-custom')){
//         chevronRingtMove.classList.remove('active');
//     } 
//  }

//***************ALL FUNCTION****************** */

// ****************ADD TEEM SECTION HOVER EFFECT*********
const teamSection = document.querySelectorAll('.team-section-style');
// ****** THIS IS THE LOOP FOR ADDEVENTLISTNER FOR QUERYSELECTOR ALL ******
// let profileImg = document.querySelector('.profile-img');
// for (let i = 0; i < teamSection.length; i++){
//     teamSection[i].addEventListener('mouseenter', () => {
//         teamSection[i].classList.toggle("widthS");
//         var TemSnodLIst = teamSection.currentTarget;
//         console.log(TemSnodLIst);
//     });
// }

// for (let i = 0; i < teamSection.length; i++){
//     teamSection[i].addEventListener('mouseleave', () => {
//         teamSection[i].classList.toggle("widthS");
//     });
// }


// ****** THIS IS THE LOOP FOR ADDEVENTLISTNER FOR QUERYSELECTOR ALL ******
let profileImg = document.querySelectorAll('.profile-img');

teamSection.forEach( (e) => {
    e.addEventListener('mouseenter', () => {
        // incrace the width of image 
        // add  background-color 
        e.style.backgroundColor = 'white';
        // e.style.width = '22.5%';
        e.style.transform= 'scaleY(1.01)';
      
       

        // CONTAINER INFO 

       
        // CONTAINER INFO END
    });

    //MOUSELEAVE EVENT 
    e.addEventListener('mouseleave', () => {
        e.style.backgroundColor = 'black';
        // e.style.width = '22%';
        e.style.transform= 'scale(1)';
    });
});
// teamSection.forEach( (e) => {
//     e.addEventListener('mouseenter', () => {
//         let profileImg = document.querySelector('.profile-img');
//         profileImg.style.backgroundSize = 'contain';
//     //     let contactInfo = document.querySelector('.contact-info');
//     // //   return profileImg.style.backgroundSize = 'contain';
//     //     console.log(enter.currentTarget.childNode);
//     //     if( profileImg.style.backgroundSize= 'cover') {
//     //         profileImg.style.backgroundSize= 'contain';
//     //     }


//     })
//     // e.addEventListener('mouseleave', () => {
//     //     console.log('mouse out');
//     //     profileImg.style.backgroundSize= 'cover';
//     // });
// });

// ****************ADD TEEM SECTION HOVER EFFECT*********
