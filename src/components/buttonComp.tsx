interface buttonProps {
  text: any;
  clickHandler: () => any;
}

export const GreenButton = ({
  text,
  clickHandler,
}: buttonProps): JSX.Element => {
  return (
    <button
      type="button"
      className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 w-28"
      onClick={clickHandler}>
      {text}
    </button>
  );
};

export const DefaultButton = ({
  text,
  clickHandler,
}: buttonProps): JSX.Element => {
  return (
    <button
      type="button"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-28"
      onClick={clickHandler}>
      {text}
    </button>
  );
};

export const RedButton = ({ text, clickHandler }: buttonProps): JSX.Element => {
  return (
    <button
      type="button"
      className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 w-28"
      onClick={clickHandler}>
      {text}
    </button>
  );
};
