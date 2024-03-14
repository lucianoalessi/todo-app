const ListHeader = ({listname}) => {

  const singOut = () => {
    console.log('singout')
  }


    return (
      <div className="list-header">
        <h1>{listname}</h1>
        <div className="button-container">
          <button className="create" >ADD NEW</button>
          <button className="singout" onClick={singOut} >SING OUT</button>
        </div>
      </div>
    )
  }
  
  export default ListHeader;