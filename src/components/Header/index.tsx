import React from "react";
import { ContainerHeader, ContainerIMG, Icons, IconsDiv, Title, Text, ContainerContent, DivContent,Footer, List } from "./styles";

const Header: React.FC = () => {
  return (
    <div>
      <ContainerIMG height="60vh" width="100vw">
        <h1>Minha primeira página com React</h1>
      </ContainerIMG>
      <ContainerHeader height="40vh" width="100vw">
        <IconsDiv >
          <Icons src="https://cdn-icons-png.flaticon.com/512/4854/4854302.png"/>
          <Title>Somente para Desktop</Title>
          <Text> Vamos aprender como utilizar um Framework</Text>
        </IconsDiv>
        <IconsDiv>
          <Icons src="https://cdn-icons-png.flaticon.com/512/6415/6415499.png"/>
          <Title>Somente para Desktop</Title>
          <Text> Vamos aprender como utilizar um Framework</Text>
        </IconsDiv>
        <IconsDiv>
          <Icons src="https://cdn-icons-png.flaticon.com/512/3472/3472620.png"/>
          <Title>Somente para Desktop</Title>
          <Text> Vamos aprender como utilizar um Framework</Text>
        </IconsDiv>
      </ContainerHeader>
          <ContainerContent>
            <DivContent>
              <Title>Lorem Ipsum</Title>
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero velit voluptatem corporis rerum laboriosam molestiae dolor aperiam repellendus! Voluptatum minus doloribus maxime totam eum! Commodi quas excepturi unde consequatur est.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore perspiciatis tenetur ipsam commodi optio pariatur ab amet sint, nesciunt necessitatibus incidunt! Est reprehenderit, officiis fugiat adipisci eligendi perferendis temporibus distinctio.
              </Text>
            </DivContent>
          
            <DivContent src="https://images.pexels.com/photos/6805861/pexels-photo-6805861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            </ContainerContent>
            <ContainerContent>
            <DivContent src="https://images.pexels.com/photos/1407305/pexels-photo-1407305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
          
            <DivContent>
              <Title>Lorem Ipsum</Title>
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero velit voluptatem corporis rerum laboriosam molestiae dolor aperiam repellendus! Voluptatum minus doloribus maxime totam eum! Commodi quas excepturi unde consequatur est.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore perspiciatis tenetur ipsam commodi optio pariatur ab amet sint, nesciunt necessitatibus incidunt! Est reprehenderit, officiis fugiat adipisci eligendi perferendis temporibus distinctio.
              </Text>
            </DivContent>
            </ContainerContent>
          
            <ContainerContent>
            <DivContent>
              <Title>Lorem Ipsum</Title>
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero velit voluptatem corporis rerum laboriosam molestiae dolor aperiam repellendus! Voluptatum minus doloribus maxime totam eum! Commodi quas excepturi unde consequatur est.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore perspiciatis tenetur ipsam commodi optio pariatur ab amet sint, nesciunt necessitatibus incidunt! Est reprehenderit, officiis fugiat adipisci eligendi perferendis temporibus distinctio.
              </Text>
            </DivContent>
          
            <DivContent src="https://images.pexels.com/photos/1042423/pexels-photo-1042423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            </ContainerContent>

            <ContainerIMG height="300px" width="100vw">
                <Title>Contato</Title>
            </ContainerIMG>
          <Footer height="150px" width="100vw">
            <div>
              <List>
                <li>About -</li>
                <li>Contact -</li>
                <li>Terms of Use -</li>
                <li>Privacy Policy</li>
              </List>
              <p>Your Website 2023. All rights Reserved.</p>
            </div>

            <div>
              <List>
                <li><img width={40} src="https://cdn-icons-png.flaticon.com/512/145/145802.png" alt="Facebook Icon" /></li>
                <li><img width={40} src="https://cdn-icons-png.flaticon.com/512/3536/3536424.png" alt="Twitter Icon" /></li>
                <li> <img width={40} src="https://cdn-icons-png.flaticon.com/512/1409/1409946.png" alt="Twitter Icon" /></li>
              </List>
            </div>
            
          </Footer>

    </div>
  );
}

export default Header;