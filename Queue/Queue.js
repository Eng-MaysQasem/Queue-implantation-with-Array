class Queue{
    constructor(){
        this.items=[];
    }
    encqueue(val){
        //we ues push in array to insert last
return this.items.push(val);
    }
    decueue(){
        //we use shift in array to del first
        if(this.items.length==0){
            console.log("Queue is empty!");
        }
        return this.items.shift();
    }
    peek(){
        return this.items[0];
    }
    isEmpty(){
        return this.items.length==0;
    }
    print(){
    console.log(this.items);
    }}
var q = new Queue();
q.encqueue(10);
q.encqueue(20);
q.encqueue(30);
q.print();
q.decueue();//10 del
q.print();//20 30
console.log(q.peek());//20