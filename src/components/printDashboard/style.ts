import styled from "styled-components";
import frontalMold from "../../assets/camisetaBasicaMoldes/camBasEncaixeFrontal.png";

export const PrintDashboardBase = styled.main`
  background-color: orangered;
  border: 2pt solid white;
  color: blue;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;

  .sizeRecommended{
    font-size: 8pt;
  }

  .divProductTemplate {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  margin: 20px 0;
  position: relative;
  top: 0;
  left: 0;
}

.divProductTemplate .imgMold {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
}

.imgMoldSleeve{
  position: absolute;
  left: 0;
  width: 100%;
  height: 40%;
}

.imgBackgroundSleeve{
  position: absolute;
  left: 0;
  width: 100%;
  height: 40%;
}

.divProductTemplate .imgBackground {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
}

  .h2MainMockup {
    color: white;
    text-shadow: 1pt 1pt 2pt black;
  }

  .divBackgroundFront,
  .divBackgroundBack,
  .divLeftSleeve,
  .divRightSleeve,
  .divCollar {
    display: flex;
    flex-direction: column;
    width: 250px;
    background-color: white;
    padding: 20px;
    color: black;
    border-radius: 18px;
    text-align: center;

    button {
      background-color: green;
      color: white;
      border: none;
      padding: 8px;
      border-radius: 8px;
    }

    input {
      width: 100%;
      background-color: green;
      color: white;
      border: none;
      padding: 8px;
      border-radius: 8px;
      cursor: pointer;
      outline: none;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      font-weight: bold;
    }
  }

  .divRightSleeve, .divLeftSleeve{
    .divProductTemplate{
      align-items: flex-start;
    }
  }

  .divCollar{
    .divProductTemplate{
      align-items: flex-start;
      background-color: black;
      height: 30px;
      img{
        height: 30px;
      }
    }
  }
`;
