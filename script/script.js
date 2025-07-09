let video = document.getElementById('bgAnimation').playbackRate = 0.7;

const planBtn = document.getElementById('plansIn');
const planPrimary = document.getElementById('planConentPrimary');
const planSecondary = document.getElementById('planConentSecondary');
const planPrimaryBtn = document.getElementById('planPrimary');
const planSecondaryBtn = document.getElementById('planSecondary');
planBtn.addEventListener('click',(e)=>{
    if(e.target.id == "planPrimary"){
        planPrimaryBtn.classList.add('plansItemActive');
        planSecondaryBtn.classList.remove('plansItemActive'); 
        planSecondary.classList.remove("planActive");
        planPrimary.classList.add("planActive");
    }
    if(e.target.id == "planSecondary"){
        planPrimaryBtn.classList.remove('plansItemActive');
        planSecondaryBtn.classList.add('plansItemActive'); 
        planPrimary.classList.remove("planActive");
        planSecondary.classList.add("planActive");
    } 
});

const faqCapsule = document.getElementById('faqCapsule');

faqCapsule.addEventListener('click',(e)=>{
    const liAll = document.querySelectorAll('#faqCapsule li');
    const liPlus = document.querySelectorAll('.questionsHead span');
    const target = e.target;
    if(target.tagName == "LI"){
        for(let i= 0; i<liAll.length; i++){
            liAll[i].classList.remove('activeQuestions');
            liPlus[i].innerText="+";
        }
        target.classList.add('activeQuestions');
        target.children[0].children[0].children[1].innerText="-";
    }  
});


const mobileNavBtn = document.getElementById('mobileNavBtn');
const mobileNavCloseBtn = document.getElementById('navClose');
let mobileNavContent;

mobileNavBtn.addEventListener('click', ()=>{
    mobileNavContent = document.getElementById('mobileNavigator');
    mobileNavContent.classList.add('mobileNavigatorActive');
    console.log("aç")
});
mobileNavCloseBtn.addEventListener('click', ()=>{
    mobileNavContent = document.getElementById('mobileNavigator');
    mobileNavContent.classList.remove('mobileNavigatorActive');
    console.log("kapat")
});