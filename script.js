
const botaoAbrir = document.querySelector('.sidebar-toggle')
const botaoFechar = document.querySelector('.close-btn')
const sidebar = document.querySelector('.sidebar')

//no botão de abrir iriei adicionar um toggle para que ele possar abrir
//e fechar também
botaoAbrir.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar')
})

//no botão fechar vou remover a classe show-sidebar da div de links
botaoFechar.addEventListener('click', () => {
    sidebar.classList.remove('show-sidebar')
})