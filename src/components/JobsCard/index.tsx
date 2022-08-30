import Image from 'next/image';
import Link from 'next/link';

type JobsLabel = {
  name: string;
};

function JobTypeLabel({ name }: JobsLabel) {
  return (
    <span className="bg-jobTypeLabel dark:text-black text-white px-2 py-1 rounded-md text-xs">
      {name}
    </span>
  );
}

function JobExpLabel({ name }: JobsLabel) {
  return (
    <span className="bg-jobLevelLabel dark:text-black text-white px-2 py-1 rounded-md text-xs">
      {name}
    </span>
  );
}

type JobsCardProps = {
  jobCompanyLogo: string;
  jobDateTime: string;
  jobTitle: string;
  jobType: string;
  jobExp: string;
  jobDescription: string;
  jobRedirectLink: string;
  jobPageInfoLink: string;
};

function JobsCard({
  jobCompanyLogo,
  jobDateTime,
  jobTitle,
  jobType,
  jobExp,
  jobDescription,
  jobRedirectLink,
  jobPageInfoLink,
}: JobsCardProps) {
  return (
    <div className="space-y-6 flex-col w-72 bg-rounded rounded-3xl p-6 dark:bg-gray.900 bg-white.900">
      <div className="flex pb-6 justify-between items-center">
        <Image
          src={jobCompanyLogo}
          width={96}
          height={96}
          alt="Company Logo"
          className="rounded-full w-24 h-24"
        />
        <span className="text-gray">{jobDateTime}</span>
      </div>
      <strong className="font-bold text-2xl">{jobTitle}</strong>
      <div className="flex space-x-4">
        <JobTypeLabel name={jobType} />
        <JobExpLabel name={jobExp} />
      </div>
      <p className="text-gray leading-5 w-60 overflow-hidden text-ellipsis">
        {jobDescription}
      </p>
      <div className="flex space-x-5">
        <Link href={jobRedirectLink} passHref>
          <a>
            <button className="bg-registerButton border-solid border-registerButton  hover:bg-opacity-90 p-3 rounded-xl text-white">
              Candidatar-se
            </button>
          </a>
        </Link>

        <Link href={jobPageInfoLink} passHref>
          <a>
            <button className=" p-3 rounded-xl text-gray border-solid border-1 border-gray">
              Mais Info
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
}

export { JobsCard };
