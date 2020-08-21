
$("#btn").click(()=>{
    let text = $("#inp").val()
    let char = text.split("")
    let arr = []

    char.forEach(element => {
        if(element==="." || element==="!" || element==="!" || element==="'"
       || element==='"' || element==="," || element==='$' || element==="%" || 
       element==='&' || element==="^" || element==='(' || element==="*" 
       || element===')' || element==="-" || element==='[' || element==="_" ||
       element===']' || element==="{" || element==='}' || element===";" ||
       element===':' || element==="@" || element==='<' || element===">" ||
       element==='?' || element==="/" ||  element==='`' || element==='¬' 
       || element==='“' || element==='”' || element==='’') return
       if(element==='\n') arr.push('') ; 
       if(element==='  ') arr.push(' ') ; 
       if(element==='   ') arr.push(' ') ; 
       
        
       arr.push(element.toLowerCase())
    });
    
    let newtext = arr.join("")
    let txt = newtext.split(' ')
   // console.log(txt)

   let wordcount = count(txt)
   
   let words = fun(wordcount)
console.log(words)



   table(words)
   chart( words)
//    table(words)

//    $("#table").empty()
   
})

function count(txt){

    let wordcount = {}

    txt.forEach(e => {
        if(wordcount[e]){
            wordcount[e]++
        }
        else{
            wordcount[e]=1 
        }
        
        
    });
    return wordcount 

}

function fun(wordcount){
    let a = []

    Object.keys(wordcount).forEach(element => {
        if(element==="") return
        else{
            a.push({
                word : element,
                c : wordcount[element]
            })
        }
    });
    return a.sort((a,b)=> b.c - a.c).slice(0,50) 

}

function table(words){
    
    let tbl = $("#table")

words.forEach((e)=>{

    tbl.append(
        $("<tr>").append(
           $("<td>").text(e.word)
        ).append(
            $("<td>").text(e.c)
        )
    )
})   
    
}


function chart ( data ) {



    let array = []

    data.forEach((e)=>{
        array.push(e.word)
    })

    var ctx = document.getElementById('myChart').getContext('2d');
   var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    
    data: {
        labels: array ,//data.map((e)=>e.word),
       datasets: 
       [{
           label: "word frequency" ,
           borderColor : "red" ,
           borderWidth :2 ,
          data :  data.map((e)=> e.c)
       }]
    },


});


  }