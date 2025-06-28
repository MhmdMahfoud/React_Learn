const styles = {
    color: "red"
}
function Students(props) { 
    return (
        <>
            <div style={styles}><p>
                Name: {props.name}
            </p></div>
            <p> password:{props.pass} </p>
            <p> Studnets :{props.isStudent ? "YES" : "no"}</p>
        </>
    )
}

export default Students