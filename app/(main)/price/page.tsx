import Lowerkv_01 from "@/components/lowerkv/Lowerkv_01";
import Lowerkv_02 from "@/components/lowerkv/Lowerkv_02";
import Lowerkv_03 from "@/components/lowerkv/Lowerkv_03";
import Lowerkv_04 from "@/components/lowerkv/Lowerkv_04";
import Plan_01 from "@/components/price/plan/Plan_01";
import Plan_02 from "@/components/price/plan/Plan_02";
import Plan_03 from "@/components/price/plan/Plan_03";
import Plan_04 from "@/components/price/plan/Plan_04";
import Flow_01 from "@/components/top/flow/Flow_01";
import Flow_02 from "@/components/top/flow/Flow_02";
import Cta_01 from "@/components/ui/module/cta/Cta_01";
import Cta_02 from "@/components/ui/module/cta/Cta_02";
import Cta_03 from "@/components/ui/module/cta/Cta_03";

// 料金プラン
const PricePage = () => {
  return (
    <div>
      <Lowerkv_01 />
      <Plan_01 />
      <Flow_01 className="bg-bgLightBlue" />
      <Cta_01 />
    </div>
  );
};

export default PricePage;
