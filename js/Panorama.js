/* Author:

*/
panoMode=0; //thumbnail show, notes hidden

    
$(document).ready(function(){

 //horizontal shift
 $("#thumbnailList").click(thumbnailToggle);
 $("#notesPane").click(notesToggle);
});




function notesToggle(){
 if (panoMode==0)   //we need to hide thumbnail
     {  
        panoMode=1;
        $("#thumbnailList").animate({left:"-=140px"});
        $("#mainSlide").animate({left:"-=155px"});
        $("#notesPane").animate({left:"-=175px"});
        $("#prose2").toggle();
        $("#prose1").toggle();
     }
}
function thumbnailToggle(){
 if (panoMode==1)   //we need to show thumbnail
     {  
        panoMode=0;
        $("#thumbnailList").animate({left:"+=140px"});
        $("#mainSlide").animate({left:"+=155px"});
        $("#notesPane").animate({left:"+=175px"});
        $("#prose2").toggle();
        $("#prose1").toggle();
     }
}
