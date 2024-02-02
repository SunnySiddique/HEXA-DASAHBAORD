import "./Sales.css";

const Table = () => {
  return (
    <div className="table-responsive">
      <table>
        <thead>
          <tr>
            <th>TOP REGION </th>
            <th>ORDER</th>
            <th>REVENUE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>United states</td>
            <td>90</td>
            <td>$536</td>
          </tr>
          <tr>
            <td>United kingdom </td>
            <td>70</td>
            <td>$573</td>
          </tr>
          <tr>
            <td>Canada</td>
            <td>70</td>
            <td>$457</td>
          </tr>
          <tr>
            <td>Japan</td>
            <td>30</td>
            <td>$524</td>
          </tr>
          <tr>
            <td>Bangladesh </td>
            <td>50 </td>
            <td>$524</td>
          </tr>
          <tr>
            <td>India </td>
            <td>10</td>
            <td>$525</td>
          </tr>
          <tr>
            <td>Pakistan </td>
            <td>44</td>
            <td>$344</td>
          </tr>
          <tr>
            <td>America</td>
            <td>69</td>
            <td>$488</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
