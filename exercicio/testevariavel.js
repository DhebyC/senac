/*let name = "Dhébora Christine"; //string
let idade = 23; //number
let linda =true; //boolean
let salario = 123.456; //number
document.write - pra aparecer na tela, o usuário ve
alert - alerta, o usuário vê 
console.log - o usuário não vê 
prompt - caixa de entrada, pergunta e armazena as informações do usuário
parseFloat - converte a string em number, recebe numero inteiro e decimal
parseInt - numero inteiro
.toFixed - arredonda o número -ponto no começo sempre - colocar o numero entre () para determinar as casas decimais
"\n" - quebra linha
console.log(typeof(name));
*/

let name = prompt ("Informe o nome: "); 
let idade = prompt ("Informe a idade: "); 
let linda =true; 
let salario = prompt ("Informe o salário: "); 
let nota1 = parseFloat (prompt(" Informe a nota1: "));
let nota2 = parseFloat (prompt(" Informe a nota2: "));

alert("O nome é: " + name);
alert(" A idade é: " + idade);
alert(" O salário é: " + salario);
alert(" É linda? " + linda);
alert(" A soma é: " + (nota1+nota2));
