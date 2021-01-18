function anotherAddEventListener(typeofEvent, callback){

    var eventThatHappened = {
        eventType : "keypress",
        key : "p",
        durationOfKeypress : 2
    }
    if (eventThatHappened.eventType === typeofEvent){
        callback(eventThatHappened);
    }

}