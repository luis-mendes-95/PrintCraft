import { usePrint } from "@/contexts/printContext"
import { PrintDashboardBase } from "./style"

const PrintDashboard = () => {

  const { backgroundFront, backgroundBack, leftSleeve, rightSleeve } = usePrint()



  return (
    <PrintDashboardBase>

      <div className="divBackgroundFront">
        <label>FRONTAL:</label>
        <button>Cor Sólida</button>
        <span>OU</span>
        <input type="file" placeholder="Selecionar Imagem do Background" />
        <div className="divProductTemplate">
          <img className="imgBackground" src={backgroundFront} alt="backgroundImage" />
          <img className="imgMold" src="https://res.cloudinary.com/dwadq5lzp/image/upload/v1689179699/camBasEncaixeFrontal_sw1u91.png" alt="moldImage" />
        </div>
      </div>


      <div className="divBackgroundBack">
        <label>COSTAS:</label>
        <button>Cor Sólida</button>
        <span>OU</span>
        <input type="file" placeholder="Selecionar Imagem do Background" />
        <div className="divProductTemplate">
          <img className="imgBackground" src={backgroundBack} alt="backgroundImage" />
          <img className="imgMold" src="https://res.cloudinary.com/dwadq5lzp/image/upload/v1689180319/camBasEncaixeVerso_xhmp37.png" alt="moldImage" />
        </div>
      </div>


      <div className="divRightSleeve">
        <label>MANGA DIREITA:</label>
        <button>Cor Sólida</button>
        <span>OU</span>
        <input type="file" placeholder="Selecionar Imagem do Background" />
        <div className="divProductTemplate">
          <img className="imgBackgroundSleeve" src={rightSleeve} alt="backgroundImage" />
          <img className="imgMoldSleeve" src="https://res.cloudinary.com/dwadq5lzp/image/upload/v1689180735/camBasEncaixeManga_uhhx27.png" alt="moldImage" />
        </div>
      </div>


      <div className="divLeftSleeve">
        <label>MANGA ESQUERDA:</label>
        <button>Cor Sólida</button>
        <span>OU</span>
        <input type="file" placeholder="Selecionar Imagem do Background" />
        <div className="divProductTemplate">
          <img className="imgBackgroundSleeve" src={leftSleeve} alt="backgroundImage" />
          <img className="imgMoldSleeve" src="https://res.cloudinary.com/dwadq5lzp/image/upload/v1689180735/camBasEncaixeManga_uhhx27.png" alt="moldImage" />
        </div>
      </div>


      <div className="divCollar">
        <label>GOLA:</label>
        <button>Cor Sólida</button>
        <span>OU</span>
        <input type="file" placeholder="Selecionar Imagem do Background" />
        <div className="divProductTemplate">
          <img className="imgBackgroundSleeve" src={leftSleeve} alt="backgroundImage" />
          <img className="imgMoldSleeve" src="https://res.cloudinary.com/dwadq5lzp/image/upload/v1689182227/camBasEncaixeGola_plfkhq.png" alt="moldImage" />
        </div>
      </div>


    </PrintDashboardBase>
  )
}

export default PrintDashboard