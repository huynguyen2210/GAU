function htt_orion(){

setTimeout(function(){


swal({  

 title: "Bạn nhận được lời nhắn !",   
text: "Gấu vừa gửi bạn một lời nhắn ", 
 imageUrl: "https://graph.facebook.com/1718930365/picture?type=large",
  showCancelButton: true,
   confirmButtonColor: "#DD6B55", 
  confirmButtonText: "Nhận lời nhắn ngay",
   cancelButtonText: "Không cần, cám ơn .", 
  closeOnConfirm: false,  
 closeOnCancel: false }, 
function(isConfirm){  
 if (isConfirm) {   
 

swal({  
 title: "Bạn có phải là Gấu Trúc ? ", 
  text: "Nhập mã xác nhận ",  
 type: "input",  
 showCancelButton: true,  
 closeOnConfirm: false,   
 showLoaderOnConfirm: true,
animation: "slide-from-top",  
 inputPlaceholder: "Mã xác nhận là gì ?" },
 function(inputValue){   
if (inputValue === false) return false;   
   if (inputValue !== "congauxinh") {   
  swal.showInputError("Nhập sai rồi kìa :v ");   
  return false   }   
 
setTimeout(function(){


swal({  
 title: "Lời muốn nói", 
  text: "Gấu yêu gấu gấu, hihi ",  
 type: "input",  
 showCancelButton: true,  
 closeOnConfirm: false,   
animation: "slide-from-top",  

 inputPlaceholder: "Du tu???" },
 function(inputValue){   
if (inputValue === false) return false;   
   if (inputValue === "") {   
  swal.showInputError("Không thể không trả lời được, trả lời ngay ");   
  return false   }  
 swal("OK ! ", "Hí Hí", "success"); });


},3000);



});

 }
else {   
  swal("KHÔNG NHẬN ", "Bạn vừa từ chối nhận lời nhắn từ gấu, con gấu buồn,    Ấn F5 nếu muốn nhận lại quà :D ", "error"); 

  } });



},8000);
}
htt_orion();

