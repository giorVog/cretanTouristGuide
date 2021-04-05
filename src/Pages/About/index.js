import React from "react"
import "./styles.css"
import Photo from "../../assets/me.png"

function AboutPage() {
  return (
    <>
      <div className="AboutPage">
        <div>
          <img src={Photo} alt="Egw" />
        </div>
        <div className="top">
          <p>
            Ονομάζομαι <strong className="strong-n">Βογιατζής Γεώργιος</strong>{" "}
            και η πτυχιακή μου εργασία αφορά έναν πλήρη τουριστικό οδηγό της
            Κρήτης
          </p>
        </div>
      </div>
      <div className="info_wrapper">
        <div className="info_section">
          Σε αυτόν τον τουριστικό οδηγό μπορείτε να βρείτε κάποια προτεινόμενα
          σημεία ενδιαφέροντος για κάθε μία πόλη της Κρήτης, όπως:
          <li>Αξιοθέατα</li>
          <li>Εστιατόρια</li>
          <li>Καφετέριες</li>
          <li>Μπαρ</li>
          <li>Ξενοδοχεία</li>
          <li>Παραλίες</li>
        </div>
        <div className="info_section">
          Σε αυτόν τον τουριστικό οδηγό μπορείτε να βρείτε κάποια προτεινόμενα
          σημεία ενδιαφέροντος για κάθε μία πόλη της Κρήτης, όπως:
          <li>Αξιοθέατα</li>
          <li>Εστιατόρια</li>
          <li>Καφετέριες</li>
          <li>Μπαρ</li>
          <li>Ξενοδοχεία</li>
          <li>Παραλίες</li>
        </div>
      </div>
    </>
  )
}

export default AboutPage
