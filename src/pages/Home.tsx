import React from 'react'
import { Banner, IconsSection, Row, Text } from '../components/Banner'

export const Home: React.FC = () =>{
    return(
        <>
            <header>
                <Banner height='60vh' fontSize='36px'>
                    <h1>Título da página</h1>
                </Banner>
            </header>
            <main>
                <IconsSection>
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/512/9351/9351909.png" alt="" />
                            <h2>Somente para desktop</h2>
                            <p>Vamos aprender como utilizar um Framework</p>
                    </div>
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/512/1292/1292303.png" alt="" />
                            <h2>Somente para desktop</h2>
                            <p>Utilizando o Styled Components</p>
                    </div>
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/512/10302/10302221.png" alt="" />
                            <h2>Somente para desktop</h2>
                            <p>Estamos no Caminho</p>
                    </div>


                </IconsSection>
                {/* section conteudo */}
                <section>
                    <Row>
                        <div><Text>
                                <h2>Lorem Ipsum</h2>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis eaque velit doloremque molestiae autem consequuntur itaque culpa nesciunt repellendus officiis voluptatem officia blanditiis quisquam delectus, quo animi laboriosam odio quod.
                                Tempora ex, error est exercitationem aliquam adipisci velit quaerat hic nihil nesciunt explicabo, voluptas, natus illo sed atque iure perspiciatis aut ut? Ipsam quidem, similique rem quisquam libero accusamus a?
                               odi itaque natus, architecto ad quidem eius porro illo obcaecati quisquam accusantium voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eum et alias officiis dolorem fuga velit nam ex deserunt eos magni temporibus magnam, obcaecati quisquam minus maxime, saepe voluptatibus facere!
                               </p>
                            </Text>
                        </div>
                        <div>
                            <img src="https://images.pexels.com/photos/3129556/pexels-photo-3129556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </div>
                    </Row>
                    <Row reverse={true}>
                        <div><Text>
                                <h2>Lorem Ipsum</h2>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis eaque velit doloremque molestiae autem consequuntur itaque culpa nesciunt repellendus officiis voluptatem officia blanditiis quisquam delectus, quo animi laboriosam odio quod.
                                Tempora ex, error est exercitationem aliquam adipisci velit quaerat hic nihil nesciunt explicabo, voluptas, natus illo sed atque iure perspiciatis aut ut? Ipsam quidem, similique rem quisquam libero accusamus a?
                               odi itaque natus, architecto ad quidem eius porro illo obcaecati quisquam accusantium voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eum et alias officiis dolorem fuga velit nam ex deserunt eos magni temporibus magnam, obcaecati quisquam minus maxime, saepe voluptatibus facere!
                               </p>
                            </Text>
                        </div>
                        <div>
                            <img src="https://images.pexels.com/photos/3129556/pexels-photo-3129556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </div>
                    </Row>
                    <Row>
                        <div><Text>
                                <h2>Lorem Ipsum</h2>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis eaque velit doloremque molestiae autem consequuntur itaque culpa nesciunt repellendus officiis voluptatem officia blanditiis quisquam delectus, quo animi laboriosam odio quod.
                                Tempora ex, error est exercitationem aliquam adipisci velit quaerat hic nihil nesciunt explicabo, voluptas, natus illo sed atque iure perspiciatis aut ut? Ipsam quidem, similique rem quisquam libero accusamus a?
                               odi itaque natus, architecto ad quidem eius porro illo obcaecati quisquam accusantium voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eum et alias officiis dolorem fuga velit nam ex deserunt eos magni temporibus magnam, obcaecati quisquam minus maxime, saepe voluptatibus facere!
                               </p>
                            </Text>
                        </div>
                        <div>
                            <img src="https://images.pexels.com/photos/3129556/pexels-photo-3129556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </div>
                    </Row>
                </section>

                {/* Banner Contato */}
            </main>
            <footer>
                <div>
                    {/* links de navegacao */}
                    {/* copyright */}
                </div>
                <div>
                    {/* midias sociais */}
                </div>
            </footer>
        </>
    )
}