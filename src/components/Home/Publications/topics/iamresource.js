import { textHightLighted } from "./textHightLighted";

export default function IamResource() {
  const tasks = [
    {
      text: "In this project based on a real-world scenario, I acted as Cloud Specialist with the mission to migrate users in an automated way and manage AWS IAM (Identity and Access Management) resources. There were 100 users that needed to be migrated and have MFA (Multi-factor authentication) enabled on their accounts, as this is a security best practice",
      keywords: ["AWS", "IAM", "EC2", "RDS", "S3"]
    }
  ];

  return (
    <div className="flex flex-col max-w-xl px-4 space-y-5 md:px-0">
      <div className="flex flex-col space-y-2">
        <span className="text-sm tracking-wide text-gray-600 sm:text-lg font-Arimo">
          IAMResource <span className="text-secondary">@Cloud Engineering</span>
        </span>
        <span className="font-mono text-xs text-gray-500">June 13, 2024</span>
        <span
          className="font-mono text-xs text-secondary hover:cursor-pointer"
          style={{ fontSize: "0.8rem" }}
          onClick={() => window.open("https://medium.com/@michaelfamodun/automated-user-migration-and-management-of-aws-identity-and-access-management-iam-resources-dfec1cc94650", "_blank")}
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
