function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim()) {
        const li = document.createElement('li');
        li.textContent = taskInput.value;
        li.onclick = () => li.classList.toggle('completed');
        taskList.appendChild(li);
        taskInput.value = '';
    }
}
