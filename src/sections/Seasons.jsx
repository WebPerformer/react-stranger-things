import React from 'react'
import Logo from '../assets/img/Logo.png'
import { GoPrimitiveDot } from 'react-icons/go'
import Footer from '../components/Footer'

function Seasons() {
  return (
    <section className="seasons">
        <div className="content">
            <div className="season-container">
                <div className="poster">
                    <img src="https://blogdebrinquedo.com.br/wp-content/uploads/2021/03/20210323quebra-cabecas-stanger-things-posters-clementoni-03.jpg" alt="" />
                    <div className="logo">
                        <img src={Logo} alt="" />
                    </div>
                </div>
                <div className="season-info">
                    <div className="title">
                        <h1>STRANGER THINGS</h1><span>TP. 1</span>
                    </div>
                    <div className="release">
                        <div className="date">15 de junho de 2016</div>
                        <GoPrimitiveDot/>
                        <div className="ep">8 EP</div>
                    </div>
                    <div className="sinopse">
                        <p>Em 6 de Novembro, 1983 na pequena cidade de Hawkins, Indiana, o garoto de 12 anos, Will Byers desaparece misteriosamente. A mãe de Will, Joyce, torna-se frenética e tenta encontrar Will enquanto o chefe de polícia Jim Hopper começa a investigar, e assim fazem também os amigos de Will: Dustin, Mike e Lucas. No dia seguinte, uma menina psicocinética que sabe o paradeiro de Will é encontrada pelos meninos. À medida que eles descobrem a verdade, uma sinistra agência do governo tenta encobri-los, enquanto uma força mais insidiosa espreita logo abaixo da superfície.</p>
                    </div>
                    <button className="button">ASSISTIR AGORA</button>
                </div>
            </div>
            <div className="season-container">
                <div className="season-info">
                    <div className="title">
                        <h1>STRANGER THINGS</h1><span>TP. 2</span>
                    </div>
                    <div className="release">
                        <div className="date">27 de outubro de 2017</div>
                        <GoPrimitiveDot/>
                        <div className="ep">9 EP</div>
                    </div>
                    <div className="sinopse">
                        <p>Um ano se passou, mas os acontecimentos sobrenaturais envolvendo o Demogorgon e os segredos do laboratório de Hawkins ainda assombram a população local. E eles têm razão em sentir medo: uma poderosa entidade chega para ameaçar os sobreviventes.</p>
                    </div>
                    <button className="button">ASSISTIR AGORA</button>
                </div>
                <div className="poster">
                    <img src="https://i.pinimg.com/originals/71/07/92/710792bcee8c908045e48cf3b432a1b1.jpg" alt="" />
                    <div className="logo">
                        <img src={Logo} alt="" />
                    </div>
                </div>
            </div>
            <div className="season-container">
                <div className="poster">
                    <img src="https://i.pinimg.com/originals/e8/ef/16/e8ef166f37bb0944af8c11097435961d.jpg" alt="" />
                    <div className="logo">
                        <img src={Logo} alt="" />
                    </div>
                </div>
                <div className="season-info">
                    <div className="title">
                        <h1>STRANGER THINGS</h1><span>TP. 3</span>
                    </div>
                    <div className="release">
                        <div className="date">04 de julho de 2019</div>
                        <GoPrimitiveDot/>
                        <div className="ep">8 EP</div>
                    </div>
                    <div className="sinopse">
                        <p>É verão em Hawkins. De férias da escola, Eleven (Millie Bobby Brown), Mike (Finn Wolfhard), Dustin (Gaten Matarazzo), Lucas (Caleb McLaughlin), Will (Noah Schnapp) e Max (Sadie Sink) aproveitam as novidades do recém inaugurado shopping da cidade, enquanto experienciam situações típicas da adolescência que colocam a prova a amizade do grupo. Mas quando a cidade volta a ser ameaçada por inimigos novos e antigos, eles precisam lembrar que a união é mais forte que o medo.</p>
                    </div>
                    <button className="button">ASSISTIR AGORA</button>
                </div>
            </div>
            <div className="season-container">
                <div className="season-info">
                    <div className="title">
                        <h1>STRANGER THINGS</h1><span>TP. 4</span>
                    </div>
                    <div className="release">
                        <div className="date">27 de maio de 2022</div>
                        <GoPrimitiveDot/>
                        <div className="ep">9 EP</div>
                    </div>
                    <div className="sinopse">
                        <p>Depois de seis meses do conflito de Starcourt, a cidade foi tomada por um rastro de terror e destruição. Os efeitos da batalha são sentidos pelo grupo de amigos, que se separam pela primeira vez, enquanto passam por um período turbulento típico da adolescência na escola. Em um momento em que todos estão mais vulneráveis, uma nova ameaça sobrenatural surge. No entanto, o novo mistério pode conter a resposta para acabar com os terrores do Mundo Invertido.</p>
                    </div>
                    <button className="button">ASSISTIR AGORA</button>
                </div>
                <div className="poster">
                    <img src="https://conteudo.imguol.com.br/c/entretenimento/58/2022/05/12/novo-poster-da-quarta-temporada-de-stranger-things-1652368177430_v2_3x4.jpg" alt="" />
                    <div className="logo">
                        <img src={Logo} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </section>
  )
}

export default Seasons