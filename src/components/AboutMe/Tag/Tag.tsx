type TagProps = {
  label: string;
};

export default function Tag({ label }: TagProps) {
  return (
    // <p className="text-center border rounded-2xl max-w-20 px-4 bg-blue-500 text-white hover:bg-blue-600">
    //   {label}
    // </p>
    <p className="flex gap-1 w-auto tag-item hover:bg-white/10 hover:text-white-900">
      {label}
    </p>
  );
}
