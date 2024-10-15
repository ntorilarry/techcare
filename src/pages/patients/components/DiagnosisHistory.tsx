import { HeartRate, RespiratoryRate, Temperature } from "../../../assets";
import Chart from "./Chart";
import DiagnosisList from "./DiagnosisList";

const DiagnosisHistory = () => {
  const diagnosis = [
    {
      icon: RespiratoryRate,
      title: "Respiratory Rate",
      value: "20 bpm",
      status: "Normal",
      color: "#E0F3FA",
    },
    {
      icon: Temperature,
      title: "Temperature",
      value: "98.6°F",
      status: "Normal",
      color: "#FFE6E9",
    },
    {
      icon: HeartRate,
      title: "Heart Rate",
      value: "78 bpm",
      status: "Lower than Average",
      color: "#FFE6F1",
    },
  ];
  return (
    <div className="m-4">
      <main className="lg:pl-72">
        <div className="xl:pr-80">
          <div className="p-4 mt-[70px] bg-white h-[90vh] overflow-x-hidden overflow-y-auto">
            {/* Set a max height and enable vertical scrolling */}
            <p className="font-bold text-primary pb-3 text-xl">
              Diagnosis History
            </p>
            <Chart />
            <div className="grid md:grid-cols-2 gap-2 lg:grid-cols-3">
              {diagnosis.map((data, index) => (
                <div
                  key={index}
                  style={{ backgroundColor: data.color }}
                  className="overflow-hidden  rounded-xl"
                >
                  <div className="px-4 py-5">
                    <img
                      src={data.icon}
                      className="h-18 w-18 my-auto"
                      aria-hidden="true"
                      alt=""
                    />
                    <p className="mt-4 text-base font-bold text-primary">
                      {data.title}
                    </p>
                    <p className="mt-1 text-3xl font-extrabold text-primary">
                      {data.value}
                    </p>
                    <p className="mt-4 text-sm font-semibold text-primary">
                      {data.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <DiagnosisList />
        </div>
      </main>
    </div>
  );
};

export default DiagnosisHistory;
