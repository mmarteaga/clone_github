import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Calendar } from "lucide-react";

const researchPapers = [
  {
    title: "Information Economics and Signal Formation in Digital Markets",
    description: "An examination of how digital signals influence market beliefs and consumer behavior in online platforms.",
    status: "Working Paper",
    year: "2024",
    tags: ["Information Economics", "Digital Markets", "Behavioral Economics"],
    link: "#"
  },
  {
    title: "Econometric Analysis of Marketing Attribution in B2B Contexts",
    description: "Applying advanced econometric methods to understand marketing touchpoint effectiveness in business-to-business environments.",
    status: "In Review",
    year: "2024",
    tags: ["Econometrics", "Marketing", "B2B"],
    link: "#"
  },
  {
    title: "Central Bank Communication and Market Expectations",
    description: "How central bank communication strategies affect market participant expectations and economic outcomes.",
    status: "Published",
    year: "2023",
    tags: ["Central Banking", "Communication", "Market Expectations"],
    link: "#"
  }
];

const workingPapers = [
  {
    title: "Data Science Applications in Economic Consulting",
    description: "Bridging traditional economic analysis with modern data science methodologies.",
    year: "2024",
    tags: ["Data Science", "Economic Consulting"],
  },
  {
    title: "Behavioral Insights in Marketing Strategy",
    description: "Leveraging behavioral economics to inform data-driven marketing decisions.",
    year: "2024",
    tags: ["Behavioral Economics", "Marketing Strategy"],
  }
];

export default function Research() {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Research</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My research focuses on information economics, econometric methods, and the intersection 
            of behavioral insights with data-driven decision making.
          </p>
        </div>

        {/* Research Interests */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Research Interests</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Information Economics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  How signals form beliefs and shape behavior in economic systems.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Applied Econometrics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Advanced statistical methods for causal inference and policy evaluation.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Behavioral Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Integrating behavioral economics with data science for practical applications.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Publications */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Publications & Papers</h2>
          <div className="space-y-6">
            {researchPapers.map((paper, index) => (
              <Card key={index} className="hover:shadow-card transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{paper.title}</CardTitle>
                      <CardDescription className="text-base">
                        {paper.description}
                      </CardDescription>
                    </div>
                    <Badge 
                      variant={paper.status === "Published" ? "default" : "secondary"}
                      className="ml-4"
                    >
                      {paper.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {paper.year}
                      </div>
                      <div className="flex gap-2">
                        {paper.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={paper.link}>
                        <FileText className="h-4 w-4 mr-2" />
                        View Paper
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Working Papers */}
        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-6">Working Papers</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {workingPapers.map((paper, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{paper.title}</CardTitle>
                  <CardDescription>{paper.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {paper.year}
                    </div>
                    <div className="flex gap-2">
                      {paper.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
