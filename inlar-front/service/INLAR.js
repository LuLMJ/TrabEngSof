const headers = new Headers();
headers.append('Content-Type', 'application/json');
fetch("http://localhost:3000/donation",{method:"GET",headers}).then((response) => {
    console.log(response.data);
}).catch((err) => {console.log(err)})


  function verificarCampo(){
    var nome_doacao = document.getElementById("nome_doacao").value;
    var ativo = document.getElementById("ativo").value;
    var quantidade_valor_doacao = document.getElementById("quantidade_valor_doacao").value;

    if (nome_doacao === "") {
        document.getElementById("nome").focus();
        alert("O campo tipo de doação é obrigatório")
    } else
    if (ativo === "") {
        document.getElementById("ativo").focus();
        alert("O campo disponibilidade é obrigatório")
    }else
    if (quantidade_valor_doacao === "") {
        document.getElementById("quantidade_valor_doacao").focus();
        alert("O campo quantidade/valor unitário é obrigatório")
    }
}
function verificarCampo1(){
    var id_doacao = document.getElementById("id_doacao").value;

    if (id_doacao === "") {
        document.getElementById("id_doacao").focus();
        alert("O campo id é obrigatório")
    }
}
const btnPost = document.getElementById("btnPost");
btnPost.addEventListener("click",()=>{fetch("http://localhost:3000")})
btnPut.onclick = () => verificarCampo();
const btnPut = document.getElementById("btnPut");
btnPut.onclick = () => verificarCampo1();
const btnDelet = document.getElementById("btnDelet");
btnDelet.onclick = () => verificarCampo1();
const btnGet = document.getElementById("btnGet");
btnGet.onclick = () => verificarCampo1();
const btnGetAll = document.getElementById("btnGetAll");
btnGetAll.onclick = () => container2()