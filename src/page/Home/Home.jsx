import './Home.css'
import ImageHome from "/src/assets/homepage.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '/src/components/Header/Header.jsx';



function Home({ loggedInUser }) {
    
    return (
        <div>
          <Header loggedInUser={loggedInUser} />
    
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-7 mt-5 pt-4 mb-5">
                <img className='img-fluid rounded' id='imagehome' src={ImageHome} alt="" />
                <div className='row mt-3'>
                  <h1 className='col-md-4 pt-2 mt-5 title-home'>HealthSync</h1>
                  <p className='col-md-8'>Inovação na gestão de estoque de medicamentos, priorização eficiente de atendimentos médicos e sincronia perfeita entre profissionais e pacientes, garantindo cuidados ágeis e personalizados.</p>
                </div>
                <div className='col-12 d-flex justify-content-end'>
                    <a className='text-decoration-none' href="https://github.com/dejesuscaua/Gs-Front-Web">
                    <p className='border text-black p-2'>Mais Informações</p>
                    </a>  
                </div>

              </div>
    
              <div className="col-md-5 mt-5">
                <div className="mb-4">
                  <div className='border-bottom border-dark p-3'>
                    <h2 className='fs-4'>O que é a solução</h2>
                    <p className=''>Automatizar tarefas hospitalares, agiliza processos, economiza tempo e amplia a capacidade de atendimento. Essa abordagem eficiente melhora a gestão de recursos, permitindo que a equipe médica se concentre nos cuidados essenciais, resultando em atendimento mais rápido e de alta qualidade aos pacientes.</p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className='border-bottom border-dark p-3'>
                    <h2 className='fs-4'>O que ela fará</h2>
                    <p className=''>Temos dois dispositivos para o projeto. O primeiro é um totem de atendimento, onde os pacientes realizam um pré-exame, fornecendo dados cadastrais e informações vitais, como pressão e temperatura. O segundo é um sistema online de gestão de estoque para farmácias, colaborando com clínicas ou hospitais para verificar a disponibilidade dos medicamentos necessários.</p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className='p-3'>
                    <h2 className='fs-4'>Como funcionará</h2>
                    <p className=''>No totem, implementaremos sensores de proximidade e outros para coletas de informações vitais, como temperatura e batimentos cardíacos. Para o estoque, desenvolveremos um programa automatizado integrado ao Excel, que criará e manterá uma planilha atualizada com os medicamentos disponíveis em determinadas farmácias.</p>
                  </div>
                </div>
              </div>
            </div>
     
            <div className='row mt-5 gridhome  mb-5 pb-5'>
              <h2 className=' h1 mb-5 col-12 d-flex justify-content-center '>Vantagens</h2>
    
              <div className='col-md-4 p-3 border'>
                <h3>Eficiência Operacional</h3>
                <p>O HealthSync otimiza a gestão de estoque, reduzindo desperdícios e garantindo disponibilidade imediata de medicamentos essenciais, melhorando a eficiência operacional de farmácias e clínicas.</p>
              </div>
              <div className='col-md-4 p-3 border'>
                <h3>Atendimento Priorizado</h3>
                <p>A priorização de atendimentos médicos com base na necessidade, implementada pelo HealthSync, melhora a qualidade do cuidado ao direcionar recursos para pacientes mais urgentes, reduzindo tempos de espera e promovendo uma abordagem proativa.</p>
              </div>
              <div className='col-md-4 p-3 border'>
                <h3>Comunicação Integrada</h3>
                <p>Ao sincronizar informações entre profissionais de saúde e pacientes, o HealthSync facilita a comunicação, permitindo que médicos acessem dados do estoque em tempo real, emitam prescrições eficientes e promovam uma colaboração mais estreita para uma prestação de cuidados mais eficaz.</p>
              </div>
            </div>
          </div>


        </div>
      );
    }

export default Home
