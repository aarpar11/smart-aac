import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { researchArticles } from "@/data/researchArticles";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [email, setEmail] = useState("");

  const filteredArticles = selectedCategory === "All" 
    ? researchArticles 
    : researchArticles.filter(article => article.category === selectedCategory);

  const categories = ["All", ...Array.from(new Set(researchArticles.map(article => article.category)))];

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
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              className="hover:bg-primary/10 border-border/50"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Articles */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {filteredArticles.filter(article => article.featured).map((article, index) => (
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
                  <div className="text-xs text-muted-foreground mb-2">
                    {article.source} • {article.authors}
                  </div>
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
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            {selectedCategory === "All" ? "Latest Research" : `${selectedCategory} Articles`}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article, index) => (
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
                  <div className="text-xs text-muted-foreground mb-2">
                    {article.source}
                  </div>
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
          <CardContent className="space-y-4">
            <div className="flex max-w-md mx-auto gap-2">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
              />
              <Button className="bg-gradient-primary hover:opacity-90 transition-gentle shadow-gentle">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Join 2,500+ researchers and families staying informed about autism research
            </p>
          </CardContent>
        </Card>

        {/* Coming Soon Section */}
        <Card className="mt-8 bg-gradient-secondary/20 border-border/50">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Coming Soon</CardTitle>
            <CardDescription>
              Exciting new features in development for our autism research platform
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="text-center p-4 bg-card/30 rounded-lg">
                <h3 className="font-semibold mb-2">AI Research Assistant</h3>
                <p className="text-sm text-muted-foreground">
                  Get personalized research summaries based on your interests
                </p>
              </div>
              <div className="text-center p-4 bg-card/30 rounded-lg">
                <h3 className="font-semibold mb-2">Interactive Data Visualizations</h3>
                <p className="text-sm text-muted-foreground">
                  Explore research findings through interactive charts and graphs
                </p>
              </div>
              <div className="text-center p-4 bg-card/30 rounded-lg">
                <h3 className="font-semibold mb-2">Researcher Connect</h3>
                <p className="text-sm text-muted-foreground">
                  Network with autism researchers and share insights
                </p>
              </div>
              <div className="text-center p-4 bg-card/30 rounded-lg">
                <h3 className="font-semibold mb-2">Mobile App</h3>
                <p className="text-sm text-muted-foreground">
                  Access research on-the-go with our dedicated mobile application
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
              <div className="flex max-w-md mx-auto gap-2">
                <Input
                  type="email"
                  placeholder="Get notified about new features"
                  className="flex-1"
                />
                <Button variant="outline" className="bg-primary/10">
                  Notify Me
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Blog;