function funcao() {
    const nameValue = document.getElementById("name").value;

    let doc = new jsPDF({
        orientation: "landscape"
    })
    
    doc.addImage(imgData, 'PNG', 0, 0, 296, 209)

    doc.setFont("times")
    doc.setFontType('italic')
    doc.setFontSize(48)

    doc.text(nameValue, 25, 93)
    doc.save("certificado.pdf")
}