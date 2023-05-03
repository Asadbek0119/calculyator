const numbers = document.querySelectorAll('.num')
const signs = document.querySelectorAll('.sign')
const dot = document.querySelector(".dot")
const equal = document.querySelector(".equal")
const display = document.querySelector('input')
const clearButton = document.querySelector(".c")
const removeButton = document.querySelector(".r")

class Calculator {
    display
    signView
    signOperator
    operators = ['+','✕','-','÷']
    dots = ['.']
    num 

    setDisplay (value) {
        display.value += value
    }
    get lestValue() {
        return display.value[display.value.length - 1]
    }
    get ferstValue() {
        return display.value[0]
    }

    // fors (el) {
    //     for (let i = 0; i < el.length; i++) {
    //         console.log(i,el[i]);
    //         if(el[i] == '.') {
    //          return
    //         }else if (!(el[i] == '.')) {
    //             return this.setDisplay('.')
    //             break
    //         }
    //      }
    //  }


    numbers (event) {


        const num = event.target.textContent.trim()

        if (
            this.lestValue == 0 && 
            display.value.length == 1
        )return display.value = num
        if (
            this.lestValue == 0 &&
            this.signView ==  display.value[display.value.length - 2]
        )return display.value = display.value.slice(0,-1) + num
        // console.log(this.lestValue);
        /*
        
        oxirgi qiymati no'l bo'lsa va uzunligi 1 ga teng bo'lsa
        ishoradan keyin oxirgi qiymati no'l bo'lsa
        
        */

         return this.setDisplay(num)
    }
    signs (event) {


        const signView = event.target.textContent.trim()
        
        const signOperator = event.target.dataset.sign
        // console.log(signOperator);
        
        /*
        
        display ni qiymati bo'sh bo'lsa
        oxirgi qiymati ishora bo'lsa
        oxirgi qiymati nuqta bo'lsa
        
        */
        if (this.operators.includes(this.lestValue)){
            return display.value = display.value.slice(0,-1) + signView
        }

        if (
            !display.value ||
            // this.lestValue == this.signView ||
            this.lestValue == "."
        )return
        
        this.signView = signView
        this.signOperator = signOperator
        console.log(signOperator);


       return this.setDisplay(signView)


       
    }
    dot () {
        /*
        
        oxirgi qiymati nuqta bo'lsa
        display qiymat bo'sh bo'lsa
        ishoradan keyin 
        */
        const [num1,num2] = display.value.split(this.signView)
        // let a ={ num1,num2,num3,num4,num5,num6,num7,num8}
        // console.log(a);
        // for (let i = 0; i < a.length; i++) {
        //     let num =  a[i].split('')
        //     console.log(num);
        // }


        

        //  for (let i = 0; i < num.length; i++) {
        //     if(num[i] == '.')return console.log('salom');
        //  }
    
        // console.log(num);
        // if (this.dots.includes(this.lestValue)){
        //     return console.log("salom");
        // }
        if(
            !display.value ||
            this.operators.includes(this.lestValue)
           )return display.value = display.value + "0."

       if(
        !display.value ||
        this.lestValue == "." ||
        this.operators.includes(this.lestValue)
       )return




        
        
        //  let a = num1.split('')

        //  return this.fors(a)
         
        
        // this.setDisplay('.')
        // let c = num2.split('')
        // for (let i = 0; i < c.length; i++) {
        //     console.log(i,a[i]);
        //     if(c[i] == '.') {
        //      return
        //     }
        //  }

    //    for (const key in a) {
    //     console.log(a[key]);
    //     let b = a[key]
    //     let c = b.split('')
    //     console.log(c);
    //    for (let i = 0; i < c.length; i++) {
    //        console.log(c[i]);

    //        if(c[i] == '.') {
    //         // console.log(i,c[i]);
    //         return console.log(i,c[i]);
    //        }else if (!(c[i] == '.')) {
    //         // console.log(c[i]);
    //         return this.setDisplay('.')
        
    //        }
          
    //    }
    // }
    return this.setDisplay('.')

       
    }
    calculete () {
    

        const [num1,num2] = display.value.split(this.signView)
        display.value = eval(num1 + this.signOperator + num2)
        console.log(num1,num2);
    }
    clear () {
        display.value = null
    }
    remove () {
        let deleted = display.value.split('').slice(0,-1).join('')
        display.value = deleted
        // console.log(deleted); 
    }

}



let calculator = new Calculator()
// console.log(calculator);
for (const number of numbers) {
    // console.log(number)
    number.onclick = (event) => {
      return calculator.numbers(event)  
    }
}

for (const sign of signs) {
    sign.onclick = (event) => {
        return calculator.signs(event)  
      }
}

dot.onclick = () => {
    calculator.dot()
}

clearButton.onclick = () => {
    calculator.clear()
}


removeButton.onclick = () => {
    calculator.remove()
}

equal.onclick = () => {
    calculator.calculete()
}