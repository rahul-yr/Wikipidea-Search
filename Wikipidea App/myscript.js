function Search(){
    city=$("#searchText").val();
  if(city.length==0){
    $("#WikiData").hide();
    $("#Wikidata").html("");
       $("#fs").css("position","fixed");

    // $("#fs").hide();
  }
  else{
   $("#WikiData").show();
      $("#WikiData").html('<div class="text-center text-warning"><i class="fa fa-spinner fa-pulse fa-2x"></i></div>');
         //  $("#fs").css("position","relative");

  }
 
     //$("#WikiData").show().delay(10000);

//  $("#entireBody").css("background-color","black");

  
  if(city.length>0){
  
  $.ajax({
         url:"https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages%7Cextracts%7Cinfo&generator=search&callback=JSON_CALLBACK&piprop=original&pilimit=max&exsentences=9&exlimit=max&exintro=1&explaintext=1&inprop=url&gsrsearch="+city+"&gsrnamespace=0&gsrlimit=10",
    dataType:"jsonp",
    success:function(response){
       if(response.query){

         // alert("success");

          displayData(response);         
        //  $("#WikiData").html(JSON.stringify(response.query));
         
       }   
      else{
         $("#WikiData").html('<div class="text-center text-warning">Please use Valid Keywords <i class="fa fa-cog fa-spin fa-3x"></i></div>');
        $("#fs").css("position","fixed");
       // $("#fs").hide();
        // $("#fs").html('<div class="well col-xs-* text-center text-primary">Total Cards Shown : </div>'); 

        
      }
   },
     rProblem:function(response){
       $("#WikiData").html('Please Refresh the Page : <i class="fa fa-refresh fa-spin"></i>');
       $("#fs").css("position","fixed");
     }      
    
      
    
  });  
  }
                          
} 
   
function displayData(response){ 
    fetch=response.query.pages; 
  //console.log(fetch);
  var df=Object.keys(fetch);
  var count=0;
  //console.log(df.length);
   $("#WikiData").html("");
  for(var i=0;i<df.length;i++){
    var num=parseInt(df[i]);
     var rimage="";
  //  var rimage="https://www.elegantthemes.com/blog/wp-content/uploads/2016/03/wordpress-syntax-error-featured.jpg";
    if(fetch[num].original){
         rimage=fetch[num].original.source;

       }
   // console.log(rimage);
 /*  if(rimage.length<5){
     rimage="https://www.elegantthemes.com/blog/wp-content/uploads/2016/03/wordpress-syntax-error-featured.jpg";
   }   */
    
    // dAppend="<h4>"+fetch[num].title+"</h4></br>"+fetch[num].extract+"<hr>"; 
    var ddisplay=fetch[num].touched;
      ddisplay=new Date(ddisplay);
    var exContent="Content Missing";
   // console.log(exContent.length);
    if(fetch[num].extract){
      exContent=fetch[num].extract;
        
    }
    dAppend='<div class="col-md-6 col-sm-6 col-xs-12  modify-pad"><div class="container-fluid well  panel panel-default panel-success aPanelClass" id="addingPanel"><div class="panel-heading text-center"><div class="panel-title">'+fetch[num].title+'</div></div><div class="panel-body" id="addPBContent">'+exContent+'<hr><img class="img-responsive" src='+rimage+' alt="Unknown Error Occured"><br><p>'+ddisplay+'</p></div><div class="panel-footer text-center text-primary"><a href="'+fetch[num].fullurl+'" target="_blank">Find More</a></div></div></div>';
     $("#WikiData").append(dAppend);
    count++;
  } 
//   $("#fs").show();
  // $("#WikiData").html("Please Wait..........");
// $("#fs").html('<div class="col-xs-* text-center text-primary input-group"><span class="input-group-addon text-success">Coded and Designed by @ Rahul Reddy</span></div>'); 
 // var newf=JSON.parse(fetch);
  //var newfs=JSON.parse(newf);
 // console.log(newf.object.extract);
 // var fetch=dictionary.fetch;
/*for(var key in fetch){
  console.log(key.Object.extract);
}
$(fetch).each(function(){ 
  //  console.log(val.extract+"-------------");      
      $("#WikiData").html(fetch.Object);

  });   */
  
 // $("#WikiData").html(JSON.stringify(fetch));
  
  
  $("#fs").css("position","relative");
  
  
  
}  

$(document).ready(function(){ 
 // $("#searchText").focus();
});




/* 
  // page = 'https://en.wikipedia.org/?curid=';
  var url="https://www.mediawiki.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=1&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch="+city;
  
  //console.log(url); 
  $.getJSON(url, function(data){
    $("#WikiData").html(JSON.stringify(data));
    
   // alert("Success");
  });
//  alert(city);
*/