import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState, } from "react";
import { useRouter } from "next/router";


interface Props {
    children: ReactNode;
}

interface PrintProviderData {

    //MAIN MOCKUP EDITION (APP BEGGINING)
    mainMockupEditting: string;

    //PARTS OF THE CLOTHES (BACKGROUND IMAGES OR CMYK COLORS)
    backgroundFront: File | string;
    backgroundBack: File | string;
    rightSleeve: File | string;
    leftSleeve: File | string;
    collar: File | string;

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
    const [backgroundFront, setBackgroundFront] = useState("https://img.buzzfeed.com/buzzfeed-static/static/2017-04/24/13/asset/buzzfeed-prod-fastlane-01/sub-buzz-8275-1493055165-3.jpg?downsize=1040%3A%2A&output-quality=auto&output-format=auto")
    const [backgroundBack, setBackgroundBack] = useState("https://img.buzzfeed.com/buzzfeed-static/static/2017-04/24/13/asset/buzzfeed-prod-fastlane-01/sub-buzz-8275-1493055165-3.jpg?downsize=1040%3A%2A&output-quality=auto&output-format=auto")
    const [rightSleeve, setRightSleeve] = useState("https://img.buzzfeed.com/buzzfeed-static/static/2017-04/24/13/asset/buzzfeed-prod-fastlane-01/sub-buzz-8275-1493055165-3.jpg?downsize=1040%3A%2A&output-quality=auto&output-format=auto")
    const [leftSleeve, setLeftSleeve] = useState("https://img.buzzfeed.com/buzzfeed-static/static/2017-04/24/13/asset/buzzfeed-prod-fastlane-01/sub-buzz-8275-1493055165-3.jpg?downsize=1040%3A%2A&output-quality=auto&output-format=auto")
    const [collar, setCollar] = useState("https://img.buzzfeed.com/buzzfeed-static/static/2017-04/24/13/asset/buzzfeed-prod-fastlane-01/sub-buzz-8275-1493055165-3.jpg?downsize=1040%3A%2A&output-quality=auto&output-format=auto")

    return (
        <PrintContext.Provider
            value={{
                backgroundBack,
                backgroundFront,
                collar,
                leftSleeve,
                rightSleeve,
                mainMockupEditting
            }}
        >
            {children}
        </PrintContext.Provider>
    );
};

export const usePrint = () => useContext(PrintContext);

export default PrintProvider;