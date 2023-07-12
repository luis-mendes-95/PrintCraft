/* eslint-disable @next/next/no-img-element */
import { usePrint } from "@/contexts/printContext";
import { PrintDashboardBase } from "./style";
import { useState, useEffect } from "react";

const PrintDashboard = () => {
  const {
    backgroundFront,
    backgroundBack,
    leftSleeve,
    rightSleeve,
    setBackgroundFrontImg,
    setBackgroundBackImg,
    setBackgroundLeftSleeveImg,
    setBackgroundRightSleeveImg,
    setBackgroundCollarImg
  } = usePrint();
  const [selectedFrontFile, setSelectedFrontFile] = useState(null);
  const [selectedBackFile, setSelectedBackFile] = useState(null);
  const [selectedRightSleeveFile, setSelectedRightSleeveFile] = useState(null);
  const [selectedLeftSleeveFile, setSelectedLeftSleeveFile] = useState(null);
  const [selectedCollarFile, setSelectedCollarFile] = useState(null);
  const [selectedFrontColor, setSelectedFrontColor] = useState("");
  const [selectedBackColor, setSelectedBackColor] = useState("");
  const [selectedRightSleeveColor, setSelectedRightSleeveColor] = useState("");
  const [selectedLeftSleeveColor, setSelectedLeftSleeveColor] = useState("");
  const [selectedCollarColor, setSelectedCollarColor] = useState("");

  useEffect(() => {
    if (selectedFrontColor && backgroundFront) {
      setBackgroundFrontImg("");
    }
  }, [selectedFrontColor, backgroundFront]);

  useEffect(() => {
    if (selectedBackColor && backgroundBack) {
      setBackgroundBackImg("");
    }
  }, [selectedBackColor, backgroundBack]);

  useEffect(() => {
    if (selectedRightSleeveColor && rightSleeve) {
      setBackgroundRightSleeveImg("");
    }
  }, [selectedRightSleeveColor, rightSleeve]);

  useEffect(() => {
    if (selectedLeftSleeveColor && leftSleeve) {
      setBackgroundLeftSleeveImg("");
    }
  }, [selectedLeftSleeveColor, leftSleeve]);

  useEffect(() => {
    if (selectedCollarColor && leftSleeve) {
      setBackgroundCollarImg("");
    }
  }, [selectedCollarColor, leftSleeve]);

  const handleFrontFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFrontFile(file);
    setSelectedFrontColor("");

    const reader = new FileReader();
    reader.onload = () => {
      const imageDataUrl = reader.result;
      console.log("Imagem carregada:", imageDataUrl);
      // Outras ações que você deseja realizar com a imagem carregada

      // Atualize o estado ou faça o que for necessário com a imagem carregada
      setBackgroundFrontImg(imageDataUrl);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleBackFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedBackFile(file);
    setSelectedBackColor("");

    const reader = new FileReader();
    reader.onload = () => {
      const imageDataUrl = reader.result;
      console.log("Imagem carregada:", imageDataUrl);
      // Outras ações que você deseja realizar com a imagem carregada

      // Atualize o estado ou faça o que for necessário com a imagem carregada
      setBackgroundBackImg(imageDataUrl);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleRightSleeveFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedRightSleeveFile(file);
    setSelectedRightSleeveColor("");

    const reader = new FileReader();
    reader.onload = () => {
      const imageDataUrl = reader.result;
      console.log("Imagem carregada:", imageDataUrl);
      // Outras ações que você deseja realizar com a imagem carregada

      // Atualize o estado ou faça o que for necessário com a imagem carregada
      setBackgroundRightSleeveImg(imageDataUrl);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleLeftSleeveFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedLeftSleeveFile(file);
    setSelectedLeftSleeveColor("");

    const reader = new FileReader();
    reader.onload = () => {
      const imageDataUrl = reader.result;
      console.log("Imagem carregada:", imageDataUrl);
      // Outras ações que você deseja realizar com a imagem carregada

      // Atualize o estado ou faça o que for necessário com a imagem carregada
      setBackgroundLeftSleeveImg(imageDataUrl);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleCollarFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedCollarFile(file);
    setSelectedCollarColor("");

    const reader = new FileReader();
    reader.onload = () => {
      const imageDataUrl = reader.result;
      console.log("Imagem carregada:", imageDataUrl);
      // Outras ações que você deseja realizar com a imagem carregada

      // Atualize o estado ou faça o que for necessário com a imagem carregada
      setBackgroundCollarImg(imageDataUrl);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <PrintDashboardBase>
      <div className="divBackgroundFront">
        <label>FRONTAL:</label>
        <button>Cor Sólida</button>
        <span>OU</span>
        <input type="file" onChange={handleFrontFileChange} placeholder="Selecionar Imagem do Background" />
        <input type="color" value={selectedFrontColor} onChange={(event) => setSelectedFrontColor(event.target.value)} />
        <span className="sizeRecommended">Tamanho Recomendado: 61cm x 79cm</span>
        <div className="divProductTemplate">
          <img
            className="imgBackground"
            src={selectedFrontFile ? URL.createObjectURL(selectedFrontFile) : ""}
            style={{ backgroundColor: selectedFrontColor }}
            alt="backgroundImage"
          />
          <img
            className="imgMold"
            src="https://res.cloudinary.com/dwadq5lzp/image/upload/v1689179699/camBasEncaixeFrontal_sw1u91.png"
            alt="moldImage"
          />
        </div>
      </div>

      <div className="divBackgroundBack">
        <label>COSTAS:</label>
        <button>Cor Sólida</button>
        <span>OU</span>
        <input type="file" onChange={handleBackFileChange} placeholder="Selecionar Imagem do Background" />
        <input type="color" value={selectedBackColor} onChange={(event) => setSelectedBackColor(event.target.value)} />
        <div className="divProductTemplate">
          <img
            className="imgBackground"
            src={selectedBackFile ? URL.createObjectURL(selectedBackFile) : ""}
            style={{ backgroundColor: selectedBackColor }}
            alt="backgroundImage"
          />
          <img
            className="imgMold"
            src="https://res.cloudinary.com/dwadq5lzp/image/upload/v1689180319/camBasEncaixeVerso_xhmp37.png"
            alt="moldImage"
          />
        </div>
      </div>

      <div className="divRightSleeve">
        <label>MANGA DIREITA:</label>
        <button>Cor Sólida</button>
        <span>OU</span>
        <input type="file" onChange={handleRightSleeveFileChange} placeholder="Selecionar Imagem do Background" />
        <input
          type="color"
          value={selectedRightSleeveColor}
          onChange={(event) => setSelectedRightSleeveColor(event.target.value)}
        />
        <div className="divProductTemplate">
          <img
            className="imgBackgroundSleeve"
            src={selectedRightSleeveFile ? URL.createObjectURL(selectedRightSleeveFile) : ""}
            style={{ backgroundColor: selectedRightSleeveColor }}
            alt="backgroundImage"
          />
          <img
            className="imgMoldSleeve"
            src="https://res.cloudinary.com/dwadq5lzp/image/upload/v1689180735/camBasEncaixeManga_uhhx27.png"
            alt="moldImage"
          />
        </div>
      </div>

      <div className="divLeftSleeve">
        <label>MANGA ESQUERDA:</label>
        <button>Cor Sólida</button>
        <span>OU</span>
        <input type="file" onChange={handleLeftSleeveFileChange} placeholder="Selecionar Imagem do Background" />
        <input
          type="color"
          value={selectedLeftSleeveColor}
          onChange={(event) => setSelectedLeftSleeveColor(event.target.value)}
        />
        <div className="divProductTemplate">
          <img
            className="imgBackgroundSleeve"
            src={selectedLeftSleeveFile ? URL.createObjectURL(selectedLeftSleeveFile) : ""}
            style={{ backgroundColor: selectedLeftSleeveColor }}
            alt="backgroundImage"
          />
          <img
            className="imgMoldSleeve"
            src="https://res.cloudinary.com/dwadq5lzp/image/upload/v1689180735/camBasEncaixeManga_uhhx27.png"
            alt="moldImage"
          />
        </div>
      </div>

      <div className="divCollar">
        <label>GOLA:</label>
        <button>Cor Sólida</button>
        <span>OU</span>
        <input type="file" onChange={handleCollarFileChange} placeholder="Selecionar Imagem do Background" />
        <input
          type="color"
          value={selectedCollarColor}
          onChange={(event) => setSelectedCollarColor(event.target.value)}
        />
        <div className="divProductTemplate">
          <img
            className="imgBackgroundSleeve"
            src={selectedCollarFile ? URL.createObjectURL(selectedCollarFile) : ""}
            style={{ backgroundColor: selectedCollarColor }}
            alt="backgroundImage"
          />
          <img
            className="imgMoldSleeve"
            src="https://res.cloudinary.com/dwadq5lzp/image/upload/v1689182227/camBasEncaixeGola_plfkhq.png"
            alt="moldImage"
          />
        </div>
      </div>
    </PrintDashboardBase>
  );
};

export default PrintDashboard;
