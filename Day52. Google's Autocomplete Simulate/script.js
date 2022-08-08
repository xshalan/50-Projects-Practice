import { api } from "./server.js" 

const search_bar_input = document.getElementById("search_bar_input")
const results_list_element = document.querySelector(".search__results_list")
const HOST = 'server.com/';




search_bar_input.addEventListener('input',(e)=>{
    api.get(HOST+"autocomplete",e.target.value,(input)=>{
        let resultList = ""
        for(const data of input){
            resultList += (data.suggestion + ' - ' + data.auxiliary + '<br>');
        }
        results_list_element.innerHTML = resultList
    })
    
})

