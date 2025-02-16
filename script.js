document.addEventListener("DOMContentLoaded", () => {
    const vacinaForm = document.getElementById("vacina-form");
    const vacinaList = document.getElementById("vacina-list");
    const familyForm = document.getElementById("family-form");
    const familyListSection = document.getElementById("family-list");

    // Função para calcular a idade em meses com base na data de nascimento
    function idadeEmMeses(dataNascimento) {
        const nascimento = new Date(dataNascimento);
        const hoje = new Date();

        // Calculando a diferença entre as datas
        const anos = hoje.getFullYear() - nascimento.getFullYear();
        const meses = hoje.getMonth() - nascimento.getMonth();

        return anos * 12 + meses; // Convertendo para meses
    }

    // Função para adicionar uma vacina à lista
    vacinaForm.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const idadeMeses = document.getElementById("IdadeMeses").value;
        const tipoPessoa = document.getElementById("tipoPessoa").value;
        const vacina = document.getElementById("vacina").value;
        const dataAplicacao = document.getElementById("dataAplicacao").value;

        // Criação de uma nova linha na tabela
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${idadeMeses}</td>
            <td>${tipoPessoa}</td>
            <td>${vacina}</td>
            <td>${dataAplicacao}</td>
        `;
        vacinaList.appendChild(row);

        // Limpar os campos após o cadastro
        vacinaForm.reset();
    });

    // Função para adicionar um integrante à família
    familyForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const nomeIntegrante = document.getElementById("nomeIntegrante").value;
        const cpf = document.getElementById("cpf").value;
        const dataNascimentoIntegrante = document.getElementById("data_nascimento").value;
        const genero = document.querySelector('input[name="genero"]:checked').value;

        // Criação de um novo integrante
        const integrante = document.createElement("div");
        integrante.classList.add("family-member");
        integrante.innerHTML = `
            <p><strong>Nome:</strong> ${nomeIntegrante}</p>
            <p><strong>CPF:</strong> ${cpf}</p>
            <p><strong>Data de Nascimento:</strong> ${dataNascimentoIntegrante}</p>
            <p><strong>Gênero:</strong> ${genero === "M" ? "Masculino" : genero === "F" ? "Feminino" : "Outro"}</p>
        `;
        familyListSection.appendChild(integrante);

        // Limpar os campos após o cadastro
        familyForm.reset();
    });
});
