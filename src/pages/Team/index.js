import React from 'react';
import Header from '../../components/Header'
import CardMember from '../../components/CardMember/'

export default class Team extends React.Component {
    render() {
        return(
            <div>
                <Header team={true}/>
                <main role={"main"} style={{'margin-bottom': '20px'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1>Members</h1>
                                <div className="card-deck" style={{'margin-bottom': '30px'}}>
                                    <CardMember name={"Bruno Vitorino Cortez de Lira"}
                                                photo={"https://randomuser.me/api/portraits/men/25.jpg"}
                                                linkedin={"http://linkedin.com/in/"}
                                                github={"http://github.com/"}
                                                email={"bvcl@cin.ufpe.br"}/>
                                    <CardMember name={"Caio Rocha Pereira"}
                                                role={"Machine Learning"}
                                                photo={"https://randomuser.me/api/portraits/men/34.jpg"}
                                                linkedin={"http://linkedin.com/"}
                                                github={"http://github.com/"}
                                                email={"crp3@cin.ufpe.br"}/>
                                    <CardMember name={"Flaviano Dias Fontes"}
                                                role={"Front-End"}
                                                photo={"https://scontent.frec10-1.fna.fbcdn.net/v/t1.0-9/41866238_2109787902387146_5690365568759103488_n.jpg?_nc_cat=101&_nc_eui2=AeE4Vjg1ndRWumRY9SFDYEKQ3oOGNj8Vqkn2FAzp_9-G9F8-rAiNmZj_9mPlTlW38Aa7E1cH1f2uAFnZ07sMHeTgzTwsMLPBLa8BzXi-53RtpQ&_nc_ht=scontent.frec10-1.fna&oh=2b371daad3041022513024ed8f1da862&oe=5D63B4F4"}
                                                linkedin={"http://linkedin.com/in/flavindias"}
                                                github={"http://github.com/flavindias"}
                                                email={"fdf2@cin.ufpe.br"}/>
                                    <CardMember name={"Homero Barros da Costa Junior"}
                                                photo={"https://randomuser.me/api/portraits/men/82.jpg"}
                                                linkedin={"http://linkedin.com/"}
                                                github={"http://github.com/"}
                                                email={"hbcj@cin.ufpe.br"}/>
                                    <CardMember name={"Igor Dias da Silva"}
                                                role={"Machine Learning"}
                                                photo={"https://randomuser.me/api/portraits/men/21.jpg"}
                                                linkedin={"http://linkedin.com/"}
                                                github={"http://github.com/"}
                                                email={"ids3@cin.ufpe.br"}/>
                                    <CardMember name={"Jardel Nascimento"}
                                                photo={"https://randomuser.me/api/portraits/men/1.jpg"}
                                                linkedin={"http://linkedin.com/"}
                                                github={"http://github.com/"}
                                                email={"jhn@cin.ufpe.br"}/>
                                </div>
                                <div className="card-deck">
                                    <CardMember name={"João Vasconcelos"}
                                                role={"Back-End"}
                                                photo={"https://randomuser.me/api/portraits/men/4.jpg"}
                                                linkedin={"http://linkedin.com/"}
                                                github={"http://github.com/"}
                                                email={"jvsn@cin.ufpe.br"}/>
                                    <CardMember name={"Lucas Cabral"}
                                                role={"Machine Learning"}
                                                photo={"https://randomuser.me/api/portraits/men/24.jpg"}
                                                linkedin={"http://linkedin.com/"}
                                                github={"http://github.com/"}
                                                email={"lcc4@cin.ufpe.br"}/>
                                    <CardMember name={"Pedro Lins de Araujo Lima"}
                                                role={"Machine Learning"}
                                                photo={"https://randomuser.me/api/portraits/men/19.jpg"}
                                                linkedin={"http://linkedin.com/"}
                                                github={"http://github.com/"}
                                                email={"plal@cin.ufpe.br"}/>
                                    <CardMember name={"Pedro Carmo"}
                                                photo={"https://randomuser.me/api/portraits/men/72.jpg"}
                                                linkedin={"http://linkedin.com/"}
                                                github={"http://github.com/"}
                                                email={"prxc@cin.ufpe.br"}/>
                                    <CardMember name={"Valter Jorge da Silva"}
                                                role={"Machine Learning"}
                                                photo={"https://randomuser.me/api/portraits/men/34.jpg"}
                                                linkedin={"http://linkedin.com/"}
                                                github={"http://github.com/"}
                                                email={"vjs3@cin.ufpe.br"}/>
                                    <CardMember name={"Victor Di Cavalcanti Niceas"}
                                                role={"Back-End"}
                                                photo={"https://avatars1.githubusercontent.com/u/26773147?s=460&v=4"}
                                                linkedin={"http://linkedin.com/"}
                                                github={"https://github.com/vdcn1"}
                                                email={"vdcn@cin.ufpe.br"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}