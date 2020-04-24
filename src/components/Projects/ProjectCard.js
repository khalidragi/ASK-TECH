import React from 'react';
import './projectcard.scss';
import national from '../../assets/national.png';
import roads from '../../assets/roads.png';
import general from '../../assets/general.png';
import publicity from '../../assets/publicity.png';

const ProjectCard = () => {
  return (
    <div className="project-card-container">
      <div class="project-card">
        <div class="meta">
          <div
            class="photo"
            style={{
              backgroundImage: `url(${national})`,
            }}></div>
        </div>
        <div class="description">
          <h1>National Projects</h1>
          <p>
            Participation in the construction of Postsaid East Port tunnels in
            cooperation with the German company Zublin.
          </p>
          <p>
            The fabrication of lighting poles of the New Administrative Capital
            of Egypt in cooperation with El Sweedy Company and the doors of the
            central control rooms.
          </p>
          <p>
            Fabrication and installation of many Police Station security fences.
          </p>
        </div>
      </div>
      {/* Card */}
      <div class="project-card alt">
        <div class="meta">
          <div
            class="photo"
            style={{
              backgroundImage: `url(${roads})`,
              backgroundPosition: 'bottom',
            }}></div>
        </div>
        <div class="description">
          <h1>Roads and pridges</h1>
          <p>
            Participation in the construction of Suez road bridges in
            cooperation with Elsaadaa company.
          </p>
          <p>
            The construction of resting lounges and road signs in cooperation
            with Portsaid Governorate.
          </p>
        </div>
      </div>
      {/* Card */}
      <div class="project-card">
        <div class="meta">
          <div
            class="photo"
            style={{
              backgroundImage: `url(${general})`,
            }}></div>
        </div>
        <div class="description">
          <h1>General contracting</h1>
          <p>
            Manufacturing of steel works for great projects such as the fence of
            Wast Town compound by Sodic Company.
          </p>
          <p>
            Manufacturing of doors, windows and stairs for Cairo Festival City
            and many other projects.
          </p>
          <p>
            Manufacturing of temporary fences for contracting companies and
            billboards for great projects.
          </p>
        </div>
      </div>
      {/* Card */}
      <div class="project-card alt">
        <div class="meta">
          <div
            class="photo"
            style={{
              backgroundImage: `url(${publicity})`,
            }}></div>
        </div>
        <div class="description">
          <h1>Publicity and ADVERTISING FIELD</h1>
          <p>
            Manufacturing of billboards and internal road signs for Al-Futtaim
            and Emar.
          </p>
          <p>
            Manufacturing and installing billboards on the highways and streets.
          </p>
          <p>
            Manufacturing and constructing King Post Trusses all over Egypt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
