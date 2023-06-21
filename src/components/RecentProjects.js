import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import ProjectPhoto1 from "./images/project1.png";
import ProjectPhoto2 from "./images/project2.png";
import ProjectPhoto3 from "./images/project3.png";
import ProjectPhoto4 from "./images/project4.png";

export default function RecentProjects() {
  const data = [
    {
      label: "All",
      value: "all",
      images: [ProjectPhoto1, ProjectPhoto2, ProjectPhoto3, ProjectPhoto4],
    },
    {
      label: "Branding",
      value: "branding",
      images: [ProjectPhoto1, ProjectPhoto2, ProjectPhoto3],
    },
    {
      label: "Web design",
      value: "web",
      images: [ProjectPhoto4, ProjectPhoto1],
    },
    {
      label: "Digital Marketing",
      value: "dmarketing",
      images: [ProjectPhoto1, ProjectPhoto2, ProjectPhoto3, ProjectPhoto4],
    },
  ];

  const [activeTab, setActiveTab] = React.useState(data[0].value);

  const shuffleImages = (images) => {
    for (let i = images.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [images[i], images[j]] = [images[j], images[i]];
    }
    return images;
  };

  return (
    <div>
      <div className="lg:w-8/12 lg:pl-28 sm:pl-6 py-10 sm:py-20 lg:py-20">
        <h1 className="text-3xl font-semibold text-gray-900">
          Some of our <br />
          <span className="text-gray-900/75">Recent Projects</span>
        </h1>
      </div>

      <div className="lg:w-8/12 sm:w-full lg:pl-28 py-6 -mt-20">
        <Tabs value={activeTab}>
          <TabsHeader
            className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
            indicatorProps={{
              className:
                "bg-transparent border-b-4 border-spaniel shadow-none rounded-none",
            }}
          >
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => setActiveTab(value)}
                className={
                  activeTab === value ? "text-dark border-spaniel" : ""
                }
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, images }) => {
              const shuffledImages = shuffleImages(images);
              return (
                <TabPanel key={value} value={value}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                    {shuffledImages.map((imageUrl, index) => (
                      <div key={index}>
                        <img
                          src={imageUrl}
                          alt="Recent Project"
                          className="w-full h-auto object-cover rounded"
                        />
                      </div>
                    ))}
                  </div>
                </TabPanel>
              );
            })}
          </TabsBody>
        </Tabs>
      </div>
    </div>
  );
}
