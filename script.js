<!-- questão 1 -->

            let valorDaCompra = prompt("Quanto deseja abastecer");
	        let valorLitro = parseFloat("6,80") ; 
	
	
	        litros = (valorDaCompra / valorLitro);
	
	        alert(` O cliente abasteceu ${litros}L `)

        <!-- questão 2 --> 

            let celcius = prompt("Insira a temperatura em graus celcius");
            let f = (9 * celcius + 160) / 5;

            alert(` O valor ${celcius}c em Fahrenheit é ${f} `)

        <!-- questão 3 --> 

            let f = prompt("Insira a temperatura em fahrenheit");
            let c = ((f - 32) * 5) / 9;

            alert(` O valor ${f} em celcius é ${c}`)

        <!-- questão 4 --> 

            let altura = prompt("Digite a altura do retangulo");
            let largura = prompt("Digite a largura do retangulo");
            let comprimento = prompt("digite o comprimento do retangulo");

            let volume = parseInt(comprimento * largura * altura);

            alert(` O volume e de: ${volume} `) 

        <!-- questão 5 --> 

        let n1 = prompt("Digite um número");
        let math = Math.pow(n1, 2);
        alert(` o valor ${n1} ao quadrado é ${math}` )
        <!-- questão 6 --> 









        <!-- questão 7 --> 

            let n1 = prompt("digite um número inteiro");
	        let n2 = prompt("digite um segundo número inteiro");
	
	        divisao = (n1 / n2 );
	
	        alert(` O resta da divisão de ${n1} por ${n2} é: ${divisao}`)

        <!-- questão 8 --> 

            let text = prompt("digite uma frase");
            let length = text.length;

            alert(` Este texto tem ${length} caracteres `)      

        <!-- questão 9 --> 

            const publicacao = prompt("Escreva uma frase");
            let letraMaiscula = publicacao[0].toUpperCase();
            let letraMinuscula = publicacao.substr(-1);
	
            alert (` A primeira letra do texto é: ${letraMaiscula} e a ultima é o: ${letraMinuscula}`)  

        <!-- questão 10 --> 

            let nome = prompt("digite seu nome");
            let sobrenome = prompt("digite seu sobrenome");
            let idade = prompt("digite sua Idade");
            let setor = prompt("digite seu setor");
        
            let upper = nome.toUpperCase();  
            let sobre = sobrenome.toUpperCase();
        
            alert(`nome: ${upper} ${sobre} - idade: ${idade} - Setor: ${setor}`)

