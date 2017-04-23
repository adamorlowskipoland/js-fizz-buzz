const model = {
    "btnStart" : document.getElementById('btn-start'),
    "btnFizz" : document.getElementById('btn-fizz'),
    "btnBuzz" : document.getElementById('btn-buzz'),
    "btnFizzBuzz" : document.getElementById('btn-fizzbuzz'),
    "counterDisplay" : document.getElementById('counter'),
}

const operator = {
    "getBtnStart" : function() {
        return model.btnStart;
    },
    "getBtnFizz" : function() {
        return model.btnFizz;
    },
    "getBtnBuzz" : function() {
        return model.btnBuzz;      
    },
    "getBtnFizzBuzz" : function() {
        return model.btnFizzBuzz;        
    },
    "getCounterDisplay" : function() {
        return model.counterDisplay;        
    },
    "counter" : 0,
    "interval" : 0,

    "startInterval" : function() {
        this.counter = 0;
        clearInterval(this.interval);
        this.interval = setInterval(function() {
            if (operator.counter < 100) {
                operator.startCounting();
                view.showCounter();
            } else {
                clearInterval(operator.interval);
            }
        }, 100);
    },

    "startCounting" : function() {
        operator.counter++;
        console.log(operator.counter);
    }
}

const view = {
    "initDisplay" : function() {
        this.eventListeners();
    },
    "showCounter" : function() {
        const counter = operator.getCounterDisplay();
        counter.textContent = operator.counter;
    },
    "eventListeners" : function() {
        const btnStart = operator.getBtnStart();
        btnStart.addEventListener('click', function(){
            operator.startInterval();       
        });
        const btnFizz = operator.getBtnFizz();
        btnFizz.addEventListener('click', function(){
            console.log(this);        
        });
        const btnBuzz = operator.getBtnBuzz();
        btnBuzz.addEventListener('click', function(){
            console.log(this);        
        });
        const btnFizzBuzz = operator.getBtnFizzBuzz();
        btnFizzBuzz.addEventListener('click', function(){
            console.log(this);        
        });
    }
}
view.initDisplay();