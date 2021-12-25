let accountNumber = document.querySelector('.acct')
let applicant = document.querySelector('.applicant')
let submitBtn = document.querySelector('.submit')
let result = document.querySelector('.result')
let error1 = document.querySelector('.error1')
let error2 = document.querySelector('.error2')


submitBtn.addEventListener('click', function(){
  let applicantValue = applicant.value;
  let trimmedApplicantValue = applicantValue.replace(" ","");

  if(accountNumber.value !== "" && applicant.value !== ""){
    result.innerHTML = `${accountNumber.value}_${trimmedApplicantValue}_V617179MISC`;
  } else {
    accountNumber.style.border = "1px solid red";
    applicant.style.border = "1px solid red";
    error1.innerHTML = 'fields cannot be blank';
    error2.innerHTML = 'fields cannot be blank';
  }


  //reset input
  accountNumber.value = '';
  applicant.value = '';
})