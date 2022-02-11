function getCompliment () {
    axios.get("http://localhost:4000/api/compliment/")
    .then(function (response) {
        const data = response.data;
        alert(data);
    });
};
function getFortune(){
    axios.get('http://localhost:4000/api/fortune').then(
        (res) => {
            const fortune = res.data
            alert(fortune)
        }
    )
}
//=============================================================================//
function sendMsg(e){
    e.preventDefault()
    let inp = document.querySelector('#txtIn')
    let txt = {message: inp.value}
    axios.post('http://localhost:4000/api/message', txt).then(
        (res) => {
            console.log(`${res.data}`)
        }
    )
    e.target.reset()
}
//================================================================================//
function updateMsg(e){
    e.preventDefault()
    let inp = document.querySelector('#txtUpd')
    let msg = {message: inp.value}
    axios.put('http://localhost:4000/api/message/update', msg).then(
        (res) => {
            console.log(`${res.data}`)
        }
    )
    e.target.reset()
}

function delMsg(){
    axios.delete('http://localhost:4000/api/message/delete', {data:{message: ''}}).then(
        (res) => {
            console.log(`${res.data}`)
        }
    )
}
function getMsgVal(){
    axios.get(`http://localhost:4000/api/message/value`).then(
        (res) => {
            let updTxt = document.createElement('h1')
            updTxt.innerText = res.data
            document.body.appendChild(updTxt)
        }
    )
}

document.getElementById("complimentButton").addEventListener('click', getCompliment)
document.getElementById("fortuneButton").addEventListener('click', getFortune)
document.getElementById('txtFt').addEventListener('submit', sendMsg)
document.getElementById('txtUpdateForm').addEventListener('submit', updateMsg)
document.getElementById('delBtn').addEventListener('click', delMsg)
document.getElementById('msgValBtn').addEventListener('click', getMsgVal)