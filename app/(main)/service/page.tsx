import Lowerkv_01 from "@/components/lowerkv/Lowerkv_01";
import Plan_01 from "@/components/service/plan/Plan_01";
import Flow_01 from "@/components/top/flow/Flow_01";

// 事業内容
const ServicePage = () => {
  return (
    <div>
      <Lowerkv_01 />
      <Plan_01 />
      <Flow_01 className="bg-bgLightBlue" />
    </div>
  );
};

export default ServicePage;
