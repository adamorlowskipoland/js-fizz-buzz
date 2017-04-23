const model = {
    "btnStart" : document.getElementById('btn-start'),
    "btnFizz" : document.getElementById('btn-fizz'),
    "btnBuzz" : document.getElementById('btn-buzz'),
    "btnFizzBuzz" : document.getElementById('btn-fizzbuzz'),
}

const operator = {
    "getBtnStart" : function() {
        return model.btnStart;
    },
    "getBtnFizz" : function() {

    },
    "getBtnBuzz" : function() {
        
    },
    "getBtnFizzBuzz" : function() {
        
    }
}

const view = {
    "initDisplay" : function() {
        this.eventListeners();
    },
    "eventListeners" : function() {
        const btnStart = operator.getBtnStart();
        btnStart.addEventListener('click', function(){
            console.log(this);        
        });
    }
}
view.initDisplay();