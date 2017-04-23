const model = {
    "btnStart" : document.getElementById('btn-start'),
    "btnFizz" : document.getElementById('btn-fizz'),
    "btnBuzz" : document.getElementById('btn-buzz'),
    "btnFizzBuzz" : document.getElementById('btn-fizzbuzz'),
    "counterDisplay" : document.getElementById('counter'),
    "scoreDisplay" : document.getElementById('score'),
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
    "getScoreDisplay" : function() {
        return model.scoreDisplay;
    },
    "counter" : 0,
    "score" : 0,
    "interval" : 0,

    "startInterval" : function() {
        this.counter = 0;
        clearInterval(this.interval);
        this.interval = setInterval(function() {
            if (operator.counter < 100) {
                operator.startCounting();
                // view.showCounter();
            } else {
                clearInterval(operator.interval);
            }
        }, 1000);
    },

    "startCounting" : function() {
        operator.counter++;
        view.showCounter();
    },
    "checkFizz" : function() {
        if (this.counter % 3 === 0) {
            console.log("Fizz");
            operator.score++;
            view.showScore();
        }
    },
    "checkBuzz" : function() {
        if (this.counter % 5 === 0) {
            console.log("Buzz");
            operator.score++;
            view.showScore();
        }
    },
    "checkFizzBuzz" : function() {
        if (this.counter % 3 === 0 && this.counter % 5 === 0) {
            console.log("FizzBuzz");
            operator.score++;
            view.showScore();
        }
    },

}

const view = {
    "initDisplay" : function() {
        this.showCounter();
        this.showScore();
        this.eventListeners();
    },
    "showCounter" : function() {
        const counter = operator.getCounterDisplay();
        counter.textContent = operator.counter;
    },
    "showScore" : function() {
        const scoreDisplay = operator.getScoreDisplay();
        scoreDisplay.textContent = operator.score;
    },
    "eventListeners" : function() {
        const btnStart = operator.getBtnStart();
        btnStart.addEventListener('click', function(){
            operator.startInterval();
            view.btnsEventListeners();     
        });
    },
    "btnsEventListeners" : function() {
        const btnFizz = operator.getBtnFizz();
        btnFizz.addEventListener('click', function(){
            operator.checkFizz();       
        });
        const btnBuzz = operator.getBtnBuzz();
        btnBuzz.addEventListener('click', function(){
            operator.checkBuzz();     
        });
        const btnFizzBuzz = operator.getBtnFizzBuzz();
        btnFizzBuzz.addEventListener('click', function(){
            operator.checkFizzBuzz();     
        });
    }
}
view.initDisplay();