import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBCardOverlay,
  MDBCardImage,
  MDBCardGroup,
} from "mdb-react-ui-kit";
import marvel from "../../assets/marvel2.jpg";
import stats from "../../assets/larger-logo.png";
import tabulaRasa from "../../assets/logo100.jpg"

export default function Portfolio() {
  return (
    <div class="body">
      <MDBCardGroup>
        <MDBCard className="m-3" style={{ width: "45rem" }}>
          <MDBCardImage overlay src={stats} alt="..." />
          <MDBCardOverlay>
            <MDBCardBody>
              <MDBCardTitle class="textColorPort">Swab Swap</MDBCardTitle>
              <MDBBtn className="mx-4" href="https://github.com/emilyshurtz94/swab-swap">
                GitHub Repo
              </MDBBtn>
              <MDBBtn className="mx-4" href="https://swab-swap.herokuapp.com/">
                Heroku
              </MDBBtn>
            </MDBCardBody>
          </MDBCardOverlay>
        </MDBCard>

        <MDBCard className="m-3" style={{ width: "45rem" }}>
          <MDBCardImage overlay src={marvel} alt="..." />
          <MDBCardOverlay>
            <MDBCardBody>
              <MDBCardTitle class="textColorPort">Marvel Comics</MDBCardTitle>
              <MDBBtn className="mx-4" href="https://github.com/emilyshurtz94/Group-Project-1">
                GitHub Repo
              </MDBBtn>
              <MDBBtn className="mx-4" href="#">
                Page Site
              </MDBBtn>
            </MDBCardBody>
          </MDBCardOverlay>
        </MDBCard>

        <MDBCard className="m-3" style={{ width: "45rem" }}>
          <MDBCardImage overlay src={tabulaRasa} alt="..." />
          <MDBCardOverlay>
            <MDBCardBody>
              <MDBCardTitle class="textColorPort">Tabula Rasa</MDBCardTitle>
              <MDBBtn className="mx-4" href="https://github.com/emilyshurtz94/tabula-rasa">
                GitHub Repo
              </MDBBtn>
              <MDBBtn className="mx-4" href="#">
                Heroku
              </MDBBtn>
            </MDBCardBody>
          </MDBCardOverlay>
        </MDBCard>

      </MDBCardGroup>
    </div>
  );
}
