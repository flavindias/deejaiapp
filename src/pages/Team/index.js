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
                                                role={"Back-End"}
                                                photo={"https://avatars0.githubusercontent.com/u/19893382?s=400&v=4"}
                                                linkedin={"http://linkedin.com/in/"}
                                                github={"http://github.com/"}
                                                email={"bvcl@cin.ufpe.br"}/>
                                    <CardMember name={"Caio Rocha Pereira"}
                                                role={"Machine Learning"}
                                                photo={"https://avatars2.githubusercontent.com/u/13001828?s=400&v=4"}
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
                                                role={"Back-End"}
                                                photo={"https://i.imgur.com/Lfa8R3h.jpg"}
                                                linkedin={"http://linkedin.com/"}
                                                github={"http://github.com/"}
                                                email={"hbcj@cin.ufpe.br"}/>
                                    <CardMember name={"Igor Dias da Silva"}
                                                role={"Machine Learning"}
                                                photo={"https://i.imgur.com/M3pK95b.jpg"}
                                                linkedin={"http://linkedin.com/"}
                                                github={"http://github.com/"}
                                                email={"ids3@cin.ufpe.br"}/>
                                    <CardMember name={"Jardel Nascimento"}
                                                role={"Machine Learning"}
                                                photo={"https://scontent.frec10-1.fna.fbcdn.net/v/t1.0-1/36836993_1724075827670880_6600776224648200192_n.jpg?_nc_cat=105&_nc_oc=AQkRxDPBOV0J37--l9BM3j48X9wLf2jmHv4bUXdv0UZ7TqHXd0OCuFHz2k2KE0pe8Qc&_nc_pt=1&_nc_ht=scontent.frec10-1.fna&oh=a921efccad5069eba20c938595ffe8fc&oe=5D8881A3"}
                                                linkedin={"http://linkedin.com/"}
                                                github={"http://github.com/"}
                                                email={"jhn@cin.ufpe.br"}/>
                                </div>
                                <div className="card-deck">
                                    <CardMember name={"João Vasconcelos"}
                                                role={"Back-End"}
                                                photo={"https://i.imgur.com/LAjijYB.jpg"}
                                                linkedin={"http://linkedin.com/"}
                                                github={"http://github.com/"}
                                                email={"jvsn@cin.ufpe.br"}/>
                                    <CardMember name={"Lucas Cabral"}
                                                role={"Machine Learning"}
                                                photo={"https://scontent.frec10-1.fna.fbcdn.net/v/t1.0-9/12729054_947011658720938_3209700124367878744_n.jpg?_nc_cat=107&_nc_oc=AQmH34Xdjod71eAYlLBW_4CXamEwCcxlVubBuYndsC64n-sgIBdfU624z6vzdAeRvQY&_nc_ht=scontent.frec10-1.fna&oh=edb6844fee04f20970ce732d85b9fbea&oe=5D870728"}
                                                linkedin={"http://linkedin.com/"}
                                                github={"http://github.com/"}
                                                email={"lcc4@cin.ufpe.br"}/>
                                    <CardMember name={"Pedro Lins de Araujo Lima"}
                                                role={"Machine Learning"}
                                                photo={"https://avatars0.githubusercontent.com/u/6364432?s=460&v=4"}
                                                linkedin={"http://linkedin.com/"}
                                                github={"http://github.com/"}
                                                email={"plal@cin.ufpe.br"}/>
                                    <CardMember name={"Pedro Carmo"}
                                                role={"Machine Learning"}
                                                photo={"https://i.imgur.com/SgN2OJ7.jpg"}
                                                linkedin={"http://linkedin.com/"}
                                                github={"http://github.com/"}
                                                email={"prxc@cin.ufpe.br"}/>
                                    <CardMember name={"Valter Jorge da Silva"}
                                                role={"Machine Learning"}
                                                photo={"https://media.licdn.com/dms/image/C4E03AQH51LQBMDTbBQ/profile-displayphoto-shrink_800_800/0?e=1565827200&v=beta&t=xDuDcBPr4sXnkERBDKZnwLZPRHBszKDiUpStSxz-Ggw"}
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