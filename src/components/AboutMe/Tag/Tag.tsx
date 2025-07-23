type TagProps = {
  label: string;
};

export default function Tag({ label }: TagProps) {
  return (
    <p className="text-center border rounded-2xl max-w-23 px-4 bg-blue-500 text-white hover:bg-blue-600">
      {label}
    </p>
  );
}
