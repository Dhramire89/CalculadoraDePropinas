const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

type TippercentageFormProps = {
  setTip: React.Dispatch<React.SetStateAction<number>>; // se infiere del App.tsx
  tip: number;
};
export default function TippercentageForm({
  setTip,
  tip,
}: TippercentageFormProps) {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina</h3>
      <form>
        {tipOptions.map((tipOptions) => (
          <div key={tipOptions.id} className="flex gap-2">
            <label htmlFor={tipOptions.id}> {tipOptions.label}</label>
            <input
              id={tipOptions.id}
              type="radio"
              name="tip"
              value={tipOptions.value}
              onChange={(e) => setTip(+e.target.value)} // se coloca el signo de  + para convertir el valor a number
              checked={tipOptions.value === tip}
            ></input>
          </div>
        ))}
      </form>
    </div>
  );
}
