import { Info } from '@/shared/Person/ui/Info';
import { PersonPageSectionsType } from './model/model';
import { Social } from '@/shared/Person/ui/Social';
import { Biography } from '@/shared/Person/ui/Biography';
import { KnownFor } from '@/shared/Person/ui/KnownFor';
import { JobList } from '@/shared/Person/ui/JobList';

export const PersonPageSections = ({
  info,
  social,
  image,
  name,
  biography,
  credits,
  acting,
  jobs,
}: PersonPageSectionsType) => {
  return (
    <div className="flex lg:flex-row flex-col py-[30px] px-10 text-black/90">
      <div className="max-w-[300px] w-[300px]">
        <div className="w-[300px] h-[450px] mb-[30px]">
          <img
            src={image}
            alt="person"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <Social {...social} />
        <Info {...info} />
      </div>
      <div className="lg:ml-[30px] lg:max-w-[920px] lg:w-[100vw-380px]">
        <h2 className="text-[2.2rem] font-semibold">{name}</h2>
        <Biography text={biography} />
        <KnownFor items={credits} />
        {acting && <JobList title="Acting" items={acting} />}
        {jobs &&
          Object.keys(jobs).map((department) => (
            <div key={department}>
              <JobList title={department} items={jobs[department]} />
            </div>
          ))}
      </div>
    </div>
  );
};
