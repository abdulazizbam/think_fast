function fill_array(arr, arr_length){
    for(let i = 1; i <= arr_length; i++){
        arr[i-1] = i
    }
}


function chick_box(number){
    let boxes = document.querySelectorAll('.box')
    let present;

    boxes.forEach(box =>{
        if(present != true){
            if(parseInt(box.id) == parseInt(number)){
                present = true;
            } else {
                present = false;
            }
        }
    })

    return present;
}


function binary_search(arr, x) {
  
    let start=0, end=arr.length-1;
         
    // Iterate while start not meets end
    while (start<=end){

        // Find the mid index
        let mid=Math.floor((start + end)/2);
  
        // If element is present at mid, return True
        if (arr[mid]===x) return true;
 
        // Else look in left or right half accordingly
        else if (arr[mid] < x)
             start = mid + 1;
        else
             end = mid - 1;
    }
  
    return false;
}
  

function binary_search_return(arr, x) {
  
    let start=0, end=arr.length-1;
         
    // Iterate while start not meets end
    while (start<=end){

        // Find the mid index
        let mid=Math.floor((start + end)/2);
  
        // If element is present at mid, return True
        if (arr[mid]===x) return mid;
 
        // Else look in left or right half accordingly
        else if (arr[mid] < x)
             start = mid + 1;
        else
             end = mid - 1;
    }
  
    return false;
}

function remove_chiled(parent, index){
    if (parent.hasChildNodes()) {
        parent.removeChild(parent.children[index]);
    }
}



const box_con = document.querySelector('.box-con')
const screen = document.querySelector('.screen')
const win_screen = document.querySelector('.win-screen')
const game_time = document.querySelector('.time')

let start = false;
let arr = []
let last_num = 0

fill_array(arr, 50)


{
    let box = document.createElement('div')
    box.classList.add('box')
    box_num = 1
    box.id = box_num
    box.textContent = box_num

    box_con.appendChild(box)
}


for(let i = 1; i <= 15; i++){

    let box = document.createElement('div')
    box.classList.add('box')

    let box_num = Math.floor(Math.random() * 18) + 2

    while(chick_box(box_num)){
        box_num = Math.floor(Math.random() * 18) + 2;
    } 

    box.id = box_num
    box.textContent = box_num
    box_con.appendChild(box)

}


const boxes = document.querySelectorAll('.box')

boxes.forEach(box => {
    box.addEventListener('click', function(){

        if(box.id != last_num +1) {
            return;
        }

        if(start == false){
            start_time = new Date().getTime()
            start = true
        }

        removed_number = binary_search_return(arr, box.id)
        arr.splice(removed_number, 1)

        last_num = last_num + 1

        if(! chick_box(last_num + 1) && arr.length > 0){
            box.id = last_num + 1
            box.textContent = last_num + 1
            return;
        }


        if(arr.length > 16){

            let new_box = arr[Math.floor(Math.random() * arr.length)]
            while(chick_box(new_box)){

                new_box = arr[Math.floor(Math.random() * arr.length)]
            } 

            box.id = new_box
            box.textContent = new_box
            return;

        }
        
        box.classList.add('red')
        box.textContent = 'X'

        if(arr.length < 1 ){
            remove_chiled(screen, 1)

            win_screen.classList.remove('none')
            
            end_time = new Date().getTime();

            game_time.textContent = (end_time - start_time) / 1000

        }


    })
})








