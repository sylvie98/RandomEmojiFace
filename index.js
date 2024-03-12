const emojis =[
'😂',
'😍',
'🥰',
'🤐',
'😛',
];
const changeFace= document.getElementById('face');
const buto=document.getElementById('but');

buto.addEventListener('click',()=>{
    let round= Math.floor(Math.random()* emojis.length);
    let result= emojis[round];
    changeFace.innerHTML= result;
});
