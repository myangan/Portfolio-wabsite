import github from "./github.png";
import linkdn from "./linkedin.png";
import email from "./email.png";
import phone from "./phone.png";

export default function Contact() {
  return (
    <div className="item-d">
      <img src={github} alt="github icon" height="30px" width="30px"></img>
      <img src={linkdn} alt="linkedin icon" height="30px" width="30px"></img>
      <img src={email} alt="email icon" height="30px" width="30px"></img>
      <img src={phone} alt="phone icon" height="30px" width="30px"></img>
    </div>
  );
}
