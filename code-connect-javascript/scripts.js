const uploadBtn = document.getElementById("upload-btn");
const inputUpload = document.getElementById("image-upload");

uploadBtn.addEventListener("click", () => {
    inputUpload.click();
})

function lerConteudoDoArquivo(arquivo) {
    return new Promise((resolve, reject) => {
        const leitor = new FileReader();
        leitor.onload = () => {
            resolve({url: leitor.result, nome: arquivo.name})
        }
        
        leitor.onerror = () => {
            reject(`Erro na leitura do arquivo ${arquivo.name}`)
        }

        leitor.readAsDataURL(arquivo)
    })
}

const imagemPrincipal = document.querySelector(".main-imagem");
const nomeDaImagem = document.querySelector(".container-imagem-nome p");

inputUpload.addEventListener("change", async (evento) => {
    const arquivo = evento.target.files[0];

    if (arquivo) {
        try {
            const conteudoDoArquivo = await lerConteudoDoArquivo(arquivo);
            imagemPrincipal.src = conteudoDoArquivo.url;
            nomeDaImagem.textContent = conteudoDoArquivo.nome
        } catch (erro) {
            console.error("Erro na leitura do arquivo");
        }
    }
})

const inputTagas = document.getElementById("input-tags");
const listaTag = document.getElementById("lista-tags");


listaTag.addEventListener("click", (evento)  => {
    if (evento.target.classList.contains("remove-tag")) {
        const tagParaRemover = evento.target.parentElement;
        listaTag.removeChild(tagParaRemover);
    }
})

const tagsPossiveis = ["Front-end", "Programação", "Data Science", "Full-stack", "HTML", "CSS", "JavaScript"];

async function verificaTags (tagTexto) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(tagsPossiveis.includes(tagTexto));
        }, 2000)
    })
}

inputTagas.addEventListener("keypress", async (evento) => {
    if (evento.key ==="Enter") {
        evento.preventDefault();
        const tagTexto = inputTagas.value.trim();
        if (tagTexto !== "") {
            try {
                const tagExiste = await verificaTags(tagTexto);
                if (tagExiste) {
                    const tagNova = document.createElement("li");
                    tagNova.innerHTML = `<p>${tagTexto}</p> <img src="./img/close-black.svg" class="remove-tag">`
                    listaTag.appendChild(tagNova);
                    inputTagas.value="";
                } else {
                    alert("Tag não foi encontrada.");
                }
            } catch (error) {
                console.error("Erro ao verificar a existência da tag");
                alert("Erro ao verificar a existencia da tag. Verifique o console");
            }
        }
    }
} )

const botaoPublicar = document.querySelector(".botao-publicar");

async function publicarProjeto (nome, descricao, tags) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const deuCerto = Math.random() > 0.5;
            if (deuCerto) {
                resolve("Projeto publicado com sucesso.");
            } else {
                reject("Erro ao publicar o projeto.");
            }
        }, 2000)
    })
}

function limparFormulario () {
    const formulario = document.querySelector("form");
    formulario.reset();
    imagemPrincipal.src = "./img/imagem1.png";
    nomeDaImagem.textContent = "imagem_projeto.png";
    listaTag.innerHTML = "";
}

botaoPublicar.addEventListener("click", async (evento) => {
    evento.preventDefault();

    const nomeDoProjeto = document.getElementById("nome").value;
    const descricaoDoProjeto = document.getElementById("descricao").value;
    const tagsDoProjeto = Array.from(listaTag.querySelectorAll("p")).map((tag) => tag.textContent);

    try {
        const resultado = await publicarProjeto(nomeDoProjeto, descricaoDoProjeto, tagsDoProjeto);
        console.log(resultado);
        alert("Deu tudo certo!");
        limparFormulario();
    } catch (error) {
        console.log("Deu errado> ", error)
        alert("Deu tudo errado!");
    }
})

const botaoDescartar = document.querySelector(".botao-descartar");

botaoDescartar.addEventListener("click", (evento) => {
    evento.preventDefault();
    limparFormulario();
})