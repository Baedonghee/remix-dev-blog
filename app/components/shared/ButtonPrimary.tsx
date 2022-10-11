import classNames from "classnames";

export function ButtonPrimary(props) {
  const { children, className, ...rest } = props;

  return (
    <button
      className={classNames(
        "bg-slate-500 py-2 px-4 text-white rounded-md hover:opacity-80",
        {
          [className]: className,
        }
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
