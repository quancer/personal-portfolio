export default function PsCard({
  id,
  pName,
  pscore,
  setIncrease,
  setDecrease,
}) {
  return (
    <li
      className="flex justify-between my-1 border p-2 rounded-xl shadow-md

	"
    >
      <p>{pName}</p>
      <div className="flex gap-4">
        <button onClick={() => setDecrease(id)}>-</button>
        <p className="w-5 text-center">{pscore}</p>
        <button onClick={() => setIncrease(id)}>+</button>
      </div>
    </li>
  );
}
