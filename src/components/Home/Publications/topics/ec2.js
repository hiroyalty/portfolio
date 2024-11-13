import { textHightLighted } from "./textHightLighted";

export default function EC2() {
  const tasks = [
    {
      text: "In another project based in a real-world scenario, I acted as the Cloud Specialist responsible for migrating a workload running in a Corporate DataCenter to AWS. The application and database were migrated to AWS using the Lift & Shift (rehost) model, moving both application and database data.",
      keywords: ["AWS", "EC2", "RDS", "S3"]
    }
  ];

  return (
    <div className="flex flex-col max-w-xl px-4 space-y-5 md:px-0">
      <div className="flex flex-col space-y-2">
        <span className="text-sm tracking-wide text-gray-600 sm:text-lg font-Arimo">
          EC2 <span className="text-secondary">@Cloud Engineering</span>
        </span>
        <span className="font-mono text-xs text-gray-500">June 13, 2024</span>
        <span
          className="font-mono text-xs text-secondary hover:cursor-pointer"
          style={{ fontSize: "0.8rem" }}
          onClick={() => window.open("https://medium.com/@michaelfamodun/migration-of-a-workload-running-in-a-corporate-data-center-to-aws-using-the-amazon-ec2-and-rds-e01c02bd557a", "_blank")}
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
