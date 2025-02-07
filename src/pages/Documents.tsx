
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { FileText, Upload, Plus } from "lucide-react";

const Documents = () => {
  const { toast } = useToast();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the blog post submission
    toast({
      title: "Success",
      description: "Document has been published successfully!",
      duration: 3000,
    });
    setTitle("");
    setContent("");
    setSelectedFile(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Content Creation Section */}
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Create New Document</CardTitle>
                <CardDescription>Write a blog post or upload documents related to modules</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Document Title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="mb-4"
                    />
                    <Textarea
                      placeholder="Write your content here..."
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      className="min-h-[200px] mb-4"
                    />
                    <div className="flex items-center gap-4">
                      <Input
                        type="file"
                        onChange={handleFileChange}
                        className="hidden"
                        id="file-upload"
                      />
                      <label
                        htmlFor="file-upload"
                        className="flex items-center gap-2 px-4 py-2 border rounded-md cursor-pointer hover:bg-gray-50"
                      >
                        <Upload className="w-4 h-4" />
                        {selectedFile ? selectedFile.name : "Upload Document"}
                      </label>
                      <Button type="submit" className="ml-auto">
                        Publish
                      </Button>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Recent Documents Section */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Documents</CardTitle>
                <CardDescription>Latest uploads and blog posts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((_, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer"
                    >
                      <FileText className="w-5 h-5 text-blue-500" />
                      <div>
                        <h4 className="text-sm font-medium">Sample Document {index + 1}</h4>
                        <p className="text-xs text-gray-500">Added 2 days ago</p>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full">
                    <Plus className="w-4 h-4 mr-2" />
                    View All Documents
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Documents;
