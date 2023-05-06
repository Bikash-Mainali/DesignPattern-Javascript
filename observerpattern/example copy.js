class Subject {
    constructor() {
        this.observerList = { eat: [], study: [] };
    }

    on(event, fn) {
        //add observer
        if (event === 'eat') {
            this.observerList.eat.push(fn); //adding fn as a observer
        }
        else {
            this.observerList.study.push(fn); //adding fn as a observer
        }
    }

    emit = (event, message) => {
        //notify observers
        let observerToBeNotified;
        if (event === 'eat') {
            observerToBeNotified = this.observerList.eat;
            //notify all related observers
            observerToBeNotified.forEach(fn => {
                fn(message);
            });
        }
        else {
            observerToBeNotified = this.observerList.study;
            //notify all related observers
            observerToBeNotified.forEach(fn => {
                fn(message);
            });
        }
    }
}

const subject = new Subject();
subject.on('eat', console.log); // register an observer
subject.on('study', console.log); // register an observer

class Observer {
    fun1 = (msg) => {
        console.log('foo: ' + msg);
    }
}

const obs1 = new Observer();
const obs2 = new Observer();

subject.on('eat', obs1);
subject.on('study', obs2);

subject.emit('eat', 'Corn');
//output for Line above: subject.emit('eat', 'Corn');
// Corn
// foo: Corn
subject.emit('study', 'cs445');
//output for Line above: subject.emit('study', 'cs445');
// cs445
// foo: cs445