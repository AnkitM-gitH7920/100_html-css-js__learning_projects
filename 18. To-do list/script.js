let taskList = document.querySelector('.todoList');
const addBtn = document.getElementById('add');
const inputedTask = document.getElementById('taskInput');

function addTask(){
    if (inputedTask.value === "") {
        alert('Please enter a task first');
    }
    else{
        const task = document.createElement('div');
        task.classList.add('alighnCenter')
        task.setAttribute("id","task")
        task.innerHTML = `
                <div class="left">
                    <div class="checkBox completeCenter">
                        <div class="checkbox-wrapper-12">
                            <div class="cbx">
                                <input class="crntCheckBox" type="checkbox" id="cbx-12">
                                <label for="cbx-12"></label>
                                <svg fill="none" viewBox="0 0 15 14" height="14" width="15"><path d="M2 8.36364L6.23077 12L13 2"></path>
                                </svg>
                            </div>
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <filter id="goo-12">
                                        <feGaussianBlur result="blur" stdDeviation="4" in="SourceGraphic"></feGaussianBlur>
                                        <feColorMatrix result="goo-12" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7" mode="matrix" in="blur"></feColorMatrix>
                                        <feBlend in2="goo-12" in="SourceGraphic"></feBlend>
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="mid">${inputedTask.value}</div>
                <p class="right delete completeCenter">x</p>`;
        taskList.appendChild(task)
        inputedTask.value = ""; //resets the input field
    };

    // delete function
    let deleteBtns = document.querySelectorAll('.delete')
    for(let btnIndex = 0; btnIndex<deleteBtns.length;btnIndex++){
        deleteBtns[btnIndex].onclick = function(){
            this.parentNode.remove();
        };
    };

    // completed task line over function

};
addBtn.addEventListener('click',addTask);
inputedTask.addEventListener('keydown',(event)=>{ if(event.key == "Enter"){ addTask() } });

/* problems :-
1. on writing new task the checkbox are getting reset (problem solver by creating list items dynamically using javascript)
2. completed task line over is not wroking properly
3. create a function , on clicking checkbox it will create a line over the completed task
*/