import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Quelle est la différence avec ce qu'on fait déjà en interne ?",
    a: "La plupart des prépas organisent des entretiens blancs avec des anciens ou des parents. C'est utile, mais ça reste un exercice ponctuel. Ce que j'apporte, c'est le travail en amont : une méthodologie structurée, un workbook d'introspection, du coaching individuel. Vos intervenants continuent à faire les blancs, mais vos étudiants y arrivent avec un vrai travail de fond.",
  },
  {
    q: "Comment ça s'intègre dans notre calendrier ?",
    a: "Le workbook peut être distribué en début d'année ou en janvier. Les sessions collectives se placent entre février et avril. Le coaching individuel s'intensifie entre les résultats d'admissibilité et les oraux. On s'adapte : même en commençant tard, le système produit des résultats.",
  },
  {
    q: "Quel est l'investissement pour notre établissement ?",
    a: "Ça dépend du périmètre : workbook seul, workbook + sessions collectives, ou accompagnement complet avec coaching individuel. L'offre est construite sur mesure, prépa par prépa, en fonction de vos besoins et de la taille de votre promotion.",
  },
  {
    q: "C'est la même chose pour toutes les prépas ?",
    a: "Non. Chaque accompagnement est pensé en fonction de votre prépa : vos effectifs, votre calendrier, ce que vous faites déjà en interne, les écoles que vos étudiants visent. On en discute ensemble et on construit quelque chose d'adapté.",
  },
  {
    q: "On peut commencer par le workbook seul ?",
    a: "Oui. Le workbook est conçu pour être complété en autonomie : 150 pages, 8 méthodes, un fil rouge complet. Mais il ne remplace pas les sessions collectives et le coaching individuel. Le workbook pose les fondations, le coaching et les conférences font la différence. Ensuite, c'est du cas par cas en fonction de chaque prépa.",
  },
  {
    q: "C'est adapté à toutes les filières ?",
    a: "Oui : ECG, ECT, et plus largement toutes les écoles qui préparent à des entretiens de personnalité. Les fondamentaux s'appliquent partout.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-16 lg:py-20">
      <div className="section-container max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="text-section-title" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>Questions fréquentes</h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-[var(--divider)]">
              <AccordionTrigger className="text-left text-[var(--text-primary)] font-normal text-base py-5 hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-body-sm pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
