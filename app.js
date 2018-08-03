

//Income Expense Instance
const incomeSection = new Vue({
    el:'#income-comp',
    data:{
        primaryIncome:'',
        secondaryIncome:''
    },
    methods:{
        incomeCompDone : function(){
            var convertPrimaryIncome = parseInt(this.primaryIncome);
            var convertSecondaryIncome = parseInt(this.secondaryIncome);
            return convertPrimaryIncome + convertSecondaryIncome;
        }
    }
});



// Fixed Expense Component

const fixedExpenses = new Vue({
    el:'#fixed-exp',
    data:{

    }
});

Vue.component('fixedexpensecomponent',{
    template:'<h2>helloo</h2>'
});





// Vue.component('greeting',{
//     template:'<h2>Hello, this is a test</h2>'
// });


// Testing Instance
// new Vue({
//     el:'#test',
//     data: {
//         firstName: '',
//         lastName: ''
//     },
//     methods: {
//         onEnter: function(e){
//             console.log(e.target.value);
//         }
//     },
//     computed: {
//         fullName: function (){
//             return this.firstName + ' ' + this.lastName;
//         }
//     }


// });
