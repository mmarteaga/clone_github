import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "The Economics of Data-Driven Marketing",
    excerpt: "How economic principles can inform better marketing strategies in the digital age.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Economics",
    tags: ["Marketing", "Data Science", "Economics"]
  },
  {
    title: "Signal vs. Noise in Business Intelligence",
    excerpt: "Applying information theory to distinguish meaningful insights from data noise.",
    date: "2023-12-20",
    readTime: "6 min read",
    category: "Data Science",
    tags: ["Information Theory", "Business Intelligence", "Analytics"]
  },
  {
    title: "Behavioral Economics in Product Design",
    excerpt: "How understanding cognitive biases can lead to better user experiences and business outcomes.",
    date: "2023-11-10",
    readTime: "10 min read",
    category: "Behavioral Economics",
    tags: ["Product Design", "UX", "Behavioral Economics"]
  },
  {
    title: "Central Banking in the Digital Economy",
    excerpt: "Reflections on monetary policy challenges in an increasingly digital financial landscape.",
    date: "2023-10-05",
    readTime: "12 min read",
    category: "Finance",
    tags: ["Central Banking", "Digital Economy", "Monetary Policy"]
  }
];

const publications = [
  {
    title: "Economic Insights for Tech Leaders",
    publication: "Harvard Business Review",
    date: "2024-02-01",
    type: "Article"
  },
  {
    title: "Data Science in Economic Consulting",
    publication: "Journal of Economic Consulting",
    date: "2023-09-15",
    type: "Research"
  }
];

export default function Writing() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Writing</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Thoughts on economics, data science, and the intersection of behavioral insights 
            with practical business applications.
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Recent Posts</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300 group cursor-pointer">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      {formatDate(post.date)}
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime}
                      </div>
                      <div className="flex gap-1">
                        {post.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="group/btn">
                      Read More
                      <ArrowRight className="h-3 w-3 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* External Publications */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-foreground mb-6">External Publications</h2>
          <div className="space-y-4">
            {publications.map((pub, index) => (
              <Card key={index} className="hover:shadow-card transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {pub.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {pub.publication} • {formatDate(pub.date)}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{pub.type}</Badge>
                      <Button variant="ghost" size="sm">
                        View Article
                        <ArrowRight className="h-3 w-3 ml-1" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-subtle rounded-lg p-8 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Stay Updated
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get notified when I publish new insights on economics, data science, 
            and behavioral economics applications in business.
          </p>
          <Button size="lg" className="bg-gradient-primary">
            Subscribe to Updates
          </Button>
        </div>
      </div>
    </div>
    </div>
  );
}
