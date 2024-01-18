const title=document.querySelector('#title')
const discription=document.querySelector('#description')
const form=document.querySelector('form')
const container=document.querySelector('.container')
const tasks=localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')): [];
showtext();
function removetsk(){
    tasks.forEach((values)=>{
       const div= document.querySelector('.tasks')
        div.remove();
    })
}
function showtext(){
tasks.forEach((value,index)=>{
    const div= document.createElement("div")
    div.setAttribute("class","tasks")
    const innerdiv=document.createElement("div")
    div.append(innerdiv);
    const p=document.createElement("p")
    p.innerText=value.title;
innerdiv.append(p)
const span=document.createElement("span")
span.innerText=value.discription;
innerdiv.append(span)
const btn=document.createElement("button")
btn.setAttribute('class','delbtn')
btn.innerText="-"
btn.addEventListener('click',()=>{
    removetsk();
    console.log(tasks)
    tasks.splice(index,1)
       showtext();
 })
div.append(btn);
container.append(div)



})
}
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    removetsk()
    tasks.push({
        title: title.value,
        discription: discription.value
    })
    localStorage.setItem('tasks', JSON.stringify(tasks))
showtext();
    })