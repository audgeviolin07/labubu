"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the AI analyze performativeness?",
    answer:
      "Our advanced AI examines subtle visual cues like coffee shop aesthetics, tote bag positioning, vintage band tee authenticity, and beard grooming patterns. It cross-references these against our database of 10,000+ 'soft boy' Instagram profiles to calculate your performative score. The algorithm is constantly learning from the latest indie music releases and artisanal coffee trends.",
  },
  {
    question: "What photos work best?",
    answer:
      "For optimal results, upload photos featuring: natural lighting (bonus points for golden hour), visible vinyl records or books by female authors, any form of sustainable transportation, or you holding a film camera. Avoid: gym selfies, crypto references, or anything that suggests you don't cry during Pixar movies.",
  },
  {
    question: "Is this meant to be taken seriously?",
    answer:
      "About as seriously as wearing a beanie in 80-degree weather or claiming you 'discovered' that band before they got popular. This is pure satire celebrating the wonderfully performative aspects of modern masculinity. We're all performing something—might as well have fun with it!",
  },
  {
    question: "How accurate are the ratings?",
    answer:
      "Our AI has a 94.7% accuracy rate in detecting NPR tote bags and can identify a Wes Anderson film reference from 50 pixels away. But remember, true performativeness can't be measured—it must be felt in your soul while sipping oat milk lattes.",
  },
  {
    question: "Can I rate myself?",
    answer:
      "Absolutely! Self-reflection is very on-brand for the sensitive modern male. Upload your most vulnerable selfie—the one where you're definitely not trying to look vulnerable but totally are. Bonus points if there's a houseplant in the background.",
  },
  {
    question: "What happens to uploaded photos?",
    answer:
      "Your photos are processed securely and deleted after analysis. We don't store them (we're not that kind of creepy). The only thing we keep is the memory of your impeccable vintage band tee collection and a deep respect for your emotional availability.",
  },
];

const SimpleRoundedFaqs = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container max-w-4xl mx-auto">
        <h2 className="mt-2 mb-12 text-3xl font-bold md:text-6xl font-display">
          Frequently Asked Questions
        </h2>
        <Accordion type="multiple">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="mb-2 rounded-md border-b-0 bg-muted px-5 py-2 md:mb-4"
            >
              <AccordionTrigger className="text-left text-matcha hover:text-matcha-deep transition-colors [&[data-state=open]>svg]:text-matcha-deep">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export { SimpleRoundedFaqs };