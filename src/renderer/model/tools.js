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
           

        }
    }
 }

 export default app;


