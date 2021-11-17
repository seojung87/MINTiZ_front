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

//유저이름 발생기 
function generateUserName(){ 
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'; 
    var makeUsername = ''; 
    for(let i=0; i<4;i++){ 
        let index = Math.floor(Math.random(10) * alphabet.length); 
        makeUsername += alphabet[index]; 
    } 
    for(let j=0;j<4;j++){ 
        makeUsername += "*"; 
    } 
    return makeUsername; 
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

    const newId = idOrVoteCountList.length+1;

    // 스코프 밖으로 나가는 순간 하나지우면 다 지워지고 입력하면 리스트 다불러옴.
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
    //타임스템프찍기 
    showTime.innerHTML = generateTime(); 
    countSpan.innerHTML=0; 
    //투표창 만들기, css먼저 입혀야함. 
    voteUp.id = "voteUp"; 
    voteUp.innerHTML = '↑'; 
    voteDown.id = "voteDown"; 
    voteDown.innerHTML = '↓'; 
    voteDiv.appendChild(voteUp); 
    voteDiv.appendChild(voteDown); 
    //댓글뿌려주기 
    commentList.appendChild(userName); 
    commentList.appendChild(inputValue); 
    commentList.appendChild(showTime); 
    commentList.appendChild(voteDiv); 
    rootDiv.prepend(commentList); 
    voteUp.addEventListener("click",numberCount); 
    voteDown.addEventListener("click",numberCount); 
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



/*
function warnEmpty(){
    alert("댓글을 입력해주세요");
}

function dateToString(date){
    const dateString = date.toISOString();
    const dateToString = dateString.substring(11,19);
    return dateToString;
}

function submitComment(){
    const newcommentEL = document.getElementById("comment-input");
    const newcomment = newcommentEL.value.trim();

    if(newcomment){
        const dateEL = document.createElement('div');
        dateEL.classList.add("comment-date");
        const dateString = dateToString(new Date());
        dateEL.innerText = dateString;

        const contentEL = document.createElement('div');
        contentEL.classList.add("comment-content");
        contentEL.innerText = newcomment;

        const commentEL = document.createElement('div');
        commentEL.classList.add("comment-row");
        commentEL.appendChild(dateEl);
        commentEL.appendChild(contentEL);

        document.getElementById("comments").appendChild(commentEL);
        newcommentEL.value="";

        const countEL = document.getElementById("comments-count");
        const count = countEL.innerText;
        countEL.innerText = parseInt(count) + 1;
    }
    else warnEmpty();
}
*/