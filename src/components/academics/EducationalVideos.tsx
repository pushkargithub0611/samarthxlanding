
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { YoutubeIcon } from "lucide-react";

interface Video {
  title: string;
  channel: string;
  link: string;
  subject: string;
}

const videosByClass: Record<string, Video[]> = {
  "1-5": [
    {
      title: "Basic Mathematics for Class 1-5",
      channel: "NCERT Official",
      link: "https://www.youtube.com/playlist?list=PLUgLcpnv1Yie1kbxQ1T1H91nLR9nVGihW",
      subject: "Mathematics"
    },
    {
      title: "English Learning for Primary Classes",
      channel: "NCERT Official",
      link: "https://www.youtube.com/playlist?list=PLUgLcpnv1YifgU7H9g8PLLh0P3mvdwJ6G",
      subject: "English"
    },
    {
      title: "Environmental Studies",
      channel: "NCERT Official",
      link: "https://www.youtube.com/playlist?list=PLUgLcpnv1YieBZR4N3NFQqBBEkHP0G8_y",
      subject: "EVS"
    }
  ],
  "6-8": [
    {
      title: "Science for Middle School",
      channel: "NCERT Official",
      link: "https://www.youtube.com/playlist?list=PLUgLcpnv1YieKa8FJuK41LW9U8BZpFoCk",
      subject: "Science"
    },
    {
      title: "Mathematics for Class 6-8",
      channel: "NCERT Official",
      link: "https://www.youtube.com/playlist?list=PLUgLcpnv1Yic7KjpXGx7ZoGZWZG6dnR4q",
      subject: "Mathematics"
    },
    {
      title: "Social Science",
      channel: "NCERT Official",
      link: "https://www.youtube.com/playlist?list=PLUgLcpnv1YidZGl_-4vGjk3-GWqPgGtvJ",
      subject: "Social Science"
    }
  ],
  "9-10": [
    {
      title: "Physics Class 9-10",
      channel: "NCERT Official",
      link: "https://www.youtube.com/playlist?list=PLUgLcpnv1YidyYvn7u8M_PZKZP5PQy5_n",
      subject: "Physics"
    },
    {
      title: "Chemistry Fundamentals",
      channel: "NCERT Official",
      link: "https://www.youtube.com/playlist?list=PLUgLcpnv1YifMP_yZvOE0EFYYCwCmJWni",
      subject: "Chemistry"
    },
    {
      title: "Biology Basics",
      channel: "NCERT Official",
      link: "https://www.youtube.com/playlist?list=PLUgLcpnv1YidyDx1CgHxfXq5dYDwHtR-H",
      subject: "Biology"
    }
  ],
  "11-12": [
    {
      title: "Advanced Physics",
      channel: "NCERT Official",
      link: "https://www.youtube.com/playlist?list=PLUgLcpnv1YicBxiNFc_BT-czNGjA8R2Zy",
      subject: "Physics"
    },
    {
      title: "Advanced Chemistry",
      channel: "NCERT Official",
      link: "https://www.youtube.com/playlist?list=PLUgLcpnv1YifCJ_G_HH2_u6oGV3VDz4Z7",
      subject: "Chemistry"
    },
    {
      title: "Advanced Biology",
      channel: "NCERT Official",
      link: "https://www.youtube.com/playlist?list=PLUgLcpnv1YieB_YNLXHe6far8U4q0G7k3",
      subject: "Biology"
    },
    {
      title: "Mathematics for Class 11-12",
      channel: "NCERT Official",
      link: "https://www.youtube.com/playlist?list=PLUgLcpnv1YicR_C5J_N6iQm8GR6kVK_Yi",
      subject: "Mathematics"
    }
  ]
};

export const EducationalVideos = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Educational Resources</CardTitle>
        <CardDescription>Free educational videos from NCERT and other trusted sources</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="1-5" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="1-5">Class 1-5</TabsTrigger>
            <TabsTrigger value="6-8">Class 6-8</TabsTrigger>
            <TabsTrigger value="9-10">Class 9-10</TabsTrigger>
            <TabsTrigger value="11-12">Class 11-12</TabsTrigger>
          </TabsList>
          {Object.entries(videosByClass).map(([classRange, videos]) => (
            <TabsContent key={classRange} value={classRange}>
              <ScrollArea className="h-[500px] pr-4">
                <div className="grid gap-4">
                  {videos.map((video, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-lg">{video.title}</CardTitle>
                            <CardDescription>{video.channel} • {video.subject}</CardDescription>
                          </div>
                          <a
                            href={video.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-accent hover:bg-accent/90 text-white h-10 px-4 py-2"
                          >
                            <YoutubeIcon className="mr-2 h-4 w-4" />
                            Watch Now
                          </a>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};
