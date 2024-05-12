const campoEmail = document.querySelector('#email');
const botaoEmitir = document.querySelector('#emitir');

function funcao() {
    const emailValue = document.getElementById("email").value;
    
    readTextFile("data/data.json", function(text){
        let dados = JSON.parse(text);
        let match = false;
        
        for (i of dados) {
            if (i.email == emailValue) {
                gerarPDF(i.nome);
                match = true;
                break;
            }
        };

        if (!match) {
            alert('Desculpe, endereço de e-mail não localizado no banco de dados do curso.');
        };

        campoEmail.value = '';
        campoEmail.focus();
    })
}

function gerarPDF(nome) {
    let doc = new jsPDF({
        orientation: "landscape"
    });
    
    doc.addImage(imgData, 'PNG', 0, 0, 296, 209);

    doc.setFont("times");
    doc.setFontType('italic');
    doc.setFontSize(24);

    doc.text(nome, 89, 86);
    doc.text("12/05/2024", 130, 160)
    doc.save("certificado-cse.pdf");
}