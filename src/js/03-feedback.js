import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

let feedback = JSON.parse(localStorage.getItem("feedback-form-state"));


const handleFormInput = ({target}) => {
 const data = {...feedback};

if(target.value){
    target.name === 'email'?data.email = target.value:data.message = target.value;
}

localStorage.setItem("feedback-form-state", JSON.stringify(data))
feedback = JSON.parse(localStorage.getItem("feedback-form-state"));
console.log(feedback)
};

form.addEventListener('input', throttle(handleFormInput, 500) );

const populateFormData = () => {
if(feedback){
    form.email.value = feedback.email?feedback.email:''
    
    form.message.value = feedback.message?feedback.message:''
};
};
populateFormData();

form.addEventListener('submit', (event) => {
event.preventDefault();
localStorage.removeItem("feedback-form-state")
form.email.value = '';
form.message.value = '';
});