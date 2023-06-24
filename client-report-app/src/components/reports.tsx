import React from "react";
import { uniqueNamesGenerator, Config, names, NumberDictionary } from 'unique-names-generator';
import '../styles/reports.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Button from "./common.tsx/button";

interface Props {
  reports: Array<Object>
  onClick: () => void;
  isOpen: boolean
}

const Reports: React.FC<Props> = ({
  reports,
  onClick,
  isOpen
}) => {


  let objReports = Object.values(reports)

  const addReportsHandler = () => {

  }

  return (
    <div className={isOpen ? "reportsRow open" : 'reportsRow'}>
      <div className="reportsHeader">
        <Button onClick={addReportsHandler} action="addReport">Add Report</Button>
      </div>
      <div className="reportWidgets">

        {objReports?.map((report) => {

          const numberDictionary = NumberDictionary.generate({ min: 100, max: 999 });
          const uniqueId: string = uniqueNamesGenerator({ dictionaries: [numberDictionary] });

          return (
            <div className="progressCircle" key={uniqueId}>
              <CircularProgressbar value={Number(report)} text={`${report}%`} />
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Reports;