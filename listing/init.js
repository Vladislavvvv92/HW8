// // const arguments = 0 ;
// // const collection = [];
// // const tempArr = [];
// const aList = {
//     collection : [],
//     tempArr : [],
//     resultArr : [],
//     unshift: function (el) {
//         if(arguments.length > 1 || arguments.length < 1) return false;
//
//                 for( let i = this.collection.length - 1; i >= 0;  i--){
//                 this.collection[i+1] = this.collection[i];
//             }
//         this.collection[0] = el;
//
//         // this.resultArr = this.el;
//         //         this.resultArr[i +1] = this.tempArr;
//         //         return this.resultArr;
// },
//     shift: function () {
//         let emptryArr = [];
//         if (arguments.length < 0 || arguments.length > 0) return false;
//         for (let i = 0; i < this.collection.length - 1; i++) {
//             emptryArr[i] = this.collection[i+1];
//         }
//         // delete this.collection[this.collection.length - 1];
//
//         this.collection = emptryArr;
//
//
//     }
// }
// const linkedList = {
//
//
//     push: function () {
//         const newNode = this.createNode(el);
//         let tmp = this.root;
//         while (tmp.next && (tmp.next !== this.root)) {
//             tmp.next.prev = tmp;
//             tmp = tmp.next;
//             newNode.prev = tmp
//         }
//         tmp.next = newNode;
//         this.root.prev = null;
//         this.root.length++;
//         return true;
//     }
// }
//
//
// ///////////////////////////////////////////////////////////////////////////////////////////////////
//
// const arrayList = {
//
//     length : function(){
//         if(arguments.length > 0){
//             return false;
//         }
//         let index = 0;
//         for (let i = 0; this[i] !== undefined; i++){
//             index = i + 1;
//         }
//         return index;
//     },
//
//     push : function(value){
//         if(arguments.length !== 1 || typeof(arguments) == null || typeof(arguments) == undefined){
//             return false;
//         }
//         return (this[this.length()] = value);
//     },
//
//     pop : function() {
//         if(arguments.length > 0){
//             return false;
//         }
//         let deleted = this[this.length() - 1];
//         delete this[this.length() - 1];
//         return deleted;
//     },
//
//     clear : function(){
//         if(arguments.length > 0){
//             return false;
//         }
//         for(let i = this.length(); i > -1; i--){
//             delete this[i];
//         }
//     },
//
//     unshift: function (el) {
//         if (arguments.length > 1 || arguments.length < 1) return false;
//
//         for (let i = this.collection.length - 1; i >= 0; i--) {
//             this.collection[i + 1] = this.collection[i];
//         }
//         this.collection[0] = el;
//     },
//
//     shift: function () {
//         let emptryArr = [];
//         if (arguments.length < 0 || arguments.length > 0) return false;
//         for (let i = 0; i < this.collection.length - 1; i++) {
//             emptryArr[i] = this.collection[i + 1];
//         }
//         // delete this.collection[this.collection.length - 1];
//
//         this.collection = emptryArr;
//     },
//
//     toString : function(){
//         if(arguments.length > 0){
//             return false;
//         }
//         let str = "";
//         for(let i = 0; i < this.length(); i++){
//             str +=this[i] + ", ";
//         }
//         str = str.substring(0, str.length - 1);
//         return str;
//     },
//
//
// }
//
// const linkedList = {
//
//     length : function(){
//         if(arguments.length !== 0){
//             return false;
//         }
//         return this.root.length;
//     },
//
//     root : {
//         next : null,
//         prev : null,
//         length : 0,
//     },
//
//     createNode : function(el){
//         if(arguments.length !== 1){
//             return false;
//         }
//         return {
//             el : el ? el : null,
//             next : null,
//             prev : null,
//             index : this.root.length,
//         }
//     },
//
//     push : function (){
//         const newNode = this.createNode(el);
//         let tmp = this.root;
//         while (tmp.next && (tmp.next !== this.root)){
//             tmp.next.prev = tmp;
//             tmp = tmp.next;
//             newNode.prev = tmp
//         }
//         tmp.next = newNode;
//         this.root.prev = null;
//         this.root.length++;
//         return true;
//     },
//
//     unshift : function (){
//         const newNode = this.createNode(el);
//         let tmp = this.root;
//         while (tmp.next && (tmp.next !== this.root)){
//             tmp.next.prev = tmp;
//             tmp = tmp.next;
//             newNode.prev = tmp
//         }
//         tmp.next = newNode;
//         this.root.prev = null;
//         this.root.length++;
//         return true;
//     },
//
//     pop : function () {
//         if(arguments.length ===0){
//             return false;
//         }
//         let temp = null;
//         while ( this.root.next !== null){
//             if (this.root.next === null){
//                 let deleted = this.root.next.length - 1;
//                 return this.root.next = deleted;
//             }
//
//         }
//
//
//
//     }
//
//
//
//
// }
//
//
//
// //////////
//
//
// const LinkedList = {
//     root: {
//         head: null,
//         tail: null,
//         length: 0,
//     },
//
//     createNode: function (el) {
//         return {
//             data: el ? el : null,
//             prev: null,
//             next: null,
//         };
//     },
//
//     size: function () {
//         return `LinkedList size = ${this.root.length}`;
//     },
//
//     push: function (el) {
//         let node = this.createNode(el);
//
//         if (!this.root.head) {
//             this.root.head = node;
//             this.root.tail = node;
//         } else {
//             node.prev = this.root.tail;
//             this.root.tail.next = node;
//             this.root.tail = node;
//         }
//         this.root.length++;
//     },
//
//     unshift : function (el) {
//         let node = this.createNode(el);
//         if (!this.root.head) {
//             this.root.head = node;
//             this.root.tail = node;
//         } else{
//             this.root.head.prev = node
//
//         }
//
//
//
//     }
//
// }
//
// //     pop: function () {
// //         if (!this.root.head) return null
// //
// //         const prevNode = this.root.tail.prev
// //
// //         if (prevNode) {
// //             prevNode.next = null;
// //             this.root.tail = prevNode;
// //         } else {
// //
// //             this.root.head = null;
// //             this.root.tail = null;
// //         }
// //         this.root.length--;
// //     },
// //
// //     unshift: function (el) {
// //         let node = this.createNode(el);
// //
// //         if (!this.root.head) {
// //             this.root.head = node;
// //             this.root.tail = node;
// //         } else {
// //             this.root.head.prev = node
// //             node.next = this.root.head;
// //             this.root.head = node;
// //         }
// //         this.root.length++;
// //
// //     },
// //
// //     shift: function () {
// //         if (!this.root.head) return null;
// //         const node = this.root.head.next;
// //         if (node) {
// //             node.prev = null
// //             this.root.head = node
// //         } else {
// //             this.root.head = null
// //             this.root.tail = null
// //         }
// //         this.root.length--;
// //     },
// //
// //     toString: function () {
// //         if (!this.root.head) return null;
// //         let node = this.root;
// //         node = node.head;
// //         let string = node.data;
// //         while (node.next != null) {
// //             node = node.next;
// //             string += ", " + String(node.data);
// //         }
// //         return string;
// //     },
// //
// //     toArrayList: function () {
// //         let node = this.root.head;
// //         let tmpArray = [];
// //         let i = 0;
// //
// //         while (node.next != null) {
// //             tmpArray[i] = node.data;
// //             i++;
// //             node = node.next;
// //         }
// //
// //         tmpArray[i] = node.data;
// //         ArrayList.Collection = tmpArray;
// //         console.log(tmpArray)
// //         return tmpArray;
// //     },
// // }
//
//
//


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;

    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;

        this.length = 0;

    }

    size() {
        if (arguments.length > 0) return false;
        return this.length;
    }

    clear() {
        if (arguments.length > 0)
            return false;
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value);

        newNode.prev = this.tail;
        if (this.tail) {
            this.tail.next = newNode;
        } else {

            this.head = newNode;
            this.tail = newNode;
        }
        this.tail = newNode;
        this.length++;

    }

    unshift(value) {
        const newNoda = new Noda(value);

        newNoda.next = this.head;
        if (this.head) this.head.prev = newNoda;
        else {
            this.head = newNoda;
            this.tail = newNoda;
        }
        this.head = newNoda;
        this.length++;
    }

    pop() {
        if (arguments.length > 0)
            return false;
        if (this.head && this.tail === null) {
            this.head = null;
            this.tail = null;
            return false;
        }


        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null

        }
        this.length--;

    }

    shift() {
        if (arguments.length > 0)
            return false;
        if (this.head && this.tail === null) {
            this.head = null;
            this.tail = null;
            return false;
        }


        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.length--;


    }


}


class NewMethod {
    constructor(collection,callback, arg ){
        this.collection = collection;
        this.callback = callback;
        this.arg = arg;

}
    map  (){
        let resultCollection = [];
        for (let i = 0; i < this.collection.length; i++){
            resultCollection.push(this.callback.call(this.collection[i], this.arg))
        }

        return resultCollection;


    }
    length () {
        if (arguments.length > 0) {
            return false;
        }
        let index = 0;
        for (let i = 0; this[i] !== undefined; i++) {
            index = i + 1;
        }
        return index;
    };
    push(value) {
        if (arguments.length !== 1 || typeof(arguments) == null || typeof(arguments) == undefined) {
            return false;
        }


        return (this[this.length()] = value);
    };

    myReverse () {

        let tmp = [];
        for (let i = this.length() - 1; i >= 0; i--){
            tmp.push(this[i])

        }
        this.collection = tmp;
        return this;
    }


}
