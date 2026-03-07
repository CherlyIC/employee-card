function EmployeeCard({ id,name, email, phone, website, company}) {
  return (
    <div>
      <p>ID: {id}</p>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{website}</p>
      <p>{company}</p>
    </div>


  )
}
export default EmployeeCard