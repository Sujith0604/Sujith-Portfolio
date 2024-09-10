import FooterSection from "./pages/FooterSection";
import HeroSection from "./pages/HeroSection";
import WhatIdo from "./pages/WhatIdo";
import WorkSection from "./pages/WorkSection";

const App = () => {
  return (
    <div className=" flex flex-col gap-11 font-poppins bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-500 to-yellow-100">
      <HeroSection />
      <WhatIdo />
      <WorkSection />
      <FooterSection />
    </div>
  );
};

export default App;
