export function Input(props) {
  const { ...rest } = props;

  return (
    <input
      {...rest}
      className="rounded-sm bg-stone-800 outline-0 text-white py-2 px-4 my-2"
    />
  );
}
