// Roman To Int challenge 
const romanToInt = function(s) {
    let res=0;
    const arr=s.split('');
    arr.forEach(letter => {
        switch (letter){
         case 'I':
            res += 1;
            break;
            case 'V':
            res += 5;
            break;
            case 'X':
            res += 10;
            break;
            case 'L':
            res += 50;
            break;
            case 'C':
            res += 100;
            break;
            case 'D':
            res += 500;
            break;
            case 'M':
            res += 1000;
            break;       
        }
    })
    
    for(let i=0;i<arr.length;i++){
        if(arr[i]==='I' && arr[i+1] ==='X'){
            res -= 2;
        }
        if(arr[i]==='I' && arr[i+1] ==='V'){
            res -= 2;
        }
        if(arr[i]==='X' && arr[i+1] ==='L'){
            res -= 20;
        }
        if(arr[i]==='X' && arr[i+1] ==='C'){
            res -= 20;
        }
        if(arr[i]==='C' && arr[i+1] ==='D'){
            res -= 200;
        }
        if(arr[i]==='C' && arr[i+1] ==='M'){
            res -= 200;
        }
    }
    return res;
};
