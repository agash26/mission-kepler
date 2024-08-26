export default function Skills({ skill }: any) {
  return (
    <>
      <button className="rounded-lg border p-1 border-blue-400 text-blue-400 flex items-center justify-center">
        {skill}
      </button>
    </>
  );
}
