import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@hhs/components/shadcn/accordion";

interface AccordionFaqProps {
  data: { trigger: string; content: string }[];
}

const AccordionFaq = ({ data }: AccordionFaqProps) => {
  return (
    <Accordion type="single" collapsible className="max-w-[840px] mx-auto">
      {data?.map((item, index) => (
        <AccordionItem key={index} value={`item-${index + 1}`}>
          <AccordionTrigger className="text-lg md:text-xl !cursor-help">
            {item.trigger}
          </AccordionTrigger>
          <AccordionContent className="text-base md:text-lg !cursor-text">
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionFaq;
