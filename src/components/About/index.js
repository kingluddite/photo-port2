import coverImage from '../../assets/img/cover/cover-image.jpg';

function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <h2>hello</h2>
      <img src={coverImage} style={{ width: '100%' }} alt="cover" />
    </section>
  );
}

export default About;
