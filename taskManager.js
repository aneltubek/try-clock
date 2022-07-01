const firstName = document.getElementById("firstName");
const description = document.getElementById("description");
const assignedTo = document.getElementById("assignedTo");
const dueDate = document.getElementById("dueDate");
const submitButton = document.getElementById("submitButton");
const form = document.getElementById("taskForm");
const nameError = document.getElementById("nameError");


class TaskManager {
    constructor(id=0) {
        firstName = firstName.value;
        description = description.value;
        assignedTo = assignedTo.value;
        dueDate = dueDate.value;
        this.infoArr = [];
        this.id = id;
    }
    addInfo(firstName, description, assignedTo, dueDate) {
        const info = {
            id: this.id++,
            firstName: this._firstName,
            description: this._description,
            assignedTo: this._assignedTo,
            dueDate: this._dueDate
        }
        this.infoArr.push(info);
        console.log(`this is id: ${info.id}\n fisrt name is: ${info.firstName}\n description is: ${info.description}\n assigned to: ${info.assignedTo}\n due Date is: ${info.dueDate}`)
        return info;
    }
}

const getInfo = new TaskManager(0);
console.log(getInfo);

let prop1 = getInfo.addInfo();

console.log(prop1);