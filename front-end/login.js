 
 
 function validate(event) {
    event.preventDefault();
  
    let password = document.getElementById('password');
    let username = document.getElementById('username');
    let errorMessage = document.getElementById('error-message');
  
  
    if (!password.value || !username.value) {
      if (!errorMessage ) {
        errorMessage = document.createElement('span');
        errorMessage.id = 'error-message';
        errorMessage.innerHTML = 'Please fill password and username now';
        errorMessage.style.color = 'red';
        document.querySelector('ol').appendChild(errorMessage);
      }
      
   } 
   else{
    
        if(errorMessage){
          errorMessage.remove();
        }
        loging(username,password)
        
      }
  }

  
 

  async function loging(username,password){
    
        let name=username.value;
        let password1=password.value;
        //console.table([name,password1]);

      /*  let response= await  axios({method:'post',url:"http://localhost:3000/loginnow",data:{
              name,password1
            }})
            console.log(response);  */

           let response = await  axios.post("http://localhost:3000/loginnow",{
              name,
              password:password1
            },)
            console.log(response.data)

}



  
  