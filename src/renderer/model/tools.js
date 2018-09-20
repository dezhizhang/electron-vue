var md5 = require('md5-js');
let app = {
    config:{
        apiUrl:'http://www.apiying.com/yuqing'
    },
    stroage:{
        set(key,value) {
            localStorage.setItem(key,JSON.stringify(value));

        },
        get(key) {
           let result = localStorage.getItem(key);
           if(result) {
                return  JSON.parse(localStorage.getItem(key));

           } else {
               return '';
               
           }
           

        },
        sign(json){
            

            let arr = [];
            for(let i in json) {
                arr.push(i);

            }
            arr = arr.sort();
            let str = '';
            for(let i=0;i<arr.length;i++){
                str+= arr[i] + json[arr[i]]
            }
            return md5(str);

        }

    }
 }

 export default app;


