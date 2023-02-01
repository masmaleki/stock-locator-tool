import { GpaTool } from "./nexar-gpa-tool/components/GpaTool";

const App = () => {
  return (
    <GpaTool
      searchParameters={{
        token: "",
        authorizedOnly: false,
        inStockOnly: true,
        // q: "100",
        country: "GB",
        currency: "GBP",
        enableManufacturerLink: true,
        expandOfferTable: false,
        limit: 10,
      }}
      styles={{
        // font: "Comic Neue",
        theme: "dark",
        // customColors: {
        //   background: "#FFFFFF",
        //   button: "#3671B0",
        //   buttonSecondary: "#FFFFFF",
        //   keyText: "#2E654D",
        //   searchFormBackground: "#008375",
        //   partHeaderBackground: "#003057",
        //   // partHeaderMpn: "#3671B0",
        //   partHeaderText: "#F4F2F1",
        //   row1: "#F4F2F1",
        //   row2: "#FFFFFF",
        //   tableHeaderText: "#080706",
        //   text: "#2A241F",
        //   tint: "#E3DFDA",
        // },
      }}
    />
  );
};

export default App;
