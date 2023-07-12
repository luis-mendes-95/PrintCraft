import { FooterBase } from "./style"
import { useRouter } from "next/router"

const Footer = () => {

  const router = useRouter()

  return (
    <FooterBase>
      <h2>Escolha o seu design:</h2>
      <nav>
        <button>Camiseta</button>
        <button>Corta Vento</button>
        <button>Windbanner</button>
      </nav>
    </FooterBase>
  )
}

export default Footer