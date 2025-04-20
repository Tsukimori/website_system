export const faqData = {
  category1: {
    name: "カテゴリ1",
    items: [
      {
        question: "質問1-1",
        answerTitle: "回答1タイトルが入ります",
        answer: "回答1-1が入ります",
      },
      {
        question: "質問1-2",
        answerTitle: "回答1タイトルが入ります",
        answer: "回答1-2が入ります",
      },
    ],
  },
  category2: {
    name: "カテゴリ2",
    items: [
      {
        question: "質問2-1",
        answerTitle: "回答1タイトルが入ります",
        answer: "回答2-1が入ります",
      },
      {
        question: "質問2-2",
        answerTitle: "回答1タイトルが入ります",
        answer: "回答2-2が入ります",
      },
    ],
  },
  // ... 他のカテゴリ
};

export type FaqItem = {
  question: string;
  answerTitle: string;
  answer: string;
};

export type FaqCategory = {
  name: string;
  items: FaqItem[];
};

export type FaqData = {
  [key: string]: FaqCategory;
};
