import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import User from "@/components/User";

const Home = () => {
  const username = "John Doe";
  const useremail = "john.doe@example.com";
  return (
   <div>
    <Menu /> <br />

    <User name={username} email={useremail}>
      <p>Este é um conteúdo adicional passado como children para o componente User.</p>
    </User>  <br />

    <h2>Bem Vindo a pagina inicial</h2> <br />
    
    <Footer />
   </div>
  );
}
export default Home;
