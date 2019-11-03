function List() {

}

List.prototype.length = function () {
    if (arguments.length > 0) {
        return false;
    }
    let index = 0;
    for (let i = 0; this[i] !== undefined; i++) {
        index = i + 1;
    }
    return index;

};

List.prototype.push = function (value) {
    if (arguments.length !== 1 || typeof(arguments) == null || typeof(arguments) == undefined) {
        return false;
    }
    return (this[this.length()] = value);
};


List.prototype.pop = function () {
    if (arguments.length > 0) {
        return false;
    }
    let deleted = this[this.length() - 1];
    delete this[this.length() - 1];
    return deleted;
};

List.prototype.clear = function () {
    if (arguments.length > 0) {
        return false;
    }
    for (let i = this.length(); i > -1; i--) {
        delete this[i];
    }
};
List.prototype.clear = function () {
    if (arguments.length > 0) {
        return false;
    }
    for (let i = this.length(); i > -1; i--) {
        delete this[i];
    }
};

List.prototype.unshift = function (value) {
    if (arguments.length !== 1) {
        return false;
    }
    for (let i = this.length(); i > -1; i--) {
        this[i] = this[i - 1];
    }
    this[0] = value;
    return (this[0] = value);
};

List.prototype.shift = function () {
    let deleted = this[0];
    for (let i = 0; i < this.length(); i++) {
        this[i] = this[i + 1];
    }
    delete this[this.length()];
    return deleted;
};

List.prototype.toString = function () {
    if (arguments.length > 0) {
        return false;
    }
    let str = "";
    for (let i = 0; i < this.length(); i++) {
        str += this[i] + ", ";
    }
    str = str.substring(0, str.length - 1);
    return str;
};
List.prototype.toString = function () {
    if (arguments.length > 0) {
        return false;
    }
    let str = "";
    for (let i = 0; i < this.length(); i++) {
        str += this[i] + ", ";
    }
    str = str.substring(0, str.length - 1);
    return str;
};


List.prototype.toString = function () {
    if (arguments.length > 0) {
        return false;
    }
    let str = "";
    for (let i = 0; i < this.length(); i++) {
        str += this[i] + ", ";
    }
    str = str.substring(0, str.length - 1);
    return str;
};

List.prototype.toString = function () {
    if (arguments.length > 0) {
        return false;
    }
    let str = "";
    for (let i = 0; i < this.length(); i++) {
        str += this[i] + ", ";
    }
    str = str.substring(0, str.length - 1);
    return str;
};

List.prototype.toLinkedList = function () {
    for (let i = 0; i < this.length(); i++) {
        linkedList.push(this[i]);
    }
    return linkedList;
};

List.prototype.sort = function (f) {
    if (f && (typeof f == "function")) {
        for (let i = 0; i < this.length(); i++) {
            for (let j = 0; j < this.length(); j++) {
                if (j === this.length() - 1) {
                    break;
                }
                if (f(this[j], this[j + 1]) == 1) {
                    [this[j], this[j + 1]] = [this[j + 1], this[j]];
                }
            }
        }
    } else {
        for (let i = 0; i < this.length(); i++) {
            for (let j = 0; j < this.length(); j++) {
                if (j === this.length() - 1) {
                    break;
                }
                if (String(this[j]) > String(this[j + 1])) {
                    [this[j], this[j + 1]] = [this[j + 1], this[j]];
                }
            }
        }
    }
};
// List.prototype.test = function() {
//     alert('a')
// };
//


function linkedList() {
}

    linkedList.prototype.length = function () {
        if (arguments.length !== 0) {
            return false;
        }
        return this.root.length;
    };

    this.root = {
        next: null,
        prev: null,
        length: 0,
    };

    linkedList.prototype.createNode = function (el) {
        if (arguments.length !== 1) {
            return false;
        }
        return {
            el: el ? el : null,
            next: null,
            prev: null,
            index: this.root.length,
        }
    };

    linkedList.prototype.push = function push(el) {
        if (arguments.length !== 1) {
            return false;
        }
        const newNode = this.createNode(el);
        let tmp = this.root;
        while (tmp.next && (tmp.next !== this.root)) {
            tmp.next.prev = tmp;
            tmp = tmp.next;
            newNode.prev = tmp
        }
        tmp.next = newNode;
        this.root.prev = null;
        this.root.length++;
        return true;
    };

    linkedList.prototype.pop = function () {
        if (this.root.length === 0) {
            return false;
        }

        if (this.root.length === 1) {
            let deleted = this.root.next;
            this.root.next = null;
            this.root.length--;
            return deleted;
        }

        let tmp = this.root;
        while (tmp.next !== null) {
            tmp = tmp.next;

            if (tmp.index === (this.root.length - 2)) {
                let deleted = tmp.next;
                tmp.next == null;
                this.root.length--;
                return deleted
            }
        }
    };

    linkedList.prototype.unshift = function (el) {
        const newNode = this.createNode(el);
        if (this.root.next == null) {
            this.root.next = newNode;
            this.root.length++;
        } else {
            let tmp = this.root.next;
            this.root.next = newNode;
            this.root.next.next = tmp;
            this.root.length++;
        }
        return true;
    };

    linkedList.prototype.shift = function () {
        if (this.root.next = null) {
            return false;
        } else {
            const tmp = this.root.next.next;
            this.root.next = tmp;
            this.root.length--;
        }
    };

    linkedList.prototype.toString = function () {
        let str = "";
        let tmp = this.root;
        while (tmp.next !== null) {
            tmp = tmp.next;
            str += tmp.el + ", ";
        }
        str = str.substring(0, str.length - 2);
        return str;
    };

    linkedList.prototype.toArrayList = function () {
        let tmp = this.root;
        while (tmp.next !== null) {
            tmp = tmp.next;
            arrayList.push(tmp.el);
        }
        return arrayList;
    };

    linkedList.prototype.clear = function () {
        this.root.next = null;
        this.root.prev = null;
        this.root.length = 0;
    };

    linkedList.prototype.sort = function (f) {
        if (f && (typeof f == "function")) {
            let firstNoda = this.root.next;
            while (firstNoda && firstNoda.next) {
                if (f(firstNoda.el, firstNoda.next.el) > 0) {
                    [firstNoda.el, firstNoda.next.el] = [firstNoda.next.el, firstNoda.el];
                }
            }
        } else {
            let firstNoda = this.root.next;
            if (!firstNoda) {
                return false;
            }
            while (firstNoda && firstNoda.next) {
                if (String(firstNoda.el) > String(firstNoda.next.el)) {
                    [firstNoda.el, firstNoda.next.el] = [firstNoda.next.el, firstNoda.el];
                }
                firstNoda = firstNoda.next;

            }
        }

}


function arrayList() {

}

arrayList.prototype = Object.create(List.prototype);



    function LList() {

    }

LList.prototype = Object.create(linkedList.prototype);