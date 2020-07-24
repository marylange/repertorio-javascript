/*
    O react router permite navegar entre páginas, com ele podemos:

    Utilizar o componente BrowserRouter;
    Criar links de navegação na aplicação com o componente Link;
    Criar rotas, mapeando o caminho da URL com o componente correspondente, via Route;
    Estruturar e organizar as rotas da sua aplicação com o componente Switch;
    Usar o componente Redirect pra alternar entre rotas.

    Para usar o react router, é necessário instalar na aplicação o pacote react-router-dom:
        npm install react-router-dom

*/

/*
                         componentes BrowserRouter e Route

    Para utilizar o BrowserRouter, precisamos fazer a instalação da sua
    biblioteca para a pasta do projeto. No arquivo index.js, importamos o componente BrowserRouter para o arquivo.

    Ex:

        import { BrowserRouter } from 'react-router-dom';


    No render, devemos envolver o componente que será utilizado para o projeto com
    o componente BrowserRouter:


    Ex:

        import React from 'react';
        import ReactDom from 'react-dom';
        import { BrowserRouter } from 'react-router-dom';
        import AppApplication from './AppApplication';

        React.render(
            <BrowserRouter>
                <AppApplication />
            </BrowserRouter>
            , document.getElementById('root')
        );


    Desta forma, nós habilitamos o poder de criar rotas dentro da página em React.

    No arquivo da aplicação (AppApplication), vamos importar os outros
    componentes que chamaremos de view1, view2.

    Os componente view's serão renderizadas na parte de conteúdo do
    AppApplication, para isso,  precisamos importar alguns
    componentes do React router dom no arquivo AppApplication:

      import { Switch, Router } from 'react-router-dom';

    # O Switch controla a troca de rotas;
    # O Router(rota) especifica que componente vai ser usado em cada rota.


    Ex:


        import React from 'react';
        import { Switch, Router } from 'react-router-dom';
        import View1 from './view1';
        import View2 from './view2';

        class AppApplication extends React.Component {
          render() {
            return (
              <div>
                <header>
                  <a href="#">Page 1</a>
                  <a href="#">Page 2</a>
                </header>
                <main>
                  conteúdo
                </main>
              </div>
            );
          }
        }

        Dentro da tag <main>, podemos aplicar o componente <Switch> e <Route>
        O componente <Route> recebe path, que representa a rota que indicará a ordem de acesso
        para cada uma, e o component que recebe o componente que fará parte desta page.

        Ex:
            <main>
                <Switch>
                    <Route path="/page1" component={View1} />
                    <Route path="/page2" component={View2} />
                </Switch>
            </main>


        Além do exemplo mostrado acima, podemos ter este tipo de <Route />:

        Ex:
            <Route exact path="/about" component={About} />

            O exact(exata), vai procura uma correspondência exata entre a prop path e a prop component.
            Se a prop path é path="/about", a prop component também deve ser about.
            OBS: Caso não tenha correspondência, a página não é renderizada e o código retorna null.


        * Se o caminho atual da *URL* da aplicação for `/`, **todos** esses componentes
        serão renderizados, haja vista que todas as rotas **não** fazem
        correspondência exata entre o caminho da *URL* atual e o definido
        via prop `path`, e fazer `path="/"` faz correspondência com qualquer caminho de *URL*;

        * Agora, se o caminho atual da *URL* da aplicação
        for `/contact`, os componentes `Contact` e `Home` serão renderizados.
        Isso pode ser um problema, e uma forma de atacá-lo é organizar essas
        rotas via componente `Switch`, que você verá com mais detalhes em instantes.
*/

/*
                                Componente Link
        Com o component Link, conseguimos navegar entre os links e mudar de página.

        Ex:

            import React from 'react';
            import { Switch, Router, Link } from 'react-router-dom';
            import View1 from './view1';
            import View2 from './view2';

          class AppApplication extends React.Component {
            render() {
              return (
                <div>
                  <header>
                    <a href="#">Page 1</a>
                    <a href="#">Page 2</a>
                  </header>
                  <main>
                    conteúdo
                  </main>
                </div>
              );
            }
          }

          Quando usamos o import Link, substituimos a tag <a> pelo
          component <Link></Link>, e a propriedade (href) é substituida por (to) ficando assim:

          import { Switch, Router, Link } from 'react-router-dom';

          <header>
            <Link to="/page1">Page 1</a>
            <a href="/page2">Page 2</a>
          </header>



          Rota defaut

          Para criar uma rota padrão, podemos passar somente
          barra ao invés do caminho inteiro do arquivo.

        Ex:
          <header>
            <Link to="/">Page 1</a>
            <a href="/page2">Page 2</a>
          </header>
          <main>
            <Switch>
              <Route exatc path="/" component={View1} />
              <Route path="/page2" component={View2} />
            </Switch>
          </main>

          Nesse caso, se não for passada rota na URL, a View1 será a rota padrão.
*/

/*
                      Como injetar propriedade em uma rota

        import React from 'react';
        import { BrowserRouter, Switch, Router, Link } from 'react-router-dom';
        import Home from './view1';
        import View2 from './view2';

        class AppApplication extends React.Component {
          render() {
            return (
              <BrowserRouter>
                <div>
                  <header>
                    <Link to="/">Home</Link>
                    <Link to="/View2">Page 2</Link>
                  </header>
                  <main>
                    <Route exact path="/" render={(props) => <Home {...props} name="Mary />} />
                    <Route path="/view2" component={View2} />
                  </main> 
                </div>
              </BrowserRouter>
            );
          }
        }


                            O que está acontecendo no código?

        <Route exact path="/" render={(props) => <Home {...props} name="Mary />} />

        Trocamos a prop component por render que recebe um arrow function com props como parâmetro.
        O resultado será renderizado no componente <Home /> com um spread de props e o valor 
        que queremso passar é colocado em name.

        O render de Route é usado quando é necessário passar informações adicionais via props
        para o componente a ser mapeado. 

        Ou seja, se você tem um componente Movies que precisa receber uma lista de 
        filmes via props movies, e você precisa mapeá-lo para o 
        caminho de URL /movies, você poderia criar uma rota da seguinte forma: 
        
        <Route path="/movies" render={(props) => <Movies {...props} movies={['Cars', 'Toy Story', 'The Hobbit']} />} />;
        
*/

/*
                                  Recapitulando:

        No que diz respeito ao componente Route, você pode associar um 
        componente com o caminho da URL via children, component ou render;

        Faz-se uso da prop component de Route quando não é necessário 
        passar informações adicionais via props para o componente a 
        ser mapeado. Ou seja, se você tem um componente About que 
        não precisa de props setadas para ser chamado, e você precisa 
        mapeá-lo para o caminho de URL /about, você poderia criar uma rota da 
        seguinte forma: <Route path="/about" component={About} />;

        Já a prop render de Route é usada quando é necessário passar 
        informações adicionais via props para o componente a ser mapeado. 
        Ou seja, se você tem um componente Movies que precisa receber uma lista de filmes
        via props movies, e você precisa mapeá-lo para o caminho de URL /movies, você poderia 
        criar uma rota da seguinte forma: 
        
        <Route path="/movies" render={(props) => <Movies {...props} movies={['Cars', 'Toy Story', 'The Hobbit']} />} />;

        Tanto component quanto render permitem que você tenha acesso 
        a informações de rota (match, location e history) via props do 
        componente que você está mapeando. Ou seja, se você tem a rota 
        
        <Route path="/about" component={About} />, About terá match, location e history 
        setadas via props.

*/

/*
                                Rotas dinâmicas

        Definir URLs que posuem componentes dinamicos, ex Twitter.

        <Route path='/:handle' component={Profile} />

        No path podemos observar que na frente tem (:), isso torna um link dinâmico 
        em vez de corresponder literalmente a um padrão específico.


        O interessante em rotas dinâmicas é que podemos utilizar o mesmo 
        componente para renderizar vários caminhos diferentes. Para fazer uso de 
        parâmetro de URL em Route, é preciso fazer uso da sintaxe :nome_do_parametro 
        dentro da propriedade path. Ou seja, 
        <Route path="/movies/:movieId" component={Movie} /> 
        
        vai definir um parâmetro chamado movieID, e o componente Movie é mapeado a 
        qualquer um dos seguintes caminhos de URL:

        /movies/1;

        /movies/2;

        /movies/thor.
*/

/*
                                Componente Switch

        O componente Switch é usado para encapsular um conjunto 
        de rotas que foi definido com Route.

        Ex:

          <Switch>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/movies" component={Movies} />
            <Route path="/" component={Home} />
          </Switch>

      
*/