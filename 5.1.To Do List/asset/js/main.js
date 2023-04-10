let btn = document.querySelector(".add")
let list = document.querySelector(".list")


btn.onclick = function Click() {
    let inp1 = document.querySelector("#inp1").value

    let list_content = document.createElement("div")

    let h2 = document.createElement("h2")

    let btns = document.createElement("div")

    let btn_done = document.createElement("button")
    
    let btn_delete = document.createElement("button")
   
    list_content.className="list_content d-flex justify-content-between w-50 my-4 align-items-center mx-auto"

    h2.className="mx-3"
    
    btn_delete.className="btn_delete mx-3 btn bg-danger fw-bold text-white"
    
    btn_done.className="btn_done btn bg-success my-2 fw-bold text-white"
    
    btns.append(btn_done,btn_delete)

    list_content.append(h2, btns)

    btn_done.innerHTML = "Mark as Done"

    btn_delete.innerHTML = "Delete"

    list_content.style.backgroundColor = "aqua"

    list_content.style.borderRadius = "10px"

    h2.innerHTML = inp1

    list.append(list_content)

    Check()


    // let btn_done=document.getElementsByClassName(".btn_done")
    btn_delete.onclick=function () {
         list_content.remove()
         Check()
    }
    btn_done.onclick=function () {
        list_content.classList.toggle("active")
    }
}


function Check() {
    let countDown = document.querySelectorAll(".list_content").length;
    console.log(countDown);
    document.querySelector(".count").innerHTML=`Number of Task:${countDown}` 
    let alert = document.querySelector(".alert")

    if (countDown > 0) {
        alert.classList.add("d-none")
    }
    else {
        alert.classList.remove("d-none")
    }
}
Check();

// let btn_done=document.querySelector(".btn_done")
// btn_delete.addEventListener('click', ()=>   {
//         list.removeChild(list_content)
    //   })

