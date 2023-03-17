import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { Text } from "@parssa/universal-ui";

type DivProps = React.HTMLAttributes<HTMLDivElement>;

const faqs: { question: string; answer: string }[] = [
  {
    question: "How does Cicada work?",
    answer: "Lorem ipsum dolor sit amet."
  },
  {
    question: "Why TypeScript over than YAML?",
    answer: "Lorem ipsum dolor sit amet."
  },
  {
    question: "Why is there a waitlist?",
    answer:
      "We are working with a small group of beta testers to iron out all of the kinks. If you are interested in early access, please sign up for the waitlist. We are onboarding new projects every week."
  },
  {
    question: "Will Cicada open source?",
    answer: "Yes!"
  },
  {
    question: "Does Cicada work with my existing CI provider?",
    answer: "Lorem ipsum dolor sit amet."
  },
  // {
  //   question: "How is this different from Dagger?",
  //   answer: "Lorem ipsum dolor sit amet."
  // },
  // {
  //   question: "How is this different from Earthly?",
  //   answer: "Lorem ipsum dolor sit amet."
  // }
];
export const FAQ = ({ ...props }: DivProps & {}) => {
  return (
    <div {...props} className={`container max-w-screen-lg mx-auto py-12`}>
      <Text variant="h2">Frequently Asked Questions</Text>
      <Accordion.Root type={"multiple"} className="space-y-6 mt-size-4y">
        {faqs.map(({ question, answer }) => (
          <Accordion.Item key={question} value={question} className='group'>
            <Accordion.Header>
              <Accordion.Trigger className="group flex justify-between text-left items-center w-full">
                <Text variant="h4">{question}</Text>

                <svg
                  className="w-6 h-6 group-data-[state=open]:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="mt-2 text-theme-muted">
              {answer}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
};
