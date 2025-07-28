import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen, Mic, Camera, Code } from "lucide-react";

const interests = [
  {
    icon: BookOpen,
    title: "Reading",
    description: "Current favorites in behavioral economics, technology, and science fiction.",
    items: ["Thinking, Fast and Slow", "The Alignment Problem", "Klara and the Sun"]
  },
  {
    icon: Mic,
    title: "Podcasts",
    description: "Economics, technology, and thought-provoking conversations.",
    items: ["EconTalk", "a16z Podcast", "The Knowledge Project"]
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Capturing moments and exploring creative perspectives.",
    items: ["Street Photography", "Travel", "Economics Data Visualization"]
  },
  {
    icon: Code,
    title: "Side Projects",
    description: "Experimenting with data visualization and economic analysis tools.",
    items: ["Economic Dashboard", "Signal Analysis Tool", "Market Visualization"]
  }
];

const tools = [
  { name: "R", category: "Statistical Analysis", proficiency: "Expert" },
  { name: "Python", category: "Data Science", proficiency: "Advanced" },
  { name: "Stata", category: "Econometrics", proficiency: "Expert" },
  { name: "SQL", category: "Data Management", proficiency: "Advanced" },
  { name: "Tableau", category: "Visualization", proficiency: "Advanced" },
  { name: "Git", category: "Version Control", proficiency: "Intermediate" }
];

const recommendations = [
  {
    title: "The Undoing Project",
    author: "Michael Lewis",
    type: "Book",
    description: "A fascinating look at the friendship between Daniel Kahneman and Amos Tversky and their revolutionary work in behavioral economics."
  },
  {
    title: "All-In Podcast",
    author: "Chamath, Jason, Sacks & Friedberg",
    type: "Podcast",
    description: "Sharp insights on technology, economics, and markets from seasoned investors and entrepreneurs."
  },
  {
    title: "Observable",
    author: "Observable Team",
    type: "Tool",
    description: "Excellent platform for creating interactive data visualizations and economic analysis notebooks."
  }
];

export default function Miscellania() {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Miscellania</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Beyond economics and data science - interests, tools, recommendations, 
            and the occasional random thought.
          </p>
        </div>

        {/* Interests & Hobbies */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Interests & Hobbies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {interests.map((interest, index) => (
              <Card key={index} className="hover:shadow-card transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <interest.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{interest.title}</CardTitle>
                      <CardDescription>{interest.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {interest.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Tools & Technologies</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((tool, index) => (
              <Card key={index} className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-foreground">{tool.name}</h3>
                    <p className="text-sm text-muted-foreground">{tool.category}</p>
                  </div>
                  <Badge 
                    variant={tool.proficiency === "Expert" ? "default" : "secondary"}
                    className="text-xs"
                  >
                    {tool.proficiency}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Recommendations</h2>
          <div className="space-y-6">
            {recommendations.map((rec, index) => (
              <Card key={index} className="hover:shadow-card transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{rec.title}</CardTitle>
                      <CardDescription className="text-base">
                        by {rec.author}
                      </CardDescription>
                    </div>
                    <Badge variant="outline">{rec.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{rec.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Random Thoughts */}
        <div className="bg-gradient-subtle rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-foreground mb-4">Random Thoughts</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              "The best economic models are like good maps - they're useful not because 
              they're perfectly accurate, but because they help us navigate complexity."
            </p>
            <p>
              "In data science, the most dangerous phrase isn't 'I don't know' - 
              it's 'the data shows' without proper context."
            </p>
            <p>
              "Economics taught me to think about incentives. Data science taught me 
              to test my assumptions. Combined, they're a powerful toolkit for 
              understanding the world."
            </p>
          </div>
          
          <div className="mt-8 text-center">
            <Button variant="outline" asChild>
              <a href="mailto:contact@mmarteaga.com">
                Share Your Thoughts
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
