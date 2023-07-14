# Curso React: lidando com arquivos estáticos (Programa Desenvolve da Boticário e Alura)

> Status do projeto: concluído

Conteúdo do curso:

* **Criar projetos usando Create React App** <br> 

* **Vimos como podemos usar templates, como typescript para criar projetos com CRA e depois removemos o que não será utilizado neste projeto** <br>

* **Usar CSS Modules com TypeScript e Sass** <br>

* **Aplicamos estilos escritos em Sass via CSS Modules e adicionamos a capacidade do Visual Studio Code oferecer autocomplete dos módulos de estilos com typescript-plugin-css-modules** <br>

* **Importar um svg:** <br>
Vimos como o webpack entende aquela string que fornecemos ao src da tag img e porque não funciona, então, aprendemos como importar um svg da forma correta.

* **Utilizar um svg como componente:** <br>
Melhoramos a nossa logo alterando a tag img por um componente que se torna um svg no final.

* **Imports absolutos:** <br>
Aprendemos como configurar e utilizar os imports absolutos para evitar voltar muitas pastas ao importar um arquivo.

* **Utilizar a biblioteca reset css para resetar o css:** <br>
Resetamos os estilos da nossa página utilizando uma biblioteca chamada reset.css que nos ajuda a limpar os estilos padrões de cada elemento de acordo com cada navegador.

* **Importar fontes externas** <br>
Aprendemos como importar fontes externas no nosso projeto utilizando o google fonts.

* **Utilizar o normalize.css** <br>
Utilizamos o normalize.css para padronizar os estilos da página html em cada navegador.

* **Utilizar ícones** <br>
Aprendemos como é fácil utilizar ícones com a biblioteca react-icons.

* **Ignorar arquivos para build** <br>
Vimos como ignorar arquivos no momentos de build para que sejam utilizados apenas quando os chamar.

* **Criar variáveis css** <br>
Criamos variáveis css para nos auxiliar na padronização dos estilos da página, evitando repetição e facilitando na manutenção de código.

* **Inferir o tipo de um objeto:** <br>
O operador typeof nos permite inferir a tipagem de um objeto sem a necessidade de criar uma interface.

* **Manipulação de objetos:** <br>
Utilizamos [] em volta do nome da chave de um objeto quando o valor da chave é dinâmico.

* **Biblioteca classnames:** <br>
Essa biblioteca nos permite concatenar classes CSS utilizando sintaxe de objetos.

* **Renderizar uma lista de componentes:** <br>
Podemos utilizar o spread operator para não precisar passar as props manualmente quando temos total controle do componente.

* **Utilizar a pasta public:** <br>
Arquivos estáticos que devem ser referenciados dinamicamente precisam estar dentro dessa pasta.

* **Gerar os arquivos utilizados em produção:** <br>
Com o comando npm run build podemos verificar quais arquivos estarão presentes no ambiente de produção.

* **Buscar com expressão regular:** <br>
Utilizar expressões regulares em buscas de textos.

* **Manipular elementos de uma lista:** <br>
Alterar a quantidade ou ordenar os elementos de uma lista com métodos filter e sort.

* **Tipar o useState:** <br>
Escrever useState<Tipo> para tipar o state e o setState.

-----

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
