import { useFormStore } from "../context/formStore"

const StepTwo = () => {
  const { isMonthly, setIsMonthly, plan, setPlan } = useFormStore()

  const data = [
    {
      image: "/icon-arcade.svg",
      title: "Arcade",
      montly: "$9/mo",
      yearly: "$90/yr"
    },
    {
      image: "/icon-advanced.svg",
      title: "Advanced",
      montly: "$12/mo",
      yearly: "$120/yr"
    },
    {
      image: "/icon-pro.svg",
      title: "Pro",
      montly: "$15/mo",
      yearly: "$150/yr"
    }
  ]

  const toggleIsMonthly = () => {
    setIsMonthly(!isMonthly)
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-marine-blue">
          Select your plan
        </h1>
        <p className="text-cool-gray">
          You have the option of monthly or yearly billing.
        </p>
      </div>

      <div className="flex w-full gap-2">
        {data.map((item, i) => (
          <div
            className={`flex flex-col items-start justify-between w-1/3 px-4 py-3 border rounded-md hover:cursor-pointer ${
              plan === item.title
                ? " border-pastel-blue bg-magnolia"
                : "border-light-blue"
            } `}
            onClick={() => setPlan(item.title)}
            key={i}
          >
            <img
              src={`/images/${item.image}`}
              alt={`${item.title}`}
              className="w-12 h-12 mb-12"
            />
            <div className="flex flex-col gap-2">
              <span className="font-bold text-marine-blue text-lg">
                {item.title}
              </span>
              <span className="text-cool-gray">
                {isMonthly ? item.montly : item.yearly}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center  justify-center gap-4 bg-magnolia rounded-md py-4">
        <div className={`${isMonthly ? "font-bold" : ""}`}>Monhtly</div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            onChange={() => toggleIsMonthly()}
            checked={!isMonthly}
          />
          <div className="w-11 h-6 bg-purplish-blue peer-focus:outline-none peer-focus:ring-purplish-blue rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-purplish-blue  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-alabaster after:border-purplish-blue after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-purplish-blue"></div>
        </label>
        <div className={`${isMonthly ? "" : "font-bold"}`}>Yearly</div>
      </div>
    </div>
  )
}

export default StepTwo
