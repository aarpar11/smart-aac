import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const articles = [
    {
      title: "New Insights into Sensory Processing in Autism",
      excerpt: "Recent research reveals how sensory integration therapy can significantly improve daily functioning for autistic individuals.",
      category: "Research",
      date: "2024-01-15",
      readTime: "5 min read",
      featured: true
    },
    {
      title: "The Role of Routine in Autism Support",
      excerpt: "Understanding how structured routines can provide comfort and reduce anxiety for autistic individuals and their families.",
      category: "Therapy",
      date: "2024-01-12",
      readTime: "7 min read",
      featured: false
    },
    {
      title: "Communication Breakthroughs: AAC Technology Advances",
      excerpt: "Exploring the latest augmentative and alternative communication tools that are transforming how autistic individuals express themselves.",
      category: "Technology",
      date: "2024-01-10",
      readTime: "6 min read",
      featured: true
    },
    {
      title: "Supporting Families: New Resources for Parents",
      excerpt: "Comprehensive guide to the latest support programs and financial aid options available for families with autistic children.",
      category: "Family Support",
      date: "2024-01-08",
      readTime: "8 min read",
      featured: false
    },
    {
      title: "Early Intervention Success Stories",
      excerpt: "Real-world case studies showing the positive impact of early autism intervention programs on long-term outcomes.",
      category: "Early Intervention",
      date: "2024-01-05",
      readTime: "10 min read",
      featured: false
    },
    {
      title: "Workplace Inclusion: Creating Autism-Friendly Environments",
      excerpt: "How employers are adapting their practices to better support autistic employees and create inclusive workplaces.",
      category: "Inclusion",
      date: "2024-01-03",
      readTime: "4 min read",
      featured: false
    }
  ];

  const categories = ["All", "Research", "Therapy", "Technology", "Family Support", "Early Intervention", "Inclusion"];

  return (
    <div className="min-h-screen bg-gradient-background py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Autism Research Blog
          </h1>
          <p className="text-lg text-muted-foreground">
            AI-curated latest findings and breakthroughs in autism research
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              size="sm"
              className="hover:bg-primary/10 border-border/50"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Articles */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {articles.filter(article => article.featured).map((article, index) => (
              <Card key={index} className="group hover:shadow-gentle transition-gentle cursor-pointer bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="bg-gradient-primary text-primary-foreground">
                      {article.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{article.readTime}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-gentle">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 leading-relaxed">
                    {article.excerpt}
                  </CardDescription>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10">
                      Read More →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Articles */}
        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-6">Latest Research</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <Card key={index} className="group hover:shadow-gentle transition-gentle cursor-pointer bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="border-primary/30">
                      {article.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{article.readTime}</span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-gentle line-clamp-2">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </CardDescription>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10">
                      Read →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <Card className="mt-12 bg-gradient-calm border-border/50">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Stay Updated</CardTitle>
            <CardDescription>
              Get the latest autism research findings delivered to your inbox
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button className="bg-gradient-primary hover:opacity-90 transition-gentle shadow-gentle">
              Subscribe to Newsletter
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Blog;