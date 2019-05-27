import React from 'react';
import Header from '../../components/Header'
export default class About extends React.Component {
    render() {
        return(
            <div>
                <Header about={true}/>
                <main role={"main"}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1>Our project</h1>
                                <p style={{'background-color': 'white', 'padding': '20px', 'border-radius': '10px', 'color': 'rgb(52,58,64)'}}>Mussum Ipsum, cacilds vidis litro abertis. Viva Forevis aptent taciti sociosqu ad litora torquent. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Quem manda na minha terra sou euzis! Sapien in monti palavris qui num significa nadis i pareci latim.

                                    Suco de cevadiss deixa as pessoas mais interessantis. Casamentiss faiz malandris se pirulitá. A ordem dos tratores não altera o pão duris. Manduma pindureta quium dia nois paga.

                                    Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Aenean aliquam molestie leo, vitae iaculis nisl. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Delegadis gente finis, bibendum egestas augue arcu ut est.</p>
                            </div>
                        </div>
                    </div>

                </main>
            </div>
        )
    }
}