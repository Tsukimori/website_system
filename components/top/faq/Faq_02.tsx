// components/faq/Faq_02.tsx

"use client";

import ContentHeadline from "@/components/ui/frame/ContentHeadline";
import PageContent from "@/components/ui/frame/PageContent";
import FaqList_02 from "@/components/ui/module/FaqList_02";
import MoreButton from "@/components/ui/button/MoreButton";

const Faq_02 = () => {
  return (
    <PageContent className="bg-white">
      <section className="md:w-1200 mx-auto">
        <ContentHeadline
          enTitle="FAQ"
          mainTitle="よくある質問"
          enTitleClassName="text-center"
          titleClassName="text-center"
        />
        <FaqList_02 hideTab />
        <div className="mt-16 flex justify-center">
          <MoreButton className="text-accentColor border-accentColor" />
        </div>
      </section>
    </PageContent>
  );
};

export default Faq_02;
