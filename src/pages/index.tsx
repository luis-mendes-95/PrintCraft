import { serviceOrderData } from "@/schemas/serviceOrder.schema";
import { GetServerSideProps, NextPage } from "next";
import { DivHomeBase } from "../styles/home"
import Footer from "@/components/footer";
import Header from "@/components/header";
import PrintDashboard from "@/components/printDashboard";

interface HomeProps {
  serviceOrders: serviceOrderData[];
}

const Home: NextPage<HomeProps> = ({ serviceOrders }) => {
  return (
    <DivHomeBase>
      <Header />
      <PrintDashboard />
      <Footer />

    </DivHomeBase>
  );
};

export default Home;
