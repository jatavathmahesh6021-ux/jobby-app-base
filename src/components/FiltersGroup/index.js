import './index.css'

const employmentTypesList = [
  {label: 'Full Time', employmentTypeId: 'FULLTIME'},
  {label: 'Part Time', employmentTypeId: 'PARTTIME'},
  {label: 'Freelance', employmentTypeId: 'FREELANCE'},
  {label: 'Internship', employmentTypeId: 'INTERNSHIP'},
]

const salaryRangesList = [
  {salaryRangeId: '1000000', label: '10 LPA and above'},
  {salaryRangeId: '2000000', label: '20 LPA and above'},
  {salaryRangeId: '3000000', label: '30 LPA and above'},
  {salaryRangeId: '4000000', label: '40 LPA and above'},
]

const locationsList = [
  {label: 'Hyderabad', locationId: 'HYDERABAD'},
  {label: 'Bangalore', locationId: 'BANGALORE'},
  {label: 'Chennai', locationId: 'CHENNAI'},
  {label: 'Delhi', locationId: 'DELHI'},
  {label: 'Mumbai', locationId: 'MUMBAI'},
]

const FiltersGroup = props => {
  const renderSalaryRangesList = () => {
    const {changeSalaryRange} = props
    return salaryRangesList.map(salary => {
      const onChangeSalary = () => changeSalaryRange(salary.salaryRangeId)
      return (
        <li className="checkbox-list-item" key={salary.salaryRangeId}>
          <input
            type="radio"
            className="checkbox-input"
            id={salary.salaryRangeId}
            name="salary"
            onChange={onChangeSalary}
          />
          <label htmlFor={salary.salaryRangeId} className="filter-label">
            {salary.label}
          </label>
        </li>
      )
    })
  }

  const renderEmploymentTypesList = () => {
    const {changeEmploymentType} = props
    return employmentTypesList.map(eachType => {
      const onChangeEmploymentType = () =>
        changeEmploymentType(eachType.employmentTypeId)
      return (
        <li className="checkbox-list-item" key={eachType.employmentTypeId}>
          <input
            type="checkbox"
            className="checkbox-input"
            id={eachType.employmentTypeId}
            onChange={onChangeEmploymentType}
          />
          <label htmlFor={eachType.employmentTypeId} className="filter-label">
            {eachType.label}
          </label>
        </li>
      )
    })
  }

  const renderLocationsFilters = () => {
    const {updateLocation} = props
    return locationsList.map(location => {
      const onChangeLocation = () => updateLocation(location.label)
      return (
        <li className="checkbox-list-item" key={location.locationId}>
          <input
            type="checkbox"
            className="checkbox-input"
            id={location.locationId}
            value={location.locationId}
            onChange={onChangeLocation}
          />
          <label htmlFor={location.locationId} className="filter-label">
            {location.label}
          </label>
        </li>
      )
    })
  }

  return (
    <div className="filters-group-container">
      <h1 className="filter-heading">Type of Employment</h1>
      <ul className="filters-list">{renderEmploymentTypesList()}</ul>
      <hr className="hr-line" />
      <h1 className="filter-heading">Salary Range</h1>
      <ul className="filters-list">{renderSalaryRangesList()}</ul>
      <hr className="hr-line" />
      <h1 className="filter-heading">Locations</h1>
      <ul className="filters-list">{renderLocationsFilters()}</ul>
    </div>
  )
}

export default FiltersGroup
