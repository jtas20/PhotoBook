import "./home.css"
import Header from '../header/header';
import Footer from '../footer/footer';

function Home(){
    return(
        <div>
            <Header />
            <main role="main">
                <section class="jumbotron text-center">
                    <div class="container">
                        <h1 class="jumbotron-heading">Exemplo de álbum</h1>
                        <p class="lead text-muted">Algo curto e direto, sobre a coleção abaixo (conteúdo, criador e etc). Faça com que seja curto e legal, mas não tão curto ao ponto de as pessoas pularem ele.</p>
                        <p>
                        <a href="#" class="btn btn-primary my-2">Call-to-action principal</a>
                        <a href="#" class="btn btn-secondary my-2">Call-to-action secundário</a>
                        </p>
                    </div>
                </section>

                <div class="album py-5 bg-light">
                    <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                        <div class="card mb-4 shadow-sm">
                            <img class="card-img-top" src="https://images7.alphacoders.com/630/630555.jpg" alt="Card image cap"></img>
                            <div class="card-body">
                            <p class="card-text">Este é um card maior e que suporta texto abaixo, como uma introdução mais natural ao conteúdo adicional. No entanto, esse conteúdo é um pouco maior.</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">Ver</button>
                                <button type="button" class="btn btn-sm btn-outline-secondary">Editar</button>
                                </div>
                                <small class="text-muted">9 mins</small>
                            </div>
                            </div>
                        </div>
                        </div>

                        <div class="col-md-4">
                        <div class="card mb-4 shadow-sm">
                            <img class="card-img-top" src="https://images6.alphacoders.com/485/485738.jpg" alt="Card image cap"></img>
                            <div class="card-body">
                            <p class="card-text">Este é um card maior e que suporta texto abaixo, como uma introdução mais natural ao conteúdo adicional. No entanto, esse conteúdo é um pouco maior.</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">Ver</button>
                                <button type="button" class="btn btn-sm btn-outline-secondary">Editar</button>
                                </div>
                                <small class="text-muted">9 mins</small>
                            </div>
                            </div>
                        </div>
                        </div>

                        <div class="col-md-4">
                        <div class="card mb-4 shadow-sm">
                            <img class="card-img-top" src="https://p4.wallpaperbetter.com/wallpaper/64/155/676/retro-chevrolet-classic-1967-wallpaper-preview.jpg" alt="Card image cap"></img>
                            <div class="card-body">
                            <p class="card-text">Este é um card maior e que suporta texto abaixo, como uma introdução mais natural ao conteúdo adicional. No entanto, esse conteúdo é um pouco maior.</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">Ver</button>
                                <button type="button" class="btn btn-sm btn-outline-secondary">Editar</button>
                                </div>
                                <small class="text-muted">9 mins</small>
                            </div>
                            </div>
                        </div>
                        </div>

                        <div class="col-md-4">
                        <div class="card mb-4 shadow-sm">
                            <img class="card-img-top" src="https://p4.wallpaperbetter.com/wallpaper/585/781/185/chevrolet-the-series-car-actor-wallpaper-preview.jpg" alt="Card image cap"></img>
                            <div class="card-body">
                            <p class="card-text">Este é um card maior e que suporta texto abaixo, como uma introdução mais natural ao conteúdo adicional. No entanto, esse conteúdo é um pouco maior.</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">Ver</button>
                                <button type="button" class="btn btn-sm btn-outline-secondary">Editar</button>
                                </div>
                                <small class="text-muted">9 mins</small>
                            </div>
                            </div>
                        </div>
                        </div>

                        <div class="col-md-4">
                        <div class="card mb-4 shadow-sm">
                            <img class="card-img-top" src="https://p4.wallpaperbetter.com/wallpaper/643/151/805/1967-chevrolet-convertible-custom-wallpaper-preview.jpg" alt="Card image cap"></img>
                            <div class="card-body">
                            <p class="card-text">Este é um card maior e que suporta texto abaixo, como uma introdução mais natural ao conteúdo adicional. No entanto, esse conteúdo é um pouco maior.</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">Ver</button>
                                <button type="button" class="btn btn-sm btn-outline-secondary">Editar</button>
                                </div>
                                <small class="text-muted">9 mins</small>
                            </div>
                            </div>
                        </div>
                        </div>

                        <div class="col-md-4">
                        <div class="card mb-4 shadow-sm">
                            <img class="card-img-top" src="https://p4.wallpaperbetter.com/wallpaper/812/417/75/chevrolet-supernatural-supernatural-chevy-wallpaper-preview.jpg" alt="Card image cap"></img>
                            <div class="card-body">
                            <p class="card-text">Este é um card maior e que suporta texto abaixo, como uma introdução mais natural ao conteúdo adicional. No entanto, esse conteúdo é um pouco maior.</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">Ver</button>
                                <button type="button" class="btn btn-sm btn-outline-secondary">Editar</button>
                                </div>
                                <small class="text-muted">9 mins</small>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Home;