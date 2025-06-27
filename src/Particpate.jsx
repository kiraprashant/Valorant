import react,{useState} from "react"
import { HfInference } from '@huggingface/inference'
import { v4 as uuidv4 } from "uuid";
import { saveAs } from 'file-saver'

const particapate = () => {

    const [Openmodel,setOpenModel] = useState(false)
    const [Prompt,setPrompt] = useState("")
    const [Image,setImage] = useState()

    const [error,seterror] = useState("")
    const [TeamDetails,setTeamDetails] = useState({
       TeamName:"",
       TeamLogo:"",
       LeaderName:"",
       LeaderGameID:"",
       LeaderEmail:""
    })
    const [members, setMembers] = useState([
        { id: uuidv4(), name: "", gameId: "", email: "" }, // Default 4 members
        { id: uuidv4(), name: "", gameId: "", email: "" },
        { id: uuidv4(), name: "", gameId: "", email: "" },
        { id: uuidv4(), name: "", gameId: "", email: "" },
      ]);
 
    const openAimodel = () => {
        setOpenModel(!Openmodel)
    }

    const GenerateLogo = async() =>{

      try{

        const Logo = "create the logo "

       const star = ""
/// Use the generated image (it's a Blob)
        const imageUrl = URL.createObjectURL(image);
        console.log(imageUrl)
        setImage(imageUrl)
        console.log(Logo + Prompt)

          }
          catch(e){
            console.log(e)
            seterror("You have exceeded your monthly included credits ")
            console.log(error)
          }

    }

    const HandleTeamChange = (e) =>{
       const name = e.target.name
       const value = e.target.value

       console.log(name,value)
       setTeamDetails({...TeamDetails,[name]:value})
    }

    const handleChange = (id, field, value) => {
        setMembers(
          members.map((member) =>
            member.id === id ? { ...member, [field]: value } : member
          )
        );
      };

      const SaveImage = () =>{
        saveAs(Image, 'AIGenerateimage.jpg')
      }

    const addfield = () =>{

        if(members.length >= 7){
            alert("Upto 8 member including leader ")
            return false
        }
        const newField = {
            id: uuidv4(),
            name: '',
            gameId: '',
            email: '',
          };
          setMembers([...members, newField]);
    }

      const HandleSubmit = () =>{
          // Count members with all 4 required fields filled
  const validMembers = members.filter(
    (member) =>
      member.name?.trim() !== "" &&
      member.gameId?.trim() !== "" &&
      member.email?.trim() !== ""
  );

  if (validMembers.length < 4) {
    alert("At least 4 members must have all required fields filled.");
    return;
  }

  const fulldetails = {...TeamDetails,Members:validMembers}

  const allGameIds = [TeamDetails.LeaderGameID, ...members.map(m => m.gameId)];
  const TeamGameid = [TeamDetails.LeaderGameID]
  const MemberGameid = [...members.map(m => m.gameId)]

  const finalGameIds = [...TeamGameid,...MemberGameid]
  console.log("... final",finalGameIds)
  const uniqueGameIds = new Set(finalGameIds);

  // Check for duplicates
  if (uniqueGameIds.size !== finalGameIds.length) {
      alert("Each player must have a unique game ID!");
      return;
  }

  console.log("Submitting Team:", fulldetails);
      }

    return (
        <section className="contact-section">
            <div className="container contact-container">
              <h3>Paraticapte</h3>
                <div style={{textAlign:"left",marginBottom:"20px",display:Openmodel?"block":"none"}}>
                    <h4>Generating Logo</h4>
                     <ol style={{margin:0,padding:"20px"}}>
                        <li>Transforming ideas into stunning logos with the power of AI</li>
                        <li>AI-powered logo creation—fast, unique, and professional</li>
                        <li>Designing logos with intelligence, creativity, and precision</li>
                     </ol>
                     <div className="form-group">
                    <label htmlFor="email">Enter Your Prompt</label>
                    <input style={{marginBottom:"16px"}} name="Prompt" 
                     onChange={(e)=> setPrompt(e.target.value)} value={Prompt} type="text" id="Team Name" className="form-control" placeholder="we will create you logo for you" />
                     <button onClick={()=> GenerateLogo()} className='Generate_Logo'>Generate Logo</button>
                </div>

                <div style={{height:"160px",width:"160px",border:"1px solid #bfbfbf"}}>
                <img
              style={{ width: "100%", height: "100%", bjectFit: "cover" }}
              src={Image}
              className="rounded img-fluid"
            />
                </div>

                <button onClick={()=>SaveImage()} className='Generate_Logo mt-3' style={{background:"blue"}}>Save Image</button>


                <div className="text-danger mt-3" style={{color:"text-danger"}}>{error}</div>
                <hr style={{backgroundColor:"#bfbfbf"}}/>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Team Name *</label>
                    <input type="text" id="Team Name" className="form-control" value={TeamDetails.TeamName} name="TeamName" onChange={(e)=> HandleTeamChange(e)}  placeholder="Enter your Team Name" />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Team Logo *</label>
                    <input type="file" id="Team Logo" className="form-control" name="TeamLogo"  placeholder="Enter your Team Logo" style={{ marginBottom: "8px" }} />
                    <div style={{ fontSize: "12px", color: "#8c8b8b" }}>
                        if you dont have Team Logo We can Generate for you Using Image AI  
                    <span style={{cursor:"pointer",color:"#4676f0",textDecoration:"underline",padding:"0 4px",display:"inline-block"}} onClick={() => openAimodel()}>click here</span></div>
                </div>

                <div className="form-group">
                    <label htmlFor="Leader Name">Leader Name *</label>
                    <input type="text" id="Leader Name" className="form-control" value={TeamDetails.LeaderName} name="LeaderName" onChange={(e)=> HandleTeamChange(e)}  placeholder="Enter your Leader Name" />
                </div>

                <div className="form-group">
                    <label htmlFor="Leader GameId">Leader GameId *</label>
                    <input type="text" id="Leader GameId" className="form-control" value={TeamDetails.LeaderGameID} name="LeaderGameID" onChange={(e)=> HandleTeamChange(e)}  placeholder="Enter your Leader GameId" />
                </div>

                <div className="form-group">
                    <label htmlFor="Leader email">Leader Email *</label>
                    <input type="text" id="Leader email" className="form-control" value={TeamDetails.LeaderEmail} name="LeaderEmail" onChange={(e)=> HandleTeamChange(e)}  placeholder="Enter your Leader email" />
                </div>

                {/* Member List */}
                <h3>Team Members</h3>
                <div style={{ fontSize: "12px", color: "#8c8b8b" }}>
                Upto 7 member + 1 captain total 8 and minimum 5
                </div>
                {members.map((member,i) => (
        
        <div key={member.id}>
            <h4 style={{textAlign:"left"}}>Member {i+1}</h4>
            <div className="form-group">
            <label htmlFor={`${i+1}Name`}>Member Name</label>
          <input
            id={'${i+1}Name'}
            type="text"
            placeholder={`Member Name`}
            value={member.name}
            onChange={(e) => handleChange(member.id, "name", e.target.value)}
            required
            className="form-control"
          />
          </div>
          <div className="form-group">
          <label htmlFor="email">Member Game Id</label>
          <input
            type="text"
            placeholder={`Game ID`}
            value={member.gameId}
            onChange={(e) => handleChange(member.id, "gameId", e.target.value)}
            required
            className="form-control"
          />
          </div>
          <div className="form-group">
          <label htmlFor="email">Member Email</label>
          <input
            type="email"
            placeholder={`Email`}
            value={member.email}
            onChange={(e) => handleChange(member.id, "email", e.target.value)}
            required
            className="form-control"
          />
          </div>
          {/* {members.length > 4 && (
            <button onClick={() => removeMember(member.id)}>Remove</button>
          )} */}
        </div>
      ))}

  <div style={{display: 'flex', justifyContent: 'flex-start',marginBottom:"20px"}}>
    <button onClick={()=>addfield()} className='Generate_Logo' style={{}}>Add Member</button>
  </div>

  <div style={{ fontSize: "12px", color: "#8c8b8b",marginBottom:"20px"}}>
                Upto 7 member + 1 captain total 8 and minimum 5
                </div>


    <button onClick={()=>HandleSubmit()} className='Generate_Logo' style={{}}>Submit</button>


            </div>
            
        </section>
    )

}

export default particapate