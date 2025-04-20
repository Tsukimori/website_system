import Lowerkv_01 from "@/components/lowerkv/Lowerkv_01";
import Lowerkv_02 from "@/components/lowerkv/Lowerkv_02";
import Lowerkv_03 from "@/components/lowerkv/Lowerkv_03";
import Lowerkv_04 from "@/components/lowerkv/Lowerkv_04";
import LowerFaq_01 from "@/components/faq/faq/Faq_01";
import LowerFaq_02 from "@/components/faq/faq/Faq_02";
import Cta_01 from "@/components/ui/module/cta/Cta_01";
import Cta_02 from "@/components/ui/module/cta/Cta_02";
import Cta_03 from "@/components/ui/module/cta/Cta_03";

// よくある質問
const FaqPage = () => {
  return (
    <div>
      <Lowerkv_01 />
      <LowerFaq_01 />
      <Cta_01 />
    </div>
  );
};

export default FaqPage;
