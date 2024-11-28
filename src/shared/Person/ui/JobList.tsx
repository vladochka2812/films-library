import { useMemo } from 'react';
import { JobListType } from '../model/model';
import { Job } from './Job';

export const JobList = ({ title, items }: JobListType) => {
  const keys = useMemo(() => {
    return Object.keys(items).reverse();
  }, [items]);

  return (
    <div className="mt-5">
      <h3 className="text-[1.3rem] font-semibold mb-2">{title}</h3>
      <div className="border shadow-lg mt-2.5">
        {keys?.map((key) => (
          <div key={key} className="border-b">
            {items[key].map((item, index) => (
              <div key={index}>
                <Job {...item} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
