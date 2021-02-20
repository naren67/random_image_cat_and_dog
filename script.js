const cat_image = document.getElementById('cat_image');
const dog_image = document.getElementById('dog_image');
const cat_btn = document.getElementById('cat_btn');
const dog_btn = document.getElementById('dog_btn');

cat_btn.addEventListener('click',getCatImage);
dog_btn.addEventListener('click',getDogImage);


function getCatImage(){
    fetch('https://aws.random.cat/meow')
    .then(response => response.json())
    .then(data=>{
        if(data.file.includes('.mp4'))
        {
            getCatImage();
        }
        else
        {
            cat_image.innerHTML=`<img src='${data.file}'/>`
        }
        
    })
    .catch(error=>{
        console.log('Cat_Error : '+ error);
    })
}

function getDogImage(){
    fetch('https://random.dog/woof.json')
    .then(response=>response.json())
    .then(data=>{
        if(data.url.includes('.mp4'))
        {
            getDogImage();
        }
        else
        {
            dog_image.innerHTML=`<img src='${data.url}'/>`
        }
    })
    .catch(error=>{
        console.log('Dog_Error : '+ error);
    })
}