import './App.css';
import React from 'react';



class App extends React.Component 
{

state = {
  divcontainer:false,
}

render ()
{
   const personne ={
    fullname :'Konan Ndassenan Loic Harold Mehdy',
    bio :'Diplômé en informatique et passionné par linnovation, je suis déterminé à mouvrir au monde professionnel et mettre mes compétences à profit. Ma passion pour le web et mon savoir-faire en matière dassistance informatique sont mes principaux atouts.',
    profession :'informaticien developpeur dapplication',
    contact : '0700000000 / 0100000000',
    imgSrc:"/images/loic.JPG", 
   };


      var Handleclick = e =>
      {
        this.setState({divcontainer:!this.state.divcontainer});
      }

        const x =this.state.divcontainer;
  return (
    <div>
      <center>
        <h1>je vous presente l'avenir de ce pays dans le domaine du dev</h1>
        <hr></hr>
        <button onClick={Handleclick}>
            {x?'hide':'show'}
        </button>
        {
        x &&(<div>

          <div className='gle_card'>
            <section className='photo_pers'>
              <img  src={personne.imgSrc}  alt='individu' className='image'/>
            </section>
            <section className='infos'>
                <article className='sous_info'> <p>{personne.fullname}</p></article>
                <article className='sous_info'><p>{personne.profession}</p></article>
                <article className='sous_info'><p>{personne.contact}</p></article>
            </section>
            <section className='bio'>
                  <p>
                  {personne.bio}
                  <hr></hr>
                  {personne.bio}
                  </p>
            </section>
          </div>
          </div>)
        }
        </center>

    </div>
  );
}


}

export default App;
