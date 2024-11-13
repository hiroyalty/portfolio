import { textHightLighted } from "./textHightLighted";

export default function Terraform() {
  const tasks = [
    {
      text: "In this project based on a real-world scenario, I acted as DevSecOps Engineer, and I deployed a set of EC2 instances and infrastructure in an automated way using Terraform (infrastructure as code — IaC). Also, it was necessary to install a specific security agent on all these instances in an automated way.",
      keywords: ["AWS", "Terraform", "EC2"]
    }
  ];

  return (
    <div className="flex flex-col max-w-xl px-4 space-y-5 md:px-0">
      <div className="flex flex-col space-y-2">
        <span className="text-sm tracking-wide text-gray-600 sm:text-lg font-Arimo">
          Terraform <span className="text-secondary">@Cloud Engineering</span>
        </span>
        <span className="font-mono text-xs text-gray-500">June 13, 2024</span>
        <span
          className="font-mono text-xs text-secondary hover:cursor-pointer"
          style={{ fontSize: "0.8rem" }}
          onClick={() => window.open("https://medium.com/@michaelfamodun/implementation-of-a-set-of-ec2-instances-using-terraform-and-aws-systems-manager-configuration-with-8f7a5db15666")}
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
