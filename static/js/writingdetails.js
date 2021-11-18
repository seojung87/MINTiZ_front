function bookmark(){
    document.getElementById("bookmark").src = "../image/clicked_star.png";
}


/*
// 댓글 기능
const inputBar = document.querySelector("#comment-input"); 
const rootDiv = document.querySelector("#comments"); 
const btn = document.querySelector("#submit"); 
const mainCommentCount = document.querySelector('#count');  // 댓글 숫자 세는 부분

//타임스템프 생성
function generateTime(){ 
    const date = new Date(); 
    const year = date.getFullYear(); 
    const month = date.getMonth(); 
    const wDate = date.getDate(); 
    const hour = date.getHours(); 
    const min = date.getMinutes(); 
    const sec = date.getSeconds(); 
    const time = year+'-'+month+'-'+wDate+' '+hour+':'+min+':'+sec; return time; 
} 


// 댓글 삭제 기능
function deleteComments(event){ 
    const btn = event.target; 
    const list = btn.parentNode.parentNode; //commentList 
    rootDiv.removeChild(list); 
    //메인댓글 카운트 줄이기. 
    if(mainCommentCount.innerHTML <='0'){ 
        mainCommentCount.innerHTML = 0; 
    }
    else{ 
        mainCommentCount.innerHTML--; 
    } 
} 

// 댓글 보여주는 기능
function showComment(comment){ 
    const userName = document.createElement('div'); 
    const inputValue = document.createElement('span');
    const showTime = document.createElement('div'); 
    const countSpan = document.createElement('span') 
    const commentList = document.createElement('div'); 
    const modifyBtn = document.createElement('button'); 
    const spacer = document.createElement('div');


    // 삭제버튼 만들기 
    const delBtn = document.createElement('button'); 
    delBtn.className ="deleteComment"; 
    delBtn.innerHTML="삭제"; 
    commentList.className = "eachComment"; 
    userName.className="name"; 
    inputValue.className="inputValue"; 
    showTime.className="time"; 
    voteDiv.className="voteDiv"; 
    //유저네임가져오기 
    userName.innerHTML = generateUserName(); 
    userName.appendChild(delBtn); 
    //입력값 넘기기 
    inputValue.innerText = comment; 
    //타임스템프
    showTime.innerHTML = generateTime(); 
    countSpan.innerHTML=0; 

    //댓글 
    commentList.appendChild(userName); 
    commentList.appendChild(inputValue); 
    commentList.appendChild(showTime); 
    rootDiv.prepend(commentList); 
    delBtn.addEventListener("click",deleteComments); 
    console.dir(rootDiv); 
} 

// 버튼만들기 + 입력값 전달 
function pressBtn(){ 
    const currentVal = inputBar.value; 
    if(!currentVal.length){ 
        alert("댓글을 입력해주세요."); 
    }
    else{ showComment(currentVal); 
        mainCommentCount.innerHTML++; 
        inputBar.value =''; 
    } 
} 

btn.onclick = pressBtn;
*/


