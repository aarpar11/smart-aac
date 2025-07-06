import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ABATherapy = () => {
  const dosAndDonts = {
    dos: [
      "Start with small, achievable goals",
      "Use positive reinforcement consistently",
      "Be patient and understanding", 
      "Celebrate small victories",
      "Create structured routines",
      "Focus on building communication skills",
      "Respect your child's sensory needs",
      "Work collaboratively with professionals"
    ],
    donts: [
      "Don't use punishment-based approaches",
      "Don't ignore your child's emotional needs",
      "Don't force compliance without understanding",
      "Don't compare your child to others",
      "Don't overwhelm with too many demands",
      "Don't neglect your own self-care",
      "Don't dismiss your child's preferences",
      "Don't expect immediate results"
    ]
  };

  const faqs = [
    {
      question: "What is ABA therapy and how does it help?",
      answer: "Applied Behavior Analysis (ABA) is an evidence-based therapy approach that focuses on improving specific behaviors and skills. It helps children with autism develop communication, social, and daily living skills through structured learning and positive reinforcement."
    },
    {
      question: "How many hours of ABA therapy does my child need?",
      answer: "The recommended hours vary by individual needs, typically ranging from 10-40 hours per week. Your child's BCBA (Board Certified Behavior Analyst) will assess and recommend the appropriate intensity based on your child's specific goals and progress."
    },
    {
      question: "At what age should ABA therapy start?",
      answer: "ABA therapy can be beneficial at any age, but early intervention (ages 2-6) often shows the most significant results. However, older children and even adults can benefit from ABA approaches tailored to their developmental stage."
    },
    {
      question: "How do I know if ABA therapy is working?",
      answer: "Progress in ABA is measured through data collection and regular assessments. You should see gradual improvements in targeted skills, increased communication, better social interactions, and reduced challenging behaviors over time."
    },
    {
      question: "Can I do ABA techniques at home?",
      answer: "Yes! Many ABA strategies can be implemented at home. Your therapy team should provide parent training and guidance on how to use ABA principles in daily routines, though professional oversight remains important."
    },
    {
      question: "What should I look for in an ABA provider?",
      answer: "Look for Board Certified Behavior Analysts (BCBAs), experienced staff, individualized treatment plans, regular progress monitoring, family involvement opportunities, and approaches that respect your child's autonomy and preferences."
    }
  ];

  const financialAidOptions = [
    {
      category: "Insurance Coverage",
      options: [
        "Most states mandate autism coverage under insurance plans",
        "Check with your insurance provider about ABA therapy benefits",
        "Medicaid often covers ABA services for eligible families",
        "Some employers offer enhanced autism benefits"
      ]
    },
    {
      category: "Government Programs",
      options: [
        "Early Intervention services (ages 0-3) through state programs",
        "Special education services through school districts (ages 3-21)",
        "State Developmental Disabilities services",
        "Supplemental Security Income (SSI) for qualifying families"
      ]
    },
    {
      category: "Grants & Scholarships",
      options: [
        "Autism Speaks Family Grant Program",
        "Local autism organizations and foundations",
        "Community service organizations (Rotary, Lions Club)",
        "Religious organizations and community groups"
      ]
    },
    {
      category: "Payment Assistance",
      options: [
        "Sliding scale fees based on income",
        "Payment plans through therapy providers",
        "Fundraising platforms for medical expenses",
        "Family and friends support networks"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-background py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ABA Therapy Course for Parents
          </h1>
          <p className="text-lg text-muted-foreground">
            Comprehensive resources to support your family's ABA therapy journey
          </p>
        </div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 bg-card/50 backdrop-blur-sm">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="dos-donts">Do's & Don'ts</TabsTrigger>
            <TabsTrigger value="faqs">FAQs</TabsTrigger>
            <TabsTrigger value="financial">Financial Aid</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-gentle">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">What is ABA Therapy?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Applied Behavior Analysis (ABA) is a scientific approach to understanding and changing behavior. 
                    It focuses on teaching new skills and reducing challenging behaviors through systematic, 
                    evidence-based methods.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Core Principles:</h4>
                    <ul className="text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Positive reinforcement</li>
                      <li>Data-driven decisions</li>
                      <li>Individualized approaches</li>
                      <li>Skill generalization</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-gentle">
                <CardHeader>
                  <CardTitle className="text-2xl text-secondary">Benefits for Families</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    ABA therapy can help improve communication, social skills, academic performance, 
                    and daily living skills while reducing challenging behaviors and increasing independence.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Areas of Improvement:</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Communication", "Social Skills", "Self-Care", "Academic Skills", "Behavior Management"].map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-gradient-primary text-primary-foreground">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="dos-donts" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-gentle">
                <CardHeader>
                  <CardTitle className="text-2xl text-green-600">Do's ✓</CardTitle>
                  <CardDescription>Effective practices for supporting your child</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {dosAndDonts.dos.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <span className="text-green-600 font-bold">•</span>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-gentle">
                <CardHeader>
                  <CardTitle className="text-2xl text-red-600">Don'ts ✗</CardTitle>
                  <CardDescription>Common pitfalls to avoid</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {dosAndDonts.donts.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <span className="text-red-600 font-bold">•</span>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="faqs" className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-gentle">
              <CardHeader>
                <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
                <CardDescription>Common questions and expert answers about ABA therapy</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left font-medium text-foreground">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="financial" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {financialAidOptions.map((category, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 shadow-gentle">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.options.map((option, optionIndex) => (
                        <li key={optionIndex} className="flex items-start space-x-3">
                          <span className="text-primary font-bold">•</span>
                          <span className="text-muted-foreground text-sm">{option}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="resources" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-gentle">
                <CardHeader>
                  <CardTitle className="text-xl">Professional Organizations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-foreground">Behavior Analyst Certification Board (BACB)</h4>
                      <p className="text-sm text-muted-foreground">Find certified behavior analysts and learn about ABA standards</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Association for Behavior Analysis International</h4>
                      <p className="text-sm text-muted-foreground">Professional development and research resources</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Autism Speaks</h4>
                      <p className="text-sm text-muted-foreground">Advocacy, resources, and family support</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-gentle">
                <CardHeader>
                  <CardTitle className="text-xl">Getting Started</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3 text-muted-foreground">
                    <p className="font-medium text-foreground">Next Steps:</p>
                    <ol className="list-decimal list-inside space-y-2">
                      <li>Contact your pediatrician for an autism evaluation</li>
                      <li>Research ABA providers in your area</li>
                      <li>Check insurance coverage and benefits</li>
                      <li>Schedule consultations with potential providers</li>
                      <li>Ask about parent training opportunities</li>
                    </ol>
                  </div>
                  <Button className="w-full bg-gradient-primary hover:opacity-90 transition-gentle shadow-gentle">
                    Find Local Providers
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ABATherapy;