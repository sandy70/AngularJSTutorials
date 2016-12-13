var toDoApp = angular.module("ToDoApp", []);

toDoApp.controller("ToDoAppCtrl", ToDoAppCtrl);

function ToDoAppCtrl(){
    this.todos = [
                  {value:"Call parents"}, 
                  {value:"order book"}, 
                  {value:"make a call to india"}
                 ];

    this.addNewToDo = function()
    {
        var newToDo = {value:this.newToDo};
        this.todos.push(newToDo);
    }

    this.deleteTodo = function(index)
    {
        this.todos.splice(index,1);
    }

    this.edit = function()
    {
        this.isEdit = !this.isEdit;
    }
}

