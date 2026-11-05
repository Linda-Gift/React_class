import StudentComponent from "./Studentcomponent.jsx"

function Listdata(){
    const students = [
       {
        studentName : "Lindsaya Lohan",
        studentId : "HZ12389",
        studentEmail : "lindasay@gmail.com",
        studentScore : 77
       },

       {
        studentName : "Joseph Brendan",
        studentId : "HF89765",
        studentEmail : "joseph@gmail.com",
        studentScore : 89
       },
       
       {
        studentName : "Rohan Bhophah",
        studentId : "HA06431",
        studentEmail : "bhopah@gmail.com",
        studentScore : 50
       } 
    ]

    return(
        <div className="main-container">
            {
             students.map((student, index)=>(<div key ={index}>
                {student.studentScore > 40? <StudentComponent
                studentName = {student.studentName}
                studentId = {student.studentId}
                studentEmail = {student.studentEmail}  /> : ""}
             </div>))   
            }
        </div>
    )
}

export default Listdata