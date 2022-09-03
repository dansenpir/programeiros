import { ChangeEvent, MouseEventHandler, useEffect, useRef, useState } from "react";
import DropdownArrow from "../../../public/images/dropdownArrow.svg";

interface IJobsSearchInput {
  type: 'select' | 'text';
  label: string;
  options?: string[];
  placeholder?: string;
}

const JobsSearchInput = ({ type, label, options, placeholder }: IJobsSearchInput) => {
  const select = useRef(null);
  const [selectedData, setSelectedData] = useState('Escolha');
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [isUserAction, setIsUserAction] = useState(false);
  const [inputData, setInputData] = useState('');

  useEffect(() => {
    if (!isOpenDropdown) return;
    const closeDropdownHandle = () => setIsOpenDropdown(false);
    if (window) {
      window.addEventListener('click', closeDropdownHandle);
      return () => window.removeEventListener('click', closeDropdownHandle);
    };
  }, [isOpenDropdown]);

  const dropdownHandle = () => setIsOpenDropdown(!isOpenDropdown);

  const clickOptionHandle: MouseEventHandler<HTMLDivElement> = (event) => {
    const clickedData = event.currentTarget.outerText;
    const selectLength = select.current.options.length;
    for (let i = 0; i < selectLength; i++) {
      const optionValue = select.current.options[i].value;
      if (clickedData === optionValue) {
        select.current.value = optionValue;
        setSelectedData(optionValue);
      };
    };
    setIsUserAction(true);
  };

  const changeHandle = (event: ChangeEvent<HTMLInputElement>) => {
    setInputData(event.target.value);
    setIsUserAction(event.target.value === '' ? false : true);
  };

  return (
    <div>
      <span className="text-xl font-overpass">
        {label}
      </span>

      {type === 'select' && (
        <div className="relative">
          <select className='hidden' ref={select}>
            {options.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {/* # start o custom select: */}
          <div
            className={`flex items-center justify-between w-full mt-4 px-4 py-2 border rounded-md font-grotesk text-base cursor-pointer ${isOpenDropdown && 'rounded-t-md rounded-b-none'} ${isOpenDropdown && !isUserAction ? 'text-gray-white bg-blue.500 border-blue.300 dark:bg-blue.900 dark:border-blue.500' : 'bg-transparent border-gray.500 text-gray.500'} ${isUserAction && 'bg-opacity-10 border-blue.300 text-blue.300 bg-blue.100 dark:bg-opacity-10 dark:bg-blue.900'}`}
            onClick={dropdownHandle}
          >
            <span>{selectedData}</span>
            <DropdownArrow
              className={`fill-current transition transition-transform duration-300 ${isOpenDropdown ? 'transform -rotate-180 text-gray-white' : 'text-gray.500'} ${isUserAction && 'text-blue.300'}`}
            />
          </div>
          {isOpenDropdown && (
            <div className="absolute w-full z-50">
              {options.map(option => (
                <div
                  className={`block w-full px-4 py-2 border border-t-0 text-base text-left font-grotesk cursor-pointer last:rounded-b-md border-blue.300 bg-blue.100 text-gray-dark transition transition-colors hover:bg-blue.300 dark:border-blue.500 dark:bg-blue.700 dark:text-gray-white dark:hover:bg-blue.500`}
                  key={option}
                  onClick={clickOptionHandle}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
          {/* # end of custom select */}
        </div>
      )}

      {type === 'text' && (
        <input
          className={`w-full mt-4 px-4 py-2 border font-grotesk text-base rounded-md outline-none border-gray.500 bg-transparent text-gray.500 focus:border-blue.300 focus:bg-blue.100 focus:text-gray-dark dark:focus:border-blue.500 dark:focus:bg-blue.700 dark:focus:text-gray-white ${isUserAction && 'bg-opacity-10 border-blue.300 text-blue.300 bg-blue.100 dark:bg-opacity-10 dark:bg-blue.900'}`}
          type="text"
          placeholder={placeholder}
          value={inputData}
          onChange={changeHandle}
        />
      )}
    </div>
  );
}

export { JobsSearchInput };