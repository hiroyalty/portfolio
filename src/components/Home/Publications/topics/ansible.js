import { textHightLighted } from "./textHightLighted";

export default function Ansible() {
  const tasks = [
    {
      text: "In this project based in a real-world scenario, I worked as Cloud Engineer using DevOps, where I created and implemented an e-Commerce MVP (Minimum Viable Product) on AWS in less than 2 hours and in an automated way using Terraform and Ansible (Infrastructure as Code — IaC).",
      keywords: ["AWS", "Python", "Ansible"]
    }
  ];

  return (
    <div className="flex flex-col max-w-xl px-4 space-y-5 md:px-0">
      <div className="flex flex-col space-y-2">
        <span className="text-sm tracking-wide text-gray-600 sm:text-lg font-Arimo">
          Ansible <span className="text-secondary">@Cloud Engineering</span>
        </span>
        <span className="font-mono text-xs text-gray-500">June 13, 2024</span>
        <span
          className="font-mono text-xs text-secondary hover:cursor-pointer"
          style={{ fontSize: "0.8rem" }}
          onClick={() => window.open("https://medium.com/@michaelfamodun/implementation-of-an-e-commerce-system-on-aws-in-an-automated-way-using-terraform-and-ansible-d3279cfcff5f", "_blank")}
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
