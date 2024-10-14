# My Journey - Landing Page

Esta é uma landing page desenvolvida por mim, como parte do meu aprendizado em desenvolvimento web. 

<a href="https://brunomoraesdigital.github.io/myjourney/" target="_blank" rel="noopener noreferrer">Ver Demonstração</a>

## Objetivo do Projeto

A landing page **My Journey** foi criada com o intuito de:
- Apresentar a trajetória e visão profissional.
- Compartilhar valores e missão como profissional digital.
- Conectar pessoas que compartilham interesses semelhantes.
- Facilitar o contato para futuras colaborações e projetos.

## Estrutura da Página

A My Journey - Landing Page é organizada em seções que abrangem diferentes aspectos da minha jornada:

- **Home:** Uma introdução ao meu caminho de aprendizado e crescimento.
- **Introdução:** Um breve relato sobre minha trajetória e evolução.
- **Missão:** Meus objetivos como profissional e como posso impactar positivamente a vida das pessoas.
- **Profissional:** Minhas competências, projetos anteriores e a abordagem multidisciplinar que utilizo em meu trabalho.
- **Sobre Mim:** Um espaço pessoal onde compartilho quem sou, minhas motivações e o que me impulsiona a seguir em frente.
- **Contato:** Um formulário para que você possa entrar em contato, tirar dúvidas ou apenas dizer olá.

## Navegação

A navegação na página é intuitiva e permite que você acesse rapidamente as seções de seu interesse. A barra de navegação inclui:
- Links diretos para cada seção da página.
- Opção de alternar entre inglês e português, facilitando a compreensão para um público mais amplo.

## Recursos

- **Navegação Dinâmica**: O menu de navegação é responsivo e permite que os usuários naveguem pelas seções da página. As seções "colam" na parte superior da janela ao serem roladas.
- **Mudança de Idioma**: O site suporta português e inglês, permitindo que os usuários alternem entre os idiomas clicando nas respectivas bandeiras.
- **Efeitos Visuais**: O fundo das seções muda com base na interação do usuário, e um vídeo em uma seção é reproduzido em uma velocidade reduzida.
- **Compatibilidade com Dispositivos Móveis**: A página é projetada para ser responsiva e funcionar bem em dispositivos móveis.

## Estrutura do Projeto

A estrutura do projeto é a seguinte:

meu-projeto/

│

├── index.html      # O arquivo HTML principal

├── styles.css      # Folha de estilo para a aparência da página

└── script.js       # Arquivo JavaScript para a interatividade




## Funcionalidades
- Manipulação de Entrada de Data:
  - Obtém uma data inserida pelo usuário, converte-a em um objeto e a processa.
- Modificação de Data:
  - Funções para incrementar e decrementar a data selecionada, com verificações lógicas para o fim/início de meses e anos.
- Cálculo de Ano Bissexto:
  - Função que determina se um ano é bissexto.
- Cálculo do Dia da Semana:
  - Calcula o dia da semana de qualquer data usando um algoritmo específico.
- Conversão de Nome do Mês:
  - Converte o número do mês para o seu nome correspondente (ex: 1 → Janeiro).
- Atualização do DOM:
  - Exibe dinamicamente informações como o dia da semana, a quantidade de dias no mês selecionado e se o ano é bissexto.
    
## Como Funciona
1. Seleção de Data:

O usuário seleciona uma data através de um campo de input.

2. Pressionar Carregar

As informações serão carregadas com base na data escolhida.

4. Incrementar/Decrementar Data:

Ao clicar nos botões, a data pode ser aumentada ou diminuída, ajustando automaticamente o mês e o ano quando necessário.

4. Exibir Resultados:

Informações como o dia da semana da data selecionada, a quantidade de dias no mês e se o ano é bissexto são mostradas na página.

## Funções

- recebeData(): Obtém e processa a data a partir do campo de input.
- diminuiData(): Diminui a data selecionada em um dia, ajustando automaticamente o mês e o ano.
- aumentaData(): Aumenta a data selecionada em um dia, também ajustando o mês e o ano conforme necessário.
- verificaSeAnoBissexto(ano): Verifica se o ano fornecido é bissexto.
- verificaQuantidadeDiasMes(mes, ano): Retorna a quantidade de dias no mês informado, considerando anos bissextos.
- verificaDiaSemanaQualquerData(dia, mes, ano): Calcula o dia da semana de uma data específica e retorna uma string indicando o dia.
- converteNomeMes(mes): Converte o número do mês para o seu nome correspondente.
- mostrarResultados(data): Atualiza o DOM com as informações da data processada.

## Problemas Observados a Serem Resolvidos

- [ ] Implementar atualização do DOM ao digitar ou selecionar uma nova data.
  
## Instalação
Clone o repositório e abra o arquivo HTML no seu navegador:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```
## Como Usar
1. Insira uma data no campo de input.
2. Pressione Carregar para mostrar as informações.
3. Use os botões para incrementar ou decrementar a data.
4. Veja os resultados diretamente na página.

## Licença

Este projeto está licenciado sob a Licença MIT.

