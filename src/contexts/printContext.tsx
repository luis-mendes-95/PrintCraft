import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState, } from "react";
import { useRouter } from "next/router";


interface Props {
    children: ReactNode;
}

interface PrintProviderData {

    //MAIN MOCKUP EDITION (APP BEGGINING)
    mainMockupEditting: string;

    //PARTS OF THE CLOTHES (BACKGROUND IMAGES OR CMYK COLORS)
    backgroundFront: File | string | undefined;
    backgroundBack: File | string | undefined;
    rightSleeve: File | string | undefined;
    leftSleeve: File | string | undefined;
    collar: File | string | undefined;

    //SET THE BACKGROUNDS MOLD PARTS WITH IMAGES
    setBackgroundFrontImg: (file: any) => void;
    setBackgroundBackImg: (file: any) => void;
    setBackgroundRightSleeveImg: (file: any) => void;
    setBackgroundLeftSleeveImg: (file: any) => void;
    setBackgroundCollarImg: (file: any) => void;

}

const PrintContext = createContext<PrintProviderData>(
    {} as PrintProviderData
);

const PrintProvider = ({ children }: Props) => {

    //FUNCTION THAT SENDS TO A SPECIFIC ROUTE
    const router = useRouter();


    //MAIN MOCKUP EDITION (APP BEGGINING)
    const [mainMockupEditting, setMainMockupEditting] = useState("Camiseta Básica")

    //SET ALL PARTS OF SHIRTS AS EMPTY (BEGGINING OF THE APP)
    const [backgroundFront, setBackgroundFront] = useState<File | string | undefined>("https://img.buzzfeed.com/buzzfeed-static/static/2017-04/24/13/asset/buzzfeed-prod-fastlane-01/sub-buzz-8275-1493055165-3.jpg?downsize=1040%3A%2A&output-quality=auto&output-format=auto")
    const [backgroundBack, setBackgroundBack] = useState<File | string | undefined>("https://img.buzzfeed.com/buzzfeed-static/static/2017-04/24/13/asset/buzzfeed-prod-fastlane-01/sub-buzz-8275-1493055165-3.jpg?downsize=1040%3A%2A&output-quality=auto&output-format=auto")
    const [rightSleeve, setRightSleeve] = useState<File | string | undefined>("https://img.buzzfeed.com/buzzfeed-static/static/2017-04/24/13/asset/buzzfeed-prod-fastlane-01/sub-buzz-8275-1493055165-3.jpg?downsize=1040%3A%2A&output-quality=auto&output-format=auto")
    const [leftSleeve, setLeftSleeve] = useState<File | string | undefined>("https://img.buzzfeed.com/buzzfeed-static/static/2017-04/24/13/asset/buzzfeed-prod-fastlane-01/sub-buzz-8275-1493055165-3.jpg?downsize=1040%3A%2A&output-quality=auto&output-format=auto")
    const [collar, setCollar] = useState<File | string | undefined>("https://img.buzzfeed.com/buzzfeed-static/static/2017-04/24/13/asset/buzzfeed-prod-fastlane-01/sub-buzz-8275-1493055165-3.jpg?downsize=1040%3A%2A&output-quality=auto&output-format=auto")

    //SET EACH MOLD PART AS REQUESTED BY IMAGE UPLOAD
    const setBackgroundFrontImg = (file: any) => {
        setBackgroundFront(file)
    }
    const setBackgroundBackImg = (file: any) => {
        setBackgroundFront(file)
    }
    const setBackgroundRightSleeveImg = (file: any) => {
        setBackgroundFront(file)
    }
    const setBackgroundLeftSleeveImg = (file: any) => {
        setBackgroundFront(file)
    }
    const setBackgroundCollarImg = (file: any) => {
        setBackgroundFront(file)
    }


    //SET EACH MOLD PART AS REQUEST CMYK COLOR


    return (
        <PrintContext.Provider
            value={{
                backgroundBack,
                backgroundFront,
                collar,
                leftSleeve,
                rightSleeve,
                mainMockupEditting,
                setBackgroundFrontImg,
                setBackgroundBackImg,
                setBackgroundRightSleeveImg,
                setBackgroundLeftSleeveImg,
                setBackgroundCollarImg,
            }}
        >
            {children}
        </PrintContext.Provider>
    );
};

export const usePrint = () => useContext(PrintContext);

export default PrintProvider;