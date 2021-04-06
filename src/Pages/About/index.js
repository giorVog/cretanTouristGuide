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
            και η ιστοσελίδα αυτή είναι πτυχιακή μου εργασία,η οποία αφορά έναν πλήρη τουριστικό οδηγό της
            Κρήτης
          </p>
        </div>
      </div>
      <div className="info_wrapper">
        <div className="info_section">
          Σε αυτόν τον τουριστικό οδηγό μπορείτε να βρείτε κάποια προτεινόμενα
          σημεία ενδιαφέροντος για κάθε μία πόλη της Κρήτης, όπως:
          <li className="info_section_list">Αξιοθέατα</li>
          <li className="info_section_list">Εστιατόρια</li>
          <li className="info_section_list">Καφετέριες</li>
          <li className="info_section_list">Μπαρ</li>
          <li className="info_section_list">Ξενοδοχεία</li>
          <li className="info_section_list">Παραλίες</li>
        </div>
        <div className="info_section">
          <p className="info_section_title">Χρήσιμες πληροφορίες</p>
          <ul>
            <li className="info_section_movements">Αστικές Μετακινήσεις
              <ul>
                <li><u>Χανια:</u> Αστικό ΚΤΕΛ Τηλέφωνο: <u>28210-93052</u><br></br>Για περισσότερες πληροφορίες{" "}
                  <a href="http://chaniabus.gr/#main" target="_blank" rel="noopener noreferrer">
                    πατήστε εδω</a></li>
                <li><u>Ρέθυμνο:</u> Αστικό ΚΤΕΛ Τηλέφωνο: <u>2810-246530</u>
                </li>
                <li><u>Ηράκλειο</u> Αστικό ΚΤΕΛ Τηλέφωνο: <u>2810-283270</u><br></br>Για περισσότερες πληροφορίες{" "}
                  <a href="http://astiko-irakleiou.gr/#main" target="_blank" rel="noopener noreferrer">
                  πατήστε εδω</a>
                </li>
                <li><u>Αγ.Νικολαος:</u> Αστικό ΚΤΕΛ Τηλέφωνο: <u>28410-22234</u></li>
              </ul>
            </li>
            <p className="info_section_uperastika">Για Υπεραστικά δρομολόγια με το ΚΤΕΛ Χανίων-Ρεθύμνου{" "}
              <a href="https://www.e-ktel.com/services/dromologia" target="_blank" rel="noopener noreferrer">
                πατήστε εδω</a><br></br>
                Για Υπεραστικά δρομολόγια με το ΚΤΕΛ Ηρακλείου-Λασιθίου {" "}
              <a href="https://www.ktelherlas.gr/el/" target="_blank" rel="noopener noreferrer">
                  πατήστε εδω</a>
            </p>
          </ul>
        </div>
      </div>
    </>
  )
}

export default AboutPage
