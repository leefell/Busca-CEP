import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { toast, ToastContainer } from "react-toastify";
import "./styles/index.css";
import "react-toastify/dist/ReactToastify.css";
import InputMask from "react-input-mask";
import api from "./services/api";
import {
  GlobalStyle,
  Container,
  Title,
  ContainerInput,
  ButtonSearch,
  Main,
} from "./styles/GlobalStyles";

function App() {
  const [input, setInput] = useState("");
  const [cep, setCep] = useState({});

  async function handleSearch() {
    const trimmedInput = input.replace(/\D/g, "");

    if (trimmedInput === "") {
      toast.error("Digite um CEP válido");
      return;
    }

    try {
      const encodedInput = encodeURIComponent(trimmedInput);
      const response = await api.get(`${encodedInput}/json`);
      setCep(response.data);
      toast.success("CEP encontrado");
      setInput("");
    } catch {
      toast.error("CEP não encontrado");
      setInput("");
    }
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>Buscador de CEP</Title>

        <ContainerInput>
          <InputMask
            mask="99999-999"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Digite o CEP"
          >
            {(inputProps) => <input {...inputProps} type="text" />}
          </InputMask>

          <ButtonSearch onClick={handleSearch}>
            <FiSearch size={25} color="#FFF" />
          </ButtonSearch>
        </ContainerInput>

        {Object.keys(cep).length > 0 && (
          <Main>
            <h2>CEP: {cep.cep}</h2>
            {cep.logradouro && <span>Logradouro: {cep.logradouro}</span>}
            {cep.complemento && <span>Complemento: {cep.complemento}</span>}
            {cep.bairro && <span>Bairro: {cep.bairro}</span>}
            <span>
              {cep.localidade} - {cep.uf}
            </span>
          </Main>
        )}
        <ToastContainer />
      </Container>
    </>
  );
}

export default App;
