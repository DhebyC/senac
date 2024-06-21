let conceito = prompt("Informe o conceito: ").toUpperCase();
switch (conceito) {
    case "A": 
    alert("Aprovado");
    break;
    case "PA":
        alert("Recuperação");
        break;
    
    case "NA":
        alert("Reprovado");
        break;
    default:
        alert("Inválido");
        break;
}