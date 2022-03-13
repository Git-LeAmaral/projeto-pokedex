/*
quando clicar no pokémon a listagem do pokémon aberto e mostrar o cartão selecionado na listagem

para isso vamos precisar trabalhar com

1- listagem
2- cartão do pokémon

precisamos criar duas variaveis no js pra trabalhar com os elementos da tela

- ao clicar em um pokémon da listagem pegamos o id desse pokémos para saber qual pokémon mostrar

- remover a classe ativa que marca o pokémon selecionado

- adicionar a classe ativo no item da lista selecionado

*/

//precisamos criar duas variaveis no js para trabalhar com elementos na tela
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon =>{
    // vamos precisar trabalhar com um evento de clique feito pelo usuario na listagem de pokémons
    pokemon.addEventListener('click', () => {
        console.log(pokemon)

        // - remover a classe aberto só do cartão que está aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        // - ao clicar em um pokémon da listagem pegamos o id desse pokémos para saber qual pokémon mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        // - remover a classe ativa que marca o pokémon selecionado
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        // - adicionar a classe ativo no item da lista selecionado
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')

    })
})


