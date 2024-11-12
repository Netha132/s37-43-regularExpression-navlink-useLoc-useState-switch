import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

function SignUp() {
  let navigate = useNavigate();

  let firstNameInputRef=useRef();
  let lastNameInputRef=useRef();
  let emailInputRef=useRef();
  let passwordInputRef=useRef();



  let firstNameSpan=useRef();
  let lastNameSpan=useRef();
  let emailspan=useRef();
  let passwordSpan=useRef();

  let ageInputRef=useRef();
  let ageSpanRef=useRef();

 

  let nameRegEx=/^[A-Za-z ]{2,30}$/;
  let emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let  passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/;

        let validateName=(inputRef,spanRef,regEx)=>{
          let result=regEx.test(inputRef.current.value);
          if(result==true){
            spanRef.current.innerHTML="Valid"
          }
          else{
            spanRef.current.innerHTML="Invalid"
          }
        }

        let validateEmail=(inputRef,spanRef,regEx)=>{
            let result=regEx.test(inputRef.current.value); 

            if(result==true){
              spanRef.current.innerHTML="valid";
            }
            else{
              spanRef.current.innerHTML="Invalid";
            }
        }


        let validatePassword = (inputRef, spanRef, regEx) => {
          let password = inputRef.current.value;
          let result = regEx.test(password);
          
          if (result) {
            if (password.length <= 8) {
              spanRef.current.innerHTML = "Weak";
              spanRef.current.style.color="red";
            } else if (password.length <= 10) {
              spanRef.current.innerHTML = "Medium";
              spanRef.current.style.color="blue"
            } else {
              spanRef.current.innerHTML = "Strong";
              spanRef.current.style.color="green";
            }
          } else {
            spanRef.current.innerHTML = "Invalid";
          }
        }


        let msgLabelRef=useRef();
        let stateSelectRef=useRef();

        let maleRBRef=useRef();
        let femaleRBRef=useRef();
        let selectGender;
        let salutation;
        let maritalStatus;

        let languagesKnown={
          tel:"false",
          hin:"false",
          eng:"false",
          tam:"false"
        }

        let onSelected=()=>{

          if(selectGender=="Male"){
            salutation="Mr.";
          }
          else{
            if(maritalStatus=="Unmarried"){
            salutation="Miss."
            }
            else{
              salutation="Mrs."
            }
          }
          let firstName=firstNameInputRef.current.value;
          let lastName=lastNameInputRef.current.value;
          let state=stateSelectRef.current.value;



       
          msgLabelRef.current.innerHTML=`${salutation} ${firstName} ${lastName} from ${state} known languages are 
          ${languagesKnown.tel==true?"Telugu":""} ${languagesKnown.hin==true?"Hindi":""}  ${languagesKnown.eng==true?"English":""} ${languagesKnown.tam==true?"Tamil":""}`;
        }


        
        console.log(languagesKnown);
        
  return (
    <div className='App'>
      <form className='signupForm'>
        <h1>SignUp Form</h1>
        <div>
          <label>First Name</label>
          <input ref={firstNameInputRef} onChange={()=>{
            validateName(firstNameInputRef,firstNameSpan,nameRegEx);
          }}></input>
          <span ref={firstNameSpan}></span>
          
        </div>
        <div>
          <label>Last Name</label>
          <input ref={lastNameInputRef} onChange={()=>{
            validateName(lastNameInputRef,lastNameSpan,nameRegEx);
          }}></input>
          <span ref={lastNameSpan}></span>
        </div>
        <div>
          <label>Email</label>
          <input type='email' ref={emailInputRef} onChange={()=>{
            validateEmail(emailInputRef,emailspan,emailRegEx);
          }}></input>
          <span ref={emailspan}></span>
        </div>
        <div className='DOB'>
          <label>Date-of-birth</label>
          <input type='date'></input>
          <span></span>
        </div>

        <div>
          <label>Age</label>
          <input type='number' ref={ageInputRef} onChange={()=>{
            let age=Number(ageInputRef.current.value);
            if(age<=5){
              ageSpanRef.current.innerHTML="Infant";
            }
            else if(age >6 && age<=10){
            ageSpanRef.current.innerHTML="Kid";
            }
            else if(age >10 && age <=15){
             ageSpanRef.current.innerHTML="Young";
            }
            else if(age > 15 && age<=20){
              ageSpanRef.current.innerHTML="Teenage";
            }
            else if(age > 20 && age <=30){
              ageSpanRef.current.innerHTML="Adult";
            }
            else if(age > 30 && age <=40){
              ageSpanRef.current.innerHTML="Middle age";
            }
            else if(age >40 && age <=60){
              ageSpanRef.current.innerHTML="Old age";
            }
            else{
              ageSpanRef.current.innerHTML="Invalid age";
            }
          }}></input>
          <span ref={ageSpanRef}></span>
        </div>


        <div className='genderDiv'>
          <div>
          <label>Gender</label>
          </div>
          <div className='genderInputDiv'>
          <input type='radio' name="gender"  id='male' ref={maleRBRef} onChange={()=>{
              let maleBtn=maleRBRef.current.checked;
              if(maleBtn==true){
                  selectGender="Male";
              }
          }}></input>
          <label style={{width:"auto"}}  for="male">Male</label>
          <input type='radio' name="gender" id='female' ref={femaleRBRef} onChange={()=>{
            let femaleBtn=femaleRBRef.current.checked;
            if(femaleBtn==true){
              selectGender="Female";
            }
          }}></input>
          <label style={{width:"auto"}} for="female" >Female</label>
          </div>
          <span></span>
        </div>

        <div>
          <label>Marital Status</label>
          <input type='radio' name='maritalInput' onChange={(e)=>{
            if(e.target.checked==true){
              maritalStatus="married";
            }
          }}></input>
          <label style={{width:"auto"}}>Married</label>
          <input type='radio' name='maritalInput' onChange={(e)=>{
            if(e.target.checked==true){
              maritalStatus="Unmarried";
            }
          }}></input>
          <label style={{width:"auto"}}>Unmarried</label>
          <span></span>
        </div>

        <div>
          <label>Create Password</label>
          <input type='password' ref={passwordInputRef} onChange={()=>{
            validatePassword(passwordInputRef,passwordSpan,passwordRegex);
          }}></input>
          <span ref={passwordSpan}></span>
        </div>


        <div>
          <label>Select States</label>
          <select ref={stateSelectRef} id="states" className='selectState' name="states" onChange={(e)=>{
            console.log(e.target.value)
            let selectedStates=e.target.value;

            switch (selectedStates) {
              case "AndhraPradesh":
                console.log("Amaravathi")
                break;
                case "ArunachalPradesh":
                  console.log("Itanagar")
                  break;
                  case "Assam":
                    console.log("Dispur")
                    break;
                    case "Bihar":
                    console.log("Patna")
                    break;
                     case "Chhattisgarh":
                       console.log("Raipur");
                        break;
                     case "Goa":
                       console.log("Panaji");
                        break;
                     case "Gujarat":
                       console.log("Gandhinagar");
                        break;
                      case "Haryana":
                         console.log("Chandigarh");
                          break;
                      case "Himachal Pradesh":
                         console.log("Shimla");
                          break;
                       case "Jharkhand":
                         console.log("Ranchi");
                          break;
                       case "Karnataka":
                         console.log("Bengaluru");
                          break;
                       case "Kerala":
                         console.log("Thiruvananthapuram");
                          break;
                       case "Madhya Pradesh":
                         console.log("Bhopal");
                          break;
                       case "Maharashtra":
                         console.log("Mumbai");
                          break;
                       case "Manipur":
                         console.log("Imphal");
                          break;
                       case "Meghalaya":
                         console.log("Shillong");
                          break;
                       case "Mizoram":
                         console.log("Aizawl");
                          break;
                       case "Nagaland":
                         console.log("Kohima");
                          break;
                      case "Odisha":
                          console.log("Bhubaneswar");
                          break;
                      case "Punjab":
                         console.log("Chandigarh");
                          break;
                      case "Rajasthan":
                         console.log("Jaipur");
                          break;
                       case "Sikkim":
                         console.log("Gangtok");
                          break;
                       case "Tamil Nadu":
                         console.log("Chennai");
                          break;
                       case "Telangana":
                         console.log("Hyderabad"); 
                         break;
                       case "Tripura":
                         console.log("Agartala");
                          break;
                       case "Uttar Pradesh":
                         console.log("Lucknow");
                          break;
                       case "Uttarakhand":
                         console.log("Dehradun");
                          break;
                       case "West Bengal": 
                       console.log("Kolkata"); 
                       break;
              default:
                console.log("Unknown state");
                break;
            }
          }}> 
            <option>Select</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
             <option value="Arunachal Pradesh">Arunachal Pradesh</option>
             <option value="Assam">Assam</option> 
             <option value="Bihar">Bihar</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
               <option value="Goa">Goa</option> 
               <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                 <option value="Himachal Pradesh">Himachal Pradesh</option> 
                 <option value="Jharkhand">Jharkhand</option> 
                 <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option> 
                  <option value="Madhya Pradesh">Madhya Pradesh</option> 
                  <option value="Maharashtra">Maharashtra</option> 
                  <option value="Manipur">Manipur</option> 
                  <option value="Meghalaya">Meghalaya</option> 
                  <option value="Mizoram">Mizoram</option> 
                  <option value="Nagaland">Nagaland</option> 
                  <option value="Odisha">Odisha</option>
                   <option value="Punjab">Punjab</option> 
                   <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option> 
                    <option value="Tamil Nadu">Tamil Nadu</option>
                     <option value="Telangana">Telangana</option>
                      <option value="Tripura">Tripura</option> 
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                       <option value="Uttarakhand">Uttarakhand</option> 
                       <option value="West Bengal">West Bengal</option>

          </select>
          <span></span>
        </div>

        
        <div className='languageCheck'>  
          <label>Languages</label>
          <input type='checkbox' onChange={(e)=>{
            languagesKnown.tel=e.target.checked;
            }}></input>
          <label style={{width:"auto"}}>Telugu</label>

          <input type='checkbox' onChange={(e)=>{
            languagesKnown.hin=e.target.checked;
          }}></input>
          <label style={{width:"auto"}} >Hindi</label>


          <input type='checkbox' onChange={(e)=>{
            languagesKnown.eng=e.target.checked;
          }}></input>
          <label style={{width:"auto"}} >English</label>


          <input type='checkbox' onChange={(e)=>{
            languagesKnown.tam=e.target.checked;
          }}></input>
          <label style={{width:"auto"}} >Tamil</label>
          <span></span>
        </div>

       

        <button type='button' className='submitBtn' onClick={()=>{
          navigate("/home",{state:{text:"hii"}}) 
        }}>Submit</button>

        <button className='msgBtn' type='button' onClick={()=>{
onSelected();
        }}>Create Description</button>

    
        <div>
        <label ref={msgLabelRef} style={{width:"300px"}}></label>
        </div>
       
      </form>
    </div>
  )
}

export default SignUp
