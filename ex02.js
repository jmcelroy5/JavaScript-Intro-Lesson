function fibonacci_set(max)
    {
        if (max > 1)
        {
            var fib_list = [1];
            var current_fib = 1;
            while (current_fib < max)
            {
                fib_list.push(current_fib);
                current_fib = fib_list[fib_list.length-1] + fib_list[fib_list.length-2];
            }
            return fib_list;
        }
        else
        {
            return [1, 1];
        }
        
    }

console.log(fibonacci_set(20));

function even(n){
    return n % 2 === 0;
}

console.log(even(20));

function sum(someList){
    var total = 0;
    for (var i=0; i < someList.length; i++)
    {
        total += someList[i];
    }
    return total;
}

function filter(someFunc,someArray){
    var newArray = [];
    for (var i=0; i < someArray.length; i++){
        var newitem = someFunc(someArray[i]);
        if (newitem === true){
            newArray.push(someArray[i]);
        }
    }
    return newArray;
}

console.log(sum(filter(even,fibonacci_set(4000000))));