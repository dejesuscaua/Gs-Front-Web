import './Home.css'
import ImageHome from "/src/assets/homepage.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '/src/components/Header/Header.jsx';


function Home() {


    return (

        <div>
            <Header />

            <div className="row">
                <div className="col-7 m-5 ">
                    <img className='border rounded col-10' id='imagehome' src={ImageHome} alt="" />
                    <div className='row mt-5'>
                        <h1 className='col-4 pt-2'>HealthSync</h1>
                        <p className='col-6'>Inovação na gestão de estoque de medicamentos, priorização eficiente de atendimentos médicos e sincronia perfeita entre profissionais e pacientes, garantindo cuidados ágeis e personalizados.</p>
                    </div>
                    <div className=' col-10 d-flex justify-content-end'>
                        <p className='border p-1'>Mais Informações</p>
                    </div>
                </div>
                <div className="col-3 mt-5   d-flex flex-column">
                    <div className="mb-4">
                        <div className='border-bottom border-dark p-3'>
                            <h2 className='fs-4'>O que é a solução</h2>
                            <p className=''>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam dolorem est labore, earum commodi nostrum atque amet a numquam, sunt quia aspernatur, reprehenderit praesentium? Excepturi dolores quisquam atque fuga distinctio?</p>
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className='border-bottom border-dark p-3'>
                            <h2 className='fs-4'>O que ela fará</h2>
                            <p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis animi expedita et aperiam libero tenetur, vel explicabo saepe, non, ratione eligendi veritatis nemo impedit consectetur. Minima aspernatur delectus dolorem velit.</p>
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className='p-3'>
                            <h2 className='fs-4'>Como funcionará</h2>
                            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ab ullam vero aut tempora libero harum, molestias quaerat veniam error quibusdam, velit necessitatibus? Quae blanditiis, quisquam similique corrupti doloribus numquam?</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='row m-5 '>
                <h2 className='mb-5'>Vantagens</h2>

                <div className='col'>
                    <h3>Eficiência Operacional</h3>
                    <p>O HealthSync otimiza a gestão de estoque, reduzindo desperdícios e garantindo disponibilidade imediata de medicamentos essenciais, melhorando a eficiência operacional de farmácias e clínicas.</p>
                </div>
                <div className='col'>
                    <h3>Atendimento Priorizado</h3>
                    <p>A priorização de atendimentos médicos com base na necessidade, implementada pelo HealthSync, melhora a qualidade do cuidado ao direcionar recursos para pacientes mais urgentes, reduzindo tempos de espera e promovendo uma abordagem proativa.</p>
                </div>
                <div className='col'>
                    <h3>Comunicação Integrada</h3>
                    <p>Ao sincronizar informações entre profissionais de saúde e pacientes, o HealthSync facilita a comunicação, permitindo que médicos acessem dados do estoque em tempo real, emitam prescrições eficientes e promovam uma colaboração mais estreita para uma prestação de cuidados mais eficaz.</p>
                </div>
            </div>
        </div>

    )
}

export default Home
