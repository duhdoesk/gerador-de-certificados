const campoCPF = document.querySelector('#cpf');
const botaoEmitir = document.querySelector('#emitir');

function funcao() {
    const cpfValue = document.getElementById("cpf").value;
    
    readTextFile("data/data.json", function(text){
        let dados = JSON.parse(text);
        let match = false;
        
        for (i of dados) {
            if (i.cpf == cpfValue) {
                gerarPDF(i.nome);
                match = true;
                break;
            }
        };

        if (!match) {
            alert('Desculpe, CPF não localizado no banco de dados do curso.');
        };

        campoCPF.value = '';
        campoCPF.focus();
    })
}

function gerarPDF(nome) {
    let doc = new jsPDF({
        orientation: "landscape"
    });
    
    doc.addImage(imgData, 'PNG', 0, 0, 296, 209);

    doc.setFont("times");
    doc.setFontType('italic');
    doc.setFontSize(48);

    doc.text(nome, 25, 93);
    doc.save("certificado.pdf");
}