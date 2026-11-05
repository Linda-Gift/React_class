function StudentComponent({studentName, studentId, studentEmail}){
    return(
        <div className="studentcontainer">
           <div className="left-content">
                <div className="name">
                <h2>{studentName}</h2>
                </div>

                <div className="id">
                    <p>ID: {studentId}</p>
                </div>
            </div> 

            <div className="right-content">
               <div className="student-email">
                    <p>{studentEmail}</p>
               </div>
            </div>
        </div>
    )
}

export default StudentComponent