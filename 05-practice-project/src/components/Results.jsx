import { calculateInvestmentResults, formatter } from "../util/investment.js";
import { DEFEAULT_VALUES } from "../App";

export default function Results({ values }) {
  console.log(values);
  const results = calculateInvestmentResults(values);
  const initialInvestment =
    results[0].valueEndOfYear -
    results[0].interest -
    results[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr className="center">
          <td>Year</td>
          <td>Investment Value</td>
          <td>Interest</td>
          <td>Total Investiment</td>
          <td>Annual Investiment</td>
        </tr>
      </thead>
      <tbody>
        {results.map((result) => {
          const totalInvestment =
            result.valueEndOfYear -
            result.annualInvestment * result.year -
            initialInvestment;
          return (
            <tr className="center" key={result.year}>
              <td>{result.year}</td>
              <td>{formatter.format(result.valueEndOfYear)}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>{formatter.format(totalInvestment)}</td>
              <td>{formatter.format(result.annualInvestment)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
