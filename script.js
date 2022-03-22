const panels=document.querySelectorAll(".pannel");
console.log(panels);

panels.forEach(item=>{
    item.addEventListener('click',()=>{
        removeActiveClasses();
        item.classList.add('active');
    })
})

removeActiveClasses=()=>{
    panels.forEach(item=>{
        item.classList.remove('active');
    })
}