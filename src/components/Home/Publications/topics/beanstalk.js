import { textHightLighted } from "./textHightLighted";

export default function Beanstalk() {
  const tasks = [
    {
      text: "In this project based on a real-world scenario, I was responsible for implementing an application that needs to support the high demand of a large number of users accessing it simultaneously. This application has been used in a large conference that had more than 10,000 people, in-person and online, with participants from all over the world.",
      keywords: ["AWS", "Elastic Beanstalk", "Dynamo DB", "CloudFront"]
    }
  ];

  return (
    <div className="flex flex-col max-w-xl px-4 space-y-5 md:px-0">
      <div className="flex flex-col space-y-2">
        <span className="text-sm tracking-wide text-gray-600 sm:text-lg font-Arimo">
          Beanstalk <span className="text-secondary">@Cloud Engineering</span>
        </span>
        <span className="font-mono text-xs text-gray-500">June 13, 2024</span>
        <span
          className="font-mono text-xs text-secondary hover:cursor-pointer"
          style={{ fontSize: "0.8rem" }}
          onClick={() => window.open("https://medium.com/@michaelfamodun/implementation-of-a-scalable-web-application-using-the-services-of-aws-elastic-beanstalk-dynamodb-dd870bd3bd67", "_blank")}
        >
          medium.com/@michaelfamodun
        </span>
      </div>
      <div className="flex flex-col space-y-4 text-xs sm:text-sm">
        {tasks.map((item, index) => (
          <div key={index} className="flex flex-row space-x-1">
            <span
              className="text-base text-gray-500 sm:text-base"
              dangerouslySetInnerHTML={{
                __html: textHightLighted(item.text, item.keywords),
              }}
            ></span>
          </div>
        ))}
      </div>
    </div>
  );
}
