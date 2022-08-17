import titanicData from '../data/titanic.json'

export default function dataTable() {
  let tableHeader = [
    'PassengerId',
    'Survived',
    'Pclass',
    'Name',
    'Sex',
    'Age',
    'SibSp',
    'Parch',
    'Ticket',
    'Fare',
    'Cabin',
    'Embarked'
  ]

  return (
    <table>
      <thead>
        <tr>
        {tableHeader.map((val, key) => {
          return (
            <th key={key} className='table-header'>{val}</th>
          )})
        }
        </tr>
      </thead>
      <tbody>
      {titanicData.map((val, key) => {
        return (
          <tr key={key}>
            {tableHeader.map((item, rowKey) => {
              return (
                <td className="table-row" key={rowKey}>{val[item]}</td>
              )})
          }
          </tr>
        )
      })}
      </tbody>
    </table>
  )
}