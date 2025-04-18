import Lowerkv_01 from "@/components/lowerkv/Lowerkv_01";
import Plan_01 from "@/components/price/plan/Plan_01";
import Flow_01 from "@/components/top/flow/Flow_01";
import Cta_01 from "@/components/ui/module/cta/Cta_01";
import Cta_02 from "@/components/ui/module/cta/Cta_02";
import Cta_03 from "@/components/ui/module/cta/Cta_03";

// よくある質問
const FaqPage = () => {
  return (
    <div>
      <Lowerkv_01 />
      <Plan_01 />
      <Flow_01 className="bg-bgLightBlue" />
      <Cta_01 />
    </div>
  );
};

export default FaqPage;
