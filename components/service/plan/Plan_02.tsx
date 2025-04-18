// components/plan/Plan_02.tsx
import SectionContent from "@/components/ui/frame/SectionContent";
import PlanCard from "@/components/ui/ItemCard/PlanCard_02";
import PlanOption from "@/components/ui/module/PlanOption";
import ContentHeadline from "@/components/ui/frame/ContentHeadline";
import PlanList from "@/components/ui/ItemCard/PlanList_02";

const Plan_02 = () => {
  return (
    <SectionContent className="bg-bgLightBlue">
      <section className="w-full md:max-w-[1200px] mx-auto overflow-hidden">
        <ContentHeadline
          enTitle="Plan"
          mainTitle="料金プラン"
          enTitleClassName=""
          titleClassName=""
        />
        <PlanList />
      </section>
      <PlanOption />
    </SectionContent>
  );
};

export default Plan_02;
