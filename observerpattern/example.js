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

function foo(msg) {
    console.log('foo: ' + msg);
}

subject.on('eat', foo);
subject.on('study', foo);

subject.emit('eat', 'Corn');
//output for Line above: subject.emit('eat', 'Corn');
// Corn
// foo: Corn
subject.emit('study', 'cs445');
//output for Line above: subject.emit('study', 'cs445');
// cs445
// foo: cs445