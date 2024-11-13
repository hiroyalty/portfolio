import { useRef, useState} from 'react';
import { motion } from "framer-motion";
import ArrowIcon from '@/components/Icons/ArrowIcon';
import Ansible from "./topics/ansible";
import Beanstalk from './topics/beanstalk';
import CloudCost from './topics/cloudcost';
import EC2 from './topics/ec2';
import IamResource from './topics/iamresource';


export default function Publications() {
  const barRef = useRef(null);

  const GetDescription = () => {
    switch (PublicationType) {
      case "Ansible":
        return <Ansible />;
      case "Beanstalk":
        return <Beanstalk />;
      case "CloudCost":
        return <CloudCost />;
      case "EC2":
        return <EC2 />;
      case "IamResource":
        return <IamResource />;
    }
  };
  const [PublicationType, setPublicationType] = useState("Ansible");
  return (
    <section id="publicationSection">
      <div className="flex flex-col items-center pt-20 pb-10 snap-start bg-primary">
      <div
        className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] 
        md:w-[700px] lg:w-[900px] "
      >
        <div className="flex flex-row items-center ">
          <div className="flex flex-row items-center mr-4">
            <span className="flex-none pl-4 text-lg font-bold tracking-wider text-gray-500 opacity-85 sm:text-2xl">
              Publications
            </span>
          </div>
          <div className="bg-gray-400 h-[0.2px] w-full sm:w-98 ml-4"></div>
        </div>
        </div>
      </div>

      <div
        className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0 md:justify-center md:items-start "
      >
        <CompaniesBar setPublicationType={setPublicationType} />
        
        {GetDescription()}
      </div>
    </section>
  );
}

const CompaniesBar = props => {
  const [barPosition, setBarPosition] = useState(-6); // Green bar position by the default it's -20px
  const [barAbovePosition, setBarAbovePosition] = useState(0);
  const [companyNameBackgroundColorGreen, setCompanyNameBackgroundColorGreen] = useState([
    true,
    false,
    false,
    false,
    false
  ]);
  const TopicButton = props => {
    return (
      <button
        onClick={() => {
          setBarPosition(props?.BarPosition);
          setBarAbovePosition(props?.BarAvobePosition);
          props.setPublicationType(props?.PublicationType);
          setCompanyNameBackgroundColorGreen(props?.CompanyNameBackgroundColorGreen);
        }}
        className={`flex-none sm:text-base text-xs text-center md:text-left  hover:text-secondary
             hover:bg-ResumeButtonHover rounded  font-mono  
             py-3 md:pl-6 md:px-4 md:w-44 w-32 duration-500
             ${
               companyNameBackgroundColorGreen[props?.ButtonOrderOfcompanyNameBackgroundColorGreen]
                 ? "bg-ResumeButtonHover text-secondary"
                 : "text-gray-500"
             }`}
      >
        {props?.CompanyName}
      </button>
    );
  };

  return (
    <div id="Publications">
      <div className="flex flex-col order-1 pl-8 space-y-1 md:order-2 md:pl-0 ">
  <div className="flex flex-row space-y-0 md:flex-col md:space-y-4">
    <div className="flex items-center space-x-2">
      <ArrowIcon className="flex-none w-4 h-4 md:h-6 md:w-5 text-secondary" />
      <TopicButton
        ButtonOrderOfcompanyNameBackgroundColorGreen={0}
        CompanyName="Ansible"
        BarPosition={-12}
        BarAvobePosition={1}
        PublicationType="Ansible"
        CompanyNameBackgroundColorGreen={[true, false, false, false, false]}
        setPublicationType={props.setPublicationType}
      />
    </div>
    <div className="flex items-center space-x-2">
      <ArrowIcon className="flex-none w-4 h-4 md:h-6 md:w-5 text-secondary" />
      <TopicButton
        ButtonOrderOfcompanyNameBackgroundColorGreen={1}
        CompanyName="Beanstalk"
        BarPosition={32}
        BarAvobePosition={129}
        PublicationType="Beanstalk"
        CompanyNameBackgroundColorGreen={[false, true, false, false, false]}
        setPublicationType={props.setPublicationType}
      />
    </div>
    <div className="flex items-center space-x-2">
      <ArrowIcon className="flex-none w-4 h-4 md:h-6 md:w-5 text-secondary" />
      <TopicButton
        ButtonOrderOfcompanyNameBackgroundColorGreen={2}
        CompanyName="CloudCost"
        BarPosition={76}
        BarAvobePosition={257}
        PublicationType="CloudCost"
        CompanyNameBackgroundColorGreen={[false, false, true, false, false]}
        setPublicationType={props.setPublicationType}
      />
    </div>
    <div className="flex items-center space-x-2">
      <ArrowIcon className="flex-none w-4 h-4 md:h-6 md:w-5 text-secondary" />
      <TopicButton
        ButtonOrderOfcompanyNameBackgroundColorGreen={3}
        CompanyName="EC2"
        BarPosition={120}
        BarAvobePosition={385}
        PublicationType="EC2"
        CompanyNameBackgroundColorGreen={[false, false, false, true, false]}
        setPublicationType={props.setPublicationType}
      />
    </div>
    <div className="flex items-center space-x-2">
      <ArrowIcon className="flex-none w-4 h-4 md:h-6 md:w-5 text-secondary" />
      <TopicButton
        ButtonOrderOfcompanyNameBackgroundColorGreen={4}
        CompanyName="IamResource"
        BarPosition={164}
        BarAvobePosition={513}
        PublicationType="IamResource"
        CompanyNameBackgroundColorGreen={[false, false, false, false, true]}
        setPublicationType={props.setPublicationType}
      />
    </div>
  </div>
  <div className="block md:hidden h-0.5 rounded bg-gray-500">
    <motion.div animate={{ x: barAbovePosition }} className="w-[128px] h-0.5 rounded bg-primary"></motion.div>
  </div>
</div>
    </div>
  );
};