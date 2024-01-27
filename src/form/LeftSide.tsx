interface LeftSideProps {
  index: number
}

const LeftSide: React.FC<LeftSideProps> = ({ index }) => {
  const data = [
    { step: 1, body: "YOUR INFO" },
    { step: 2, body: "ُSELECT A PLAN" },
    { step: 3, body: "ADD-ONS" },
    { step: 4, body: "SUMMARY" }
  ]

  return (
    <ul className="flex flex-col gap-10 bg-[url('/images/bg-sidebar-desktop.svg')] h-full bg-center bg-cover max-w-md rounded-md py-8 pl-16 pr-4">
      {data.map((item, i) => (
        <li className="flex items-center gap-4" key={i}>
          <div
            className={`flex items-center justify-center rounded-full ${
              index === item.step ? "bg-light-gray" : "border border-alabaster"
            }  w-10 h-10`}
          >
            <span
              className={`text-lg font-medium w-6 h-6 flex items-center justify-center mb-0.5 ${
                index === item.step ? "" : "text-alabaster"
              } `}
            >
              {item.step}
            </span>
          </div>
          <div className="flex flex-col">
            <span className=" text-light-gray">STEP {item.step} </span>
            <span className=" text-alabaster">{item.body}</span>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default LeftSide
